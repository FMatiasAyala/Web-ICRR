import React from "react"
import { Link } from "react-router-dom"

function AccesosRapidos() {
  const accesos = [
    { title: "Solicitar Turno", img: "/icons/turno.png", to: "/turnos" },
    { title: "Portal de Derivantes", img: "/icons/resultados.png", to: "https://pacientes.icrrportal.com.ar/derivante1.php" },
    { title: "Novedades", img: "/icons/contacto.png", to: "/novedades" },
    { title: "Portal Pacientes", img: "/icons/portal.png", to: "https://pacientes.icrrportal.com.ar/" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 grid gap-6 md:grid-cols-4 cursor-pointer">
        {accesos.map((a, i) => (
          <Link key={a.to} to={a.to}>
            <div
              key={i}
              className="bg-gray-50 rounded-xl shadow-md p-6 text-center hover:shadow-lg hover:bg-[#2E86AB] hover:scale-105 transition-all duration-300"
            >
              <img src={a.img} alt={a.title} className="mx-auto mb-4 w-16 h-16" />
              <h4 className="text-lg font-semibold text-[#0A2342]">
                {a.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default AccesosRapidos
