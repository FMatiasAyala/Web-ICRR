#!/usr/bin/env node
/**
 * Sincroniza las últimas publicaciones de Instagram (@institutocrr) para la sección Novedades.
 *
 * Corre en el VPS (Node 18+, sin dependencias) vía cron. En cada ejecución:
 *   1. Renueva el token de acceso si pasaron más de IG_REFRESH_DAYS días (el token vence a los 60).
 *   2. Pide los últimos posts a la API de Instagram.
 *   3. Descarga las imágenes al servidor (las URLs de Instagram vencen y pueden bloquear el hotlink).
 *   4. Escribe instagram.json, que la web lee desde /data/instagram/instagram.json.
 * Si algo falla, el JSON anterior queda intacto y la web sigue mostrando los últimos posts guardados.
 *
 * Primera vez (guardar el token generado en developers.facebook.com):
 *   node instagram-sync.mjs --init <TOKEN>
 *
 * Variables de entorno:
 *   IG_OUTPUT_DIR    (obligatoria) carpeta pública donde se escriben el JSON y las imágenes,
 *                    ej: /var/www/icrr/data/instagram
 *   IG_TOKEN_FILE    archivo con el token — NUNCA dentro de la carpeta pública
 *                    (por defecto: instagram-token.json junto a este script)
 *   IG_PUBLIC_PATH   ruta pública de IG_OUTPUT_DIR (por defecto: /data/instagram)
 *   IG_LIMIT         cantidad de posts (por defecto: 12)
 *   IG_REFRESH_DAYS  cada cuántos días renovar el token (por defecto: 7)
 */
import { readFile, writeFile, rename, mkdir, readdir, unlink, access } from "node:fs/promises"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const API = "https://graph.instagram.com"
const DAY = 24 * 60 * 60 * 1000

const scriptDir = dirname(fileURLToPath(import.meta.url))
const TOKEN_FILE = process.env.IG_TOKEN_FILE || join(scriptDir, "instagram-token.json")
const OUTPUT_DIR = process.env.IG_OUTPUT_DIR
const PUBLIC_PATH = (process.env.IG_PUBLIC_PATH || "/data/instagram").replace(/\/$/, "")
const LIMIT = Number(process.env.IG_LIMIT || 12)
const REFRESH_DAYS = Number(process.env.IG_REFRESH_DAYS || 7)

const log = (...args) => console.log(new Date().toISOString(), ...args)

async function writeAtomic(file, data, options) {
  const tmp = `${file}.tmp`
  await writeFile(tmp, data, options)
  await rename(tmp, file)
}

async function getJson(url) {
  const res = await fetch(url)
  const body = await res.json().catch(() => ({}))
  if (!res.ok || body.error) {
    throw new Error(`Instagram API ${res.status}: ${body.error?.message || JSON.stringify(body)}`)
  }
  return body
}

async function loadToken() {
  try {
    return JSON.parse(await readFile(TOKEN_FILE, "utf8"))
  } catch {
    throw new Error(`No se pudo leer ${TOKEN_FILE}. Ejecutá primero: node instagram-sync.mjs --init <TOKEN>`)
  }
}

async function saveToken(access_token) {
  await writeAtomic(
    TOKEN_FILE,
    JSON.stringify({ access_token, refreshed_at: new Date().toISOString() }, null, 2),
    { mode: 0o600 } // solo lo puede leer el usuario que corre el script
  )
}

async function refreshTokenIfNeeded(token) {
  const age = Date.now() - new Date(token.refreshed_at).getTime()
  if (age < REFRESH_DAYS * DAY) return token.access_token

  const data = await getJson(
    `${API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token.access_token}`
  )
  await saveToken(data.access_token)
  log(`Token renovado (vence en ${Math.round(data.expires_in / 86400)} días)`)
  return data.access_token
}

async function exists(file) {
  try {
    await access(file)
    return true
  } catch {
    return false
  }
}

async function downloadImage(url, file) {
  if (await exists(file)) return
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Error ${res.status} descargando imagen`)
  await writeAtomic(file, Buffer.from(await res.arrayBuffer()))
}

async function sync() {
  if (!OUTPUT_DIR) throw new Error("Falta la variable IG_OUTPUT_DIR")

  const accessToken = await refreshTokenIfNeeded(await loadToken())

  const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp"
  const { data: media } = await getJson(
    `${API}/me/media?fields=${fields}&limit=${LIMIT}&access_token=${accessToken}`
  )

  const imgDir = join(OUTPUT_DIR, "img")
  await mkdir(imgDir, { recursive: true })

  const posts = []
  for (const m of media) {
    // En videos/reels la imagen es la miniatura; en carruseles, media_url es la primera foto
    const src = m.media_type === "VIDEO" ? m.thumbnail_url : m.media_url
    if (!src) continue
    try {
      await downloadImage(src, join(imgDir, `${m.id}.jpg`))
    } catch (err) {
      log(`Post ${m.id} omitido: ${err.message}`)
      continue
    }
    posts.push({
      id: m.id,
      caption: m.caption || "",
      type: m.media_type,
      image: `${PUBLIC_PATH}/img/${m.id}.jpg`,
      permalink: m.permalink,
      timestamp: m.timestamp,
    })
  }

  await writeAtomic(
    join(OUTPUT_DIR, "instagram.json"),
    JSON.stringify({ updated_at: new Date().toISOString(), posts }, null, 2)
  )

  // Borrar imágenes de posts que ya no están en la lista
  const keep = new Set(posts.map((p) => `${p.id}.jpg`))
  for (const f of await readdir(imgDir)) {
    if (!keep.has(f)) await unlink(join(imgDir, f))
  }

  log(`OK: ${posts.length} posts sincronizados`)
}

const [flag, value] = process.argv.slice(2)
const run = flag === "--init"
  ? (value ? saveToken(value).then(() => log(`Token guardado en ${TOKEN_FILE}`)) : Promise.reject(new Error("Uso: node instagram-sync.mjs --init <TOKEN>")))
  : sync()

run.catch((err) => {
  log(`ERROR: ${err.message}`)
  process.exit(1)
})
