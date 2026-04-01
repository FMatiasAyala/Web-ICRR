import React from "react"
import { Link } from "react-router-dom"

function AccesosRapidos() {
  const accesos = [
    {
      title: "Solicitá\ntu turno",
      desc: "Nuestro equipo está listo para ayudarte en lo que necesites.",
      img: "/icons/turno.png",
      to: "/turnos",
      col: "col-span-1"
    },
    {
      title: "Portal\npacientes",
      desc: "Tus estudios en un sólo lugar.",
      img: "/icons/portal.png",
      to: "https://pacientes.icrrportal.com.ar/",
      col: "col-span-1"
    },
    {
      title: "Portal\nderivantes",
      desc: "Acceso directo para médicos derivantes.",
      img: "/icons/resultados.png",
      to: "https://pacientes.icrrportal.com.ar/derivante1.php",
      col: "col-span-1"
    },
    {
      title: "Novedades",
      desc: "Actividades y noticias desde nuestro perfil de Instagram.",
      img: "/icons/contacto.png",
      to: "/novedades",
      col: "col-span-1"
    },
  ]

  return (
    <section className="relative z-20 pb-12">
      <div className="container mx-auto px-6 -mt-32 md:-mt-40 grid gap-6 md:grid-cols-4 cursor-pointer">
        {accesos.map((a, i) => (
          <Link key={a.to} to={a.to} className="group">
            <div
              className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 h-full flex flex-col justify-between hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 border border-white/40 border-b-2 group-hover:bg-[#f6f9fc]"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="text-[22px] md:text-2xl font-black text-[#0B2CF5] leading-tight whitespace-pre-line tracking-tight">
                  {a.title}
                </h4>
                <div className="w-12 h-12 rounded-full border border-[#0B2CF5]/20 flex items-center justify-center bg-white shadow-sm flex-shrink-0">
                  <img src={a.img} alt="" className="w-6 h-6 object-contain" />
                </div>
              </div>
              <p className="text-[#0B2CF5] text-xs leading-relaxed opacity-80 mt-auto pr-4 font-medium">
                {a.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default AccesosRapidos
