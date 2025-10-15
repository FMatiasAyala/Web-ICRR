import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Radiation, Stethoscope, HeartPulse, ClipboardCheck } from "lucide-react"

export default function ServiciosHome() {
  const servicios = [
    {
      icon: <Radiation className="w-10 h-10 text-[#2E86AB]" />,
      title: "Diagnóstico por Imagen",
      desc: "Ecografía, tomografía, resonancia y más con equipos de última generación.",
      img: "/servicios/Di-logo_03_blanco.png",
      slug: "diagnostico-por-imagen",
      especial: false
    },
    {
      icon: <Radiation className="w-10 h-10 text-[#2E86AB]" />,
      title: "Terapia Radiante",
      desc: "Tratamientos personalizados con enfoque en precisión y seguridad.",
      img: "/servicios/Tr-logo_03_blanco.png",
      slug: "terapia-radiante",
      especial: false
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-[#2E86AB]" />,
      title: "Prácticas Médicas",
      desc: "Procedimientos de apoyo diagnóstico y seguimiento clínico integral.",
      img: "/servicios/Pm-logo_03_blanco.png",
      slug: "practicas-medicas",
      especial: false
    },
    {
      icon: <HeartPulse className="w-10 h-10 text-[#2E86AB]" />,
      title: "Piso de la Mujer",
      desc: "Mamografías, ecografías ginecológicas y programas de prevención.",
      img: "/servicios/PisoDeLaMujer.png",
      slug: "piso-de-la-mujer",
      especial: true
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-[#2E86AB]" />,
      title: "CHEQ-IN",
      desc: "CHEQ-IN",
      img: "/servicios/Cheq-in.png",
      slug: "cheq-in",
      especial: true
    },
  ]

  const normales = servicios.filter((s) => !s.especial)
  const especiales = servicios.filter((s) => s.especial)

  return (
    <section className="relative bg-white py-16">
      {/* ---------- SERVICIOS NORMALES ---------- */}
      <div className="container mx-auto px-6 text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-[#0A2342] mb-4"
        >
          Nuestros Servicios
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
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
            className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-xl bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="p-6 text-left">
              <div className="flex items-center gap-3 mb-3">
                {s.icon}
                <h3 className="text-lg font-semibold text-[#0A2342]">{s.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
              <Link
                to={`/servicios/${s.slug}`}
                className="inline-block text-sm font-semibold text-[#2E86AB] hover:underline"
              >
                Ver más →
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
          className="text-4xl font-bold text-[#0A2342] mb-4"
        >
          Servicios Especiales
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Áreas dedicadas al cuidado integral, la prevención y el bienestar de nuestros pacientes.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10">
          {especiales.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative group w-full md:w-[420px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Imagen de fondo */}
              <img
                src={s.img}
                alt={s.title}
                className="h-[260px] w-full object-cover object-center brightness-90 group-hover:brightness-100 transition duration-700"
              />

              {/* Gradiente azul institucional */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/90 via-[#0A2342]/40 to-transparent"></div>

              {/* Contenido */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white">
                <div className="flex items-center gap-3 mb-2">
                  {React.cloneElement(s.icon, { className: "w-8 h-8 text-[#b7dbf7]" })}
                  <h3 className="text-2xl font-bold">{s.title}</h3>
                </div>
                <p className="text-white/90 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link
                  to={`/servicios/${s.slug}`}
                  className="inline-block bg-white/90 text-[#0A2342] font-semibold px-5 py-2 rounded-full text-sm hover:bg-white transition"
                >
                  Ver más →
                </Link>
              </div>
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
  )
}
