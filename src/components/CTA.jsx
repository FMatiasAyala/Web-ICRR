import React from "react"
import { Link } from "react-router-dom"
import { CalendarDays } from "lucide-react"

function CTA() {
  return (
    <section className="text-white py-16 text-center">
      <div className="bg-gradient-to-r from-[#0A2342] to-[#2E86AB] text-white py-16 mt-5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-4 rounded-full">
              <CalendarDays className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Cuidamos tu salud con excelencia médica
              </h3>
              <p className="text-white/80">
                Consultá nuestros servicios y pedí tu turno online en minutos.
              </p>
            </div>
          </div>

          <Link
            to="/turnos"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#0A2342] font-semibold px-8 py-3 shadow-md hover:bg-gray-100 transition"
          >
            Reservar Turno
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CTA
