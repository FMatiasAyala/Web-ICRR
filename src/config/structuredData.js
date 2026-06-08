// Generadores de datos estructurados (JSON-LD / schema.org) para mejorar el SEO,
// los rich results de Google y el SEO local (Google Maps / Business Profile).

import { SITE, SUCURSALES, absoluteUrl } from "./site"

const orgId = `${SITE.url}/#organization`
const websiteId = `${SITE.url}/#website`

// MedicalOrganization principal — entidad raíz del negocio.
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "@id": orgId,
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    logo: absoluteUrl(SITE.logo),
    image: absoluteUrl(SITE.defaultImage),
    email: SITE.email,
    telephone: SITE.phone,
    description: SITE.description,
    medicalSpecialty: ["Radiology", "DiagnosticImaging"],
    sameAs: [SITE.social.facebook, SITE.social.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: SUCURSALES[0].street,
      addressLocality: SUCURSALES[0].city,
      addressRegion: SUCURSALES[0].region,
      postalCode: SUCURSALES[0].postalCode,
      addressCountry: SUCURSALES[0].country,
    },
  }
}

// WebSite con SearchAction (caja de búsqueda en resultados de Google).
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "es-AR",
    publisher: { "@id": orgId },
  }
}

// LocalBusiness / MedicalClinic por sucursal — clave para el SEO local.
export function sucursalSchema(suc) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${SITE.url}/sucursales/${suc.slug}#localbusiness`,
    name: suc.name,
    parentOrganization: { "@id": orgId },
    url: absoluteUrl(`/sucursales/${suc.slug}`),
    image: absoluteUrl(SITE.defaultImage),
    telephone: suc.phone,
    email: SITE.email,
    priceRange: "$$",
    medicalSpecialty: ["Radiology", "DiagnosticImaging"],
    address: {
      "@type": "PostalAddress",
      streetAddress: suc.street,
      addressLocality: suc.city,
      addressRegion: suc.region,
      postalCode: suc.postalCode,
      addressCountry: suc.country,
    },
    geo: suc.geo
      ? { "@type": "GeoCoordinates", latitude: suc.geo.lat, longitude: suc.geo.lng }
      : undefined,
    openingHoursSpecification: suc.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [SITE.social.facebook, SITE.social.instagram],
  }
}

export function allSucursalesSchema() {
  return SUCURSALES.map(sucursalSchema)
}

// Migas de pan (breadcrumbs) para la navegación en resultados de búsqueda.
// items: [{ name, path }]
export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

// Servicio médico individual.
export function serviceSchema({ name, description, path, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: absoluteUrl(path),
    image: image ? absoluteUrl(image) : absoluteUrl(SITE.defaultImage),
    provider: { "@id": orgId },
  }
}

// Lista de servicios (para la página de Servicios).
export function serviceListSchema(servicios) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: servicios.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: absoluteUrl(`/servicios/${s.slug}`),
    })),
  }
}

// Preguntas frecuentes (rich result FAQ).
// faqs: [{ q, a }]
export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}
