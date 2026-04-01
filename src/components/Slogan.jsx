import { motion } from "framer-motion"

export default function Slogan() {
  return (
    <section
      className="relative h-[80vh] min-h-[650px] flex items-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src="/img/servicios/equipoPet.webp"
        alt="Equipo Médico"
        className="absolute inset-0 h-full w-full object-cover object-[70%_50%]"
      />
      {/* Capa oscura lateral para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061D38]/80 via-[#061D38]/40 to-transparent" />

      {/* Contenido */}
      <div className="relative z-10 w-full container mx-auto px-6 lg:px-12 flex flex-col items-start -mt-20">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-[85px] lg:text-[100px] font-black text-white leading-[1.05] tracking-tight drop-shadow-lg mb-8"
        >
          Llegamos<br />más allá
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-24 md:w-32 h-[6px] md:h-[8px] bg-white mb-10 shadow-sm"
        />

        <motion.a
          href="#sucursales"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="group flex flex-col items-start cursor-pointer no-underline"
        >
          <span className="text-white tracking-[0.25em] font-medium text-lg md:text-xl mb-3 drop-shadow-md">
            CONOCENOS
          </span>
          <svg className="w-8 h-8 md:w-10 md:h-10 text-white transform group-hover:translate-x-2 transition-transform duration-300 stroke-[1.5px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </div>

      {/* Degradado inferior para ensamble suave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#F4F6FB] via-[#F4F6FB]/80 to-transparent z-0 pointer-events-none" />
    </section>
  )
}
