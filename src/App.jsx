import { Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
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
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <Suspense fallback={<div className="p-8">Cargando…</div>}>
      <ScrollToTop/>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="inicio" element={<Home />} />
          <Route path="servicios" element={<ServiciosPage />} />
          <Route path="servicios/:slug" element={<ServiceDetail />} />
          <Route path="turnos" element={<Turnos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="novedades" element={<Novedades />} />
          {/* Vista de Pacientes dada de baja: se redirige al home. */}
          <Route path="pacientes" element={<Navigate to="/" replace />} />
          <Route path="sucursales" element={<SucursalesHome asPage />} />
          <Route path="sucursales/:slug" element={<SucursalDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
