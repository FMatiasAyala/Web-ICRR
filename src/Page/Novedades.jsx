import React from "react"
import { Instagram, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function NovedadesPlaceholder() {
  return (
    <section className="bg-[#F4F6FB] py-24 min-h-screen">
      <div className="container mx-auto px-6 text-center">
        {/* Encabezado */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-[2rem] flex items-center justify-center text-white mb-8 shadow-lg"
          >
            <Instagram className="w-10 h-10" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-[#0B2CF5] mb-8 tracking-tight"
          >
            Novedades
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#505050] font-medium text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Seguinos en nuestras redes para estar al tanto de las últimas noticias,
            tecnología médica y consejos de salud del <span className="text-[#0B2CF5] font-black">ICRR</span>.
          </motion.p>
        </div>

        {/* Grid de Placeholders Modernos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 group hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 bg-[#F4F6FB] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center opacity-10 group-hover:opacity-20 transition-opacity">
                  <Instagram className="w-20 h-20 text-[#0B2CF5]" />
                </div>
              </div>
              <div className="p-8 text-left">
                <div className="h-6 bg-gray-100 rounded-full w-3/4 mb-4" />
                <div className="h-4 bg-gray-100 rounded-full w-1/2" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20"
        >
          <a
            href="https://www.instagram.com/icrr_resistencia/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-white text-[#0B2CF5] px-12 py-5 font-black text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all group"
          >
            <Instagram className="w-6 h-6 text-[#ee2a7b]" />
            CONECTAR EN INSTAGRAM
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
