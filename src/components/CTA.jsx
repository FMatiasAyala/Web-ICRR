import React from "react"
import { Link } from "react-router-dom"
import { CalendarDays } from "lucide-react"

function CTA() {
  return (
    <section className="py-16 bg-[#F4F6FB] px-6">
      <div className="container mx-auto max-w-5xl bg-[#0B2CF5] text-white py-14 px-10 md:px-16 rounded-[2.5rem] shadow-[0_8px_30px_rgb(11,44,245,0.25)] flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="bg-white/20 p-5 rounded-full flex-shrink-0">
            <CalendarDays className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[28px] font-black tracking-tight mb-2">
              Cuidamos tu salud con excelencia
            </h3>
            <p className="text-white/90 text-[16px] font-medium max-w-sm">
              Consultá nuestros servicios médicos especializados y solicitá tu turno online en minutos.
            </p>
          </div>
        </div>

        <Link
          to="/turnos"
          className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-white text-[#0B2CF5] font-black px-8 py-3.5 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:bg-[#F4F6FB] transition-all duration-300 text-[15px] uppercase tracking-wide"
        >
          Reservar Turno
        </Link>
      </div>
    </section>
  )
}

export default CTA
