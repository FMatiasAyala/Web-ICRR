import { motion } from "framer-motion"

export default function Slogan() {
  return (
    <section
      className="relative h-[65vh] flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo */}
      <img
        src="/banners/Slogan.png" // 🔹 cambiá por una institucional (rayos, resonador, etc.)
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Capa oscura */}
      <div className="absolute inset-0 bg-[#0A2342]/50" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-white tracking-wide drop-shadow-lg"
        >
          LLEGAMOS MÁS ALLÁ
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-4 text-lg md:text-2xl text-gray-100/90 max-w-3xl mx-auto"
        >
          Llegamos a todo eso que tus ojos no ven.
        </motion.p>

        <motion.a
          href="#sucursales"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="inline-block mt-8 px-8 py-3 bg-[#2E86AB] hover:bg-[#246d88] text-white font-semibold rounded-full shadow-lg transition-all"
        >
          Conocé nuestras sucursales
        </motion.a>
      </div>

      {/* Degradado inferior opcional */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}
