// Configuración central del sitio — fuente única de verdad para SEO y datos estructurados.
// Si cambia el dominio, el teléfono, una dirección o una red social, se actualiza acá.

export const SITE = {
  name: "Instituto Consultorio Radiológico Resistencia",
  shortName: "ICRR",
  // Dominio de producción (sin barra final).
  url: "https://www.icrr.com.ar",
  locale: "es_AR",
  lang: "es",
  description:
    "Centro de diagnóstico por imágenes en Resistencia, Chaco: resonancias, tomografías, ecografías, mamografías, radiografías, densitometrías, medicina nuclear y terapia radiante. Atención profesional con tecnología de alta resolución.",
  // Logo / imagen por defecto para Open Graph (ruta relativa, se vuelve absoluta en SeoTags).
  defaultImage: "/logos/icrr_logo2.jpg",
  logo: "/logos/icrr_logo2.jpg",
  themeColor: "#0B2CF5",
  email: "turnoscrr@gmail.com",
  phone: "+543624880444",
  phoneDisplay: "(362) 488-0444",
  social: {
    facebook: "https://www.facebook.com/InstitutoCRR",
    instagram: "https://www.instagram.com/institutocrr/",
  },
  patientPortal: "https://pacientes.icrrportal.com.ar/",
}

// Sucursales — usadas para el schema LocalBusiness/MedicalClinic y el sitemap.
export const SUCURSALES = [
  {
    slug: "central",
    name: "ICRR — Casa Central Resistencia",
    street: "Av. 9 de Julio 635",
    city: "Resistencia",
    region: "Chaco",
    postalCode: "H3500",
    country: "AR",
    phone: SITE.phone,
    geo: { lat: -27.4257088, lng: -59.0318814 },
    hours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "20:00" },
      { days: ["Saturday"], opens: "08:00", closes: "13:00" },
    ],
  },
  {
    slug: "fontana",
    name: "ICRR — Sucursal Fontana",
    street: "Av. Alvear 3875",
    city: "Fontana",
    region: "Chaco",
    postalCode: "H3514",
    country: "AR",
    phone: SITE.phone,
    geo: { lat: -27.3331, lng: -59.029 },
    hours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
    ],
  },
  {
    slug: "saenzPena",
    name: "ICRR — Sucursal Sáenz Peña",
    street: "Av. J. Domingo Perón 1220",
    city: "Presidencia Roque Sáenz Peña",
    region: "Chaco",
    postalCode: "H3700",
    country: "AR",
    phone: SITE.phone,
    geo: { lat: -26.7743374, lng: -60.4468007 },
    hours: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00" },
    ],
  },
]

// Construye una URL absoluta a partir de una ruta ("/servicios" -> "https://www.icrr.com.ar/servicios").
export function absoluteUrl(path = "/") {
  if (!path) return SITE.url
  if (path.startsWith("http")) return path
  return `${SITE.url}${path.startsWith("/") ? "" : "/"}${path}`
}
