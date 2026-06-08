import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Bone } from "lucide-react"
import SeoTags from "../../components/SeoTags"

export default function CheqInOseo() {


  return (
    <>
      <SeoTags
        title="CHEQ-IN Óseo: Chequeo de Salud Ósea | ICRR"
        description="Conocé el estado de tu salud ósea en una sola jornada con el programa Cheq-In Óseo, en Resistencia, Chaco."
        image="/servicios/cheq-in-oseo.jpg"
        path="/servicios/cheq-in-oseo"
      />
      <section className="relative min-h-screen bg-[#Eef3f9] overflow-hidden flex flex-col items-center justify-center py-24">

        {/* Floating Background Circles */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[10%] left-[15%] w-16 h-16 bg-[#E8BC3D] rounded-full flex items-center justify-center transform rotate-12 shadow-md"
          >
            <Bone className="text-white w-8 h-8" strokeWidth={2.5} />
          </motion.div>
          {/* Top Right (Blurred) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[5%] right-[10%] w-24 h-24 bg-[#E8BC3D] rounded-full flex items-center justify-center transform -rotate-12 blur-[2px]"
          >
            <Bone className="text-white w-12 h-12" strokeWidth={2.5} />
          </motion.div>
          {/* Mid Left (Blurred) */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-[40%] left-[5%] w-32 h-32 bg-[#E8BC3D] rounded-full flex items-center justify-center transform rotate-45 blur-md opacity-90"
          >
            <Bone className="text-white w-16 h-16" strokeWidth={2} />
          </motion.div>
          {/* Mid Right */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-[45%] right-[8%] w-20 h-20 bg-[#E8BC3D] rounded-full flex items-center justify-center transform -rotate-6 shadow-xl"
          >
            <Bone className="text-white w-10 h-10" strokeWidth={2.5} />
          </motion.div>
          {/* Bottom Left */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-[10%] left-[10%] w-20 h-20 bg-[#E8BC3D] rounded-full flex items-center justify-center transform rotate-12 shadow-xl"
          >
            <Bone className="text-white w-10 h-10" strokeWidth={2.5} />
          </motion.div>
          {/* Bottom Right (Blurred) */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            className="absolute bottom-[15%] right-[5%] w-36 h-36 bg-[#E8BC3D] rounded-full flex items-center justify-center transform -rotate-12 blur-md opacity-80"
          >
            <Bone className="text-white w-16 h-16" strokeWidth={2} />
          </motion.div>
        </div>

        {/* Main Card */}
        <div className="relative z-10 w-full max-w-lg mx-auto mt-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-2xl relative flex flex-col items-center text-center border border-gray-100"
          >
            {/* Top Center Icon */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-[#E8BC3D] rounded-full flex items-center justify-center border-4 border-[#Eef3f9] shadow-lg">
              <Bone className="text-white w-10 h-10" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <h1 className="text-5xl font-black text-[#E8BC3D] mt-8 mb-4 tracking-tight">
              Óseo
            </h1>

            {/* Logo Pill */}
            <div className="border-[2px] border-[#E8BC3D] rounded-full px-6 py-1.5 flex items-center justify-center mb-6">
              <span className="text-[#001cf0] font-black tracking-tight text-xl">cheq</span>
              <svg className="w-[18px] h-[18px] text-[#001cf0] mx-0.5 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span className="text-[#001cf0] font-black tracking-tight text-xl">in<sup className="text-[10px] ml-0.5">®</sup></span>
            </div>

            {/* Subtitle */}
            <p className="text-[#505050] text-lg mb-10 leading-snug">
              <strong className="font-black text-[#606060]">Cuidar tus huesos hoy</strong> <br /><span className="italic text-[#707070]">es prevenir mañana</span>
            </p>

            {/* Section 1 */}
            <div className="w-full mb-8 flex flex-col items-center">
              <div className="bg-[#E8BC3D] text-[#505050] font-black rounded-full px-8 py-2 text-sm mb-3">
                Evaluación integral
              </div>
              <p className="text-[#606060] text-sm font-medium leading-relaxed max-w-[280px]">
                La salud ósea es clave para mantener movilidad, fuerza y calidad de vida a lo largo del tiempo.
              </p>
            </div>

            {/* Section 2 */}
            <div className="w-full mb-8 flex flex-col items-center">
              <div className="bg-[#E8BC3D] text-[#505050] font-black rounded-full px-8 py-2 text-sm mb-3">
                ¿Para quién está pensado?
              </div>
              <ul className="text-[#606060] text-sm font-medium leading-relaxed max-w-[300px] text-center space-y-1">
                <li className="flex items-start justify-center">
                  <span className="text-[#E8BC3D] mr-1.5 text-xl leading-none">•</span>
                  <span>Personas mayores de 50 años</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-[#E8BC3D] mr-1.5 text-xl leading-none opacity-0">•</span>
                  <span>Mujeres en período de menopausia</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-[#E8BC3D] mr-1.5 text-xl leading-none">•</span>
                  <span>Personas sedentarias o con mala nutrición</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-[#E8BC3D] mr-1.5 text-xl leading-none">•</span>
                  <span>Pacientes con osteoporosis o enfermedades crónicas</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-[#E8BC3D] mr-1.5 text-xl leading-none">•</span>
                  <span>Tratamientos prolongados</span>
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="w-full mb-10 flex flex-col items-center">
              <div className="bg-[#E8BC3D] text-[#505050] font-black rounded-full px-8 py-2 text-sm mb-3">
                Estudios que puede incluir
              </div>
              <p className="text-[#707070] text-xs italic mb-2">Según indicación médica:</p>
              <ul className="text-[#606060] text-sm font-medium leading-relaxed text-center space-y-1">
                <li className="flex items-start justify-center">
                  <span className="text-[#E8BC3D] mr-1.5 text-xl leading-none">•</span>
                  <span>Densitometría ósea de columna y caderas</span>
                </li>
                <li className="flex items-start justify-center">
                  <span className="text-[#E8BC3D] mr-1.5 text-xl leading-none">•</span>
                  <span>Laboratorio de análisis clínicos completo</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              to="/turnos"
              className="w-full md:w-auto inline-flex items-center justify-center rounded-full bg-[#E8BC3D] text-white font-black px-12 py-4 text-lg shadow-[0_10px_20px_rgba(232,188,61,0.3)] hover:bg-[#d4a82b] transition-all hover:-translate-y-1 active:scale-95"
            >
              QUIERO UN TURNO
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
