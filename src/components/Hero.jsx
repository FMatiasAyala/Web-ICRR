import React, { useEffect, useRef, useState, useCallback } from "react"
import { Link } from "react-router-dom"

const SLIDE_INTERVAL = 3000 // ms

const slides = [
  {
    id: 1,
    title: "Diagnóstico por imagen de alta precisión",
    desc: "RM, TC y ecografía con protocolos de baja dosis y alta definición.",
    ctaLabel: "Conocer más",
    ctaTo: "/servicios",
    image: "/banners/pet.jpg",
  },
  {
    id: 2,
    title: "Terapia radiante personalizada",
    desc: "Planificación 3D y seguimiento clínico integral.",
    ctaLabel: "Ver terapias",
    ctaTo: "/servicios/terapia-radiante",
    image: "/banners/TerapiaRadiante.png",
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
  const reduceMotion = typeof window !== "undefined"
    ? window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    : false

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % slides.length)
  }, [])
  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + slides.length) % slides.length)
  }, [])
  const goTo = (i) => setIndex(i)

  const start = useCallback(() => {
    if (reduceMotion) return
    clear()
    timerRef.current = setInterval(next, SLIDE_INTERVAL)
  }, [next, reduceMotion])

  const clear = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  useEffect(() => {
    start()
    return clear
  }, [start])

  return (
    <section
      className="relative z-20 h-[60vh] overflow-hidden isolate" // 🔹 z-20 + isolate = asegura que se vean las flechas
      role="region"
      aria-roledescription="carrusel"
      aria-label="Destacados"
      onMouseEnter={clear}
      onMouseLeave={start}
      onFocus={clear}
      onBlur={start}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next()
        if (e.key === "ArrowLeft") prev()
      }}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((s, i) => (
          <article
            key={s.id}
            className={[
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              i === index ? "opacity-100 z-10" : "opacity-0"
            ].join(" ")}
            aria-hidden={i === index ? "false" : "true"}
          >
            <img
              src={s.image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-[#0A2342]/10" />

            <div className="relative z-10 h-full">
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

      {/* Flechas visibles */}
      <button
        aria-label="Anterior"
        onClick={prev}
        className="group absolute left-4 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 place-items-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/40 transition"
      >
        <span className="text-2xl leading-none group-active:-translate-x-0.5 transition">‹</span>
      </button>
      <button
        aria-label="Siguiente"
        onClick={next}
        className="group absolute right-4 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 place-items-center rounded-full bg-black/30 text-white backdrop-blur-sm hover:bg-black/40 transition"
      >
        <span className="text-2xl leading-none group-active:translate-x-0.5 transition">›</span>
      </button>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-6 flex items-center justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir al slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={[
              "h-2.5 rounded-full transition-all",
              i === index ? "w-8 bg-white" : "w-5 bg-white/40 hover:bg-white/70"
            ].join(" ")}
          />
        ))}
      </div>
    </section>
  )
}
