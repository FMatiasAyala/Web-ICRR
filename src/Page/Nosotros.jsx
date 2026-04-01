import { motion } from "framer-motion"
import SeoTags from "../components/SeoTags"

export default function Nosotros() {
  return (
    <>
      <SeoTags
        title="Sobre Nosotros | ICRR"
        description="Conocé nuestro equipo médico, nuestra historia y compromiso con la salud diagnóstica en Resistencia."
        image="/logos/icrr_logo2.jpg"
      />
      <section className="flex flex-col bg-[#F4F6FB] pb-24">
        {/* === Encabezado con imagen del equipo === */}
        <div className="relative h-[65vh] w-full overflow-hidden">
          <img
            src="/img/nosotros.webp"
            alt="Equipo del Consultorio Radiológico Resistencia"
            className="absolute inset-0 h-full w-full object-cover object-center translate-y-[-10%]"
          />
          {/* Nuevo overlay degradado azulino sutil a la izquierda */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#061D38]/80 via-[#061D38]/40 to-transparent" />

          <div className="relative z-10 h-full container mx-auto px-6 lg:px-12 flex flex-col justify-center text-white">
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight max-w-4xl"
            >
              Nuestra <br />Historia y Valores
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-24 md:w-32 h-[8px] bg-white my-8 shadow-sm"
            />
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-2 text-xl md:text-2xl text-gray-100 font-medium max-w-xl leading-relaxed"
            >
              Más de 45 años comprometidos con la excelencia en diagnóstico del nordeste argentino.
            </motion.p>
          </div>
        </div>

        {/* === Bloque Historia (Tarjeta Flotante) === */}
        <div className="container mx-auto px-6 -mt-20 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-10 md:p-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-black text-[#0B2CF5] mb-10 tracking-tight text-center">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-lg text-[#505050] font-medium leading-[1.8] text-justify tracking-tight">
                <p>
                  Instituto Consultorio Radiológico Resistencia (ICRR) nació en 1977 con la misión de brindar servicios médicos de vanguardia. Desde nuestros inicios en Av. Italia al 100, nos posicionamos como referentes en radiología convencional, tomografía y mamografía.
                </p>
                <p>
                  A lo largo de las décadas hemos liderado la innovación tecnológica en el NEA: incorporamos ecografía en 1981, medicina nuclear con cámara gamma en 1987, densitometría en 1990 y nuestro primer acelerador lineal en 1991. En 1993 dimos el gran paso hacia la resonancia magnética, evolucionando constantemente hasta instalar resonadores de campo alto 1.5 T.
                </p>
                <p>
                  Recientemente, en 2022, reafirmamos nuestro compromiso instalando el primer <span className="text-[#0B2CF5] font-black">PET CT</span> de la provincia y la región, permitiendo a nuestros pacientes acceder a diagnósticos de máxima precisión sin necesidad de trasladarse a grandes centros urbanos como Buenos Aires o Córdoba.
                </p>
                <p className="pt-4 border-t border-gray-100 text-center font-black text-[#0B2CF5] text-xl font-black">
                  Cuarenta y cinco años trabajando al servicio de la salud del Chaco.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* === Misión y Visión === */}
        <div className="container mx-auto py-24 px-6">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#F4F6FB] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#0B2CF5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-[#0B2CF5] mb-4 tracking-tight">Nuestra Misión</h3>
              <p className="text-[16px] text-[#505050] font-medium leading-relaxed">
                Mejorar la calidad de vida de nuestra comunidad a través de servicios médicos de excelencia en diagnóstico y prácticas quirúrgicas ambulatorias, promoviendo la prevención y formación profesional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-[#F4F6FB] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#0B2CF5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-black text-[#0B2CF5] mb-4 tracking-tight">Nuestra Visión</h3>
              <p className="text-[16px] text-[#505050] font-medium leading-relaxed">
                Ser la institución de salud líder en el norte argentino, reconocida por la calidez humana de nuestros profesionales y la calidad tecnológica de nuestras prestaciones diagnósticas.
              </p>
            </motion.div>
          </div>
        </div>

        {/* === Valores === */}
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-[#0B2CF5] mb-8 tracking-tight">
              Nuestros Valores
            </h2>

            <p className="text-lg text-[#505050] font-medium max-w-2xl mx-auto mb-16 leading-relaxed">
              Los principios que guían cada una de nuestras acciones reflejan el compromiso del
              ICRR con la ética, la excelencia y el respeto humano.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "Liderazgo", "Responsabilidad", "Respeto", "Compañerismo",
                "Ética", "Honestidad", "Integridad", "Transparencia",
                "Independencia", "Compromiso", "Excelencia", "Innovación",
              ].map((valor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5 }}
                  viewport={{ once: true }}
                  className="bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl p-6 border border-gray-50 flex items-center justify-center text-center group hover:bg-[#0B2CF5] transition-all duration-300 pointer-events-auto cursor-default"
                >
                  <span className="text-[#0B2CF5] group-hover:text-white font-black text-sm uppercase tracking-wider transition-colors">
                    {valor}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
