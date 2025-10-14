import React from "react"
import { useParams } from "react-router-dom"
import SucursalCentral from "./sucursales/SucursalCentral"
import SucursalFontana from "./sucursales/SucursalFontana"
import SucursalSaenzPena from "./sucursales/SucursalSaenzPena"

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
      <div className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-[#0A2342]">Sucursal no encontrada</h1>
        <p className="text-gray-600 mt-2">
          Volvé a{" "}
          <a href="/#sucursales" className="text-[#2E86AB] underline">
            nuestras sucursales
          </a>.
        </p>
      </div>
    )
  }

  return <Component />
}
