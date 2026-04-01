import React from "react"
import { Phone, MapPin, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-white text-[#505050] pt-20 pb-8 border-t border-gray-100">
      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-gray-100 pb-16">
        {/* Columna 1 */}
        <div>
          <h4 className="font-black text-[#0B2CF5] text-[18px] mb-5 tracking-tight">Casa Central</h4>
          <div className="flex items-start gap-3 text-[#505050] font-medium text-[14px] mb-3">
            <MapPin size={18} className="text-[#0B2CF5] mt-0.5 flex-shrink-0" />
            <p>Av. 9 de Julio 635 - Resistencia, Chaco</p>
          </div>
          <div className="flex items-start gap-3 text-[#505050] font-medium text-[14px] mb-3">
            <Phone size={18} className="text-[#0B2CF5] mt-0.5 flex-shrink-0" />
            <p>(362) 488-0444</p>
          </div>

          <h4 className="font-black text-[#0B2CF5] text-[18px] mt-8 mb-5 tracking-tight">Otras Sedes</h4>
          <p className="text-[14px] text-[#8B8B8B] font-medium leading-relaxed">
            Av. Alvear 3876 - Fontana, Chaco <br />
            Av. J. D. Perón 1220 - Presidencia Roque Sáenz Peña
          </p>
        </div>

        {/* Columna 2 */}
        <div >
          <h4 className="font-black text-[#0B2CF5] text-[18px] mb-5 tracking-tight">Servicios</h4>
          <ul className="space-y-3 text-[14px] text-[#8B8B8B] font-medium">
            <li>
              <Link to="/servicios/diagnostico-por-imagen" className="hover:text-[#0B2CF5] transition-colors flex items-center gap-1.5">
                <span className="text-[#0B2CF5] opacity-50">•</span> Diagnóstico por Imágenes
              </Link>
            </li>
            <li>
              <Link to="/servicios/terapia-radiante" className="hover:text-[#0B2CF5] transition-colors flex items-center gap-1.5">
                <span className="text-[#0B2CF5] opacity-50">•</span> Terapia Radiante
              </Link>
            </li>
            <li>
              <Link to="/servicios/practicas-medicas" className="hover:text-[#0B2CF5] transition-colors flex items-center gap-1.5">
                <span className="text-[#0B2CF5] opacity-50">•</span> Prácticas Médicas
              </Link>
            </li>
            <li>
              <Link to="/servicios/piso-de-la-mujer" className="hover:text-[#0B2CF5] transition-colors flex items-center gap-1.5">
                <span className="text-[#0B2CF5] opacity-50">•</span> Piso de la Mujer
              </Link>
            </li>
            <li>
              <Link to="/servicios/cheq-in" className="hover:text-[#0B2CF5] transition-colors flex items-center gap-1.5">
                <span className="text-[#0B2CF5] opacity-50">•</span> Cheq-In
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="font-black text-[#0B2CF5] text-[18px] mb-5 tracking-tight">Contacto</h4>
          <div className="flex items-start gap-3 text-[#505050] font-medium text-[14px] mb-4">
            <Mail size={18} className="text-[#0B2CF5] mt-0.5 flex-shrink-0" />
            <p>turnoscrr@gmail.com</p>
          </div>
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/InstitutoCRR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4F6FB] text-[#0B2CF5] p-3 rounded-full hover:bg-[#0B2CF5] hover:text-white transition-all shadow-sm"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/institutocrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#F4F6FB] text-[#0B2CF5] p-3 rounded-full hover:bg-[#0B2CF5] hover:text-white transition-all shadow-sm"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="font-black text-[#0B2CF5] text-[18px] mb-5 tracking-tight">Portal</h4>
          <p className="text-[14px] text-[#8B8B8B] font-medium mb-6 leading-relaxed">
            Nuestros pacientes y médicos derivantes pueden consultar resultados y enviar estudios desde nuestra plataforma segura.
          </p>
          <a
            href="https://pacientes.icrrportal.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white border-2 border-[#0B2CF5] text-[#0B2CF5] font-black px-6 py-2 rounded-full shadow-sm hover:bg-[#0B2CF5] hover:text-white transition-all text-[14px] tracking-wide"
          >
            Ingresar al Portal
          </a>
        </div>
      </div>

      {/* Footer inferior */}
      <p className="text-center text-[13px] text-[#8B8B8B] font-medium mt-8">
        © {new Date().getFullYear()} Instituto Consultorio Radiológico Resistencia. Todos los derechos reservados.
      </p>
    </footer>
  )
}
