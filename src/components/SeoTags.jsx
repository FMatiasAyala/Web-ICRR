import { Helmet } from "react-helmet-async"
import { SITE, absoluteUrl } from "../config/site"

/**
 * Componente central de SEO. Genera title, meta description, canonical,
 * Open Graph, Twitter Cards y datos estructurados (JSON-LD) por página.
 *
 * Props:
 * - title:       título de la pestaña/buscador.
 * - description: meta description (155-160 caracteres ideal).
 * - image:       imagen para compartir (ruta relativa o URL absoluta).
 * - path:        ruta de la página ("/servicios") -> genera el canonical correcto.
 * - type:        og:type ("website", "article", "profile"…).
 * - keywords:    palabras clave (string).
 * - noindex:     si es true, pide a los buscadores no indexar la página.
 * - jsonLd:      objeto u array de objetos JSON-LD (schema.org).
 */
export default function SeoTags({
  title = `${SITE.name} | ${SITE.shortName}`,
  description = SITE.description,
  image = SITE.defaultImage,
  path = "/",
  type = "website",
  keywords,
  noindex = false,
  jsonLd,
}) {
  const canonical = absoluteUrl(path)
  const absoluteImage = absoluteUrl(image)
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : []

  return (
    <Helmet prioritizeSeoTags>
      {/* Idioma */}
      <html lang={SITE.lang} />

      {/* SEO básico */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
      />
      <meta name="author" content={SITE.name} />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Datos estructurados (JSON-LD) */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
