import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { CalendarDays } from "lucide-react"

export default function Terapia() {
  const certificados = [
    {
      nombre: "Certificación de Calidad",
      archivo: "/pdfs/politica_de_la_calidad_tr.pdf",
      detalle_button: "Politica De La Calidad"
    },
    {
      nombre: "ICRR tiene certificado su Sistema de Gestión de Calidad según la norma IRAM-ISO 9001:2015 con número de registro 9000 – 5355",
      archivo: "/pdfs/TERAPIA_RADIANTE_9001_iram.pdf",
      detalle_button: "Certificado IRAM-9001"
    },
    {
      nombre: "Certificado de Registro IQ NET: The International Certification Network N: AR – QS 5355",
      archivo: "/pdfs/TERAPIA_RADIANTE_9001_iqnet.pdf",
      detalle_button: "Certificado IQNET-9001"
    },
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      {/* Hero */}
      <div className="relative h-[50vh] w-full overflow-hidden rounded-3xl mb-16 shadow-md">
        <img
          src="/servicios/TR.png"
          alt="Sala de terapia radiante"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/90 via-[#0A2342]/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Terapia Radiante
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Tecnología de vanguardia en radioterapia, planificación 3D y
            tratamientos personalizados para cada paciente.
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="grid md:grid-cols-2 gap-16 mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-semibold text-[#0A2342] mb-4">
            Radioterapia de Precisión
          </h2>
          <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
            Nuestro Servicio de Radioterapia del ICRR es pionero en el tratamiento del cáncer en el Chaco y es el centro médico más avanzado de la región en cuanto a tecnología y técnicas de planificación.
            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
              Cuenta con una moderna infraestructura edilicia, con equipamiento de última generación y las técnicas de irradiación más avanzadas, entre las que se incluyen las técnicas de radioterapia conformada 3D, Intensity Modulated Radiotherapy (IMRT) y Volumetric Modulated Arc Therapy (VMAT), que aseguran que los pacientes reciban una atención de la máxima calidad acorde a la patología que presentan.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
              El centro cuenta con un equipo de profesionales de amplia experiencia y calificación incluidos médicos radioterapeutas, físicos médicos, dosimetrías, técnicos radiólogos y personal administrativo especializados en la atención de pacientes oncológicos.
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
              La radioterapia es el uso de radiación ionizante (fotones gama y partículas con alta energía) para destruir las células neoplásicas. La planificación de la radioterapia se centra en lograr que la dosis de irradiación incida en el volumen tumoral de la forma más precisa posible, reduciendo al máximo los efectos secundarios y evitando el daño a las células normales.
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">

              Para ello se emplean imágenes 3D tales como tomografía, resonancias y/o PET para ayudar a determinar la forma, la ubicación exacta del tumor y definir sus límites. Luego, con software especializado se determina la dosis precisa a impartir a cada paciente.
            </p>
            <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
              Un plan de radioterapia, por lo general, consiste en la realización de una cantidad determinada de sesiones diarias de tratamiento que se administran durante un período prescripto por el médico radioterapeuta y es específico para cada paciente.
            </p>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden shadow-lg"
        >
          <img
            src="/img/servicios/equipoTerapia.jpg"
            alt="Equipo de radioterapia"
            className="w-full h-[700px] object-cover"
          />
        </motion.div>
      </div>

      {/* Certificaciones */}
      <div className="bg-[#f8f9fb] rounded-3xl shadow-inner py-12 px-6 md:px-16">
        <h3 className="text-3xl font-bold text-[#0A2342] text-center mb-10">
          Certificación de Calidad
        </h3>
        <p className="text-justify text-gray-700 max-w-2xl mx-auto mb-8">
          Con nuestro esfuerzo permanente contribuimos a mejorar la salud, brindando asistencia confiable y personalizada, en un marco de calidez, excelencia profesional y liderazgo tecnológico en técnicas de radioterapia avanzada.
        </p>
        <p className="text-justify text-gray-700 max-w-2xl mx-auto mb-8">
          Con la intención de mejorar continuamente la atención médica y administrativa, se ha implementado un programa de garantía y gestión de la calidad con un alcance que contempla todos los procesos de nuestro servicio: «Prestación del servicio de terapia radiante incluyendo los procesos de: recepción y evaluación del paciente; y prescripción, simulación, planificación, aplicación y seguimiento del tratamiento radiante.» Estos procedimientos fueron certificados por normas internacionales de calidad (ISO 9001-2015).
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {certificados.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.archivo}
              download
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="w-full md:w-1/3 bg-white shadow-md hover:shadow-lg transition rounded-2xl px-6 py-6 text-center border border-gray-100"
            >
              <img
                src="/icons/certificado.svg"
                alt="Certificado"
                className="mx-auto mb-4 h-12 opacity-80"
              />
              <h4 className="font-semibold text-[#0A2342] mb-2">
                {cert.nombre}
              </h4>
              <span className="text-[#2E86AB] font-medium">
                {cert.detalle_button} →
              </span>
            </motion.a>
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
    </section>
  )
}