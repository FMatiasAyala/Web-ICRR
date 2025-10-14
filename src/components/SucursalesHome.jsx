import React from "react"
import { Link } from "react-router-dom"
import { MapPin, Phone } from "lucide-react"
import { motion } from "framer-motion"

export default function SucursalesHome() {
  const sucursales = [
    {
      nombre: "Sede Central",
      direccion: "Av. 9 de Julio 635, Resistencia, Chaco",
      telefono: "(362) 444-5555",
      img: "/sucursales/fachadaCentral.jpg",
      slug: "central",
    },
    {
      nombre: "Sucursal Fontana",
      direccion: "Av. Alvear 3876, Fontana, Chaco",
      telefono: "(362) 445-1111",
      img: "/sucursales/fachadaFontana.jpg",
      slug: "fontana",
    },
    {
      nombre: "Sucursal Sáenz Peña",
      direccion: "Av. J. Domingo Perón 220, Sáenz Peña, Chaco",
      telefono: "(379) 442-9999",
      img: "/sucursales/fachadaSP.jpg",
      slug: "saenzPena",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-[#E8F3FB] to-white py-20 overflow-x-hidden">
      <div className="container mx-auto px-6 mb-16 text-center" id="sucursales">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0A2342] mb-4"
        >
          Nuestras Sucursales
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Estamos presentes en distintos puntos para ofrecerte una atención cercana y personalizada.
        </p>
      </div>

      <div className="container mx-auto flex flex-col gap-12 overflow-hidden">
        {sucursales.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -25 : 25, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
              delay: i * 0.08,
            }}
            className={`bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""
              } hover:shadow-2xl transition-all duration-500`}
          >
            {/* Imagen */}
            <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={s.img}
                alt={s.nombre}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {/* Info */}
            <div className="md:w-1/2 flex flex-col justify-center p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-[#0A2342] mb-3">{s.nombre}</h3>
              <div className="flex items-start gap-2 text-gray-700 mb-2">
                <MapPin className="w-5 h-5 text-[#2E86AB] mt-1" />
                <span>{s.direccion}</span>
              </div>
              <div className="flex items-start gap-2 text-gray-700 mb-5">
                <Phone className="w-5 h-5 text-[#2E86AB] mt-1" />
                <span>{s.telefono}</span>
              </div>

              <Link
                to={`/sucursales/${s.slug}`}
                className="self-start mt-auto inline-flex rounded-full border-2 border-[#2E86AB] px-6 py-2 font-semibold text-[#2E86AB] hover:bg-[#2E86AB] hover:text-white transition"
              >
                Ver detalle
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>

  )
}
