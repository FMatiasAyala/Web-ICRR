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
      servicio: "Diagnóstico por Imágenes",
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
      servicio: "Medicina Nuclear",
      detalle: "Cámara Gamma / PET CT / Estudios Metabólicos",
      telefono: "(362) 528-4431",
      whatsapp: "3625284431",
      horario: "Lunes a viernes 7:30hs. a 20:30hs.",
      img: "/qr/medicinaNuclear.png",
    },
    {
      servicio: "Consultorios Externos",
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

      <section id="turnos" className="bg-[#F4F6FB] pb-24 overflow-x-hidden">

        {/* === HERO SECTION (Premium & Immersive) === */}
        <div className="relative h-[70vh] w-full overflow-hidden bg-[#0B2CF5]">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.5 }}
            src="/img/turnos.jpg"
            alt="Atención al Paciente ICRR"
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2CF5] via-[#0B2CF5]/20 to-transparent" />

          <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 lg:px-12 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8 border border-white/20">
                Atención Digital
              </span>
              <h1 className="text-6xl md:text-[100px] font-black mb-8 tracking-tighter leading-[0.9]">
                Tu salud, <br className="hidden md:block" /> a un clic.
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-medium max-w-xl leading-relaxed mb-10">
                Coordiná tus estudios de forma ágil y personalizada a través de nuestros canales oficiales de WhatsApp.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#canales" className="bg-white text-[#0B2CF5] px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-xl active:scale-95">
                  Ver Canales
                </a>
                <a href="#preparaciones" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95">
                  Preparaciones
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* === PASOS PARA TU TURNO (Timeline Overlay) === */}
        <div className="container mx-auto px-6 -mt-16 relative z-30">
          <div className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 md:p-12 border border-gray-50">
            <div className="grid md:grid-cols-3 gap-8 md:divide-x divide-gray-100">
              {pasos.map((paso, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-[#0B2CF5] font-black text-lg mb-4">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-black text-[#0B2CF5] mb-2 uppercase tracking-tight">{paso.title}</h4>
                  <p className="text-[#505050] text-sm font-medium leading-relaxed">{paso.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* === CANALES DE ATENCIÓN (Grid de Tarjetas Premium) === */}
        <div id="canales" className="container mx-auto px-6 pt-32 relative z-20">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B2CF5] mb-6 tracking-tight">Elegí tu canal de contacto</h2>
            <p className="text-[#8B8B8B] font-medium text-lg max-w-2xl mx-auto">Digitá el servicio que necesitás y escaneá el QR o chateá directamente por WhatsApp.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactos.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-10 flex flex-col items-center justify-between min-h-[520px] group hover:shadow-[0_25px_60px_rgba(11,44,245,0.08)] hover:-translate-y-3 transition-all duration-700 border border-transparent hover:border-[#0B2CF5]/10"
              >
                {/* Cabecera Tarjeta */}
                <div className="w-full text-center">
                  <div className="w-16 h-16 bg-[#F4F6FB] rounded-2xl flex items-center justify-center text-[#0B2CF5] mx-auto mb-8 group-hover:bg-[#0B2CF5] group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    <QrCode className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-black text-[#0B2CF5] leading-none tracking-tight mb-4 group-hover:scale-105 transition-transform origin-center">
                    {c.servicio}
                  </h3>
                  <p className="text-[#8B8B8B] text-[13px] font-medium leading-relaxed min-h-[3rem] px-4">
                    {c.detalle}
                  </p>
                </div>

                {/* Imagen QR con Efecto */}
                <div className="relative group/qr bg-[#F4F6FB] p-6 rounded-[2.5rem] mb-8 transition-all duration-500 border border-transparent group-hover:border-[#0B2CF5]/20 group-hover:bg-white shadow-inner">
                  <img
                    src={c.img}
                    alt="QR Turnos ICRR"
                    className="w-28 h-28 rounded-xl object-contain mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-[#0B2CF5]/5 rounded-[2.5rem] opacity-0 group-hover/qr:opacity-100 transition-opacity" />
                </div>

                {/* Botón WhatsApp */}
                <div className="w-full space-y-4">
                  <div className="flex flex-col items-center text-[#505050] font-bold text-[11px] text-center bg-gray-50/50 py-3 rounded-2xl border border-gray-100 group-hover:bg-blue-50/50 transition-colors">
                    <div className="flex items-center gap-1.5 mb-1 text-[#0B2CF5]">
                      <WatchIcon className="w-3.5 h-3.5" />
                      <span className="uppercase tracking-widest font-black">Disponibilidad</span>
                    </div>
                    <span className="text-[#8B8B8B] font-medium">{c.horario}</span>
                  </div>

                  <Link
                    to={`https://wa.me/549${c.whatsapp}`}
                    target="_blank"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-black py-4 rounded-2xl hover:bg-[#20ba5a] transition-all shadow-[0_10px_20px_rgba(37,211,102,0.2)] hover:shadow-[0_15px_30px_rgba(37,211,102,0.3)] active:scale-95 group/btn"
                  >
                    <FaWhatsapp className="w-6 h-6 group-hover:animate-bounce" />
                    <span className="tracking-tight uppercase text-sm">{c.telefono}</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* === PREPARACIONES (Importado) === */}
        <div id="preparaciones" className="mt-32">
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
