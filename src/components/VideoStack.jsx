import React from "react"
import { Link } from "react-router-dom"

function VideoStack() {
  return (
    // -mt-* hace que el bloque de video se meta debajo del Hero (efecto apilado)
    <section className="relative mt-0 pb-10">
      <div className="container mx-auto px-6">
        <div className="relative mx-auto max-w-5xl group">
          {/* Capa superior con el video */}
          <div className="relative z-10 overflow-hidden rounded-3xl bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-black/10">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/videoPoster.jpg"               // opcional
              className="h-[260px] w-full object-cover md:h-[360px] lg:h-[420px]"
            >
              <source src="/videoInicio.mp4" type="video/mp4" />
            </video>

            {/* Overlay sutil para legibilidad del texto */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Contenido sobre el video */}
            <div className="absolute bg-gradient-to-t from-black/80 via-transparent to-transparent inset-x-0 bottom-0 p-5 md:p-7 flex items-end justify-between gap-4 text-white">
              <div className="max-w-2xl">
                <h3 className="text-lg md:text-xl font-semibold">
                  Conocé nuestro Centro de Diagnóstico
                </h3>
                <p className="mt-1 text-sm md:text-base text-white/90">
                  Infraestructura pensada para tu comodidad y precisión diagnóstica.
                </p>
              </div>
              <Link
                to="/servicios"
                className="hidden sm:inline-flex items-center justify-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#0A2342] shadow-md backdrop-blur transition
                           hover:bg-white"
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
