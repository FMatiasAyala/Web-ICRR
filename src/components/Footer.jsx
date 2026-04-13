import React from "react"
import { Phone, MapPin, Mail } from "lucide-react"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#0B2CF5] text-white pt-20 pb-8 relative overflow-hidden">
      {/* Decoración sutil de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16 relative z-10">
        {/* Columna 1 */}
        <div>
          <h4 className="font-black text-white text-[18px] mb-5 tracking-tight uppercase">Casa Central</h4>
          <div className="flex items-start gap-3 text-white/80 font-medium text-[14px] mb-3">
            <MapPin size={18} className="text-white mt-0.5 flex-shrink-0" />
            <p>Av. 9 de Julio 635 - Resistencia, Chaco</p>
          </div>
          <div className="flex items-start gap-3 text-white/80 font-medium text-[14px] mb-3">
            <FaWhatsapp size={18} className="text-white mt-0.5 flex-shrink-0" />
            <p>(362) 488-0444</p>
          </div>

          <h4 className="font-black text-white text-[18px] mt-8 mb-5 tracking-tight uppercase">Otras Sedes</h4>
          <p className="text-[14px] text-white/60 font-medium leading-relaxed">
            Av. Alvear 3876 - Fontana, Chaco <br />
            Av. J. D. Perón 1220 - Presidencia Roque Sáenz Peña
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="font-black text-white text-[18px] mb-5 tracking-tight uppercase">Servicios</h4>
          <ul className="space-y-3 text-[14px] text-white/60 font-medium">
            <li>
              <Link to="/servicios/diagnostico-por-imagen" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="text-white opacity-40 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">•</span> Diagnóstico por Imágenes
              </Link>
            </li>
            <li>
              <Link to="/servicios/terapia-radiante" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="text-white opacity-40 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">•</span> Terapia Radiante
              </Link>
            </li>
            <li>
              <Link to="/servicios/practicas-medicas" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="text-white opacity-40 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">•</span> Prácticas Médicas
              </Link>
            </li>
            <li>
              <Link to="/servicios/piso-de-la-mujer" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="text-white opacity-40 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">•</span> Piso de la Mujer
              </Link>
            </li>
            <li>
              <Link to="/servicios/cheq-in" className="hover:text-white transition-colors flex items-center gap-1.5 group">
                <span className="text-white opacity-40 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">•</span> Cheq-In
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="font-black text-white text-[18px] mb-5 tracking-tight uppercase">Contacto</h4>
          <div className="flex items-start gap-3 text-white/80 font-medium text-[14px] mb-4">
            <Mail size={18} className="text-white mt-0.5 flex-shrink-0" />
            <p className="break-all">turnoscrr@gmail.com</p>
          </div>
          <div className="flex gap-3 mt-8">
            <a
              href="https://www.facebook.com/InstitutoCRR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white p-3 rounded-full hover:bg-white hover:text-[#0B2CF5] transition-all"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/institutocrr/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white p-3 rounded-full hover:bg-white hover:text-[#0B2CF5] transition-all"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="font-black text-white text-[18px] mb-5 tracking-tight uppercase">Portal</h4>
          <p className="text-[14px] text-white/70 font-medium mb-8 leading-relaxed">
            Nuestros pacientes y médicos derivantes pueden consultar resultados y enviar estudios desde nuestra plataforma segura.
          </p>
          <a
            href="https://pacientes.icrrportal.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-[#0B2CF5] font-black px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all text-[14px] tracking-widest uppercase"
          >
            Ingresar al Portal
          </a>
        </div>
      </div>

      {/* Footer inferior */}
      <div className="container mx-auto px-6 mt-10">
        <p className="text-center text-[13px] text-white/40 font-medium">
          © {new Date().getFullYear()} Instituto Consultorio Radiológico Resistencia. <br className="md:hidden" /> Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
