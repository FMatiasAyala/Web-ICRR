import { motion } from "framer-motion"
import { UserRound, FlaskConical, CalendarDays, MapPin, Check, HeartPulse, Bone } from "lucide-react"
import { Link } from "react-router-dom"
import SeoTags from "../../components/SeoTags"
import { serviceSchema, breadcrumbSchema } from "../../config/structuredData"



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
        title="Programas CHEQ-IN: Chequeo de Salud en una Jornada | ICRR"
        description="Circuitos de salud Cheq-In diseñados para evaluar tu bienestar en una sola jornada, de manera ágil y coordinada. General, Cardio y Óseo, en Resistencia, Chaco."
        image="/servicios/cheq-in-banner.jpg"
        path="/servicios/cheq-in"
        keywords="cheq-in, chequeo de salud Resistencia, control médico preventivo, chequeo cardiovascular, salud ósea, Chaco"
        jsonLd={[
          serviceSchema({
            name: "Programas CHEQ-IN",
            description: "Chequeos de salud integrales en una sola jornada: General, Cardio y Óseo.",
            path: "/servicios/cheq-in",
            image: "/servicios/cheq-in-banner.jpg",
          }),
          breadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Servicios", path: "/servicios" },
            { name: "Cheq-In", path: "/servicios/cheq-in" },
          ]),
        ]}
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
          <div className="grid lg:grid-cols-3 gap-8 md:gap-6 mt-16 lg:mt-20">

            {/* Tarjeta General */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all relative flex flex-col items-center text-center border border-gray-100 h-full mt-10"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#001cf0] rounded-full flex items-center justify-center border-4 border-[#F4F6FB] shadow-lg">
                <Check className="text-white w-10 h-10" strokeWidth={4} />
              </div>
              <h3 className="text-4xl font-black text-[#001cf0] mt-6 mb-4 tracking-tight">General</h3>
              <div className="border-[2px] border-[#001cf0] rounded-full px-4 py-1 flex items-center justify-center mb-4">
                <span className="text-[#001cf0] font-black tracking-tight text-lg">cheq</span>
                <svg className="w-[16px] h-[16px] text-[#001cf0] mx-0.5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-[#001cf0] font-black tracking-tight text-lg">in<sup className="text-[9px] ml-0.5">®</sup></span>
              </div>
              <p className="text-[#505050] text-sm mb-6 leading-snug">
                <strong className="font-black text-[#606060]">Tu salud, en una evaluación</strong> <br /><span className="italic text-[#707070]">integral y en un solo lugar</span>
              </p>

              <div className="w-full flex-grow flex flex-col items-center">
                <div className="w-full mb-6 flex flex-col items-center">
                  <div className="bg-[#001cf0] text-white font-bold rounded-full px-6 py-1.5 text-xs mb-2">Evaluación clínica</div>
                  <p className="text-[#606060] text-xs font-medium leading-relaxed max-w-[280px]">Comienza con una consulta clínica inicial, para orientar los estudios según tu necesidad.</p>
                </div>
                <div className="w-full mb-6 flex flex-col items-center">
                  <div className="bg-[#001cf0] text-white font-bold rounded-full px-6 py-1.5 text-xs mb-2">¿Para quién está pensado?</div>
                  <ul className="text-[#606060] text-xs font-medium leading-relaxed max-w-[300px] text-left space-y-1">
                    <li className="flex items-start"><span className="text-[#001cf0] mr-2">•</span><span>Personas que desean conocer su estado de salud actual.</span></li>
                    <li className="flex items-start"><span className="text-[#001cf0] mr-2">•</span><span>Personas que buscan realizar un control preventivo completo.</span></li>
                  </ul>
                </div>
                <div className="w-full mb-8 flex flex-col items-center">
                  <div className="bg-[#001cf0] text-white font-bold rounded-full px-6 py-1.5 text-xs mb-2">Estudios que puede incluir</div>
                  <ul className="text-[#606060] text-xs font-medium leading-relaxed text-left space-y-1">
                    <li className="flex items-start"><span className="text-[#001cf0] mr-2">•</span><span>Laboratorio completo</span></li>
                    <li className="flex items-start"><span className="text-[#001cf0] mr-2">•</span><span>Ecocardiograma Doppler</span></li>
                    <li className="flex items-start"><span className="text-[#001cf0] mr-2">•</span><span>Eco Doppler vasos cuello</span></li>
                    <li className="flex items-start"><span className="text-[#001cf0] mr-2">•</span><span>Ergometría computarizada</span></li>
                    <li className="flex items-start"><span className="text-[#001cf0] mr-2">•</span><span>TAC tórax sin contraste</span></li>
                  </ul>
                </div>
              </div>
              <Link to="/servicios/cheq-in-general" className="w-full rounded-full bg-[#001cf0] text-white font-black px-6 py-3 text-sm shadow hover:bg-blue-800 transition-all mt-auto uppercase">VER DETALLE</Link>
            </motion.div>

            {/* Tarjeta Cardio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all relative flex flex-col items-center text-center border border-gray-100 h-full mt-10"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#D93F4A] rounded-full flex items-center justify-center border-4 border-[#F4F6FB] shadow-lg">
                <HeartPulse className="text-white w-10 h-10" strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl font-black text-[#D93F4A] mt-6 mb-4 tracking-tight">Cardio</h3>
              <div className="border-[2px] border-[#D93F4A] rounded-full px-4 py-1 flex items-center justify-center mb-4">
                <span className="text-[#001cf0] font-black tracking-tight text-lg">cheq</span>
                <svg className="w-[16px] h-[16px] text-[#001cf0] mx-0.5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-[#001cf0] font-black tracking-tight text-lg">in<sup className="text-[9px] ml-0.5">®</sup></span>
              </div>
              <p className="text-[#505050] text-sm mb-6 leading-snug">
                <strong className="font-black text-[#606060]">Cuidar tu corazón</strong> <br /><span className="italic text-[#707070]">también es prevenir</span>
              </p>

              <div className="w-full flex-grow flex flex-col items-center">
                <div className="w-full mb-6 flex flex-col items-center">
                  <div className="bg-[#D93F4A] text-white font-bold rounded-full px-6 py-1.5 text-xs mb-2">Evaluación integral</div>
                  <p className="text-[#606060] text-xs font-medium leading-relaxed max-w-[280px]">Una evaluación completa del corazón y el sistema cardiovascular guiada por indicación médica.</p>
                </div>
                <div className="w-full mb-6 flex flex-col items-center">
                  <div className="bg-[#D93F4A] text-white font-bold rounded-full px-6 py-1.5 text-xs mb-2">¿Para quién está pensado?</div>
                  <ul className="text-[#606060] text-xs font-medium leading-relaxed text-center space-y-1">
                    <li>Querés conocer tu salud cardiovascular</li>
                    <li>Tenés factores de riesgo</li>
                    <li>Buscás prevenir complicaciones</li>
                  </ul>
                </div>
                <div className="w-full mb-8 flex flex-col items-center">
                  <div className="bg-[#D93F4A] text-white font-bold rounded-full px-6 py-1.5 text-xs mb-2">Estudios que puede incluir</div>
                  <ul className="text-[#606060] text-xs font-medium leading-relaxed text-center space-y-1">
                    <li>Laboratorio completo</li>
                    <li>Electrocardiograma / Ecocardiograma</li>
                    <li>Eco Doppler de vasos de cuello</li>
                    <li>Ergometría computarizada</li>
                    <li>Holter 24 hs / MAPA</li>
                  </ul>
                </div>
              </div>
              <Link to="/servicios/cheq-in-cardio" className="w-full rounded-full bg-[#D93F4A] text-white font-black px-6 py-3 text-sm shadow hover:bg-[#c03440] transition-all mt-auto uppercase">VER DETALLE</Link>
            </motion.div>

            {/* Tarjeta Óseo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all relative flex flex-col items-center text-center border border-gray-100 h-full mt-10"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#E8BC3D] rounded-full flex items-center justify-center border-4 border-[#F4F6FB] shadow-lg">
                <Bone className="text-white w-10 h-10" strokeWidth={2.5} />
              </div>
              <h3 className="text-4xl font-black text-[#E8BC3D] mt-6 mb-4 tracking-tight">Óseo</h3>
              <div className="border-[2px] border-[#E8BC3D] rounded-full px-4 py-1 flex items-center justify-center mb-4">
                <span className="text-[#001cf0] font-black tracking-tight text-lg">cheq</span>
                <svg className="w-[16px] h-[16px] text-[#001cf0] mx-0.5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-[#001cf0] font-black tracking-tight text-lg">in<sup className="text-[9px] ml-0.5">®</sup></span>
              </div>
              <p className="text-[#505050] text-sm mb-6 leading-snug">
                <strong className="font-black text-[#606060]">Cuidar tus huesos hoy</strong> <br /><span className="italic text-[#707070]">es prevenir mañana</span>
              </p>

              <div className="w-full flex-grow flex flex-col items-center">
                <div className="w-full mb-6 flex flex-col items-center">
                  <div className="bg-[#E8BC3D] text-[#505050] font-black rounded-full px-6 py-1.5 text-xs mb-2">Evaluación integral</div>
                  <p className="text-[#606060] text-xs font-medium leading-relaxed max-w-[280px]">La salud ósea es clave para mantener movilidad, fuerza y calidad de vida a lo largo del tiempo.</p>
                </div>
                <div className="w-full mb-6 flex flex-col items-center">
                  <div className="bg-[#E8BC3D] text-[#505050] font-black rounded-full px-6 py-1.5 text-xs mb-2">¿Para quién está pensado?</div>
                  <ul className="text-[#606060] text-xs font-medium leading-relaxed text-center space-y-1">
                    <li>Mayores de 50 años / Menopausia</li>
                    <li>Sedentarismo o mala nutrición</li>
                    <li>Osteoporosis o trat. prolongados</li>
                  </ul>
                </div>
                <div className="w-full mb-8 flex flex-col items-center">
                  <div className="bg-[#E8BC3D] text-[#505050] font-black rounded-full px-6 py-1.5 text-xs mb-2">Estudios que puede incluir</div>
                  <ul className="text-[#606060] text-xs font-medium leading-relaxed text-center space-y-1">
                    <li>Densitometría ósea (columna y caderas)</li>
                    <li>Laboratorio completo</li>
                  </ul>
                </div>
              </div>
              <Link to="/servicios/cheq-in-oseo" className="w-full rounded-full bg-[#E8BC3D] text-white font-black px-6 py-3 text-sm shadow hover:bg-[#d4a82b] transition-all mt-auto uppercase">VER DETALLE</Link>
            </motion.div>

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
