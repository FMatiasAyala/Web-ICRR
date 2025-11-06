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
    <section className="container mx-auto px-6 py-16">
      {/* Título */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#0A2342] mb-4"
        >
          Obras Sociales y Prepagas
        </motion.h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trabajamos con una amplia red de obras sociales y servicios de salud.
          Consultá si tu cobertura está disponible actualmente.
        </p>
      </div>

      {/* Buscador */}
      <div className="max-w-md mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar obra social..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-[#2E86AB] focus:outline-none"
          />
        </div>
      </div>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center"
      >
        {filtradas.map((o, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            viewport={{once: true}}
            className="group relative w-[150px] h-[120px] flex flex-col items-center justify-center bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 text-center"
          >
            {/* Logo (solo si existe) */}
            {o.logo ? (
              <>
                <img
                  src={o.logo}
                  alt={o.sRazonSocial}
                  className="max-h-[50px] max-w-[100px] object-contain mb-2"
                  loading="lazy"
                />
                <span className="text-xs font-medium text-gray-700 leading-tight">
                  {o.sRazonSocial}
                </span>
              </>
            ) : (
              <span className="text-sm font-medium text-gray-700 leading-tight">
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
