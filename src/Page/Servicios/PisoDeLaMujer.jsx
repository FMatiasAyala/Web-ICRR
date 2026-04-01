import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CalendarDays, Heart } from "lucide-react"
import SeoTags from "../../components/SeoTags"

export default function PisoDeLaMujer() {
  const servicios = [
    {
      nombre: "Mamografía Digital",
      descripcion:
        "Estudio de detección temprana del cáncer de mama mediante tecnología digital directa de alta resolución, que permite mayor precisión diagnóstica y menor dosis de radiación.",
      imagen: "/img/servicios/equipoMamografia.webp",
    },
    {
      nombre: "Ecografía Mamaria y Ginecológica",
      descripcion:
        "Evaluación no invasiva que complementa la mamografía. Permite el estudio de tejidos blandos, control de nódulos, quistes, útero y ovarios.",
      imagen: "/img/servicios/equipoEcografia.webp",
    },
    {
      nombre: "Prevención y Salud Integral",
      descripcion:
        "Programas de chequeo preventivo femenino: control anual, asesoramiento ginecológico, evaluación endocrina y seguimiento integral de la salud de la mujer.",
      imagen: "/img/servicios/equipoAbus.webp",
    },
  ]

  return (
    <>
      <SeoTags
        title="Piso de la Mujer | ICRR"
        description="Un espacio dedicado a la salud integral femenina, enfocado en la prevención y el diagnóstico temprano."
        image="/servicios/PisoDeLaMujer.png"
      />
      <section className="relative min-h-screen bg-[#F4F6FB] pb-24 overflow-x-hidden">
        {/* Fondo decorativo tenue */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-luminosity">
          <img
            src="/servicios/PisoDeLaMujer.png"
            alt="fondo"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F4F6FB] opacity-100 h-[600px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-24 mb-16 space-y-24">
          {/* Encabezado Principal */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#EC407A] flex items-center justify-center border-[8px] border-white shadow-xl mx-auto mb-10"
            >
              <span className="text-white text-[48px] md:text-[56px] font-black">♀</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black text-[#0B2CF5] mb-6 tracking-tight"
            >
              Piso de la Mujer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#505050] font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Un espacio dedicado a la salud integral femenina, enfocado en la prevención y el diagnóstico temprano.
            </motion.p>
          </div>

          {/* SERVICIOS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicios.map((serv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-50 group"
              >
                <div className="p-4 pb-0">
                  <div className="relative h-[240px] rounded-[2rem] overflow-hidden">
                    <img
                      src={serv.imagen}
                      alt={serv.nombre}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#EC407A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-8 pb-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#EC407A]">
                      <Heart className="w-5 h-5" fill="currentColor" />
                    </div>
                    <h2 className="text-2xl font-black text-[#0B2CF5] tracking-tight">
                      {serv.nombre}
                    </h2>
                  </div>
                  <p className="text-[#505050] text-[15px] leading-relaxed font-medium">
                    {serv.descripcion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SECCIÓN PREVENCIÓN */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] py-16 px-8 md:px-16 text-center border border-gray-50"
          >
            <h3 className="text-3xl md:text-5xl font-black text-[#0B2CF5] tracking-tight mb-8">
              Guía de Prevención Femenina
            </h3>
            <p className="text-[#505050] text-lg max-w-2xl mx-auto leading-relaxed mb-16 font-medium">
              La detección temprana salva vidas. Recomendamos realizar los siguientes estudios según la etapa de tu vida:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { edad: "A partir de los 20 años", info: "Control ginecológico anual y autoexploración mamaria mensual." },
                { edad: "Desde los 30 años", info: "Papanicolaou y colposcopía cada 1 a 2 años. Ecografía mamaria si es necesario." },
                { edad: "Desde los 40 años", info: "Mamografía anual y control clínico completo. Seguimiento endocrinológico." }
              ].map((item, i) => (
                <div key={i} className="bg-[#F4F6FB] rounded-[2.5rem] p-10 border border-white hover:bg-white hover:shadow-xl transition-all duration-300 group">
                  <h4 className="font-black text-[#EC407A] tracking-tight mb-4 text-xl group-hover:scale-105 transition-transform">
                    {item.edad}
                  </h4>
                  <p className="text-[#505050] text-[15px] font-medium leading-relaxed">
                    {item.info}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA final */}
          <div className="mt-24">
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
                    Cuidar tu salud es una forma de quererte
                  </h3>
                  <p className="text-white/80 font-medium text-lg">
                    Te invitamos a realizar tus controles anuales y consultas preventivas con nuestro equipo especializado.
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
        </div>
      </section>
    </>
  )
}