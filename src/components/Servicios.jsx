import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Radiation, Stethoscope, HeartPulse, ClipboardCheck } from "lucide-react"

export default function ServiciosHome() {
  const servicios = [
    {
      abbr: "Di",
      color: "bg-[#254DF5]",
      title: "Diagnóstico por imágenes",
      desc: "Servicios de ecografía, tomografía, resonancia y más con equipos de última generación.",
      img: "/img/diagnosticoImagen.webp",
      slug: "diagnostico-por-imagen",
      especial: false
    },
    {
      abbr: "Tr",
      color: "bg-[#25DF85]",
      title: "Terapia Radiante",
      desc: "Tratamientos personalizados con enfoque en precisión y seguridad.",
      img: "/img/servicios/equipoTerapia.webp",
      slug: "terapia-radiante",
      especial: false
    },
    {
      abbr: "Pm",
      color: "bg-[#F5BB25]",
      title: "Prácticas Médicas",
      desc: "Procedimientos de apoyo diagnóstico y seguimiento clínico integral.",
      img: "/servicios/Pm-logo_03_blanco.png",
      slug: "practicas-medicas",
      especial: false
    },
    {
      title: "CHEQ-IN General",
      suffix: "General",
      slug: "cheq-in-general",
      especial: true,
      color: "bg-[#0B2CF5]",
      icon: null
    },
    {
      title: "CHEQ-IN Óseo",
      suffix: "Óseo",
      slug: "cheq-in-oseo",
      especial: true,
      color: "bg-[#E8BC3D]",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2 2 2 0 0 1-4 0 2 2 0 0 1 2-2V8a2 2 0 0 1-2-2 2 2 0 0 1 4 0 2 2 0 0 0 2 2h6a2 2 0 0 0 2-2 2 2 0 0 1 4 0 2 2 0 0 1-2 2v8a2 2 0 0 1 2 2 2 2 0 0 1-4 0z" />
        </svg>
      )
    },
    {
      title: "CHEQ-IN Cardio",
      suffix: "Cardio",
      slug: "cheq-in-cardio",
      especial: true,
      color: "bg-[#D93F4A]",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      )
    },
    {
      title: "CHEQ-IN Mujer",
      suffix: "Mujer",
      slug: "cheq-in-mujer",
      especial: true,
      color: "bg-[#E379C7]",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="10" r="6" />
          <line x1="12" y1="16" x2="12" y2="22" />
          <line x1="9" y1="19" x2="15" y2="19" />
        </svg>
      )
    },
  ]

  const normales = servicios.filter((s) => !s.especial)
  const especiales = servicios.filter((s) => s.especial)

  return (
    <>
      <section className="relative bg-[#F4F6FB] py-20">
        {/* ---------- SERVICIOS NORMALES ---------- */}
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-[40px] font-black text-[#0B2CF5] mb-4 tracking-tight"
          >
            Explorá nuestros servicios
          </motion.h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Tecnología, precisión y atención personalizada en cada área.
          </p>
        </div>

        <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {normales.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative group rounded-3xl shadow-md bg-white hover:bg-[#fcfdff] transition-all hover:-translate-y-1 mt-14"
            >
              <div className={`absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 ${s.color} rounded-full flex items-center justify-center z-20 border-[8px] border-[#F4F6FB] shadow-md`}>
                <span className="text-white text-4xl font-black">{s.abbr}</span>
              </div>

              <div className="relative h-[200px] overflow-hidden rounded-t-3xl pt-1">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover px-3 pt-3 rounded-[2rem] transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="px-6 pb-8 pt-6 text-center">
                <h3 className="text-[22px] font-black text-[#505050] mb-3">{s.title}</h3>
                <p className="text-[#8B8B8B] text-sm leading-relaxed mb-6 font-medium px-2">{s.desc}</p>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="inline-flex items-center justify-center text-[#505050] hover:text-[#0B2CF5] transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- SERVICIOS ESPECIALES ---------- */}
        <div className="container mx-auto px-6 text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-[40px] font-black text-[#0B2CF5] mb-4 tracking-tight"
          >
            Chequeos completos
          </motion.h2>
          <p className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto mb-12">
            Áreas dedicadas al cuidado integral, la prevención y el bienestar de nuestros pacientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {especiales.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                }}
              >
                <Link
                  to={`/servicios/${s.slug}`}
                  className={`group flex items-stretch ${s.color} rounded-full p-[3px] shadow-sm hover:opacity-90 transition-all duration-300 w-full max-w-[420px] mx-auto`}
                >
                  <div className="bg-white rounded-full px-6 py-3 flex items-center justify-center flex-shrink-0">
                    <span className="text-[#0B2CF5] font-black tracking-tight text-2xl">cheq</span>
                    <svg className="w-[22px] h-[22px] text-[#0B2CF5] mx-0.5 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-[#0B2CF5] font-black tracking-tight text-2xl">in<sup className="text-xs ml-0.5">®</sup></span>
                  </div>
                  <div className="flex-1 flex justify-center items-center px-4 gap-3">
                    {s.icon && <span className="text-white/90">{s.icon}</span>}
                    <span className="text-white font-bold text-2xl tracking-wide">
                      {s.suffix}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>


        {/* CTA general */}
        <div className="text-center mt-14">
          <Link
            to="/servicios"
            className="inline-flex rounded-full bg-[#2E86AB] px-8 py-3 font-semibold text-white shadow-md hover:bg-[#246d88] transition"
          >
            Ver todos los servicios
          </Link>
        </div>
      </section>
    </>
  )
}
