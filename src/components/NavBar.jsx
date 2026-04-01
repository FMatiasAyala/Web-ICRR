import React, { useState } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import TopBar from "./TopBar"

const base = "inline-flex items-center font-black transition px-2 py-1.5 rounded-md text-[15px] tracking-tight"
const active = "text-[#0B2CF5] border-b-2 border-[#0B2CF5]"
const inactive = "text-[#0B2CF5] hover:opacity-75 hover:border-b-2 hover:border-[#0B2CF5]"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleInicioClick = () => {
    // Si ya estamos en /inicio, forzar scroll arriba
    if (location.pathname === "/inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const links = [
    { to: "/inicio", label: "Inicio" },
    { to: "/servicios", label: "Servicios" },
    { to: "/turnos", label: "Turnos" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/novedades", label: "Novedades" },
    { to: "/pacientes", label: "Pacientes" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white">
      <TopBar />
      <div className="bg-white w-full">
        <div className="container mx-auto flex h-24 items-center justify-between px-6 lg:px-12 relative z-50">
          <Link to="/inicio" className="text-white font-bold tracking-wide flex-shrink-0">
            <img src="/logos/logo_icrr.webp" className="h-20 w-auto object-contain" alt="Logo ICRR" />
          </Link>

          {/* Desktop */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end">
            {links.filter(l => l.label !== "Pacientes").map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={label === "Inicio" ? handleInicioClick : undefined}
                className={({ isActive }) =>
                  [base, isActive ? active : inactive].join(" ")
                }
                end={to === "/"}
              >
                {label}
              </NavLink>
            ))}

            {/* Portal Dropdown */}
            <div className="relative group flex flex-col items-center">
              <button className="bg-[#0B2CF5] text-white font-black px-7 py-2.5 rounded-full text-[15px] hover:bg-[#0820bb] transition-all shadow-[0_4px_14px_rgb(11,44,245,0.3)] hover:shadow-[0_6px_20px_rgb(11,44,245,0.4)] tracking-tight">
                Portal
              </button>
              <div className="absolute top-[100%] pt-3 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top">
                <div className="flex flex-col bg-white rounded-2xl shadow-[0_10px_40px_rgb(0,0,0,0.08)] border border-gray-100 p-2 min-w-[150px]">
                  <a
                    href="https://pacientes.icrrportal.com.ar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#505050] text-center font-bold text-[14px] px-4 py-2.5 rounded-xl hover:bg-[#F4F6FB] hover:text-[#0B2CF5] transition-colors"
                  >
                    Pacientes
                  </a>
                  <a
                    href="https://pacientes.icrrportal.com.ar/derivante1.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#505050] text-center font-bold text-[14px] px-4 py-2.5 rounded-xl hover:bg-[#F4F6FB] hover:text-[#0B2CF5] transition-colors mt-1"
                  >
                    Derivantes
                  </a>
                </div>
              </div>
            </div>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#0B2CF5] text-2xl"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-40">
            <nav className="container mx-auto flex flex-col px-6 py-4 gap-3">
              {links.filter(l => l.label !== "Pacientes").map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => {
                    if (label === "Inicio" && location.pathname === "/inicio") {
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    setOpen(false)
                  }}
                  className={({ isActive }) =>
                    [
                      "px-4 py-3 rounded-xl font-bold text-[16px]",
                      isActive ? "bg-[#F4F6FB] text-[#0B2CF5]" : "text-[#505050] hover:bg-gray-50",
                    ].join(" ")
                  }
                  end={to === "/"}
                >
                  {label}
                </NavLink>
              ))}

              <div className="w-full h-[1px] bg-gray-100 my-2"></div>

              <div className="px-4 py-2 flex flex-col gap-3">
                <span className="font-black text-[#0B2CF5] uppercase tracking-wider text-sm">Portal</span>
                <a href="https://pacientes.icrrportal.com.ar/" target="_blank" rel="noopener noreferrer" className="text-[#505050] font-bold text-[16px] ml-4 hover:text-[#0B2CF5]">
                  Pacientes
                </a>
                <a href="https://pacientes.icrrportal.com.ar/derivante1.php" target="_blank" rel="noopener noreferrer" className="text-[#505050] font-bold text-[16px] ml-4 hover:text-[#0B2CF5]">
                  Derivantes
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
