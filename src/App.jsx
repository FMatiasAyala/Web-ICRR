import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./Page/Home"
import ServiciosPage from "./Page/ServiciosPage"
import Turnos from "./Page/Turnos"
import Nosotros from "./Page/Nosotros"
import ServiceDetail from "./Page/ServiceDetail"
import NotFound from "./Page/NotFound"
import SucursalDetail from "./Page/SucursalDetail"
import SucursalesHome from "./components/SucursalesHome"
import Novedades from "./Page/Novedades"
import Pacientes from "./Page/Pacientes"

export default function App() {
  return (
    <Suspense fallback={<div className="p-8">Cargando…</div>}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="servicios/:slug" element={<ServiceDetail />} />
          <Route path="turnos" element={<Turnos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="novedades" element={<Novedades />} />
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="sucursales" element={<SucursalesHome />} />
          <Route path="sucursales/:slug" element={<SucursalDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
