import React from "react"
import { MapPin, Clock, Phone, Mail, CheckCircle, CalendarDays, Navigation } from "lucide-react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import SeoTags from "../../components/SeoTags"

export default function SucursalSaenzPena() {
  return (
    <>
      <SeoTags
        title="Sucursal Sáenz Peña | ICRR"
        description="Atención médica y diagnóstico por imágenes en Presidencia Roque Sáenz Peña, Chaco. Tecnología y calidad en el corazón de la provincia."
        image="/sucursales/fachadaSP.jpg"
      />
      <section className="bg-[#F4F6FB] pb-24">

        {/* HERO */}
        <div className="relative h-[65vh] overflow-hidden bg-[#0B2CF5]">
          <img
            src="/sucursales/fachadaSP.webp"
            alt="Sucursal Sáenz Peña ICRR"
            className="absolute inset-0 h-full w-full object-cover mix-blend-overlay opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2CF5] via-transparent to-transparent" />
          <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-6 lg:px-12 text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Sede Interior
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-tight">
                Sucursal Sáenz Peña
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl leading-relaxed">
                Calidad diagnóstica y calidez humana en el centro de nuestra provincia.
              </p>
            </motion.div>
          </div>
        </div>

        {/* INFO CARDS */}
        <div className="container mx-auto px-6 -mt-20 relative z-20">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: <MapPin />, title: "Ubicación", desc: "Av. 33 y Calle 10", sub: "P. R. Sáenz Peña, Chaco" },
              { icon: <Clock />, title: "Horarios", desc: "Lun a Vie: 7:00 a 19:00", sub: "Sábados: 8:00 a 12:00" },
              { icon: <Phone />, title: "Contacto", desc: "(364) 442-7788", sub: "saenzpena@icrr.com.ar" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center group hover:bg-[#0B2CF5] transition-all duration-500"
              >
                <div className="w-16 h-16 bg-[#F4F6FB] rounded-2xl flex items-center justify-center text-[#0B2CF5] mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-black text-[#0B2CF5] mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-[#505050] font-medium group-hover:text-white/90 transition-colors">{item.desc}</p>
                <p className="text-[#8B8B8B] text-sm font-medium group-hover:text-white/70 transition-colors uppercase tracking-wider mt-1">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SERVICIOS */}
        <div className="container mx-auto px-6 pt-32 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B2CF5] mb-6 tracking-tight">
              Prestaciones Médicas
            </h2>
            <p className="text-[#505050] font-medium text-lg max-w-2xl mx-auto">
              Contamos con especialidaddes y equipos de diagnóstico para brindar una atención integral sin necesidad de trasladarse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Ecografía Multipropósito",
              "Mamografía Digital",
              "Resonancia Magnética",
              "Consultas Médicas Especializadas",
              "Tomografía Computada (Próximamente)"
            ].map((servicio, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-gray-50 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#0B2CF5] group-hover:bg-[#0B2CF5] group-hover:text-white transition-colors">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-[#505050] font-black text-sm uppercase tracking-tight">{servicio}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <div className="container mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0B2CF5] rounded-[3rem] p-10 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_20px_50px_rgba(11,44,245,0.3)] overflow-hidden relative"
          >
            {/* Decoración sutil */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="bg-white/10 p-5 rounded-[2rem] backdrop-blur-sm">
                <CalendarDays className="w-12 h-12 text-white" />
              </div>
              <div className="max-w-xl">
                <h3 className="text-3xl md:text-4xl font-black mb-4 leading-tight tracking-tight">
                  Gestioná tu turno en Sáenz Peña
                </h3>
                <p className="text-white/80 font-medium text-lg">
                  Elegí tu especialidad, día y horario desde nuestra plataforma de turnos online 24/7.
                </p>
              </div>
            </div>

            <Link
              to="/turnos"
              className="relative z-10 inline-flex items-center justify-center rounded-full bg-white text-[#0B2CF5] font-black px-12 py-5 text-lg shadow-xl hover:bg-gray-50 transition-all hover:-translate-y-1 active:scale-95"
            >
              RESERVAR TURNOS
            </Link>
          </motion.div>
        </div>

        {/* MAPA */}
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] p-10 md:p-20 border border-gray-50 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-[#0B2CF5] mb-12 tracking-tight flex items-center justify-center gap-4">
              <Navigation className="w-10 h-10" />
              ¿Cómo llegar?
            </h2>
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] border border-gray-100">
              <iframe
                title="Mapa Sede Sáenz Peña"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.0606244825885!2d-60.44680072369173!3d-26.774337387438084!2m3!1f0!2f0!3f0!3m2!i1024!2i768!4f13.1!3m3!1m2!1s0x94412d000aca1a2f%3A0x58de499ea9c79b1a!2sInstituto%20CRR!5e0!3m2!1ses!2sar!4v1759842353964!5m2!1ses!2sar"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
