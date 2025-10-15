import React from "react"
import { Link } from "react-router-dom"
import { HeartPulse, Radiation, Stethoscope, LucideXCircle, CalendarDays } from "lucide-react"

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
    <section className="relative min-h-screen bg-gray-50 py-20">
      {/* Encabezado */}
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A2342] mb-6">
          Nuestros Servicios
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Conocé las principales áreas de atención y diagnóstico del
          <strong className="text-[#2E86AB]"> Consultorio Radiológico Resistencia</strong>.
        </p>
      </div>

      {/* Grilla de servicios */}
      <div className="container mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-2">
        {servicios.map((s, i) => (
          <div
            key={i}
            className={`${s.bg} relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition`}
          >
            {/* Imagen superior */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={s.img}
                alt={s.title}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center gap-3 text-white">
                {s.icon}
                <h3 className="text-xl font-semibold">{s.title}</h3>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 md:p-8">
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>

              <div className="mt-6 flex justify-end">
                <Link
                  to={`/servicios/${s.slug}`}
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#2E86AB] px-6 py-2 text-sm font-semibold text-[#0A2342] transition hover:bg-[#2E86AB] hover:text-white"
                >
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA final */}

      <div className="bg-gradient-to-r from-[#0A2342] to-[#2E86AB] text-white py-16 mt-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-4 rounded-full">
              <CalendarDays className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Si tenés dudas sobre qué estudio necesitás, contactanos y te asesoramos.
              </h3>
              <p className="text-white/80">
                Accedé a turnos inmediatos, recordatorios automáticos y asistencia prioritaria.
              </p>
            </div>
          </div>

          <Link
            to="/turnos"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#0A2342] font-semibold px-8 py-3 shadow-md hover:bg-gray-100 transition"
          >
            Reservar Turno
          </Link>
        </div>
      </div>
    </section>
  )
}
