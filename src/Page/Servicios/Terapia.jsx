import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CalendarDays, ShieldCheck, Award, FileText } from "lucide-react"
import SeoTags from "../../components/SeoTags"

export default function Terapia() {
  const certificados = [
    {
      nombre: "Certificación de Calidad",
      archivo: "/pdfs/politica_de_la_calidad_tr.pdf",
      detalle_button: "Política de Calidad"
    },
    {
      nombre: "Sistema de Gestión de Calidad IRAM-ISO 9001:2015",
      archivo: "/pdfs/TERAPIA_RADIANTE_9001_iram.pdf",
      detalle_button: "Certificado IRAM"
    },
    {
      nombre: "Certificado de Registro IQ NET International",
      archivo: "/pdfs/TERAPIA_RADIANTE_9001_iqnet.pdf",
      detalle_button: "Certificado IQNET"
    },
  ]

  return (
    <>
      <SeoTags
        title="Terapia Radiante | ICRR"
        description="Tecnología de vanguardia en radioterapia y planificación 3D con los más altos estándares de calidad."
        image="/servicios/TR.png"
      />
      <section className="relative min-h-screen bg-[#F4F6FB] pb-24 overflow-x-hidden">
        {/* Fondo decorativo tenue */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-luminosity">
          <img
            src="/servicios/TR.png"
            alt="fondo"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F4F6FB] opacity-100 h-[600px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-24 mb-16 space-y-32">
          {/* Encabezado Principal */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#25DF85] flex items-center justify-center border-[8px] border-white shadow-xl mx-auto mb-10"
            >
              <span className="text-white text-[40px] md:text-[56px] font-black tracking-tighter">Tr</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black text-[#0B2CF5] mb-6 tracking-tight"
            >
              Terapia Radiante
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#505050] font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Liderazgo tecnológico y excelencia profesional al servicio del tratamiento de precisión.
            </motion.p>
          </div>

          {/* Contenido principal */}
          <div className="bg-white rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-50">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              <div className="p-10 md:p-20 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-[#25DF85]">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-[#0B2CF5] tracking-tight">
                      Radioterapia de Precisión
                    </h2>
                  </div>

                  <div className="space-y-6 text-[#505050] font-medium text-[16px] leading-[1.8] text-justify">
                    <p>
                      Nuestro Servicio de Radioterapia del <span className="text-[#0B2CF5] font-black">ICRR</span> es pionero en el tratamiento del cáncer en el Chaco y el centro médico más avanzado de la región en tecnología y planificación.
                    </p>
                    <p>
                      Contamos con equipamiento de última generación y técnicas de irradiación avanzadas como <span className="font-bold">IMRT</span> y <span className="font-bold">VMAT</span>, asegurando una atención de máxima calidad bajo estándares internacionales.
                    </p>
                    <p>
                      El uso de imágenes 3D (TC, RM, PET) permite delimitar el tumor con exactitud milimétrica, protegiendo los tejidos sanos y garantizando que la dosis sea administrada de forma precisa y efectiva.
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative min-h-[400px] lg:min-h-full"
              >
                <img
                  src="/img/servicios/equipoTerapia.webp"
                  alt="Equipo de radioterapia avanzada"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/10 lg:to-white/20" />
              </motion.div>
            </div>
          </div>

          {/* Certificaciones */}
          <section className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10 md:p-20 border border-gray-50">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-blue-50 text-[#0B2CF5] rounded-2xl flex items-center justify-center mx-auto mb-6"
              >
                <Award className="w-8 h-8" />
              </motion.div>
              <h3 className="text-3xl md:text-5xl font-black text-[#0B2CF5] tracking-tight mb-8">
                Compromiso con la Calidad
              </h3>
              <p className="text-[#505050] text-lg max-w-3xl mx-auto leading-relaxed font-medium">
                Hemos certificado nuestros procesos bajo la norma internacional <span className="text-[#0B2CF5] font-black">ISO 9001:2015</span>, garantizando seguridad y excelencia profesional en cada etapa del tratamiento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {certificados.map((cert, i) => (
                <motion.a
                  key={i}
                  href={cert.archivo}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)" }}
                  className="bg-[#F4F6FB] rounded-[2.5rem] border border-white p-10 text-center flex flex-col items-center group transition-all duration-500 hover:bg-white"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0B2CF5] group-hover:text-white transition-colors duration-500">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h4 className="font-black text-[#0B2CF5] mb-8 text-sm uppercase tracking-wider leading-relaxed">
                    {cert.nombre}
                  </h4>
                  <div className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-[#0B2CF5] text-xs font-black shadow-sm group-hover:bg-[#0B2CF5] group-hover:text-white transition-all">
                    {cert.detalle_button.toUpperCase()}
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          {/* CTA final */}
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
                  Atención especializada y turnos online
                </h3>
                <p className="text-white/80 font-medium text-lg">
                  Accedé a turnos inmediatos, recordatorios automáticos y asistencia prioritaria desde nuestra plataforma digital.
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