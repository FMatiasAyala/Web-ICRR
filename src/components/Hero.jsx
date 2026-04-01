import React, { useEffect, useRef, useState, useCallback } from "react"
import { Link } from "react-router-dom"

const SLIDE_INTERVAL = 5000 // ms — más tiempo para que el movimiento se vea natural

const slides = [
  {
    id: 1,
    title: "Diagnóstico por imagen de alta precisión",
    desc: "RM, TC y ecografía con protocolos de baja dosis y alta definición.",
    ctaLabel: "Conocer más",
    ctaTo: "/servicios",
    image: "/banners/medicosPet.webp",
  },
  {
    id: 2,
    title: "Terapia radiante personalizada",
    desc: "Planificación 3D y seguimiento clínico integral.",
    ctaLabel: "Ver terapias",
    ctaTo: "/servicios/terapia-radiante",
    image: "/banners/TerapiaRadiante.webp",
  },
  {
    id: 3,
    title: "Portal de pacientes",
    desc: "Consultá turnos, preparaciones y resultados online.",
    ctaLabel: "Ingresar al portal",
    ctaTo: "https://pacientes.icrrportal.com.ar/",
    image: "/banners/Portaldepacientes.png",
  },
  {
    id: 4,
    title: "Piso de la mujer",
    desc: "Mamografías digitales y programas de prevención.",
    ctaLabel: "Ver sector mujer",
    ctaTo: "/servicios/sector-mujer",
    image: "/banners/octubreRosa.jpg",
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + slides.length) % slides.length),
    []
  )
  const goTo = (i) => setIndex(i)

  const start = useCallback(() => {
    clear()
    timerRef.current = setInterval(next, SLIDE_INTERVAL)
  }, [next])

  const clear = () => timerRef.current && clearInterval(timerRef.current)

  useEffect(() => {
    start()
    return clear
  }, [start])

  return (
    <section
      className="relative z-20 h-[80vh] overflow-hidden isolate"
      onMouseEnter={clear}
      onMouseLeave={start}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((s, i) => (
          <article
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Fondo blur */}
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover blur-2xl scale-110 opacity-40"
              aria-hidden="true"
            />

            {/* Imagen principal con animación sincronizada */}
            <img
              src={s.image}
              alt={s.title}
              className={`absolute inset-0 h-full w-full object-contain z-10 ${
                i === index ? "animate-kenburns-once" : ""
              }`}
              loading={i === 0 ? "eager" : "lazy"}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0A2342]/25 z-20" />

            {/* Texto */}
            <div className="relative z-30 h-full">
              <div className="container mx-auto h-full px-6 flex items-center">
                <div className="max-w-2xl text-white drop-shadow">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    {s.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl text-white/90">
                    {s.desc}
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to={s.ctaTo}
                      target={s.ctaTo.startsWith("http") ? "_blank" : "_self"}
                      className="inline-flex rounded-full bg-[#2E86AB] px-7 py-3 font-semibold text-white shadow-lg transition hover:bg-[#246d88]"
                    >
                      {s.ctaLabel}
                    </Link>
                    <Link
                      to="/turnos"
                      className="inline-flex rounded-full border border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#0A2342]"
                    >
                      Reservar turno
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Flechas */}
      <button
        aria-label="Anterior"
        onClick={prev}
        className="group absolute left-4 top-1/2 -translate-y-1/2 z-40 grid h-12 w-12 place-items-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/40 transition"
      >
        <span className="text-2xl leading-none group-active:-translate-x-0.5 transition">
          ‹
        </span>
      </button>
      <button
        aria-label="Siguiente"
        onClick={next}
        className="group absolute right-4 top-1/2 -translate-y-1/2 z-40 grid h-12 w-12 place-items-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/40 transition"
      >
        <span className="text-2xl leading-none group-active:translate-x-0.5 transition">
          ›
        </span>
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2 z-40">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir al slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index
                ? "w-8 bg-white"
                : "w-5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
