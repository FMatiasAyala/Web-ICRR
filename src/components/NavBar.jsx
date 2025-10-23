import React, { useState } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"

const base = "inline-flex items-center font-medium transition px-2 py-1.5 rounded-md"
const active = "text-[#2E86AB] bg-white/10"
const inactive = "text-white hover:text-[#2E86AB]"

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
    <header className="sticky top-0 z-50 w-full bg-[#0A2342] shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-white font-bold tracking-wide">
          <img src="/logos/icrr_logo3.jpg" className="w-10 h-10 rounded-full" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-4">
          {links.map(({ to, label }) => (
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
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A2342] border-t border-white/10">
          <nav className="container mx-auto flex flex-col px-4 py-3 gap-2">
            {links.map(({ to, label }) => (
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
                    "px-3 py-2 rounded-md",
                    isActive ? "bg-white/10 text-[#2E86AB]" : "text-white",
                  ].join(" ")
                }
                end={to === "/"}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
