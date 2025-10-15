import { motion } from "framer-motion"
import { UserRound, FlaskConical, CalendarDays } from "lucide-react"
import { Link } from "react-router-dom"

export default function CheqIn() {
    const programas = [
        {
            nombre: "CHEQ-IN General",
            imagen: "/servicios/cheq-in-general.jpg",
            dirigido:
                "Cualquier paciente que quiera conocer su estado de salud general, deportistas y pacientes post COVID.",
            incluye:
                "Laboratorio de análisis clínicos completo, espirometría, ecocardiograma Doppler, eco Doppler vasos de cuello, prueba ergométrica computarizada, TAC de tórax sin contraste.",
        },
        {
            nombre: "CHEQ-IN Cardio",
            imagen: "/servicios/cheq-in-cardio.jpg",
            dirigido:
                "Pacientes con hipertensión arterial, diabéticos, tabaquistas, personas con obesidad, con insuficiencia renal o cardíaca, colesterol alto, o antecedentes cardiovasculares.",
            incluye:
                "Laboratorio de análisis clínicos completo, ecocardiograma Doppler, eco Doppler vasos de cuello, electrocardiograma, ergometría, estudio de perfusión miocárdica stress-reposo, MAPA y Holter de 24 hs.",
        },
        {
            nombre: "CHEQ-IN Óseo",
            imagen: "/servicios/cheq-in-oseo.jpg",
            dirigido:
                "Mayores de 50 años, personas con osteoporosis o enfermedades crónicas, en tratamiento con corticoides prolongados o anticoagulantes, en menopausia o con sedentarismo.",
            incluye:
                "Densitometría de columna lumbar y caderas, junto con laboratorio de análisis clínicos completo.",
        },
    ]

    return (
        <section className="container mx-auto px-6 py-16">
            {/* HERO */}
            <div className="relative h-[50vh] w-full overflow-hidden rounded-3xl mb-16 shadow-md">
                <img
                    src="/servicios/cheq-in-banner.jpg"
                    alt="Programa Cheq-in de prevención integral"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/90 via-[#0A2342]/60 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 text-white max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        CHEQ-IN
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                        Programas de chequeo médico integral diseñados para cuidar tu salud de manera preventiva.
                    </p>
                </div>
            </div>

            {/* PROGRAMAS */}
            <div className="grid md:grid-cols-3 gap-10 mt-12">
                {programas.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 flex flex-col items-center"
                    >
                        {/* Imagen */}
                        <div className="relative w-full h-[280px] flex justify-center items-center">
                            <img
                                src={p.imagen}
                                alt={p.nombre}
                                className="h-[350px] w-auto object-contain mx-auto rounded-2xl transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Contenido */}
                        <div className="p-6 mt-10 flex-1 flex flex-col justify-between w-full text-[#0A2342]">
                            {/* Dirigido a */}
                            <div className="mb-5">
                                <div className="flex items-center gap-2 mb-2 font-semibold text-[15px]">
                                    <UserRound className="w-5 h-5 text-[#2E86AB]" />
                                    <span>ESTÁ DIRIGIDO A:</span>
                                </div>
                                <p className="text-gray-700 text-[15px] leading-relaxed whitespace-pre-line">
                                    {p.dirigido}
                                </p>
                            </div>

                            {/* Incluye */}
                            <div>
                                <div className="flex items-center gap-2 mb-2 font-semibold text-[15px]">
                                    <FlaskConical className="w-5 h-5 text-[#2E86AB]" />
                                    <span>INCLUYE:</span>
                                </div>
                                <p className="text-gray-700 text-[15px] leading-relaxed whitespace-pre-line">
                                    {p.incluye}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Turnos */}
            <div className="bg-gradient-to-r from-[#0A2342] to-[#2E86AB] text-white py-16 mt-5">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-4 rounded-full">
                            <CalendarDays className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">
                                Conocé tu estado de salud hoy
                            </h3>
                            <p className="text-white/80">
                                Reservá tu turno para cualquiera de los programas CHEQ-IN y recibí tu evaluación médica completa.
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
