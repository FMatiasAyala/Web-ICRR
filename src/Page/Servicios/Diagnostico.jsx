import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarDays } from "lucide-react"
import { Link } from "react-router-dom"

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
    imagen: "/img/servicios/equipoCt.jpg",
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
    imagen: "/img/servicios/equipoRm.jpg",
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
    imagen: "/img/servicios/equipoEcografia.jpg",
  },
  {
    nombre: "Radiología Digital",
    descripcion:
      "Sistema radiológico completamente digital que optimiza la obtención de imágenes y reduce la exposición a radiación. Permite diagnósticos rápidos y precisos en todo tipo de estudios convencionales.",
    detalle: `Una radiografía es una prueba rápida e indolora que genera imágenes de las estructuras internas del cuerpo, en especial de los huesos. Los haces de rayos X pasan a través del cuerpo y se absorben en diferentes cantidades según la densidad del material a través del cual pasan. Los materiales densos, como huesos y metales, aparecen de color blanco. El aire en los pulmones aparece de color negro y la grasa y músculos aparecen como sombras de color gris. En algunos tipos de radiografías, se introduce un medio de contraste (como yodo o bario) en el cuerpo para poder observar más detalles en las imágenes.
Este estudio está contraindicado en el embarazo.

Tipos de radiografías que realizamos: Simples y Contrastados.

Radiografía Contrastada: Cistouretrografía Retrograda y Miccional, Rx Videodeglución, Rx Seriada Esofagastroduodenal/Tránsito Esofágico, Rx Tránsito de Intestino Delgado, Histerosalpingografía, Colon por enema`,
    imagen: "/img/servicios/equipoRx.jpg",
  },
  {
    nombre: "Cámara Gamma – Medicina Nuclear",
    descripcion:
      "Estudios funcionales que evalúan el metabolismo y la fisiología de los órganos. Diagnóstico temprano de patologías tiroideas, óseas, cardíacas y renales mediante radiofármacos seguros.",
    detalle: `La cámara gamma o gamma cámara es un dispositivo de captura de imágenes, comúnmente utilizado en medicina nuclear como instrumento para el estudio de enfermedades. Consta de un equipo de detección de radiación gamma. Esta radiación procede del propio paciente a quien se le inyecta, generalmente por vía intravenosa, un trazador radiactivo (radioisótopo). La modalidad de diagnóstico clínico que realizan las gamma cámaras se denomina gammagrafía. 

 

Tipos de Cámara Gamma que realizamos: ósea, renal, paratiroides, pulmonar, linfática, flebogammagrafia, salival, vaciamiento gástrico, detección de hemorragia digestiva, ganglio centinela, rastreo corporal total, dosis terapéutica para cáncer de tiroides, amiloidosis cardiaca, ciprofloxacina para procesos de inflamación e infección, detección de mucosa gástrica ectópica, centellograma de tiroides para tiroideopatias (por ejemplo, hipertiroidismo, bocio), etc.`,
    imagen: "/img/servicios/equipoGamma.jpg",
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
    imagen: "/img/servicios/equipoPet.jpg",
  },
  {
    nombre: "Densitometría Ósea",
    descripcion:
      "Evaluación precisa de la densidad mineral ósea para la detección y control de la osteoporosis. Equipos certificados con software de análisis comparativo.",
    detalle: `La densitometría ósea es el procedimiento por excelente para determinar la masa ósea y medir la disminución de la densidad cuando está por debajo del umbral de fractura.

Permite medir la cantidad de calcio que tienen los huesos por cm2. El tejido óseo está compuesto básicamente por un mineral, el calcio, que le da la dureza y resistencia si se encuentra en un porcentaje apropiado.

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
    imagen: "/img/servicios/equipoDensito.jpg",
  },
  {
    nombre: "Punción Mamaria",
    descripcion:
      "Procedimientos guiados por imagen que permiten localizar lesiones y obtener muestras de tejido con mínima invasión, garantizando seguridad y exactitud diagnóstica.",
    detalle: `La PAAF es una prueba diagnóstica que consiste en la extracción de una muestra total o parcial de tejido para ser examinada al microscopio por un patólogo.`,
    imagen: "/img/servicios/imagenPuncion.jpg",
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
    imagen: "/img/servicios/equipoMamografia.jpg",
  },
  {
    nombre: "Marcación Mamaria",
    descripcion:
      "Procedimientos guiados por imagen que permiten localizar lesiones y obtener muestras de tejido con mínima invasión, garantizando seguridad y exactitud diagnóstica.",
    detalle: `La Marcación es un procedimiento que consiste en marcar la ubicación de una lesión no palpable (detectada en Mamografía, Ecografía Mamaria, Resonancia Magnética, etc.), que ha de ser extirpada quirúrgicamente.

A través de una aguja fina, ha de colocarse una sustancia o producto “marcador” en la lesión no palpable, con objeto de facilitar la labor del cirujano.

El procedimiento de marcación puede ser realizado por ecografía (cuando hay que marcar nódulos) o mamografía (generalmente empleado para marcar microcalcificaciones y distorsiones).`,
    imagen: "/img/servicios/imagenMarcacion.jpg",
  },
]

export default function Diagnostico() {
  const [abierto, setAbierto] = useState(null)
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Encabezado */}
      <div className="relative h-[50vh] w-full overflow-hidden rounded-3xl mb-16 shadow-md">
        <img
          src="/servicios/DI.png"
          alt="Sala de diagnóstico por imágenes"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2342]/90 via-[#0A2342]/60 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Diagnóstico por Imágenes
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Tecnología avanzada, precisión diagnóstica y un equipo médico especializado
            comprometido con la excelencia.
          </p>
        </div>
      </div>

      {/* Grid de servicios */}
      <div className="grid md:grid-cols-2 gap-16 relative overflow-visible">
        {servicios.map((serv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative rounded-3xl shadow-xl bg-white overflow-visible"
          >
            {/* Imagen */}
            <img
              src={serv.imagen}
              alt={serv.nombre}
              className="w-full h-[320px] object-cover rounded-t-3xl"
            />

            {/* Info principal */}
            <div className="relative -mt-12 mx-auto w-[90%] md:w-[85%] bg-white shadow-lg rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-[#0A2342] mb-2">
                {serv.nombre}
              </h2>
              <p className="text-gray-700 text-[15px] leading-relaxed">
                {serv.descripcion}
              </p>

              {serv.detalle && (
                <>
                  <button
                    onClick={() => setAbierto(abierto === i ? null : i)}
                    className="mt-4 inline-flex items-center gap-2 text-[#2E86AB] font-medium hover:text-[#0A2342] transition"
                  >
                    {abierto === i ? "Ocultar detalle ▲" : "Ver más detalle ▼"}
                  </button>

                  <AnimatePresence>
                    {abierto === i && (
                      <motion.div
                        key="detalle"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="absolute left-0 top-full mt-4 w-full bg-white p-6 rounded-2xl shadow-2xl z-50 border border-gray-100"
                      >
                        <p className="text-gray-700 whitespace-pre-line leading-relaxed text-[15px]">
                          {serv.detalle}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      {/* BLOQUE TURNOS */}
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
