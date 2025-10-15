import React, { lazy, Suspense } from "react"
import { useParams } from "react-router-dom"

const COMPONENTS = {
  "diagnostico-por-imagen": lazy(() => import("./Servicios/Diagnostico")),
  "terapia-radiante": lazy(() => import("./Servicios/Terapia")),
  "sector-mujer": lazy(() => import("./Servicios/PisoDeLaMujer")),
  "practicas-medicas": lazy(() => import("./Servicios/Practicas")),
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const Component = COMPONENTS[slug]

  if (!Component)
    return (
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-[#0A2342]">Servicio no encontrado</h1>
      </div>
    )

  return (
    <Suspense fallback={<div className="p-10 text-center">Cargando...</div>}>
      <Component />
    </Suspense>
  )
}
