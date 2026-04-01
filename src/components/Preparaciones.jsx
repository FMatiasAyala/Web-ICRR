import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { details } from "framer-motion/client"

export default function Preparaciones() {
  const [activoServicio, setActivoServicio] = useState(null)
  const [activoEstudio, setActivoEstudio] = useState(null)

  const data = [
    {
      nombre: "Cámara Gamma – Medicina Nuclear",
      estudios: [
        {
          titulo: "FLEGOGRAFÍA",
          detalle: `No requiere preparación.`,
        },
        {
          titulo: "CURVA DE CAPACITACIÓN Y GAMMAGRAFÍA DE TIROIDES",
          detalle: `Ayunas total de 6 hs antes (ni agua para el primer día). Los días restantes desayuno normal.

Suspender la siguiente medicación:
- T4: 35 días (5 sem)
- T3: 21 días (3 sem)
- Metimazol: 7 días
- Cualquier otra medicación que contenga yodo: Plidex (trimebutina), Atlansil (Amiodarona, suspensión > 9 meses).
- Contrastes radiológicos yodados hidro y liposolubles (2-6 semanas previas y 4-6 meses previas, respectivamente)
- Tinturas para el cabello, bronceadores, pescados y frutos de mar, etc.`,
        },
        {
          titulo: "ESTUDIO DINÁMICO RENAL (ESTÁTICA Y FUNCIONAL)",
          detalle: `1ª Parte – ESTÁTICA
Debe asistir el primer día para la administración del radiofármaco y regresar entre 6 a 8 hs después de la administración para los registros de imágenes.

Preparación: alimentación habitual, deberá tomar abundante cantidad de líquidos (de cualquier clase), puede orinar las veces que desee.

DEBERÁ TRAER:
- Peso y estatura
- Lista de medicamentos actuales o recientes
- Resumen de historia clínica
- Copias de estudios anteriores (biopsias, análisis, ecografía, TAC, RMN, etc.)
- Gammagrafía anterior (original)

2º Parte – FUNCIONAL
Regresar otro día para la administración del segundo radiofármaco.
Preparación: deberá tomar 1½ litro de cualquier tipo de líquido antes de la administración del segundo radiofármaco y orinar las veces que desee.

IMPORTANTE: para dicho estudio el paciente NO DEBE TENER TOS.`,
        },
        {
          titulo: "GAMMAGRAFIA RENAL (ESTATICO – DINAMICO) CON ANESTESIA GENERAL SUPERFICIAL PARA INMOVILIZAR AL PACIENTE",
          detalle: `1ª Parte – ESTATICA

 Preparación: Desayuno habitual.

Un día antes del turno deberá tomar abundante cantidad de líquidos (de cualquier clase) y orinar normalmente.

Debe asistir el primer día, para la administración del radiofármaco, debiendo traer el paciente una vía colocada (en el pliegue del brazo preferentemente), con heparina o con dextrosa. 

Regresará a las… hs., con ayuno total (ni agua) de……. horas, para los registros de imágenes que se realizaran BAJO ANESTESIA.

2º Parte – FUNCIONAL

regresará para la administración del segundo radiofármaco el día …../…../….. a las …..:….. hs. con ayuno total (ni agua) de….. hs. fundamental para poder realizar la anestesia.
          `
        },
        {
          titulo: "CENTELLOGRAMA PARA DETECCION DE AMILOIDOSIS CARDIACA",
          detalle: `Desayuno y/o Almuerzo habitual (FUNDAMENTAL) y medicación normal.

Es fundamental que el organismo esté bien hidratado previamente, por lo que le sugerimos aumentar la cantidad de líquidos ingeridos durante las 24 horas previas a la realización del estudio.

Luego de inyectado el radiofármaco, deberá continuar con la hidratación oral y orinar cuantas veces lo desee.

Registro de imágenes se realizará aproximadamente 3 hs después de la inyección o según lo indicado por el técnico.
          `
        },
        {
          titulo: "GAMMAGRAFIA HEPATICA",
          detalle: `Preparación: desayuno y medicamento normal.`
        },
        {
          titulo: "GAMMAGRAFIA DE GLANDULAS SALIVALES",
          detalle: `Importante: Avisar si el paciente es claustrofóbico.

Preparación: Ayuno de 2 horas.`
        },
        {
          titulo: "GAMMAGRAFIA DE TIROIDES",
          detalle: `No requiere preparación.`
        },
        {
          titulo: "GAMMAGRAFIA DE PARATIROIDES C SPECT",
          detalle: `IMPORTANTE: Avisar si realiza hemo-diálisis.

Preparación: Desayunar. Tomar sus medicamentos.`
        },
        {
          titulo: "GAMMAGRAFIA DE VENTILACION – PERFUSION PULMONAR",
          detalle: `No requiere preparación.`
        },
        {
          titulo: "RASTREO CORPORAL TOTAL CON IODO",
          detalle: `Deberá suspender las hormonas tiroideas 35 díasantes del turno y debe realizar una dieta Hipoyodica 10 días antes de realizar la toma del 131 Iodo.

AYUNAS

Tomar 8 hs y 2 hs. antes 40 gotas de Reliveran o Metroclopamida con un poco de agua.
Estar en ayuna de 6 hs. antes ni agua puede tomar (excepto la que beba con el reliveran).
Dos días previos al estudio, se recomienda ingerir una dieta rica en fibras y productos vegetales, y el uso de un laxante suave, para que la actividad intestinal no interfiera con la interpretación de las imágenes.`
        },
        {
          titulo: "GANGLIO CENTINELA – LINFOGRAFIA DE MAMA",
          detalle: `Desayunar, almorzar (comida normal) y tomar sus medicamentos habituales.`
        },
        {
          titulo: "OCTREOSCAN",
          detalle: `1.Suspender análogos de somatostatina de vida media corta, 24 horas antes del estudio y de vida media larga 3-4 semanas previas al estudio, si las condiciones del paciente lo permiten (consultar con médico de cabecera).
          2.Es fundamental que el organismo esté bien hidratado previamente, por lo que le sugerimos aumentar la cantidad de líquidos ingeridos durante las 24 horas previas a la realización del ESTUDIO.
          3.Desayuno y/o Almuerzo habitual (FUNDAMENTAL).
          4.Informar si presenta problemas renales (se realiza el estudio post diálisis) o si es diabético.
          5.A partir del día __/__/__ comer muchas frutas y verduras frescas, consumir solo carne de pollo o pescado y evitar las pastas.
          6.El día __/__/__ tomar con el desayuno y con la cena Limonada de Roget (efervescente o en polvo). Repetir de la misma manera al día siguiente__/__/__.
NOTA: Preparar un frasco de la Limonada de Roget (como indica en el prospecto). Tomar la mitad con el desayuno y la otra mitad guardar en la heladera y tomar con la cena. Siempre y cuando el paciente no padezca diarrea o insulinoma. Luego de inyectado el radiofármaco, deberá continuar con la hidratación oral por 2-3 días posteriores y orinar cuantas veces lo desee.

Registro de imágenes se realizará aproximadamente a los 10 minutos y 3 hs después de la inyección o según lo indicado por el técnico.`
        },
        {
          titulo: "GAMMAGRAFIA OSEA",
          detalle: `1.Desayuno y/o Almuerzo habitual (FUNDAMENTAL) y medicación normal.
          2.Es fundamental que el organismo esté bien hidratado previamente, por lo que le sugerimos aumentar la cantidad de líquidos ingeridos durante las 24 horas previas a la realización del ESTUDIO.
          3.Venir con ropa cómoda, calza, pantalón jogging.
Luego de inyectado el radiofármaco, deberá continuar con la hidratación oral y orinar cuantas veces lo desee.

Registro de imágenes se realizará aproximadamente 3 hs después de la inyección o según lo indicado por el técnico.`
        },
        {
          titulo: "GAMMAGRAFIA DE VACIAMIENTO GASTRICO",
          detalle: `Ayuno de 4hs.
Suspender medicación por 48hs (metoclopramida, domperidona, eritromicina, opiáceos, antiespasmódicos, atropina, nifedipina, progesterona, octreotide, teofilina, benzodiacepinas y fentolamina). Salvo que se desee evaluar el efecto de la medicación.
Paciente insulino-dependiente: controlar la glucemia y ajustar la dosis de insulina si fuera necesario. (&lt; 200 mg/dl) – traer insulina y monitor-.
Pacientes con antidiabéticos orales: mantener su medicación y realizar una dieta liviana en las 48hs previas.
Mujer en edad fértil realizar el estudio en los primeros 10 días del ciclo (contando desde el día uno de la menstruación) para evitar efectos de variación hormonal.
Antecedentes:

Informar sobre enfermedades relacionadas (hernia de hiato, reflujo gastro esofágico, trastornos de la motilidad esofágica, intervenciones previas)

Precauciones:

Pacientes alérgicos a los ingredientes de la comida (huevo – celiacos)`
        },
        {
          titulo: "PERFUSION MIOCÁRDICA REPOSO/ ESFUERZO APREMIO FARMACOLÓGICO",
          detalle: `Ayuno de 4 horas
En las 72 hrs previas al estudio no deberá tomar mate, café, té, golosinas en general, bebidas cola, dulces o postres, y ningún otro producto que contenga cafeína o vainilla.
No deberá realizar actividades físicas extenuante 12 horas previas al estudio.
Concurrir con ropa comoda y calzado deportivo.
El estudio requiere de una duración de 4 horas. Consultar en caso de tomar medicación bisoprolol-carvedil. Consultar si tiene dificultad motriz.`
        },
        {
          titulo: "COMBINACION DE TURNOS/ ESTUDIOS",
          detalle: `DMO y Gammagrafía/Radiología CC/Tomografía CC: Debe realizarse primero la densitometría.
Gammagrafía y Ecografía/Radiografía SC/Mamografía/Tac SC/Punción/Marcación de cualquier tipo: Preferentemente se debe realizar primero el otro estudio y posteriormente la gammagrafía, pero un paciente puede hacerse ambos en el mismo día.
Si tuviera una solicitud de ecografía común (no mamaria) y mamografía/densitometría, siempre hay que priorizar el turno de la ecografía y asignarle este primero.

Gammagrafía y Tomografía CC/Radiología CC: Preferentemente se debe realizar primero la gammagrafía y a las 24 hs se puede otorgarle el turno para la tomografía/radiología con contraste. 
Si el paciente se realiza el estudio contrastado primero, hay que indicarle que después de realizarse el estudio tome mucho líquido para eliminar el contraste yodado, y se debe esperar 48 hs para asignarle un turno de Cámara Gamma.

Si el paciente solicita un turno de Gammagrafía de Tiroides, se debe esperar un mes después de hacerse la tomografía con contraste para asignarle un turno.

Mamografía y Ecografía Mamaria: Se hace primero la mamografía (por lo menos con 45 minutos de anticipación).
TAC cc y RX cc: Primero se debe hacer la tomografía contrastada, y posteriormente el estudio radiológico.
RNM cc y TAC cc: se tiene que esperar entre 48 a 72 hs entre un turno y el otro.
Cualquier otra combinación de estudios médicos, es indistinto el orden de los mismos.`
        }
      ],
    },
    {
      nombre: "Ecografía",
      estudios: [
        // 👉 Ejemplo de placeholder para que agregues luego
        {
          titulo: "ECOGRAFIA.",
          detalle: ` La preparación depende de cada ecografía. Las que no se encuentran especificadas, es porque no requieren preparación previa.`
        },
        {
          titulo: "ABDOMINAL / HEPATOBILIAR PANCREATICA / SUPRARENAL",
          detalle: `Adultos: Concurrir con 8 a 12 horas de ayuno total. Solo puede tomar agua. Si toma alguna medicación puede tomarla con agua no gasificada. Puede tomar infusiones también (te/mate cocido) con azúcar.

Niños: Concurrir con 4 a 6 horas de ayuno.

Bebés: suspender la última teta.`
        },
        {
          titulo: "MAMARIA",
          detalle: `No requiere preparación previa.

En el caso de ABVS, no serán aptas las mujeres que: tengan cirugía de cualquier tipo, prótesis mamarias, nódulos mamarios, seguimiento de nódulos, quienes se hayan hecho o estén en tratamiento de quimioterapia o terapia radiante, personas menores de 18 años.

Quienes si están aptas: mujeres de 18 a 35 años sin estudios mamográficos y por control. Personas más de 35 años con mamografía de 1 año de antigüedad.`
        },
        {
          titulo: "RENAL / GINECOLOGICA / RENOVESICOPROSTATICA",
          detalle: `En caso de ser solo renal ayuno de 8 horas.

Si es renal y vesical, al incluir la vejiga debe, 1 hora antes del examen comenzar a tomar 1 litro de agua y retener orina.

Si es vesicoprostatica, 1 hora antes del examen comenzar a tomar 1 litro de agua y retener orina. Mismo caso la renovesicoprostatica.

Si es ginecológica, 1 hora antes del examen comenzar a tomar 1 litro de agua y retener orina.

En el caso de la obstétrica, luego de la semana 12 de embarazo no hace falta que las pacientes tomen agua.`
        },
        {
          titulo: "TRANSVAGINAL / TIROIDES / TESTICULAR / PARTES BLANDAS",
          detalle: `No requiere preparación.`
        },
        {
          titulo: "ELASTOSONOGRAFIA HEPATICA",
          detalle: `El paciente debe concurrir con 8 horas de ayuno total. Solo puede tomar agua.

No debe suspender la medicación.`
        }
      ],
    },
    {
      nombre: "Resonancia Magnética",
      estudios: [
        {
          titulo: "ARTRORESONANCIA",
          detalle: `Debe ingresar por tomografía 1 hora antes del turno para la aplicación del contraste.`
        },
        {
          titulo: "RESONANCIA SIN CONTRASTE (SIN GADOLINEO)",
          detalle: `No requiere preparación.`
        },
        {
          titulo: "RESONANCIA CON CONTRASTE (GADOLINEO)",
          detalle: `Se solicita asistir con 3 horas de ayuno.`
        },
        {
          titulo: "RESONANCIA DE ABDOMEN – COLANGIORESONANCIA – MULTIPARAMETRICA DE PROSTATA",
          detalle: `Se solicita asistir con 6 horas de ayuno sólido. Si se realiza el estudio por la tarde, en el almuerzo puede comer caldo o pure, nada de carnes.`
        },
        {
          titulo: "RESONANCIA DE ABDOMEN – URORESONANCIA",
          detalle: `Se solicita asistir con 6 horas de ayuno sólido. Si se realiza el estudio por la tarde, en el almuerzo puede comer caldo o pure, nada de carnes.

Retener orina, tiempo prudencial, para tener líquido en vejiga al momento del estudio.`
        },
        {
          titulo: "RESONANCIA DE PELVIS / GINECOLOGICA – PROSTATA",
          detalle: `Retener orina. No suspender medicación habitual.

 PREPARACION RESONANCIOA OBSTETRICA

No comer nada dulce mínimo 4 horas antes del turno.`
        },
        {
          titulo: "RESONANCIA CON ANESTESIA",
          detalle: `Requisitos:

A) Ordenes médicas autorizadas para Anestesia y Resonancia Magnética.

B) Consentimiento para anestesia firmado por padre, madre o familiar adulto a cargo.

C) Resultado de Electrocardiograma (hasta 4 meses de antigüedad).

D) AYUNO TOTAL (No ingerir sólidos ni líquidos):

-Pacientes de 0 a 2 años de edad: 4 (cuatro) horas.

-Pacientes a partir de los 2 años en adelante: 8 (ocho) horas.

E) Movilidad: luego de ser anestesiado el paciente deberá retirarse en vehículo ó ambulancia.

F) Debe estar acompañado de un familiar adulto.

G) Deberá encontrarse en perfectas condiciones de salud para la realización de la anestesia.

h) Anestésico a utilizar: sevorane (inhalatorio) x 50 cc.`
        },
      ],
    },
    {
      nombre: "Mamografía",
      estudios: [
        {
          titulo: "MAMOGRAFIA",
          detalle: `No requiere preparación ni suspender ningún tipo medicación. 

DURACIÓN Y HORARIOS DE ATENCION.

La modalidad es por orden de llegada, de lunes a viernes 7.30 a 20.30 hs.

Si tiene estudios complementarios como ser densitometría o ecografía mamaria se le otorga turno.

La mamografía tiene una duración de diez minutos.`
        },
        {
          titulo: "MARCACIÓN",
          detalle: `No requiere preparación. No tomar aspirinas o anticoagulantes los 5 días previos al estudio. No es necesario estar en ayunas, le recomendamos que coma algo dulce antes de venir.

DURACIÓN Y HORARIOS DE ATENCIÓN

 El paciente debe traer al consultorio todos sus estudios previos, el pedido de marcación de su médico y la fecha probable de su cirugía. Nuestros profesionales analizarán los estudios y nos comunicaremos de manera telefónica para concertar fecha y hora del turno. Por lo general se otorgan el día previo a la cirugía, y cada turno tiene una duración aproximada de 30 minutos. `
        },
        {
          titulo: "PUNCION",
          detalle: `No requiere preparación.

DURACIÓN Y HORARIOS DE ATENCIÓN

El paciente debe traer al consultorio todos sus estudios previos y el pedido de punción. Nuestros profesionales analizarán los estudios y nos comunicaremos de manera telefónica para concertar fecha y hora del turno. Puede ser que se le solicite al paciente un coagulograma.

Es fundamental coordinar además con un patólogo para el día de los turnos (que puede estar de forma presencial o no).

Cada turno tiene una duración aproximada de 30 minutos. `
        },
      ]
    },
    {
      nombre: "Tomografía Computada",
      estudios: [
        {
          titulo: "TOMOGRAFIA SIN CONTRASTE.",
          detalle: `No requiere preparación.
          DURACION TOMOGRAFIA SIN CONTRASTE.

El estudio dura 5 minutos. Puede concurrir al instituto sin turno y se lo atenderá por orden de llegada.`
        },
        {
          titulo: "TOMOGRAFIA CON CONTRASTE - Angiotomografia",
          detalle: `Misma preparación que con contraste endovenoso, pero además debe tomar agua si es una angiotomografia abdominal.

Debe concurrir con 8 horas de ayuno (no consumir sólidos, lácteos, ni mate 8 hrs antes del turno).

Si toma metformina debe suspenderlo.

El paciente debe concurrir con el resultado del test de alergia al yodo negativo. También debe firmar un consentimiento para la inyección de Yodo.`
        },
        {
          titulo: "TOMOGRAFIA CON CONTRASTE - Colonoscopia virtual",
          detalle: `48 horas antes del estudio:

 Suprima la ingestión de frutas, verduras, semillas, lácteos y cereales. Debe tomar abundantes liquidos no gasificados (té, mate,café, agua saborizada, caldos bien colados y gelatinas que no sean de color rojo) durante todo el día y hasta 2-4 horas antes del estudio.

Dia previo al turno:

– 8 hrs desayuno: té y galletitas de agua.

– 13 hrs almuerzo: cantidades habituales de carnes rojas o blancas, al horno o a la plancha con arroz o fideos. Postre: gelatina de frutas y/o helados de agua que no sean color rojo. Esta será la última comida sólida antes del examen.

– 17 hrs merienda: té y galletitas de agua.

– Entre las 16 y 18 hrs: Diluir el contenido de un sobre de novoprep en un vaso con agua (aprox. 200 ml), revolver durante 3 minutos e ingerirlo. Durante las siguientes 2 horas debe tomar 2 litros (aproximadamente 8 vasos) de líquidos claros (agua, caldo colado, jugos sin pulpa tipo Gatorade, mate, té).

– Entre las 22 y 24 hrs: Diluir el contenido de un sobre de novoprep en un vaso de agua (aproximadamente 200 ml), revolver durante 3 minutos e ingerirlo. Tomar a continuación 5 vasos de aproximadamente 200 ml de líquidos claros (agua, caldo colado, jugos sin pulpa tipo Gatorade, mate, té).

Diluir el e-z-cat en 500 cc de agua y de esto ingerir solamente 1 vaso.

Recuerde: solo podrá beber liquidos claros no gasificados (agua, té, mate, café y caldo colado o jugos sin pulpa tipo Gatorade y gelatinas) en la cantidad deseada hasta 2-4 previas al estudio.`
        },
        {
          titulo: "TAC con contraste endovenoso",
          detalle: `Debe concurrir con 8 horas de ayuno (no consumir sólidos, lácteos, ni mate 8 hrs antes del turno).

Si toma metformina debe suspenderlo.

El paciente debe concurrir con el resultado del test de alergia al yodo negativo. También debe firmar un consentimiento para la inyección de Yodo.`
        },
        {
          titulo: "TAC con contraste oral y endovenoso",
          detalle: `Día del turno: Diluir en 1 (un) litro de agua todo el E-Z-CAT, para comenzar a tomar dos horas antes de su turno, un vaso cada 10 o 15 minutos.

  *No es necesario retener la orina.          

  *El último 1/2 litro de la preparación traer al consultorio.

El paciente debe concurrir con ayuno de 8 horas (no consumir sólidos, lácteos, ni mate 8 hs. antes del turno). Si su turno es por la tarde, al mediodía podrá consumir solamente té o mate cocido con azúcar.

Si toma Metformina necesitamos que suspenda 48 hs. antes del turno.

El paciente debe concurrir con el resultado del test de alergia al yodo negativo. También debe firmar un consentimiento para la inyección de Yodo.`
        },
        {
          titulo: "TAC con contraste oral",
          detalle: `Día del turno: Diluir en 1 (un) litro de agua todo el EZ-CAT, para comenzar a tomar dos horas antes de su turno, un vaso cada 10 o 15 minutos.

  *No es necesario retener la orina.          

  *El último 1/2 litro de la preparación traer al consultorio.

El paciente debe concurrir con ayuno de 8 horas (no consumir sólidos, lácteos, ni mate 8 hs. antes del turno). Si su turno es por la tarde, al mediodía podrá consumir solamente té o mate cocido con azúcar.`
        },
        {
          titulo: "Urotomografía ",
          detalle: `Debe concurrir con 8 horas de ayuno (no consumir sólidos, lácteos, ni mate 8 hrs antes del turno).

Debe tomar 1 litro de agua ants del estudio.

Si toma metformina debe suspenderlo.

El paciente debe concurrir con el resultado del test de alergia al yodo negativo. También debe firmar un consentimiento para la inyección de Yodo. `
        },
        {
          titulo: "TOMOGRAFIA CON ANESTESIA",
          detalle: `En caso de que el paciente sea menor de edad, que tenga algún tipo de discapacidad mental o sea claustrofóbico, se podrá coordinar la realización de cualquier tipo de tomografía con anestesia, siempre y cuando el pedido de anestesia este realizado por el médico derivante del paciente.`
        },
      ]
    },
    {
      nombre: "Radiografía",
      estudios: [
        {
          titulo: "RADIOGRAFIA SIN CONTRASTE",
          detalle: `No requiere preparación.

 DURACION Y HORARIOS DE ATENCIÓN

El estudio dura aproximadamente entre 5 a 10 minutos.`
        },
        {
          titulo: "RADIOGRAFIA CON CONTRASTE",
          detalle: `DURACION Y HORARIOS DE ATENCIÓN

Sólo se realizan por la mañana. Cada turno dura 30 minutos.`
        },
        {
          titulo: "Cistouretrografía Retrograda y Miccional",
          detalle: `No requiere preparación. Los niños menores a 10 años deben presentar urocultivo negativo para otorgarles un turno (no debe superar el mes).

NIÑOS: Traer toallón grande o pañal de adulto + contraste + perfus + suero + sonda K 33.

MUJER ADULTA: traer contraste + perfus n. 1 + suero + sonda K 30 + un toallon grande.

HOMBRE ADULTO: traer contraste + perfus n. 1 + suero + jeringa x60ml + un toallon grande. 

Recomendaciones: tras realizar la prueba, puede sentir escozor y molestias al orinar. Es necesario aumentar la ingesta de líquidos.

Después del estudio puede realizar actividad normal.`
        },
        {
          titulo: "Video deglución",
          detalle: `0 a 6 meses: 4 hs de ayuno.       

6 meses a 2 años: 6 hs de ayuno.      

2 a 12 años: 12 hs de ayuno.

Mayores de 12 años: cena liviana a las 21 horas.

En caso de que el paciente tenga una sonda nasogástrica para alimentación, deberá hacérsela retirar antes de asistir al turno.

El día del examen, el paciente deberá traer: 

Un toallón

Si el pedido es de una video deglución líquido-sólido-semisólido, deberá traer 1 paquete de galletitas y un vasito de yogur firme.`
        },
        {
          titulo: "Rx Seriada Esofagastroduodenal/Tránsito Esofágico",
          detalle: `0 a 6 meses: 4 hrs de ayuno.       

6 meses a 2 años: 6 hrs de ayuno.        

2 a 12 años: 12 hrs de ayuno.

Mayores de 12 años: cena liviana a las 21 horas.

Si corresponde, recetar a los adultos:

Gastropaque S (Sulfato de bario) en polvo x 300 g
Buscapina inyectable simple 3 ampollas (1 caja) Hioscina butilbromuro (NO RECETAR BUSCAPINA SI ES SOLO TRÁNSITO ESOFÁGICO – NO RECETAR A PACIENTES CON PRESIÓN EN OJOS, CATARATAS O ANTICOAGULADOS)
El día del turno el paciente deberá traer: 

Un toallón.  
Adultos: traer 2 sobres de Alikal o Uvasal. 
Si es pediátrico, deben traer una mamadera.`
        },
        {
          titulo: "Rx Tránsito de Intestino Delgado",
          detalle: `Preparación Adultos:

Para este estudio usted deberá tomar dos envases de FOSFO-DOM.

DIA PREVIO AL EXAMEN:

Deberá mantener una dieta principalmente líquida.

– Evitar frutas, verduras y lácteos. Tomar abundantes líquidos claros no gasificados (agua mineral, caldos colados, jugos colados, mate, café o té).

– 13 horas – Almuerzo: carnes blancas o rojas condimentadas. Gelatinas de fruta.

– 17 horas – Diluir en un vaso de agua (250 cc) el contenido de un envase de FOSFO-DOM (45 ml) e ingerirlo. A continuación, tomar 2 vasos de agua.

ENTRE LAS TOMAS DE FOSFO-DOM UD. DEBERA INGERIR POR LO MENOS UN LITRO DE AGUA O LIQUIDOS CLAROS NO GASIFICADOS.

– 22 horas: Diluir en un vaso de agua (250 cc) el contenido de un envase de FOSFO-DOM (45ml) e ingerirlo. A continuación, tomar 2 vasos de agua. Puede ingerir la cantidad que desee de líquidos claros no gasificados.

DIA DEL EXAMEN: Asistir en ayuno y traer:

– Gastropaque S (Sulfato de bario) en polvo x 300 g

– 1 TOALLON

SI USTED ES DIABÉTICO, INSUFICIENTE RENAL, INSUFICIENTE CARDÍACO, ESTÁ EMBARAZADA O CREE ESTARLO, DEBE CONSULTAR PREVIAMENTE CON SU MÉDICO.

Preparación Niños de hasta 15 años: 

DIA PREVIO AL EXAMEN: deberá mantener una dieta principalmente líquida.

– Evitar frutas, verduras y lácteos. Tomar abundantes líquidos claros no gasificados (agua mineral, caldos colados, jugos colados, mate, café o té).

– 13 horas Almuerzo: carnes blancas o rojas condimentadas. Gelatinas de fruta.

– 21 horas Cena: Caldo o sopa.

DIA DEL EXAMEN: Debe presentarse en ayuno total.`
        },
        {
          titulo: "Histerosalpingografía",
          detalle: `No requiere preparación.

El turno debe ser asignado entre el octavo y décimo día del inicio del ciclo menstrual de la paciente. Si la paciente no presenta ciclo menstrual, se le solicita que traiga una nota de su médico indicando que éste último solicita el estudio en estas condiciones. 

La paciente debe mantener 48 hs de abstinencia sexual, con una higiene de la zona a estudiar. 

El día del turno el paciente deberá traer: estudios previos y una toallita femenina.`
        },
        {
          titulo: "Colon por enema",
          detalle: `Día previo al examen:

– Evitar frutas, verduras y lácteos. Tomar abundantes líquidos claros no gasificados (agua mineral, caldos colados, jugos colados, mate, café o té).

– 13 horas – Almuerzo: carnes blancas o rojas condimentadas. Gelatinas de fruta.

– 17 horas – Diluir en un vaso de agua (250 cc) el contenido de un envase de FOSFO-DOM (45 ml) e ingerirlo. A continuación, tomar 2 vasos de agua.

– 22 horas: Diluir en un vaso de agua (250 cc) el contenido de un envase de FOSFO-DOM (45ml) e ingerirlo. A continuación, tomar 2 vasos de agua. Puede ingerir la cantidad que desee de líquidos claros no gasificados.

ENTRE LAS TOMAS DE FOSFO-DOM DEBERÁ INGERIR POR LO MENOS UN LITRO DE AGUA O LÍQUIDOS CLAROS NO GASIFICADOS.

DÍA DEL TURNO: Antes de concurrir al turno debe tomar un té, café o jugo de frutas colado con abundante azúcar. 

El día del turno el paciente deberá traer:

Gastropaque «F» suspensión por enema,
Buscapina (amp), y
Un toallón.`
        },
        {
          titulo: "Rx Colon por enema por colostomía",
          detalle: `Aplicable a pacientes operados del colón.

El paciente debe prepararse los dos días previos a la fecha de su turno.

PRIMER DÍA: 

– Desayuno y merienda: Té, café o mate cocido con azúcar y tostadas, galletitas de agua o grisines, dulce o jalea de membrillo, queso mantecoso o tipo Petit Suisse. 

– Almuerzo y cena: Caldo desgrasado y colado con arroz, sémola o fideos, carne vacuna, pollo o pescado a la parrilla, plancha con manteca o aceite, postre y dulce de membrillo, compota de durazno-pera.

8 hs: Hacer enema evacuante de 1/2 litro de agua tibia con 2 cucharadas de sal por la cola/enemol.

18 hs: Diluir en un vaso de agua (250 cc) el contenido de un envase de FOSFO-DOM (45 ml) e ingerirlo. A continuación, tomar 2 vasos de agua y seguir tomando agua cada 2 horas 1 vaso grande.

SEGUNDO DIA: 

– Desayuno: Igual al día anterior. 

12 hs Almuerzo: 1 plato de caldo de pollo, 1 sándwich de pollo con galletitas, 1 vaso de jugo de pomelo o naranja colado, 100 gramos de jalea de membrillo. 

13 hs: 2 vasos de agua 

15 hs: 1 vaso de agua 

17 hs: 1 taza de té /mate cocido sin leche.

18 hs: Diluir en un vaso de agua (250 cc) el contenido de un envase de FOSFO-DOM (45 ml) o GADOLAX e ingerirlo. A continuación, tomar 2 vasos de agua. 

19 hs: 1 vaso de agua 

20 hs: cena: 1 plato de caldo de pollo, 1 vaso de jugo de pomelo o naranja colado, 1 vaso de agua

DÍA DEL TURNO: Antes de concurrir al turno debe tomar un té, café o jugo de frutas colado bien dulce. 

El día del turno el paciente deberá traer:

Gastropaque «F» suspensión por enema,
Buscapina (amp),
Un toallón, y
Repuesto bolsa de colostomía.
Colon por enema proximal – Segmento distal del colon

PROXIMAL – SEGMENTO DISTAL DEL COLON

PRIMER DÍA: ……………………………

– Desayuno y merienda: Té, café o mate cocido con azúcar y tostadas, galletitas de agua o grisines, dulce o jalea de membrillo, queso mantecoso o tipo Petit Suisse.

– Almuerzo y cena: Caldo desgrasado y colado con arroz, sémola o fideos, carne vacuna, pollo o pescado a la parrilla, plancha con manteca o aceite, postre y dulce de membrillo, compota de durazno-pera.

8 hs: Hacer enema evacuante de 1/2 litro de agua tibia con 2 cucharadas de sal por la cola/enemol.

SEGUNDO DIA: …………………………..

– Desayuno: Igual al día anterior.

12 hs – Almuerzo: 1 plato de caldo de pollo, 1 sandwich de pollo con galletitas, 1 vaso de jugo de pomelo o naranja colado, 100 gs de jalea de membrillo.

13 hs: 2 vasos de agua

15 hs: 1 vaso de agua

17 hs: 1 taza de té /mate cocido sin leche.

19 hs: 1 vaso de agua

20hs: cena: 1 plato de caldo de pollo, 1 vaso de jugo de pomelo o naranja colado, 1 vaso de agua`
        },
      ]
    },
    {
      nombre: "PET",
      estudios: [
        {
          titulo: "Preparación general para estudios PET",
          pdf: "pdfs/ICRR_PET_Indicaciones para Pacientes ACUTAL.pdf"
        }
      ]
    },
    {
      nombre: "Densitometría Osea",
      estudios: [
        {
          titulo: "DENSITOMETRIA OSEA",
          detalle: `No requiere preparación previa. No es necesario suspender ninguna medicación.

DURACION Y HORARIOS DE ATENCION.

El estudio dura 20 minutos.

No asignamos turnos excepto que sea en combinación con otros estudios como ser mamografía y ecografía. Recibimos por orden de llegada.

Peso límite del paciente: 140 kg. Si el técnico o médico determinan que el paciente sobrepasa el límite de peso de la camilla del equipo y ante imposibilidad de medir o interpretar la columna y/o cadera, se podrá medir el antebrazo.`
        }
      ]
    }
  ]

  return (
    <section className="container mx-auto py-24 px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#0B2CF5] mb-6 tracking-tight">
          Preparaciones para Estudios
        </h2>
        <p className="text-lg text-[#505050] font-medium">
          Seleccioná tu estudio para conocer las indicaciones previas necesarias.
        </p>
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {data.map((servicio, i) => (
          <div
            key={i}
            className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300"
          >
            {/* === Servicio principal === */}
            <button
              onClick={() =>
                setActivoServicio(activoServicio === i ? null : i)
              }
              className={`w-full flex justify-between items-center px-8 py-6 transition-all duration-300 ${activoServicio === i ? 'bg-[#F4F6FB]' : 'bg-white hover:bg-gray-50'}`}
            >
              <h2 className="text-xl md:text-2xl font-black text-[#0B2CF5] tracking-tight">
                {servicio.nombre}
              </h2>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 border-[#0B2CF5]/20 text-[#0B2CF5] transition-transform duration-300 ${activoServicio === i ? 'rotate-180 bg-[#0B2CF5] text-white border-[#0B2CF5]' : ''}`}>
                <svg className="w-5 h-5 fill-none stroke-current stroke-3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* === Estudios dentro del servicio === */}
            <AnimatePresence>
              {activoServicio === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="px-8 pb-6 bg-white"
                >
                  <div className="space-y-3 pt-2">
                    {servicio.estudios.map((est, j) => (
                      <div key={j} className="rounded-2xl border border-gray-100 overflow-hidden">
                        {/* === Botón desplegable === */}
                        <button
                          onClick={() =>
                            setActivoEstudio(
                              activoEstudio === `${i}-${j}` ? null : `${i}-${j}`
                            )
                          }
                          className={`w-full text-left px-5 py-4 font-bold flex justify-between items-center transition-colors ${activoEstudio === `${i}-${j}` ? 'bg-[#F4F6FB] text-[#0B2CF5]' : 'text-[#505050] hover:bg-gray-50'}`}
                        >
                          <span className="text-[15px]">{est.titulo}</span>
                          <span className={`text-xl transition-transform duration-300 ${activoEstudio === `${i}-${j}` ? 'rotate-45 text-[#0B2CF5]' : 'text-[#8B8B8B]'}`}>
                            +
                          </span>
                        </button>

                        {/* === Contenido o PDF === */}
                        <AnimatePresence>
                          {activoEstudio === `${i}-${j}` && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="p-5 bg-white text-[#505050] whitespace-pre-line border-t border-gray-100 leading-relaxed text-[14px] font-medium"
                            >
                              {est.pdf ? (
                                <div className="flex flex-col items-center bg-[#F4F6FB] p-6 rounded-2xl text-center gap-4">
                                  <p className="text-[#505050] max-w-xs">
                                    La preparación completa para este estudio está disponible para descargar.
                                  </p>
                                  <a
                                    href={est.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#0B2CF5] hover:bg-[#0820bb] text-white font-black transition shadow-md hover:shadow-xl hover:-translate-y-1"
                                  >
                                    📄 Descargar PDF
                                  </a>
                                </div>
                              ) : (
                                est.detalle
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
