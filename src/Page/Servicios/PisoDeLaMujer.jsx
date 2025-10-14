import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CalendarDays } from "lucide-react"

export default function PisoDeLaMujer() {
  const servicios = [
    {
      nombre: "Mamografía Digital",
      descripcion:
        "Estudio de detección temprana del cáncer de mama mediante tecnología digital directa de alta resolución, que permite mayor precisión diagnóstica y menor dosis de radiación.",
      imagen: "/img/servicios/equipoMamografia.jpg",
    },
    {
      nombre: "Ecografía Mamaria y Ginecológica",
      descripcion:
        "Evaluación no invasiva que complementa la mamografía. Permite el estudio de tejidos blandos, control de nódulos, quistes, útero y ovarios.",
      imagen: "/img/servicios/equipoEcografia.jpg",
    },
    {
      nombre: "Prevención y Salud Integral",
      descripcion:
        "Programas de chequeo preventivo femenino: control anual, asesoramiento ginecológico, evaluación endocrina y seguimiento integral de la salud de la mujer.",
      imagen: "/img/servicios/imagenMarcacion.jpg",
    },
  ]

  return (
    <section className="container mx-auto px-6 py-20">
      {/* HERO */}
      <div className="relative h-[55vh] w-full overflow-hidden rounded-3xl shadow-xl mb-20">
        <img
          src="/servicios/PisoDeLaMujer.png"
          alt="Piso de la Mujer - Consultorio Radiológico Resistencia"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
        />
        {/* Degradado rosado */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e99ba2]/80 via-[#d77b8a]/70 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 text-white max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            Piso de la Mujer
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Un espacio dedicado a la salud integral femenina, enfocado en la prevención,
            el diagnóstico temprano y el cuidado continuo.
          </motion.p>
        </div>
      </div>

      {/* SERVICIOS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
        {servicios.map((serv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="group bg-white rounded-3xl shadow-md hover:shadow-xl border border-pink-100 overflow-hidden transition"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={serv.imagen}
                alt={serv.nombre}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e99ba2]/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-[#a02f4c] mb-3">
                {serv.nombre}
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {serv.descripcion}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SECCIÓN PREVENCIÓN */}
      <div className="bg-gradient-to-r from-[#fce4ec] to-[#fde9ef] rounded-3xl py-16 px-8 md:px-16 shadow-inner mb-24 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#a02f4c] mb-6"
        >
          Guía de Prevención Femenina
        </motion.h3>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed mb-8">
          La detección temprana salva vidas. Recomendamos realizar los siguientes
          estudios según la etapa de vida:
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-left md:text-center">
          <div className="bg-white rounded-2xl shadow p-6 border border-pink-100">
            <h4 className="font-semibold text-[#a02f4c] mb-2 text-lg">
              A partir de los 20 años
            </h4>
            <p className="text-gray-700 text-sm">
              Control ginecológico anual y autoexploración mamaria mensual.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-pink-100">
            <h4 className="font-semibold text-[#a02f4c] mb-2 text-lg">
              Desde los 30 años
            </h4>
            <p className="text-gray-700 text-sm">
              Papanicolaou y colposcopía cada 1 a 2 años. Ecografía mamaria si es necesario.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 border border-pink-100">
            <h4 className="font-semibold text-[#a02f4c] mb-2 text-lg">
              Desde los 40 años
            </h4>
            <p className="text-gray-700 text-sm">
              Mamografía anual y control clínico completo. Seguimiento endocrinológico y ginecológico.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#f9a1b0] via-[#f27d93] to-[#a02f4c] text-white py-16 mt-5 rounded-3xl shadow-md">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-4 rounded-full">
              <CalendarDays className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold drop-shadow-sm">
                Cuidar tu salud es una forma de quererte
              </h3>
              <p className="text-white/90 leading-relaxed">
                Te invitamos a realizar tus controles anuales y consultas preventivas.
                Nuestro equipo especializado en salud femenina te acompaña en cada etapa.
              </p>
            </div>
          </div>

          <Link
            to="/turnos"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#a02f4c] font-semibold px-8 py-3 shadow-lg hover:bg-[#fff0f3] transition"
          >
            Reservar Turno
          </Link>
        </div>
      </div>

    </section>
  )
}