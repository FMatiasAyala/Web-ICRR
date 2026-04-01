import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SeoTags from "../components/SeoTags"

export default function NotFound() {
  return (
    <>
      <SeoTags title="Página no encontrada | ICRR" />
      <section className="min-h-screen bg-[#F4F6FB] flex items-center justify-center px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[3.5rem] p-12 md:p-24 shadow-[0_20px_60px_rgba(0,0,0,0.05)] text-center max-w-2xl w-full border border-gray-50 flex flex-col items-center"
        >
          <div className="relative mb-12">
            <span className="text-9xl md:text-[180px] font-black text-[#F4F6FB] leading-none select-none">404</span>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-4xl md:text-6xl font-black text-[#0B2CF5] tracking-tighter">Ups!</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-[#0B2CF5] mb-6 tracking-tight">Página no encontrada</h1>
          <p className="text-[#505050] font-medium text-lg md:text-xl leading-relaxed mb-12 max-w-md">
            Parece que la página que buscás ya no existe o se ha movido a una nueva dirección.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center justify-center rounded-full bg-[#0B2CF5] text-white font-black px-12 py-5 text-lg shadow-xl hover:bg-blue-700 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-tight"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </section>
    </>
  )
}