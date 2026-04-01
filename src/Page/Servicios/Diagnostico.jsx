import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarDays, Radiation } from "lucide-react"
import { Link } from "react-router-dom"
import SeoTags from "../../components/SeoTags"

const servicios = [
  {
    nombre: "Tomografía Computada",
    descripcion:
      "Equipos de última generación con tecnología multicorte que permiten estudios de alta resolución, baja dosis y reconstrucción tridimensional. Protocolos específicos para cada área médica garantizan precisión diagnóstica.",
    detalle: `Se refiere a un procedimiento computarizado de imágenes por rayos X en el que se proyecta un haz angosto de rayos X a un paciente y se gira rápidamente alrededor del cuerpo, produciendo señales que son procesadas por la computadora de la máquina para generar imágenes transversales—o “cortes”—del cuerpo. Estos cortes se llaman imágenes tomográficas y contienen información más detallada que los rayos X convencionales. Una vez que la computadora de la máquina recolecta varios cortes sucesivos, se pueden “apilar” digitalmente para formar una imagen tridimensional del paciente que permita más fácilmente la identificación y ubicación de las estructuras básicas, así como de posibles tumores o anormalidades. Algunos estudios requieren el uso de un contraste para una mejor definición de la imagen.

Todos los rayos X producen una radiación ionizante, la cual tiene el potencial de provocar efectos biológicos en el cuerpo humano.

Bajo algunas circunstancias raras de exposición prolongada a grandes dosis, los rayos X pueden provocar efectos adversos a la salud como enrojecimiento de la piel (eritema), lesión al tejido de la piel, pérdida de cabello, cataratas o malformaciones congénitas (si el estudio se llevó a cabo durante un embarazo).

En el caso de mujeres embarazadas, sí debe evitarse su realización, por el riesgo de afectar al feto, tal como ocurre con todos los procedimientos diagnósticos que usan rayos X.

Tipos de tomografías que realizamos:

Angiotomografía: Se lleva a cabo generalmente para ayudar a diagnosticar y evaluar enfermedades de los vasos sanguíneos como aneurismas o bloqueos. 

Colonoscopia virtual: Durante el examen, se inserta dentro del recto un pequeño tubo por una distancia corta para poder inflarlo con gas mientras se toman las imágenes por TC del colon y del recto. No requiere sedación ni anestesia.

TC con contraste endovenoso.

TC con contraste oral.

TC con contraste oral y endovenoso.

Uro tomografía.

Peso máximo autorizado por equipo: 120 kg.`,
    imagen: "/img/servicios/equipoCt.webp",
  },
  {
    nombre: "Resonancia Magnética",
    descripcion:
      "Contamos con resonadores de alto campo que brindan imágenes detalladas del cerebro, columna, articulaciones y órganos internos. Protocolos funcionales y secuencias especiales para estudios complejos.",
    detalle: `La IRM es una tecnología de imágenes no invasiva que produce imágenes anatómicas tridimensionales detalladas, sin el uso de la radiación dañina. Se usa frecuentemente para la detección de enfermedades, el diagnóstico y el monitoreo de tratamientos. Los escáneres de IRM son particularmente apropiados para obtener imágenes de las partes no óseas o de los tejidos blandos del cuerpo.

Ayuda a detectar y tratar precozmente una enfermedad. Proporciona información detallada rápidamente y puede reducir la necesidad de ciertas cirugías de diagnóstico.

La IRM emplea imanes poderosos que producen un potente campo magnético que obliga a los protones en el cuerpo a alinearse con ese campo. Cuando se pulsa una corriente de radiofrecuencia a través de un paciente, los protones son estimulados y giran fuera de equilibrio, luchando contra la fuerza del campo magnético. Cuando se apaga el campo de radiofrecuencia, los sensores de IRM son capaces de detectar la energía liberada mientras los protones se realinean con el campo magnético.

Los medios de contraste (que a menudo contienen el elemento gadolinio) se pueden administrar al paciente por vía intravenosa, antes o durante la IRM, para aumentar la velocidad a la cual los protones se realinean con el campo magnético. Mientras más rápido se realineen los protones, más brillante será la imagen.

Generalmente no se puede someter a una resonancia magnética si su cuerpo tiene:

Un implante de un dispositivo electrónico, como marcapasos, ciertos clips quirúrgicos, alguna válvula cardiaca artificial o implantes auditivos metálicos.
Un objeto de metal que contenga hierro o material ferromagnético.
También debe comunicar si tiene antecedentes de haber trabajado con metales, si es diabético y toma hipoglucémicos orales. En el caso de las mujeres, debe comunicar en caso en que está embarazada o cree estarlo o si está amamantando.

Tipo de Resonancia que realizamos:

Resonancia sin contraste, resonancia de abdomen – colangioresonancia – multiparamétrica de próstata, resonancia de abdomen – uro resonancia, resonancia de pelvis / ginecológica – próstata, resonancia obstétrica, resonancia con anestesia, artroresonancia.

Peso máximo autorizado por equipo: 120 kg.`,
    imagen: "/img/servicios/equipoRm.webp",
  },
  {
    nombre: "Ecografía",
    descripcion:
      "Ecógrafos digitales de alta definición para estudios abdominales, obstétricos, musculares y vasculares. Incluye ecografía doppler, 4D y evaluaciones pediátricas especializadas.",
    detalle: `La ecografía, también llamada ultrasonografía o ecosonografía, es un procedimiento de diagnóstico que emplea el ultrasonido para crear imágenes bidimensionales o tridimensionales.

Un pequeño instrumento muy similar a un «micrófono» llamado transductor emite ondas de ultrasonidos.

Tipos de ecografías que realizamos:

Ecografías: Ginecológica, Transvaginal, Obstétrica, Mamaria y mamaria tridimensional, Tiroidea, Testicular, Abdominal, Hepatobiliar, Vejiga o Próstata, Renal, Pancreática o Suprarrenal, Ecografía de cerebro y caderas, músculos esqueléticos y partes blandas.

Ecografías con Doppler: Transvaginal, tiroidea y testicular con Doppler, eco vasos del cuello con Doppler, ecocardiograma Doppler, ecografía abdominal y renal con Doppler, eco arterial de miembros inferiores.`,
    imagen: "/img/servicios/equipoEcografia.webp",
  },
  {
    nombre: "Radiología Digital",
    descripcion:
      "Sistema radiológico completamente digital que optimiza la obtención de imágenes y reduce la exposición a radiación. Permite diagnósticos rápidos y precisos en todo tipo de estudios convencionales.",
    detalle: `Una radiografía es una prueba rápida e indolora que genera imágenes de las estructuras internas del cuerpo, en especial de los huesos. Los haces de rayos X pasan a través del cuerpo y se absorben en diferentes cantidades según la densidad del material a través del cual pasan. Los materiales densos, como huesos y metales, aparecen de color blanco. El aire en los pulmones aparece de color negro y la grasa y músculos aparecen como sombras de color gris. En algunos tipos de radiografías, se introduce un medio de contraste (como yodo o bario) en el cuerpo para poder observar más detalles en las imágenes.
Este estudio está contraindicado en el embarazo.

Tipos de radiografías que realizamos: Simples y Contrastados.

Radiografía Contrastada: Cistouretrografía Retrograda y Miccional, Rx Videodeglución, Rx Seriada Esofagastroduodenal/Tránsito Esofágico, Rx Tránsito de Intestino Delgado, Histerosalpingografía, Colon por enema`,
    imagen: "/img/servicios/equipoRx.webp",
  },
  {
    nombre: "Cámara Gamma – Medicina Nuclear",
    descripcion:
      "Estudios funcionales que evalúan el metabolismo y la fisiología de los órganos. Diagnóstico temprano de patologías tiroideas, óseas, cardíacas y renales mediante radiofármacos seguros.",
    detalle: `La cámara gamma o gamma cámara es un dispositivo de captura de imágenes, comúnmente utilizado en medicina nuclear como instrumento para el estudio de enfermedades. Consta de un equipo de detección de radiación gamma. Esta radiación procede del propio paciente a quien se le inyecta, generalmente por vía intravenosa, un trazador radiactivo (radioisótopo). La modalidad de diagnóstico clínico que realizan las gamma cámaras se denomina gammagrafía. 

 

Tipos de Cámara Gamma que realizamos: ósea, renal, paratiroides, pulmonar, linfática, flebogammagrafia, salival, vaciamiento gástrico, detección de hemorragia digestiva, ganglio centinela, rastreo corporal total, dosis terapéutica para cáncer de tiroides, amiloidosis cardiaca, ciprofloxacina para procesos de inflamación e infección, detección de mucosa gástrica ectópica, centellograma de tiroides para tiroideopatias (por ejemplo, hipertiroidismo, bocio), etc.`,
    imagen: "/img/servicios/equipoGamma.webp",
  },
  {
    nombre: "PET-CT",
    descripcion:
      "Tomografía por Emisión de Positrones combinada con Tomografía Computada. Técnica avanzada para diagnóstico oncológico, neurológico y cardíaco, que detecta alteraciones metabólicas antes de cambios estructurales.",
    detalle: `El PET/CT es una técnica de imágenes híbridas que combina la tomografía por emisión de positrones (PET), aportando información metabólica y funcional y la tomografía computada (CT) que brinda información anatómica permitiendo el diagnóstico precoz y preciso de diferentes patologías. El estudio se realiza a través de la inyección por vía endovenosa de fármacos radiactivos que nos ayudan a detectar por medio de las imágenes lo que ocurre a nivel celular.

Consiste en una técnica de imagen no invasiva que permite la evaluación de cuerpo completo en corto tiempo.

La principal aplicación es en el área de la oncología, pero también es de gran utilidad en las áreas de neurología, infectología, endocrinología y cardiología, entre otras.

Optimiza la detección morfológica y metabólica de lesiones por su alta resolución.
Determinar la benignidad o malignidad de una lesión.
Estadificar y reestadificar la patología tumoral.
Valorar la respuesta al tratamiento.
Identificación de la lesión primitiva en tumores de origen desconocido.
Planificación y seguimiento de tratamientos de radioterapia.
El registro de imágenes demora alrededor de treinta minutos a una hora, sin embargo, deberá permanecer en la Institución aproximadamente tres horas para la realización de la vía y posterior distribución del radiofármaco.

Preparación PET/CT con FDG Descargar indicaciones AQUI

Equipamiento

Tomógrafo Hibrido PET/CT Siemens BIOGRAPH HORIZON– Con modo de adquisición y reconstrucción 3D. CT espiral de alto rendimiento de 16 cortes.

UltraHD-PET: Detectores basados en LSO y electrónica de alta velocidad. Ofrece una imagen con una relación señal-ruido mejorada que puede usarse para mejorar la calidad de la imagen, reducir la dosis o reducir el tiempo de adquisición de un paciente. Permitiendo escaneos más rápidos, menor dosis inyectada y mejor calidad de imagen.`,
    imagen: "/img/servicios/equipoPet.webp",
  },
  {
    nombre: "Densitometría Ósea",
    descripcion:
      "Evaluación precisa de la densidad mineral ósea para la detección y control de la osteoporosis. Equipos certificados con software de análisis comparativo.",
    detalle: `La densitometría ósea es el procedimiento por excelente para determinar la masa ósea y medir la disminución de la densidad cuando está por debajo del umbral de fractura.

Permite medir la cantidad de calcio que tienen los huesos por cm2. El tejido óseo está compuesto básicamente por un mineral, el calcio, que le da la hace de dureza y resistencia si se encuentra en un porcentaje apropiado.

La densitometría ósea es una manera segura, efectiva, no invasiva e indolora de obtener información acerca de los huesos.

Indicaciones para la solicitud de una densitometría ósea:

Mujeres de edad igual o mayor a 65 años o mujeres postmenopáusicas menores de 65 años con factores de riesgo para fractura;
Hombres de edad igual o mayor a 70 años o menores de 70 años con factores de riesgo para fractura;
Adultos de cualquier edad con enfermedades y condiciones asociadas a baja masa ósea o a pérdida ósea, o con antecedentes de fractura por fragilidad;
En cualquier persona bajo tratamiento por osteoporosis, para monitorear la eficacia del tratamiento;
Las mujeres que interrumpan un tratamiento con estrógenos; 
Pacientes pediátricos con enfermedades óseas; etc.
 

Este estudio está contraindicado en el embarazo.

 

Tipo de densitometría que realizamos:

DMO de cuello de fémur y columna lumbar.
DMO dual de fémur (ambas caderas)
DMO de tercio distal de radio/ radio 33/ radio ultra distal
Composición corporal total o DMO de cuerpo entero`,
    imagen: "/img/servicios/equipoDensito.webp",
  },
  {
    nombre: "Mamografía",
    descripcion:
      "Procedimientos guiados por imagen que permiten localizar lesiones y obtener muestras de tejido con mínima invasión, garantizando seguridad y exactitud diagnóstica.",
    detalle: `La mamografía de exploración es un tipo específico de toma de imágenes de los senos que utiliza rayos X de baja dosis, ayuda en la detección temprana y el diagnóstico de las enfermedades mamarias en las mujeres. 

Ambos mamógrafos son digitales, cuyos sistemas son similares a los que tienen las cámaras digitales y su eficiencia permite obtener mejores fotografías con una dosis más baja de radiación. Las imágenes de las mamas se transfieren a una computadora para su revisión por un radiólogo y para su almacenamiento a largo plazo sin deteriorarse. 

Tipos de mamografías que realizamos:

Magnificada Bilateral o Unilateral: esta técnica generalmente se utiliza para ver microcalcificaciones de las mamas.

Focalizada Bilateral o Unilateral: esta técnica generalmente se utiliza para ver distorsiones o asimetrías en las mamas, y en menor medida para la visualización de nódulos mamarios.

Tomo síntesis Bilateral o Unilateral: es una forma avanzada de toma de imágenes del seno en la que múltiples imágenes de los senos, tomadas desde diferentes ángulos, son capturadas y reconstruidas (sintetizadas) en grupos de imágenes tridimensionales. Esta técnica generalmente se utiliza para ver distorsiones y/o nódulos mamarios.`,
    imagen: "/img/servicios/equipoMamografia.webp",
  },
]

