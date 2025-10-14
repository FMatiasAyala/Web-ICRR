import { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CalendarDays } from "lucide-react"
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
    <section className="container mx-auto px-6 py-20 space-y-32">
      {/* HERO */}
      <div className="relative h-[55vh] w-full overflow-hidden rounded-3xl shadow-xl">
        <img
          src="/servicios/PM.png"
          alt="Consultorios médicos del instituto"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105 transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/90 via-[#0A2342]/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 text-white max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            Prácticas Médicas
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            Consultorios médicos especializados que brindan atención integral,
            diagnóstica y de seguimiento en múltiples disciplinas clínicas.
          </motion.p>
        </div>
      </div>

      {/* ESPECIALIDADES */}
      <div>
        <h2 className="text-3xl font-bold text-[#0A2342] text-center mb-14">
          Especialidades Médicas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {especialidades.map((esp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-white rounded-3xl shadow-md p-8 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-1.5 bg-[#2E86AB] rounded-t-3xl opacity-0 group-hover:opacity-100 transition" />
              <h3 className="text-2xl font-semibold text-[#0A2342] mb-3">
                {esp.nombre}
              </h3>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {esp.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ESPECIALIDADES POR SUCURSAL */}
      <div className="relative bg-gradient-to-r from-[#0A2342]/5 to-[#bfc6a5]/10 rounded-3xl py-16 px-6 md:px-16 shadow-inner">
        <h3 className="text-3xl font-bold text-[#0A2342] text-center mb-14">
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
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <h4 className="text-xl font-semibold text-[#0A2342] mb-1 flex items-center gap-2">
                <span className="text-[#2E86AB] text-xl">📍</span>
                {sede.nombre}
              </h4>
              <p className="text-gray-600 text-[14px] mb-4">{sede.direccion}</p>
              <ul className="text-gray-700 text-[15px] space-y-2">
                {sede.especialidades.map((esp, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#2E86AB] font-semibold">•</span>
                    <span>{esp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#0A2342] to-[#2E86AB] text-white py-16 mt-5">
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
      {/* PLANTEL MÉDICO */}
      <div>
        <h3 className="text-3xl font-bold text-[#0A2342] text-center mb-6">
          Plantel Médico
        </h3>

        {/* 🔍 BUSCADOR */}
        <div className="flex justify-center mb-12">
          <input
            type="text"
            placeholder="Buscar profesional o especialidad..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full max-w-md rounded-full border border-gray-300 px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E86AB] focus:border-transparent shadow-sm"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#2E86AB] rounded-l-2xl opacity-80" />
                <h4 className="text-xl font-semibold text-[#0A2342] mb-3 border-b border-gray-200 pb-2">
                  {area}
                </h4>
                <ul className="text-gray-700 text-[15px] space-y-2">
                  {medicos.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#2E86AB] font-semibold">•</span>
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
            <p className="text-center text-gray-500 mt-10">
              No se encontraron resultados para "{busqueda}".
            </p>
          )}
      </div>
    </section>
  )


}
