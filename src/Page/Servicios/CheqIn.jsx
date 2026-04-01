import { motion } from "framer-motion"
import { UserRound, FlaskConical, CalendarDays, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import SeoTags from "../../components/SeoTags"

export default function CheqIn() {
    const programas = [
        {
            nombre: "CHEQ-IN General",
            imagen: "/servicios/cheq-in-general.jpg",
            dirigido:
                "Cualquier paciente que quiera conocer su estado de salud general, deportistas y pacientes post COVID.",
            incluye:
                "Laboratorio de análisis clínicos completo, espirometría, ecocardiograma Doppler, eco Doppler vasos de cuello, prueba ergométrica computarizada, TAC de tórax sin contraste.",
        },
        {
            nombre: "CHEQ-IN Cardio",
            imagen: "/servicios/cheq-in-cardio.jpg",
            dirigido:
                "Pacientes con hipertensión arterial, diabéticos, tabaquistas, personas con obesidad, con insuficiencia renal o cardíaca, colesterol alto, o antecedentes cardiovasculares.",
            incluye:
                "Laboratorio de análisis clínicos completo, ecocardiograma Doppler, eco Doppler vasos de cuello, electrocardiograma, ergometría, estudio de perfusión miocárdica stress-reposo, MAPA y Holter de 24 hs.",
        },
        {
            nombre: "CHEQ-IN Óseo",
            imagen: "/servicios/cheq-in-oseo.jpg",
            dirigido:
                "Mayores de 50 años, personas con osteoporosis o enfermedades crónicas, en tratamiento con corticoides prolongados o anticoagulantes, en menopausia o con sedentarismo.",
            incluye:
                "Densitometría de columna lumbar y caderas, junto con laboratorio de análisis clínicos completo.",
        },
    ]

  return (
    <>
      <SeoTags
        title="Programas CHEQ-IN | ICRR"
        description="Circuitos de salud diseñados para evaluar tu bienestar en una sola jornada, de manera ágil y coordinada."
        image="/servicios/cheq-in-banner.jpg"
      />
      <section className="relative min-h-screen bg-[#F4F6FB] pb-24 overflow-x-hidden">
        {/* Fondo decorativo tenue */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-luminosity">
          <img
            src="/servicios/cheq-in-banner.jpg"
            alt="fondo"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F4F6FB] opacity-100 h-[600px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-24 mb-16 space-y-24">
          {/* Encabezado Principal */}
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
              CHEQ-IN Integral
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#505050] font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Circuitos de salud diseñados para evaluar tu bienestar en una sola jornada, de manera ágil y coordinada.
            </motion.p>
          </div>

          {/* PROGRAMAS */}
          <div className="grid lg:grid-cols-3 gap-8">
            {programas.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-50 group hover:-translate-y-2"
              >
                <div className="w-full flex justify-center items-center bg-[#F4F6FB] py-12 border-b border-[#0B2CF5]/10">
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className="h-[240px] w-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-xl"
                  />
                </div>

                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl md:text-3xl font-black text-[#0B2CF5] mb-8 tracking-tight text-center lg:text-left">
                    {p.nombre}
                  </h3>

                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4 text-[#0B2CF5]">
                        <div className="p-2 bg-blue-50 rounded-xl">
                          <UserRound className="w-5 h-5" strokeWidth={2.5} />
                        </div>
                        <span className="font-black text-xs tracking-widest uppercase">Está dirigido a:</span>
                      </div>
                      <p className="text-[#505050] text-[15px] font-medium leading-[1.7]">
                        {p.dirigido}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4 text-[#0B2CF5]">
                        <div className="p-2 bg-blue-50 rounded-xl">
                          <FlaskConical className="w-5 h-5" strokeWidth={2.5} />
                        </div>
                        <span className="font-black text-xs tracking-widest uppercase">Incluye:</span>
                      </div>
                      <p className="text-[#505050] text-[15px] font-medium leading-[1.7]">
                        {p.incluye}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

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
                  Conocé tu estado de salud hoy
                </h3>
                <p className="text-white/80 font-medium text-lg">
                   Reservá tu turno para cualquiera de los programas CHEQ-IN y recibí tu evaluación médica completa.
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

          {/* MAPA */}
          <div className="bg-white rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10 md:p-20 border border-gray-50">
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
