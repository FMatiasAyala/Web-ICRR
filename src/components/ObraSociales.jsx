import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export default function ObraSociales() {
  const [busqueda, setBusqueda] = useState("")
  const [obras, setObras] = useState([])

  useEffect(() => {
    fetch("/data/instituciones.json")
      .then((res) => res.json())
      .then((data) => setObras(data))
      .catch((err) => console.error("Error cargando instituciones:", err))
  }, [])

  const obrasTop = obras.slice(0, 10)

  const filtradas = busqueda
    ? obras.filter((o) =>
      o.sRazonSocial.toLowerCase().includes(busqueda.toLowerCase()) ||
      o.sSigla.toLowerCase().includes(busqueda.toLowerCase())
    )
    : obrasTop

  return (
    <section className="container mx-auto px-6 py-24">
      {/* Título */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-black text-[#0B2CF5] mb-6 tracking-tight"
        >
          Obras Sociales y Prepagas
        </motion.h2>
        <p className="text-[#505050] font-medium text-lg max-w-2xl mx-auto leading-relaxed">
          Trabajamos con una amplia red de coberturas para brindarte la mejor atención.
          Consultá si tu obra social o prepaga está disponible.
        </p>
      </div>

      {/* Buscador */}
      <div className="max-w-xl mx-auto mb-20">
        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#0B2CF5]/40 group-focus-within:text-[#0B2CF5] transition-colors" />
          <input
            type="text"
            placeholder="Buscar por nombre o sigla..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-14 pr-6 py-5 bg-white border border-gray-100 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:ring-4 focus:ring-[#0B2CF5]/10 focus:border-[#0B2CF5]/20 focus:outline-none transition-all text-lg font-medium placeholder:text-gray-300"
          />
        </div>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center"
      >
        {filtradas.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.02 }}
            viewport={{ once: true }}
            className="group relative w-full aspect-square max-w-[180px] flex flex-col items-center justify-center bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 p-6 text-center border border-gray-50"
          >
            {/* Logo (solo si existe) */}
            {o.logo ? (
              <>
                <img
                  src={o.logo}
                  alt={o.sRazonSocial}
                  className="max-h-[60px] max-w-[110px] object-contain mb-3 group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="text-[11px] font-black text-[#0B2CF5] uppercase tracking-wider leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                  {o.sRazonSocial}
                </span>
              </>
            ) : (
              <span className="text-sm font-black text-[#0B2CF5] leading-tight uppercase tracking-wide">
                {o.sRazonSocial}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>


      {/* Nota */}
      <p className="text-center text-gray-500 text-sm mt-12">
        *Los convenios pueden variar según periodo o especialidad. Recomendamos
        confirmar al momento de solicitar turno.
      </p>
    </section>
  )
}
