import React from "react"
import { Link } from "react-router-dom"

function VideoStack() {
  return (
    // -mt-* hace que el bloque de video se meta debajo del Hero (efecto apilado)
    <section className="relative mt-0 pb-10">
      <div className="container mx-auto px-6">
        <div className="relative mx-auto max-w-5xl group">
          {/* Capa superior con el video */}
          <div className="relative z-10 overflow-hidden rounded-[2.5rem] bg-black shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/videoPoster.jpg"
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[450px]"
            >
              <source src="/videoInicio.mp4" type="video/mp4" />
            </video>

            {/* Overlay sutil para legibilidad del texto */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#061D38]/80 via-transparent to-transparent" />

            {/* Contenido sobre el video */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 flex items-end justify-between gap-6 text-white">
              <div className="max-w-2xl">
                <h3 className="text-xl md:text-3xl font-black mb-2 tracking-tight">
                  Conocé nuestro Instituto
                </h3>
                <p className="text-sm md:text-base text-white/90 font-medium">
                  Infraestructura de vanguardia pensada para tu comodidad y mayor precisión diagnóstica.
                </p>
              </div>
              <Link
                to="/servicios"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 font-bold text-[#0B2CF5] shadow-lg transition hover:bg-[#F4F6FB] hover:scale-105"
              >
                Más información
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoStack
