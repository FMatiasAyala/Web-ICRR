import React, { useState } from "react"
import { WatchIcon, QrCode, MessageSquare, CheckCircle, ChevronDown, HelpCircle, ArrowRight } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import Preparaciones from "../components/Preparaciones"
import SeoTags from "../components/SeoTags"

export default function Turnos() {
  const [activeFaq, setActiveFaq] = useState(null);

  const contactos = [
    {
      servicio: "Densitometría | Radiografía | Ecografía | Mamografía | Resonancia | Tomografía",
      detalle: "Densitometría / Radiografía / Ecografía / Mamografía / Resonancia / Tomografía",
      telefono: "(362) 488-0444",
      whatsapp: "3624880444",
      horario: "Lunes a viernes 7:30hs. a 20:30hs.",
      img: "/qr/diagnosticoImagenes.png",
    },
    {
      servicio: "Terapia Radiante",
      detalle: "Tratamientos oncológicos y radioterapia de precisión.",
      telefono: "(362) 400-1904",
      whatsapp: "3624001904",
      horario: "Lunes a viernes 8:00hs. a 20.30hs.",
      img: "/qr/terapiaRadiante.png",
    },
    {
      servicio: "Medicina Nuclear | Camara gamma | PET CT",
      detalle: "Cámara Gamma / PET CT ",
      telefono: "(362) 528-4431",
      whatsapp: "3625284431",
      horario: "Lunes a viernes 7:30hs. a 20:30hs.",
      img: "/qr/medicinaNuclear.png",
    },
    {
      servicio: "Practicas Medicas | Cheq-In",
      detalle: "Prácticas Médicas / Cheq-In / Especialidades",
      telefono: "(362) 548-8284",
      whatsapp: "3625488284",
      horario: "Lunes a viernes 8:00hs. a 20.30hs.",
      img: "/qr/consultoriosExternos.png",
    },
  ]

  const faqs = [
    {
      q: "¿Qué documentación necesito presentar?",
      a: "Debés traer tu DNI, la orden médica física (autorizada si tu obra social lo requiere) y el carnet de tu cobertura médica."
    },
    {
      q: "¿Cómo sé si mi obra social tiene cobertura?",
      a: "Trabajamos con las principales obras sociales y prepagas. Podés consultar el listado completo en nuestra sección de Coberturas o contactarnos por WhatsApp para confirmar."
    },
    {
      q: "¿Cuándo recibo los resultados de mi estudio?",
      a: "Los resultados estaran disponibles en el momento, una vez finalizado el estudio, en el Portal del Paciente."
    }
  ];

  const pasos = [
    { title: "Solicitud", desc: "Contactanos por WhatsApp enviando una foto de tu orden médica." },
    { title: "Coordinación", desc: "Nuestro equipo te asignará el turno y te enviará las indicaciones previas." },
    { title: "Atención", desc: "Asistí a tu turno con la documentación necesaria." }
  ];

  return (
    <>
      <SeoTags
        title="Solicitar Turno | ICRR"
        description="Reservá tu turno online de forma ágil. Atención personalizada por WhatsApp para todas nuestras especialidades."
        image="/img/turnos.jpg"
      />

      <section id="turnos" className="bg-[#F8FAFC] pb-24 overflow-x-hidden pt-10">

        {/* === HERO SECTION (Clean & Modern) === */}
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[70vh] gap-12">
            {/* Texto Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="z-10 text-center lg:text-left pt-12 lg:pt-0"
            >
              <h1 className="text-5xl md:text-6xl font-black text-[#0B2CF5] mb-6 tracking-tight leading-[1.1]">
                Solicitá tu turno
              </h1>
              <p className="text-lg md:text-2xl text-[#64748B] font-medium max-w-2xl leading-relaxed">
                Nuestro equipo está listo para ayudarte en lo que necesites.
              </p>
            </motion.div>

            {/* Imagen 3D Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className="relative z-10 w-full lg:w-[45%] max-w-[600px]"
            >
              <img
                src="/banners/turnos.png"
                alt="Solicitá tu turno ICRR"
                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
              />
              {/* Círculos decorativos de fondo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-50/50 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>
        </div>

        {/* === CANALES DE ATENCIÓN (Grid de Tarjetas Reforzadas) === */}
        <div id="canales" className="container mx-auto px-6 -mt-10 lg:-mt-24 relative z-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactos.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-6 lg:p-8 f-col items-center justify-between min-h-[480px] border border-gray-100/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
              >
                {/* Título de Servicio */}
                <div className="w-full text-center border-b border-gray-50 pb-6 mb-6">
                  <h3 className="text-lg font-bold text-[#1e293b] leading-tight px-2">
                    {c.servicio}
                  </h3>
                </div>

                {/* QR Code */}
                <div className="bg-[#f8fafc] p-6 rounded-3xl mb-8 flex items-center justify-center w-full aspect-square max-w-[200px] border border-gray-50">
                  <img
                    src={c.img}
                    alt={c.servicio}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Footer Info */}
                <div className="w-full space-y-3 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-[#64748b]">
                    <WatchIcon className="w-4 h-4 text-[#0B2CF5]" />
                    <span className="text-xs font-semibold">{c.horario}</span>
                  </div>
                  <Link
                    to={`https://wa.me/549${c.whatsapp}`}
                    target="_blank"
                    className="flex items-center gap-2 text-[#64748b] hover:text-[#0B2CF5] transition-colors"
                  >
                    <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
                    <span className="text-xs font-bold tracking-tight">{c.telefono}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === PASOS PARA TU TURNO (Timeline Overlay - Movido abajo) === */}
        <div className="container mx-auto px-6 mt-32 relative z-30">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0B2CF5] uppercase tracking-tighter">Cómo funciona</h2>
          </div>
          <div className="bg-white rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.03)] p-8 md:p-12 border border-gray-50">
            <div className="grid md:grid-cols-3 gap-8 md:divide-x divide-gray-100">
              {pasos.map((paso, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0B2CF5] font-black text-lg mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-black text-[#0B2CF5] mb-2 uppercase tracking-tight">{paso.title}</h4>
                  <p className="text-[#64748B] text-sm font-medium leading-relaxed">{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === PREPARACIONES (Importado) === */}
        <div id="preparaciones" className="mt-40">
          <Preparaciones />
        </div>

        {/* === FAQ SECTION & HELP === */}
        <div className="container mx-auto px-6 pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Preguntas Frecuentes */}
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 bg-[#0B2CF5] rounded-2xl flex items-center justify-center text-white">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#0B2CF5] tracking-tight">Preguntas Frecuentes</h2>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-black text-[#0B2CF5] text-lg pr-4">{faq.q}</span>
                      <ChevronDown className={`w-6 h-6 text-[#0B2CF5] transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {activeFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6"
                        >
                          <p className="text-[#505050] font-medium leading-relaxed border-t border-gray-50 pt-4">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner de Ayuda Inmediata */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#0B2CF5] rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl h-full flex flex-col justify-center"
            >
              {/* Decoración */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

              <MessageSquare className="w-16 h-16 text-white/30 mb-8" />
              <h3 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter">¿Alguna otra consulta?</h3>
              <p className="text-white/80 font-medium text-lg leading-relaxed mb-10">
                Nuestro centro de atención al paciente está disponible para resolver tus dudas sobre coberturas, preparaciones especiales o reprogramación de turnos.
              </p>

              <Link
                to="https://wa.me/5493624880444"
                target="_blank"
                className="bg-white text-[#0B2CF5] px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.2em] inline-flex items-center gap-3 w-fit hover:gap-6 transition-all shadow-xl active:scale-95 group"
              >
                Escribinos <ArrowRight className="w-5 h-5 group-hover:scale-110" />
              </Link>
            </motion.div>

          </div>
        </div>

        {/* === FINISHER INFO === */}
        <div className="container mx-auto px-6 pt-24 text-center">
          <div className="inline-flex items-center gap-2 text-[#8B8B8B] font-bold text-xs uppercase tracking-widest bg-white py-3 px-6 rounded-full shadow-sm border border-gray-100">
            <CheckCircle className="w-4 h-4 text-[#25D366]" />
            Atención oficial verificada
          </div>
        </div>

      </section>
    </>
  )
}