export default function Diagnostico() {
  const [abierto, setAbierto] = useState(null)
  return (
    <>
      <SeoTags
        title="Diagnóstico por Imágenes | ICRR"
        description="Servicios de ecografía, tomografía, resonancia y más con tecnología de vanguardia."
        image="/logos/icrr_logo2.jpg"
      />
      <section className="relative min-h-screen bg-[#F4F6FB] pb-24 overflow-x-hidden">
        {/* Fondo decorativo tenue */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10 mix-blend-luminosity">
          <img
            src="/servicios/DI.png"
            alt="fondo"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F4F6FB] opacity-100 h-[600px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-16 md:pt-24">
          {/* Encabezado Principal */}
          <div className="text-center mb-20">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#0B2CF5] flex items-center justify-center border-[8px] border-white shadow-xl mx-auto mb-10"
            >
              <span className="text-white text-[40px] md:text-[56px] font-black tracking-tighter">Di</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black text-[#0B2CF5] mb-6 tracking-tight"
            >
              Diagnóstico por Imágenes
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#505050] font-medium text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed"
            >
               Servicios de ecografía, tomografía, resonancia y más con tecnología de vanguardia.
            </motion.p>
          </div>

          {/* Grid de servicios */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative max-w-6xl mx-auto mb-24">
            {servicios.map((serv, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col h-full hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-50"
              >
                {/* Imagen embutida */}
                <div className="p-4 pb-0">
                  <div className="relative h-[240px] md:h-[280px] rounded-[2rem] overflow-hidden">
                    <img
                      src={serv.imagen}
                      alt={serv.nombre}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2CF5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Contenido info */}
                <div className="p-8 md:p-10 flex-grow flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F6FB] flex items-center justify-center text-[#0B2CF5] flex-shrink-0">
                      <Radiation className="w-6 h-6" strokeWidth={2.5} />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-[#0B2CF5] leading-tight tracking-tight">
                      {serv.nombre}
                    </h2>
                  </div>

                  <p className="text-[#505050] text-[16px] leading-relaxed font-medium mb-8">
                    {serv.descripcion}
                  </p>

                  {serv.detalle && (
                    <div className="mt-auto">
                      <button
                        onClick={() => setAbierto(abierto === i ? null : i)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F4F6FB] text-[#0B2CF5] text-sm font-black hover:bg-[#0B2CF5] hover:text-white transition-all duration-300"
                      >
                        {abierto === i ? "VER MENOS" : "VER MÁS DETALLE"}
                      </button>

                      <AnimatePresence>
                        {abierto === i && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden mt-8"
                          >
                            <div className="pt-8 border-t border-gray-100">
                              <p className="text-[#505050] whitespace-pre-line text-[15px] leading-relaxed font-medium">
                                {serv.detalle}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

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
