import { motion } from "framer-motion"
import { UserRound, FlaskConical, CalendarDays, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import SeoTags from "../../components/SeoTags"

export default function CheqInOseo() {
  return (
    <>
      <SeoTags
        title="CHEQ-IN Óseo | ICRR"
        description="Circuito de salud diseñado para evaluar tu salud ósea en una sola jornada."
        image="/servicios/cheq-in-oseo.jpg"
      />
      <section className="relative min-h-screen bg-[#F4F6FB] pb-24 overflow-x-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-luminosity">
          <img
            src="/servicios/cheq-in-oseo.jpg"
            alt="fondo"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F4F6FB] opacity-100 h-[600px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-24 mb-16 space-y-24">
          <div className="text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0B2CF5] flex items-center justify-center border-[8px] border-white shadow-xl mx-auto mb-10"
            >
              <span className="text-white text-[40px] md:text-[56px] font-black tracking-tighter">Cq</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black text-[#0B2CF5] mb-6 tracking-tight"
            >
              CHEQ-IN Óseo
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#505050] font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Conocé el estado de tu salud ósea en una sola jornada.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto bg-white rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-50 flex flex-col md:flex-row"
          >
            <div className="w-full md:w-1/2 bg-[#F4F6FB] p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#0B2CF5]/10">
              <img
                src="/servicios/cheq-in-oseo.jpg"
                alt="CHEQ-IN Óseo"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-[2rem] transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#0B2CF5]">
                    <div className="p-3 bg-blue-50 rounded-2xl">
                      <UserRound className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <span className="font-black text-sm tracking-widest uppercase">Está dirigido a:</span>
                  </div>
                  <p className="text-[#505050] text-[16px] md:text-lg font-medium leading-[1.8]">
                    Mayores de 50 años, personas con osteoporosis o enfermedades crónicas, en tratamiento con corticoides prolongados o anticoagulantes, en menopausia o con sedentarismo.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4 text-[#0B2CF5]">
                    <div className="p-3 bg-blue-50 rounded-2xl">
                      <FlaskConical className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <span className="font-black text-sm tracking-widest uppercase">Incluye:</span>
                  </div>
                  <p className="text-[#505050] text-[16px] md:text-lg font-medium leading-[1.8]">
                    Densitometría de columna lumbar y caderas, junto con laboratorio de análisis clínicos completo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0B2CF5] rounded-[3rem] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(11,44,245,0.3)] overflow-hidden relative max-w-6xl mx-auto"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="bg-white/10 p-5 rounded-[2rem] backdrop-blur-sm">
                <CalendarDays className="w-12 h-12 text-white" />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight tracking-tight">
                  Conocé tu estado de salud hoy
                </h3>
                <p className="text-white/80 font-medium text-lg">
                   Reservá tu turno para CHEQ-IN Óseo y recibí tu evaluación médica completa.
                </p>
              </div>
            </div>

            <Link
              to="/turnos"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-white text-[#0B2CF5] font-black px-12 py-5 text-lg shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-tight"
            >
              Reservar Turno
            </Link>
          </motion.div>

          <div className="bg-white rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10 md:p-20 border border-gray-50 max-w-6xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-black text-[#0B2CF5] mb-12 text-center tracking-tight flex items-center justify-center gap-4">
               <MapPin className="w-10 h-10" />
               ¿Dónde encontrarnos?
            </h3>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] border border-gray-100">
              <iframe
                title="Mapa Sede Central"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d744.2831331572827!2d-58.98068172737543!3d-27.455956964664026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf1d48612bd%3A0xd65f93c5771f8b81!2sDensitometr%C3%ADa%20Osea%20Resistencia!5e0!3m2!1ses!2sar!4v1759840589238!5m2!1ses!2sar"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
