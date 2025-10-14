import React from "react"
import { MapPin, Clock, Phone, Mail, CheckCircle, CalendarDays } from "lucide-react"
import { Link } from "react-router-dom"

export default function SucursalCentral() {
  return (
    <section className="bg-gray-50">

      {/* HERO */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="/sucursales/fachadaCentral.jpg"
          alt="Sede Central"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2342]/80 to-[#0A2342]/60" />
        <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-5 tracking-tight">
              Sede Central
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Nuestra casa matriz, donde convergen la experiencia médica, la tecnología avanzada y la atención integral al paciente.
            </p>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="container mx-auto px-6 py-20 grid gap-10 md:grid-cols-3">
        <div className="flex flex-col items-start gap-3">
          <MapPin className="w-8 h-8 text-[#2E86AB]" />
          <h3 className="font-semibold text-lg text-[#0A2342]">Dirección</h3>
          <p className="text-gray-600">Av. 9 de Julio 635, Resistencia, Chaco</p>
        </div>

        <div className="flex flex-col items-start gap-3">
          <Clock className="w-8 h-8 text-[#2E86AB]" />
          <h3 className="font-semibold text-lg text-[#0A2342]">Horarios</h3>
          <p className="text-gray-600 leading-relaxed">
            Lunes a Viernes: 7:00 a 20:00<br />
            Sábados: 8:00 a 13:00
          </p>
        </div>

        <div className="flex flex-col items-start gap-3">
          <Phone className="w-8 h-8 text-[#2E86AB]" />
          <h3 className="font-semibold text-lg text-[#0A2342]">Contacto</h3>
          <p className="text-gray-600">
            Tel: (362) 444-5555<br />
            <span className="flex items-center mt-1">
              <Mail className="w-4 h-4 text-[#2E86AB] mr-2" />
              <a
                href="mailto:central@consultoriorr.com"
                className="hover:underline text-[#2E86AB]"
              >
                central@consultoriorr.com
              </a>
            </span>
          </p>
        </div>
      </div>

      {/* SERVICIOS */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6 text-center mb-10">
          <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
            Servicios de Alta Complejidad
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            En la sede central se realizan los principales estudios diagnósticos con equipamiento de última generación.
          </p>
        </div>

        <div className="container mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Tomografía Computada",
            "Resonancia Magnética",
            "Ecografía",
            "Mamografía Digital",
            "Densitometría Ósea",
            "Radiología",
            "Consultas Médicas Especializadas",
            "Terapia Radiante"
          ].map((servicio, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <CheckCircle className="w-6 h-6 text-[#2E86AB]" />
              <span className="text-gray-700 font-medium">{servicio}</span>
            </div>
          ))}
        </div>
      </div>
      {/* BLOQUE TURNOS */}
      <div className="bg-gradient-to-r from-[#0A2342] to-[#2E86AB] text-white py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white/10 p-4 rounded-full">
              <CalendarDays className="w-10 h-10 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">
                Atención personalizada y turnos online
              </h3>
              <p className="text-white/80">
                Accedé a turnos inmediatos, recordatorios automáticos y asistencia prioritaria desde nuestra plataforma digital.
              </p>
            </div>
          </div>

          <Link
            to="/turnos"
            className="inline-flex items-center justify-center rounded-full bg-white text-[#0A2342] font-semibold px-8 py-3 shadow-md hover:bg-gray-100 transition"
          >
            Reservar Turno
          </Link>
        </div>
      </div>
      {/* MAPA */}
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-[#0A2342] mb-6 text-center">
          Cómo llegar
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-xl h-[400px]">
          <iframe
            title="Mapa Sede Central"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d744.2831331572827!2d-58.98068172737543!3d-27.455956964664026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94450cf1d48612bd%3A0xd65f93c5771f8b81!2sDensitometr%C3%ADa%20Osea%20Resistencia!5e0!3m2!1ses!2sar!4v1759840589238!5m2!1ses!2sar"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
