import React from "react"
import { Link } from "react-router-dom"

function CTA() {
  return (
    <section className="bg-[#2E86AB] text-white py-16 text-center">
      <h3 className="text-3xl font-bold mb-4">
        Cuidamos tu salud con excelencia médica
      </h3>
      <p className="mb-6 text-lg">
        Consultá nuestros servicios y pedí tu turno online en minutos.
      </p>
      <button className="bg-white text-[#0A2342] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
        Pedir Turno
      </button>
    </section>
  )
}

export default CTA
