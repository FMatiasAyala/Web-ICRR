import { Helmet } from "react-helmet-async"

export default function SeoTags({
  title = "Consultorio Radiológico Resistencia | ICRR",
  description = "Centro especializado en diagnóstico por imágenes, resonancias, tomografías, ecografías y mamografías. Atención profesional en Resistencia, Chaco.",
  image = "/logos/icrr_logo3.jpg",
  url = "http://bulonxpress.com", // cambialo por tu dominio real
}) {
  return (
    <Helmet>
      {/* SEO básico */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Viewport y favicons */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  )
}
