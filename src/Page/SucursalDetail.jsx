import React from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import SucursalCentral from "./sucursales/SucursalCentral"
import SucursalFontana from "./sucursales/SucursalFontana"
import SucursalSaenzPena from "./sucursales/SucursalSaenzPena"
import SeoTags from "../components/SeoTags"

const COMPONENTS = {
  central: SucursalCentral,
  fontana: SucursalFontana,
  saenzPena: SucursalSaenzPena
}

export default function SucursalDetail() {
  const { slug } = useParams()
  const Component = COMPONENTS[slug]

  if (!Component) {
    return (
      <>
        <SeoTags title="Sucursal no encontrada | ICRR" />
        <section className="min-h-screen bg-[#F4F6FB] flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-12 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.05)] text-center max-w-2xl w-full border border-gray-50"
          >
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mx-auto mb-8 font-black text-3xl">
              !
            </div>
            <h1 className="text-4xl font-black text-[#0B2CF5] mb-6 tracking-tight">Sucursal no encontrada</h1>
            <p className="text-[#505050] font-medium text-lg leading-relaxed mb-10">
              Lo sentimos, la sede que estás buscando no existe o ha sido movida temporalmente.
            </p>
            <Link 
              to="/#sucursales" 
              className="inline-flex items-center justify-center rounded-full bg-[#0B2CF5] text-white font-black px-12 py-5 text-lg shadow-xl hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-tight"
            >
              Volver a Sucursales
            </Link>
          </motion.div>
        </section>
      </>
    )
  }

  return <Component />
}
