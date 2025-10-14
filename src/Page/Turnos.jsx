import React from "react"
import { Phone, FileText, Stethoscope, WatchIcon } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Preparaciones from "../components/Preparaciones"
export default function Turnos() {
  const contactos = [
    {
      servicio: "Densitometría / Radiografía / Ecografía / Mamografía / Resonancia / Tomografía",
      telefono: "(362) 488-0444",
      whatsapp: "3624880444",
      horario: "Lunes a viernes 7:30hs. a 20:30hs.",
      img: "/qr/diagnosticoImagenes.png",
    },
    {
      servicio: "Terapia Radiante",
      telefono: "(362) 400-1904",
      whatsapp: "3624001904",
      horario: "Lunes a viernes 8:00hs. a 20.30hs.",
      img: "/qr/terapiaRadiante.png",
    },
    {
      servicio: "Medicina Nuclear/Cámara Gamma/PET CT",
      telefono: "(362) 528-4431",
      whatsapp: "3625284431",
      horario: "Lunes a viernes 7:30hs. a 20:30hs.",
      img: "/qr/medicinaNuclear.png",
    },
    {
      servicio: "Practicas Medicas",
      telefono: "(362) 548-8284",
      whatsapp: "3625488284",
      horario: "Lunes a viernes 8:00hs. a 20.30hs.",
      img: "/qr/consultoriosExternos.png",
    },
  ]


  const preparaciones = [
    {
      nombre: "Ecografía abdominal",
      desc: "Ayuno de 6 horas, agua libre hasta 1 hora antes del estudio.",
      pdf: "/preparaciones/ecografia-abdominal.pdf",
    },
    {
      nombre: "Tomografía contrastada",
      desc: "Presentarse con análisis de creatinina y ayuno de 4 horas.",
      pdf: "/preparaciones/tomografia-contrastada.pdf",
    },
    {
      nombre: "Resonancia magnética",
      desc: "Sin objetos metálicos, ayuno de 4 horas si es con contraste.",
      pdf: "/preparaciones/resonancia.pdf",
    },
    {
      nombre: "Densitometría ósea",
      desc: "Evitar suplementos de calcio 24h previas al estudio.",
      pdf: "/preparaciones/densitometria.pdf",
    },
  ]

  return (
    <section id="turnos" className="bg-gray-50 py-20">
      <div className="relative h-[65vh] w-full overflow-hidden bg-white">
        {/* Imagen lateral derecha */}
        <img
          src="/img/turnos.jpg"
          alt="Celular mostrando sistema de turnos"
          className="absolute right-0 top-0 h-full w-auto object-cover object-right hidden md:block"
        />

        {/* Overlay sutil a la izquierda para destacar el texto */}
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-white via-white/80 to-transparent" />

        {/* Contenido principal */}
        <div className="relative z-10 flex h-full items-center justify-center md:justify-start">
          <div className="max-w-xl text-center md:text-left px-6 md:pl-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold text-[#0A2342] leading-tight"
            >
              Solicitá tu turno
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-4 text-lg md:text-xl text-[#0A2342]/80 max-w-md"
            >
              Nuestro equipo está listo para ayudarte en lo que necesites.
            </motion.p>
          </div>
        </div>
      </div>


      {/* === Paneles de Contacto con QR === */}
      <div className="container mx-auto px-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {contactos.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-between min-h-[360px] hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            {/* Título principal */}
            <h3 className="text-lg font-semibold text-[#0A2342] mb-3 text-center leading-snug min-h-[3.5rem]">
              {c.servicio}
            </h3>

            {/* Imagen QR */}
            <img
              src={c.img}
              alt={`QR ${c.sede}`}
              className="w-36 h-36 mb-4 rounded-lg shadow-sm border object-contain"
            />

            {/* Horarios */}
            <div className="flex flex-col items-center text-[#0A2342] font-medium text-sm text-center">
              <WatchIcon className="w-5 h-5 mb-1" />
              <span>{c.horario}</span>
            </div>
            {/* Telefono */}
            <div className="flex flex-col items-center text-[#2E86AB] font-medium text-sm text-center">
              <Phone className="w-5 h-5 mb-1" />
              <Link to={`https://wa.me/549${c.whatsapp}`}>
                <span>{c.telefono}</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Preparaciones />
    </section>
  )
}
