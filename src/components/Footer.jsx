import React from "react"
import { Facebook, Instagram, Phone, MapPin, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0A2342] to-[#2E86AB] text-gray-100 pt-14 pb-8 mt-10">
      <div className="container mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-10">
        {/* Columna 1 */}
        <div>
          <h4 className="font-bold text-white text-lg mb-4">Casa Central</h4>
          <div className="flex items-start gap-3 text-gray-300 text-sm mb-2">
            <MapPin size={18} className="text-white/80 mt-0.5" />
            <p>Av. 9 de Julio 635 - Resistencia</p>
          </div>
          <div className="flex items-start gap-3 text-gray-300 text-sm mb-2">
            <Phone size={18} className="text-white/80 mt-0.5" />
            <p>(362) 444-555</p>
          </div>

          <h4 className="font-bold text-white text-lg mt-6 mb-3">Sedes</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Av. Alvear 3876 - Fontana <br />
            Av. J. D. Perón 1220 - Sáenz Peña
          </p>
        </div>

        {/* Columna 2 */}
        <div>
          <h4 className="font-bold text-white text-lg mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/servicios/diagnostico" className="hover:text-white transition">
                Diagnóstico por Imágenes
              </Link>
            </li>
            <li>
              <Link to="/servicios/terapia-radiante" className="hover:text-white transition">
                Terapia Radiante
              </Link>
            </li>
            <li>
              <Link to="/servicios/practicas-medicas" className="hover:text-white transition">
                Prácticas Médicas
              </Link>
            </li>
            <li>
              <Link to="/servicios/piso-mujer" className="hover:text-white transition">
                Piso de la Mujer
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h4 className="font-bold text-white text-lg mb-4">Contacto</h4>
          <div className="flex items-start gap-3 text-gray-300 text-sm mb-2">
            <Mail size={18} className="text-white/80 mt-0.5" />
            <p>info@icrr.com.ar</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Columna 4 */}
        <div>
          <h4 className="font-bold text-white text-lg mb-4">Turnos Online</h4>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Accedé a turnos inmediatos y recordatorios automáticos desde nuestra
            plataforma digital.
          </p>
          <Link
            to="/turnos"
            className="inline-block bg-white text-[#0A2342] font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
          >
            Reservar Turno
          </Link>
        </div>
      </div>

      {/* Footer inferior */}
      <p className="text-center text-sm text-gray-400 mt-8">
        © {new Date().getFullYear()} Instituto Consultorio Radiológico Resistencia. Todos los derechos reservados.
      </p>
    </footer>
  )
}
