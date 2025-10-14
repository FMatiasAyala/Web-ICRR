import React from "react"
import { Instagram } from "lucide-react"

export default function NovedadesPlaceholder() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-10">
          <Instagram className="w-12 h-12 text-[#E1306C] mb-3" />
          <h2 className="text-4xl font-bold text-[#0A2342] mb-3">
            Novedades
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Muy pronto vas a poder ver nuestras últimas publicaciones,
            actividades y noticias directamente desde nuestro perfil de Instagram.
          </p>
        </div>

        {/* Placeholder visual */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="animate-pulse bg-white rounded-3xl overflow-hidden shadow-md"
            >
              <div className="h-64 bg-gray-200" />
              <div className="p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://www.instagram.com/tu_instagram_aqui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#E1306C] px-6 py-3 font-semibold text-white hover:bg-[#b82154] transition shadow-md"
          >
            <Instagram className="w-5 h-5" />
            Seguir en Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
