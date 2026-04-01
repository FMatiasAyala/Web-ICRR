import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CalendarDays, Search, Stethoscope, User, MapPin } from "lucide-react"
import SeoTags from "../../components/SeoTags"

export default function PracticasMedicas() {
  const [busqueda, setBusqueda] = useState("")

  const especialidades = [
    { nombre: "Clínica Médica", descripcion: "Atención integral, seguimiento de patologías crónicas y coordinación interdisciplinaria. Evaluación general y derivación a especialidades según necesidad." },
    { nombre: "Cardiología", descripcion: "Controles de riesgo cardiovascular, electrocardiogramas, evaluación de hipertensión, arritmias y seguimiento personalizado." },
    { nombre: "Neurología", descripcion: "Evaluación y tratamiento de patologías del sistema nervioso central y periférico. Cefaleas, neuropatías y epilepsia." },
    { nombre: "Neurocirugía", descripcion: "Tratamiento quirúrgico de patologías del sistema nervioso, incluyendo dolor y lesiones estructurales." },
    { nombre: "Traumatología", descripcion: "Diagnóstico y tratamiento de lesiones óseas y musculares. Rehabilitación y control postquirúrgico." },
    { nombre: "Endocrinología y Diabetes", descripcion: "Diagnóstico y manejo de trastornos hormonales, metabólicos y diabetes con enfoque multidisciplinario." },
    { nombre: "Ginecología", descripcion: "Controles ginecológicos, planificación familiar y salud integral de la mujer." },
    { nombre: "Otorrinolaringología", descripcion: "Evaluación y tratamiento de oído, nariz y garganta. Audiometrías y procedimientos ambulatorios." },
    { nombre: "Gastroenterología", descripcion: "Diagnóstico y seguimiento de enfermedades digestivas, endoscopias y estudios funcionales." },
    { nombre: "Cirugía General y Torácica", descripcion: "Atención quirúrgica integral con enfoque en procedimientos de pared abdominal y tórax." },
    { nombre: "Flebología", descripcion: "Diagnóstico y tratamiento de patologías venosas, varices y trastornos circulatorios." },
    { nombre: "Nefrología", descripcion: "Atención integral de enfermedades renales y control metabólico." },
    { nombre: "Nutrición", descripcion: "Planes personalizados para control metabólico, diabetes y sobrepeso." },
    { nombre: "Neumología", descripcion: "Atención respiratoria integral, asma, EPOC y patologías pulmonares crónicas." },
  ]

  const plantel = {
    // --- SEDE RESISTENCIA ---
    Ginecología: ["Bruno Claudiani", "Camila Marcico", "Laura Cabrera"],
    Cardiología: [
      "Carlos Marcico",
      "María Eugenia Torossi",
      "Maximiliano Quaranta",
      "Raúl Colman",
      "Renzo Medina",
      "Renzo Codutti",
      "Sergio Santacruz",
      "Raúl Colman",
    ],
    "Clínica Médica": [
      "Carolina Bordón",
      "Sandra Sibilla",
      "Valentina Rebolledo",
      "Walter Bonfanti",
      "Walter Sena",
    ],
    Diabetes: ["Juliana Figueroa", "Patricia Candia"],
    Endocrinología: ["Candela Torres", "Marcela Fernández"],
    Nutrición: ["Cecilia Martínez"],
    Neurología: ["Daiana Ambos"],
    Neurocirugía: ["Daniel Seclen", "Martin Lucero"],
    "Gastroenterología": ["Esteban Ayala Ortiz"],
    Otorrinolaringología: [
      "Facundo Almirón",
      "Renzo Arguello",
      "Rosario Boccadoro",
    ],
    "Cirugía General": ["Jonathan González Arias"],
    "Cirugía Torácica": ["Fernando Grenón"],
    Flebología: ["María Andrea Ferreyra"],
    Traumatología: ["Flavio Scattolaro", "Nicolás Carrasco", "Pablo Quiroz"],
    Nefrología: ["Martin Brizuela", "Walter Bonfanti"],
    Neumología: ["Rossana Santillán"],
    "Ergometría / Holter / ECG": ["Julio Vera"],

    // --- SEDE FONTANA ---
    "Cardiología (Fontana)": ["Sergio Santacruz"],

    // --- SEDE SÁENZ PEÑA ---
    "Ginecología (Sáenz Peña)": ["Ariana García Miranda", "Bruno Claudiani"],
    "Hematología (Sáenz Peña)": ["Carla Romagnoli"],
    "Nefrología (Sáenz Peña)": ["César Mombelli"],
    "Cardiología (Sáenz Peña)": ["Esteban Niello", "Silvana D’Alessandro"],
    "Traumatología (Sáenz Peña)": ["Emmanuel Padini", "Pablo Quiroz"],
    "Tocoginecología (Sáenz Peña)": ["Luciano Ellena"],
    "Clínica Médica (Sáenz Peña)": ["Noelia Virasoro"],
    "Gastroenterología (Sáenz Peña)": ["Guillermo Sotelo"],
  }

  const sucursales = [
    {
      nombre: "Sede Resistencia (Centro)",
      direccion: "Av. 9 de Julio 635 – Resistencia, Chaco",
      especialidades: [
        "Clínica Médica",
        "Cardiología",
        "Neurología",
        "Neurocirugía",
        "Traumatología",
        "Endocrinología y Diabetes",
        "Ginecología",
        "Otorrinolaringología",
        "Gastroenterología",
        "Cirugía General y Torácica",
        "Flebología",
        "Nefrología",
        "Nutrición",
        "Neumología",
        "Ergometría / Holter / ECG",
      ],
    },
    {
      nombre: "Sucursal Fontana",
      direccion: "Av. Alvear 3876 – Fontana, Chaco",
      especialidades: ["Cardiología"],
    },
    {
      nombre: "Sucursal Sáenz Peña",
      direccion: "Av. J. Domingo Perón 220, Sáenz Peña, Chaco.",
      especialidades: ["Clínica Médica", "Ginecología", "Cardiología", "Traumatología", "Tocoginecología", "Gastroenterología", "Nefrología", "Hematología"],
    },
  ]

  return (
    <>
      <SeoTags
        title="Prácticas Médicas | ICRR"
        description="Consultorios médicos especializados con atención integral en múltiples disciplinas."
        image="/servicios/PM.png"
      />
      <section className="relative min-h-screen bg-[#F4F6FB] pb-24 overflow-x-hidden">
        {/* Fondo decorativo tenue */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-luminosity">
          <img
            src="/servicios/PM.png"
            alt="fondo"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F4F6FB] opacity-100 h-[600px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-24 mb-16 space-y-32">
          {/* Encabezado Principal */}
          <div className="text-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#F5BB25] flex items-center justify-center border-[8px] border-white shadow-xl mx-auto mb-10"
            >
              <span className="text-white text-[40px] md:text-[56px] font-black tracking-tighter">Pm</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black text-[#0B2CF5] mb-6 tracking-tight"
            >
              Prácticas Médicas
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#505050] font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
              Consultorios especializados que brindan atención integral, diagnóstica y de seguimiento en múltiples disciplinas.
            </motion.p>
          </div>

          {/* ESPECIALIDADES */}
          <section>
            <h2 className="text-3xl md:text-5xl font-black text-[#0B2CF5] text-center mb-16 tracking-tight">
              Especialidades Médicas
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {especialidades.map((esp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-10 hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-50 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F6FB] flex items-center justify-center text-[#0B2CF5] mb-6 group-hover:bg-[#0B2CF5] group-hover:text-white transition-colors">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0B2CF5] mb-4 tracking-tight">
                    {esp.nombre}
                  </h3>
                  <p className="text-[#505050] font-medium text-[15px] leading-relaxed">
                    {esp.descripcion}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ESPECIALIDADES POR SUCURSAL */}
          <section className="bg-white rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.05)] py-20 px-8 md:px-16 border border-gray-50">
            <h3 className="text-3xl md:text-5xl font-black text-[#0B2CF5] text-center mb-16 tracking-tight">
              Especialidades por Sucursal
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {sucursales.map((sede, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-[#F4F6FB] rounded-[2.5rem] p-10 border border-white hover:bg-white hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#0B2CF5] shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-black text-[#0B2CF5] tracking-tight">
                      {sede.nombre}
                    </h4>
                  </div>
                  <p className="text-[#505050] text-sm font-medium mb-8 flex items-start gap-2">
                    <span className="opacity-60">{sede.direccion}</span>
                  </p>
                  <ul className="text-[#505050] text-[15px] font-medium space-y-3">
                    {sede.especialidades.map((esp, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0B2CF5]" />
                        <span>{esp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PLANTEL MÉDICO */}
          <section>
            <h3 className="text-3xl md:text-5xl font-black text-[#0B2CF5] text-center mb-10 tracking-tight">
              Plantel Médico
            </h3>

            {/* 🔍 BUSCADOR */}
            <div className="flex justify-center mb-20">
              <div className="relative group w-full max-w-xl">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-300 group-focus-within:text-[#0B2CF5] transition-colors" />
                <input
                  type="text"
                  placeholder="Buscar profesional o especialidad..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="w-full pl-16 pr-8 py-5 rounded-full border border-gray-100 bg-white text-[#505050] font-medium focus:outline-none focus:ring-4 focus:ring-[#0B2CF5]/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-lg transition-all"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(plantel)
                .filter(([area, medicos]) =>
                  area.toLowerCase().includes(busqueda.toLowerCase()) ||
                  medicos.some((m) =>
                    m.toLowerCase().includes(busqueda.toLowerCase())
                  )
                )
                .map(([area, medicos], i) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2.5rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex items-center gap-4 mb-6 pt-2 border-b border-gray-50 pb-6">
                       <User className="text-[#0B2CF5] w-6 h-6" />
                       <h4 className="text-2xl font-black text-[#0B2CF5] tracking-tight">
                        {area}
                      </h4>
                    </div>
                    <ul className="text-[#505050] font-medium text-[16px] space-y-4">
                      {medicos.map((m, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0B2CF5]/40" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </div>

            {Object.entries(plantel).filter(([area, medicos]) =>
              area.toLowerCase().includes(busqueda.toLowerCase()) ||
              medicos.some((m) => m.toLowerCase().includes(busqueda.toLowerCase()))
            ).length === 0 && (
                <div className="text-center py-20">
                   <p className="text-2xl text-gray-400 font-medium">
                    No se encontraron resultados para "{busqueda}".
                  </p>
                </div>
              )}
          </section>

          {/* CTA final */}
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
                  Atención personalizada y turnos online
                </h3>
                <p className="text-white/80 font-medium text-lg">
                  Accedé a turnos inmediatos, recordatorios automáticos y asistencia prioritaria desde nuestra plataforma digital.
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
      </section>
    </>
  )
}
