import ObraSociales from "../components/ObraSociales"
import Preparaciones from "../components/Preparaciones"
import SeoTags from "../components/SeoTags"
import CTA from "../components/CTA";
import { FaFilePdf, FaWhatsapp } from 'react-icons/fa6';
import { BsCash, BsBank } from 'react-icons/bs';
import { FaCreditCard } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function Pacientes() {
  return (
    <>
      <SeoTags
        title="Pacientes | ICRR"
        description="Accedé al portal de pacientes del Consultorio Radiológico Resistencia para consultar estudios, resultados y preparaciones médicas."
        image="/logos/icrr_logo3.jpg"
      />

      <section className="bg-[#F4F6FB] pb-24">
        {/* === Hero Portal === */}
        <div className="relative h-[60vh] w-full overflow-hidden bg-[#0B2CF5] mb-16">
          <img
            src="/img/ICRR-pacientes.jpg"
            alt="Paciente utilizando tablet"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2CF5] via-[#0B2CF5]/80 to-transparent" />

          <div className="relative z-10 container mx-auto h-full flex items-center px-6 lg:px-12">
            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight mb-6"
              >
                Portal de Pacientes
              </motion.h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl leading-relaxed">
                Gestioná tu salud de forma digital. Accedé a tus informes, imágenes e historial médico desde cualquier lugar.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://pacientes.icrrportal.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0B2CF5] font-black px-10 py-4 rounded-full text-lg shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 active:scale-95"
                >
                  INGRESAR AL PORTAL
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6">
          <ObraSociales />

          {/* === Medios de Pago === */}
          <section className="mt-24 mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#0B2CF5] mb-6 tracking-tight">
                Medios de Pago
              </h2>
              <p className="text-[#505050] font-medium text-lg max-w-2xl mx-auto">
                Facilitamos tus gestiones con múltiples opciones de pago seguras y financiadas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <BsBank />, title: "Transferencia", desc: "Aboná mediante CBU/Alias de forma directa." },
                { icon: <FaCreditCard />, title: "Tarjetas", desc: "3 cuotas sin interés en consumos superiores a $10.000." },
                { icon: <BsCash />, title: "Efectivo", desc: "Pago presencial en nuestras sucursales." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center group hover:bg-[#0B2CF5] transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-[#F4F6FB] rounded-3xl flex items-center justify-center text-4xl text-[#0B2CF5] mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black text-[#0B2CF5] mb-4 group-hover:text-white transition-colors">{item.title}</h3>
                  <p className="text-[#505050] font-medium group-hover:text-white/90 transition-colors leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* === Tutoriales === */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-[#0B2CF5] mb-6 tracking-tight">
                Centro de Ayuda
              </h2>
              <p className="text-[#505050] font-medium text-lg max-w-2xl mx-auto">
                Guías rápidas para que puedas aprovechar al máximo nuestras herramientas digitales.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tutorial Video */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden group border border-gray-50"
              >
                <div className="aspect-video bg-black relative">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/fK4nlppe-o0"
                    title="Cómo ingresar al portal de pacientes"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-black text-[#0B2CF5] mb-4 tracking-tight">
                    Acceso al Portal
                  </h3>
                  <p className="text-[#505050] font-medium mb-6 leading-relaxed">
                    Mirá este video para aprender a navegar tu cuenta personal.
                  </p>
                </div>
              </motion.div>

              {/* Tutorial PDF 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-[2.5rem] shadow-xl p-8 flex flex-col items-center text-center border border-gray-50"
              >
                <div className="w-24 h-24 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center text-5xl mb-6">
                  <FaFilePdf />
                </div>
                <h3 className="text-2xl font-black text-[#0B2CF5] mb-4 tracking-tight">
                  Descargar Resultados
                </h3>
                <p className="text-[#505050] font-medium mb-8 leading-relaxed">
                  Guía visual para obtener tus informes técnicos y estudios.
                </p>
                <a
                  href="/pdfs/TUTORIAL PARA DESCARGAS IMAGENES .pdf"
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-[#0B2CF5] px-8 py-3 font-black text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  DESCARGAR GUÍA
                </a>
              </motion.div>

              {/* Tutorial PDF 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-[2.5rem] shadow-xl p-8 flex flex-col items-center text-center border border-gray-50"
              >
                <div className="w-24 h-24 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center text-5xl mb-6">
                  <FaFilePdf />
                </div>
                <h3 className="text-2xl font-black text-[#0B2CF5] mb-4 tracking-tight">
                  Orden Médica
                </h3>
                <p className="text-[#505050] font-medium mb-8 leading-relaxed">
                  Aprendé a gestionar tus prescripciones desde el portal.
                </p>
                <a
                  href="/pdfs/ICRR Tutorial OM.pdf"
                  target="_blank"
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-[#0B2CF5] px-8 py-3 font-black text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  DESCARGAR GUÍA
                </a>
              </motion.div>
            </div>
          </section>
        </div>

        <Preparaciones />
        <div className="mt-24">
          <CTA />
        </div>
      </section>
    </>
  )
}
