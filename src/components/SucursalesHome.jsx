import React from "react"
import { Link } from "react-router-dom"
import { MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function SucursalesHome() {
  const sucursales = [
    {
      prefix: "Sede",
      nombre: "Resistencia",
      direccion: "Av. 9 de Julio 635",
      img: "/sucursales/fachadaCentral.webp",
      slug: "central",
    },
    {
      prefix: "Sede",
      nombre: "Sáenz Peña",
      direccion: "Av. Juan Domingo Perón 1220\n(Calle 33 entre 28 y 26)",
      img: "/sucursales/fachadaSP.webp",
      slug: "saenzPena",
    },
    {
      prefix: "Sede",
      nombre: "Fontana",
      direccion: "Av. Alvear 3876",
      img: "/sucursales/fachadaFontana.webp",
      slug: "fontana",
    },
  ]

  return (
    <section className="bg-[#F4F6FB] py-10 pb-24 overflow-x-hidden">
      <div className="container mx-auto px-6 mb-12 text-center" id="sucursales">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-[40px] font-black text-[#0B2CF5] mb-4 tracking-tight"
        >
          Conocé nuestras sedes
        </motion.h2>
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-3xl mx-auto">
          Estamos presentes en distintos puntos para ofrecerte una atención cercana y personalizada.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 px-6 lg:px-12 max-w-7xl">
        {sucursales.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 0.15,
            }}
            className="group flex flex-col hover:-translate-y-2 transition-transform duration-500"
          >
            {/* Imagen clickeable */}
            <Link to={`/sucursales/${s.slug}`} className="w-full aspect-square overflow-hidden block flex-none shadow-md bg-gray-200">
              <img
                src={s.img}
                alt={s.nombre}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </Link>

            {/* Info directa sobre el fondo */}
            <div className="flex-grow flex flex-col pt-5">
              <div className="flex items-center gap-1.5 mb-1.5 text-[#0B2CF5]">
                <MapPin className="w-[18px] h-[18px] shrink-0" strokeWidth={2.5} />
                <h3 className="text-xl md:text-[22px] tracking-tight whitespace-nowrap">
                  <span className="font-normal">{s.prefix}</span>{" "}
                  <span className="font-black">{s.nombre}</span>
                </h3>
              </div>
              <p className="text-[#8B8B8B] text-[13px] md:text-sm leading-snug font-medium whitespace-pre-line ml-[24px]">
                {s.direccion}
              </p>
              <div className="w-9 h-[3px] bg-[#0B2CF5] mt-3 ml-[24px]"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

  )
}
