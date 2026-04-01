import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { HeartPulse, Radiation, Stethoscope, LucideXCircle, CalendarDays } from "lucide-react"
import SeoTags from "../components/SeoTags"

export default function ServiciosPage() {
  const servicios = [
    {
      icon: <LucideXCircle className="w-12 h-12 text-[#2E86AB]" />,
      title: "Diagnóstico por Imagen",
      desc: "Equipos de resonancia, tomografía, ecografía y mamografía digital con tecnología de alta resolución y baja dosis.",
      img: "/servicios/DI.png",
      slug: "diagnostico-por-imagen",
      bg: "bg-[#E8F4FB]",
    },
    {
      icon: <Radiation className="w-12 h-12 text-[#2E86AB]" />,
      title: "Terapia Radiante",
      desc: "Tratamientos personalizados con planificación 3D, control de dosis y seguimiento médico integral.",
      img: "/servicios/TR.png",
      slug: "terapia-radiante",
      bg: "bg-[#F5F8FF]",
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-[#2E86AB]" />,
      title: "Prácticas Médicas",
      desc: "Procedimientos mínimamente invasivos y de apoyo diagnóstico, realizados por profesionales especializados.",
      img: "/servicios/PM.png",
      slug: "practicas-medicas",
      bg: "bg-[#EFFAF6]",
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-[#2E86AB]" />,
      title: "Piso De La Mujer",
      desc: "Atención integral con estudios específicos para la salud femenina y programas de prevención.",
      img: "/servicios/PisoDeLaMujer.png",
      slug: "piso-de-la-mujer",
      bg: "bg-[#FDF5F5]",
    },
    {
      icon: <HeartPulse className="w-12 h-12 text-[#2E86AB]" />,
      title: "Cheq-In",
      desc: "Cheqin es el punto de partida. Un programa que te permite obtener en media jornada tu estado de salud general.",
      img: "/servicios/Cheq-in.png",
      slug: "cheq-in",
      bg: "bg-[#E8F4FB]",
    },
  ]

  return (
    <>
      <SeoTags
        title="Servicios | ICRR"
        description="Resonancias, tomografías, rayos X, densitometrías, ecografías y más. Conocé los servicios de diagnóstico por imágenes que ofrecemos en ICRR."
        image="/logos/icrr_logo2.jpg"
      />
      <section className="relative min-h-screen bg-[#F4F6FB] py-24">
        {/* Encabezado */}
        <div className="container mx-auto px-6 text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-[#0B2CF5] mb-8 tracking-tight">
            Nuestros Servicios
          </h1>
          <p className="text-[#505050] font-medium text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Explorá nuestras especialidades en diagnóstico y tratamiento con la tecnología de vanguardia del
            <span className="text-[#0B2CF5] font-black"> ICRR</span>.
          </p>
        </div>

        {/* Grilla de servicios */}
        <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2">
          {servicios.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white group overflow-hidden rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.1)] transition-all duration-500 border border-gray-50"
            >
              {/* Imagen y overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2CF5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Contenido */}
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-[#F4F6FB] rounded-2xl text-[#0B2CF5]">
                    {React.cloneElement(s.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-[#0B2CF5] tracking-tight">{s.title}</h3>
                </div>

                <p className="text-[#505050] font-medium text-[16px] leading-relaxed mb-8">
                  {s.desc}
                </p>

                <div className="flex">
                  <Link
                    to={`/servicios/${s.slug}`}
                    className="inline-flex items-center justify-center rounded-full bg-[#0B2CF5] px-10 py-4 text-sm font-black text-white transition-all shadow-md hover:shadow-xl hover:-translate-y-1 active:scale-95"
                  >
                    CONOCER MÁS
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA final */}

        {/* CTA final */}
        <div className="container mx-auto px-6 mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0B2CF5] rounded-[3rem] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(11,44,245,0.3)] overflow-hidden relative"
          >
            {/* Decoración sutil */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="bg-white/10 p-5 rounded-[2rem] backdrop-blur-sm">
                <CalendarDays className="w-12 h-12 text-white" />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight tracking-tight">
                  ¿Tenés dudas sobre qué estudio necesitás?
                </h3>
                <p className="text-white/80 font-medium text-lg">
                  Contactanos y nuestro equipo de asesoría médica te guiará para que recibas la mejor atención.
                </p>
              </div>
            </div>

            <Link
              to="/turnos"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-white text-[#0B2CF5] font-black px-12 py-5 text-lg shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 active:scale-95"
            >
              RESERVAR TURNO
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
