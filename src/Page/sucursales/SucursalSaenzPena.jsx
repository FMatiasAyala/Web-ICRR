import React from "react"
import { MapPin, Clock, Phone, Mail, CheckCircle, CalendarDays } from "lucide-react"
import { Link } from "react-router-dom"

export default function SucursalSaenzPena() {
    return (
        <section className="bg-gray-50">

            {/* HERO */}
            <div className="relative h-[55vh] overflow-hidden">
                <img
                    src="/sucursales/fachadaSP.jpg"
                    alt="Sucursal Sáenz Peña"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0A2342]/70 backdrop-blur-[1px]" />
                <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Sucursal Sáenz Peña
                        </h1>
                        <p className="text-lg text-white/90 max-w-2xl mx-auto">
                            Nuestra sucursal del interior provincial, equipada con tecnología moderna y atención personalizada.
                        </p>
                    </div>
                </div>
            </div>

            {/* INFO */}
            <div className="container mx-auto px-6 py-20 grid gap-10 md:grid-cols-3">
                <div className="flex flex-col items-start gap-3">
                    <MapPin className="w-8 h-8 text-[#2E86AB]" />
                    <h3 className="font-semibold text-lg text-[#0A2342]">Dirección</h3>
                    <p className="text-gray-600">
                        Av. 33 y Calle 10, Presidencia Roque Sáenz Peña, Chaco
                    </p>
                </div>

                <div className="flex flex-col items-start gap-3">
                    <Clock className="w-8 h-8 text-[#2E86AB]" />
                    <h3 className="font-semibold text-lg text-[#0A2342]">Horarios</h3>
                    <p className="text-gray-600 leading-relaxed">
                        Lunes a Viernes 7:00 a 19:00<br />
                        Sábados 8:00 a 12:00
                    </p>
                </div>

                <div className="flex flex-col items-start gap-3">
                    <Phone className="w-8 h-8 text-[#2E86AB]" />
                    <h3 className="font-semibold text-lg text-[#0A2342]">Contacto</h3>
                    <p className="text-gray-600">
                        Tel: (364) 442-7788<br />
                        <span className="flex items-center mt-1">
                            <Mail className="w-4 h-4 text-[#2E86AB] mr-2" />
                            <a
                                href="mailto:saenzpena@consultoriorr.com"
                                className="hover:underline text-[#2E86AB]"
                            >
                                saenzpena@consultoriorr.com
                            </a>
                        </span>
                    </p>
                </div>
            </div>

            {/* SERVICIOS */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-6 text-center mb-10">
                    <h2 className="text-3xl font-bold text-[#0A2342] mb-4">
                        Servicios en esta sede
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Contamos con todas las prestaciones esenciales para diagnóstico y control médico.
                    </p>
                </div>

                <div className="container mx-auto px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        "Ecografía",
                        "Mamografía digital",
                        "Consultas médicas",
                        "Resonancia magnetica",
                        "Tomografia computada (proximamente)"
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
                                Solicitá tu turno en línea
                            </h3>
                            <p className="text-white/80">
                                Elegí tu especialidad, día y horario desde nuestra plataforma digital.
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
                        title="Mapa Sede Sáenz Peña"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0606244825885!2d-60.44680072369173!3d-26.774337387438084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94412d000aca1a2f%3A0x58de499ea9c79b1a!2sInstituto%20CRR!5e0!3m2!1ses!2sar!4v1759842353964!5m2!1ses!2sar"
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
