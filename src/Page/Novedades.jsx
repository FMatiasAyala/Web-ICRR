
import { useEffect, useState } from "react"
import { Instagram, ArrowRight, Play, Images } from "lucide-react"
import { motion } from "framer-motion"
import SeoTags from "../components/SeoTags"

// Generado en el VPS por scripts/instagram-sync.mjs (cron)
const FEED_URL = "/data/instagram/instagram.json"

const formatFecha = (iso) =>
  new Date(iso).toLocaleDateString("es-AR", { day: "numeric", month: "long", year: "numeric" })

function PostCard({ post, i }) {
  const TypeIcon = post.type === "VIDEO" ? Play : post.type === "CAROUSEL_ALBUM" ? Images : null

  return (
    <motion.a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (i % 3) * 0.1 }}
      className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 group hover:shadow-2xl transition-all duration-500 flex flex-col"
    >
      <div className="aspect-square bg-[#F4F6FB] relative overflow-hidden">
        <img
          src={post.image}
          alt={post.caption ? post.caption.slice(0, 120) : "Publicación de Instagram del ICRR"}
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {TypeIcon && (
          <span className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur-sm">
            <TypeIcon className="w-4 h-4" />
          </span>
        )}
      </div>
      <div className="p-8 text-left flex flex-col flex-1">
        <p className="text-[#505050] font-medium text-[15px] leading-relaxed line-clamp-3 whitespace-pre-line">
          {post.caption}
        </p>
        <div className="mt-auto pt-6 flex items-center justify-between text-[13px]">
          <span className="text-[#505050]/70 font-medium">{formatFecha(post.timestamp)}</span>
          <span className="inline-flex items-center gap-1 font-black text-[#0B2CF5]">
            Ver en Instagram
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.a>
  )
}

export default function Novedades() {
  // null = cargando o sin datos todavía → se muestran los placeholders
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    fetch(FEED_URL, { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => data.posts?.length && setPosts(data.posts))
      .catch(() => {}) // sin feed: quedan los placeholders y el botón a Instagram
  }, [])

  return (
    <section className="bg-[#F4F6FB] py-24 min-h-screen">
      <SeoTags
        title="Novedades y Noticias | ICRR"
        description="Enterate de las últimas novedades, campañas de prevención y noticias del Instituto Consultorio Radiológico Resistencia."
        image="/logos/icrr_logo2.jpg"
        path="/novedades"
      />
      <div className="container mx-auto px-6 text-center">
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-lg"
          >
            <Instagram className="w-10 h-10" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#0B2CF5] mb-8 tracking-tight"
          >
            Novedades
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#505050] font-medium text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Seguinos en nuestras redes para estar al tanto de las últimas noticias,
            tecnología médica y consejos de salud del <span className="text-[#0B2CF5] font-black">ICRR</span>.
          </motion.p>
        </div>

        {/* Publicaciones de Instagram (o placeholders mientras no haya feed) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {posts ? posts.map((post, i) => <PostCard key={post.id} post={post} i={i} />) : [...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 bg-[#F4F6FB] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  <Instagram className="w-20 h-20 text-[#0B2CF5]" />
                </div>
              </div>
              <div className="p-8 text-left">
                <div className="h-6 bg-gray-100 rounded-full w-3/4 mb-4" />
                <div className="h-4 bg-gray-100 rounded-full w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <a
            href="https://www.instagram.com/institutocrr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white text-[#0B2CF5] px-12 py-5 font-black text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
          >
            <Instagram className="w-6 h-6 text-[#ee2a7b]" />
            CONECTAR EN INSTAGRAM
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
