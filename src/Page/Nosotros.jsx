import { motion } from "framer-motion"

export default function Nosotros() {
  return (
    <section className="flex flex-col">
      {/* === Encabezado con imagen del equipo === */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src="/img/nosotros.jpg"
          alt="Equipo del Consultorio Radiológico Resistencia"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0A2342]/60" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold tracking-wide"
          >
            Instituto Consultorio Radiológico Resistencia
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-3 text-lg md:text-xl text-gray-100/90 max-w-2xl"
          >
            Profesionales comprometidos con la excelencia en diagnóstico por imágenes.
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-6">
          Nuestra Historia
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify px-6">
          Instituto Consultorio Radiológico Resistencia (ICRR) es una organización cuyos inicios fueron en el año 1977 por la avenida Italia al 100, cuyos principales servicios eran radiología convencional, tomografía y mamografía. Cuatro años más tarde, se añade el servicio de ecografía tras la instalación del primer ecógrafo dando pie al servicio de ultrasonido. Luego de 6 años se dan los primeros pasos para instalar cámara gamma, un servicio de medicina nuclear.<br />

          En 1990 se instala el densitómetro, generando el servicio número seis de la institución. El séptimo servicio concluye tras la instalación del primer acelerador lineal cuyo fin es mejorar la calidad de vida de los pacientes oncológicos. Un año más tarde, en 1993, se instala el resonador de 0,5 T y en 2006 el primer resonador de campo alto 1.5 T.<br />

          El instituto CRR siempre se especializó en diagnostico por imágenes y radioterapia, pero año a año fue innovándose en tecnología para mejorar la salud y calidad de vida de las personas de nuestra comunidad.<br />

          En el año 2021 se incorpora el mamógrafo con tomo síntesis, en 2013 primer equipo de cámara gamma con doble cabezal, en 2018 un equipo automático y 3d para la toma de imágenes mamarias y axilares.<br />

          Comentando incorporaciones más recientes, en 2019 se expande el servicio de resonancia ya que se instala el resonador número tres. En 2020 se incorpora un nuevo acelerador lineal para ampliar el espectro de atención de los pacientes con diagnostico oncológico.<br />

          En el año 2022, se instaló un nuevo equipo de resonancia, reemplazando a uno de ellos. Se compró un equipo nuevo de cámara gamma y, por último, se añadirá a nuestros servicios el PET CT permitiendo diagnosticar con mayor rapidez y precisión a los pacientes. También, comentar que es el único en la provincia y región, permitiendo que los pacientes se ahorren gastos de movilidad hasta ciudades como Buenos Aires y Córdoba.<br />

          Desde 1977 y hasta la actualidad (2024) logramos consolidarnos como la institución líder en el nordeste argentino. Cuarenta y cinco años trabajando al servicio de la salud de la provincia del Chaco.
        </p>
      </motion.div>
      {/* === Misión y Visión con imágenes === */}
      <div className="container mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Bloque de texto */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
              Nuestra Misión
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La misión del Instituto CRR es mejorar la calidad de vida de nuestra comunidad a través de la prestación de servicios médicos de excelencia en las áreas de diagnóstico, prácticas médicas y quirúrgicas ambulatorias. Promoviendo la prevención, la investigación científica y la formación de profesionales con estándares de nivel internacional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-4">
              Nuestra Visión
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              La visión es convertirnos en una institución de salud líder en el norte argentino especializada en áreas de diagnóstico, prácticas médicas y quirúrgicas ambulatorias, reconocidos por la calidez de nuestros profesionales y por la calidad de nuestras prestaciones.
            </p>
          </motion.div>
        </div>

        {/* Bloque de imágenes interactivas */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src="/img/inicio1.png" // 🔹 Foto de los primeros equipos o instalaciones
              alt="Inicios del consultorio"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src="/img/inicio2.png" // 🔹 Otra imagen histórica o del edificio original
              alt="Historia del consultorio"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </div>

      {/* === Valores o Historia adicional === */}
      <div className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2342] mb-8">
            Nuestros Valores
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
            Los principios que guían cada una de nuestras acciones reflejan el compromiso del
            Consultorio Radiológico Resistencia con la ética, la excelencia profesional y el
            respeto por nuestros pacientes.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              "Liderazgo",
              "Responsabilidad",
              "Respeto",
              "Compañerismo",
              "Ética",
              "Honestidad",
              "Integridad",
              "Transparencia",
              "Independencia",
              "Compromiso",
              "Excelencia",
              "Innovación",
            ].map((valor, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md rounded-xl p-5 transition-all"
              >
                <h3 className="text-[#0A2342] font-semibold text-lg mb-1">
                  {valor}
                </h3>
                <div className="h-1 w-10 bg-[#2E86AB] rounded-full mx-auto mt-2" />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
