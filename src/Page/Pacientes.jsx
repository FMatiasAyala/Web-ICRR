import ObraSociales from "../components/ObraSociales"
import Preparaciones from "../components/Preparaciones"
import SeoTags from "../components/SeoTags"
import CTA from "../components/CTA";
import { FaFilePdf } from 'react-icons/fa6';
import { BsCash, BsBank } from 'react-icons/bs';
import { FaCreditCard } from 'react-icons/fa';

export default function Pacientes() {
  return (
    <>
      <SeoTags
        title="Pacientes | ICRR"
        description="Accedé al portal de pacientes del Consultorio Radiológico Resistencia para consultar estudios, resultados y preparaciones médicas."
        image="/logos/icrr_logo3.jpg"
      />

      <div className="max-w-6xl mx-auto mt-6 px-6">
        {/* BLOQUE PRINCIPAL */}
        <section className="bg-[url(/img/ICRR-pacientes.jpg)] text-white p-10 rounded-2xl text-center shadow-lg mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Portal de Pacientes
          </h1>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            Consultá tus estudios, resultados e historial médico en línea.
            Iniciá sesión en nuestro portal exclusivo para pacientes y accedé a tus informes digitales desde cualquier dispositivo.
          </p>
          <a
            href="https://pacientes.icrrportal.com.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2E86AB] hover:bg-[#256b87] text-white font-medium px-8 py-3 rounded-lg transition duration-300"
          >
            Ingresar al Portal
          </a>
        </section>
        <ObraSociales />
        {/* NUEVA SECCIÓN: MEDIOS DE PAGO */}
        <section className="bg-white rounded-2xl shadow-md p-8 mb-12 border border-gray-100 text-center">
          <h2 className="text-2xl font-semibold text-[#0A2342] mb-4">
            Medios de Pago
          </h2>
          <p className="text-gray-700 mb-6">
            Podés abonar tus estudios de forma rápida y segura con los siguientes medios:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start justify-items-center text-center">
            {/* Transferencia */}
            <div className="flex flex-col items-center p-6 w-full max-w-sm">
              <BsBank className="text-[#2E86AB] text-6xl mb-3" />
              <span className="font-medium text-gray-800">Transferencia Bancaria</span>
            </div>

            {/* Tarjetas */}
            <div className="flex flex-col items-center p-6 w-full max-w-sm">
              <FaCreditCard className="text-[#2E86AB] text-6xl mb-3" />
              <span className="font-medium text-gray-800">
                Todas las tarjetas.
                <br />
                3 cuotas sin interés superando los $10.000
              </span>
            </div>

            {/* Efectivo */}
            <div className="flex flex-col items-center p-6 w-full max-w-sm">
              <BsCash className="text-[#2E86AB] text-6xl mb-3" />
              <span className="font-medium text-gray-800">Efectivo</span>
            </div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: TUTORIALES */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0A2342] mb-6 text-center">
            Tutoriales para Pacientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tutorial 1 (VIDEO) */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <iframe
                className="w-full h-56"
                src="https://www.youtube.com/embed/fK4nlppe-o0"
                title="Cómo ingresar al portal de pacientes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="font-semibold text-[#0A2342] mb-2">
                  Cómo ingresar al Portal
                </h3>
                <p className="text-sm text-gray-700">
                  Guía paso a paso para acceder con tu usuario y contraseña al portal de pacientes.
                </p>
              </div>
            </div>

            {/* Tutorial 2 (PDF) */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-4">
                  <FaFilePdf className="w-20 h-20 mb-1" />
                </div>
                <h3 className="font-semibold text-[#0A2342] text-center mb-2">
                  Ver tus Resultados
                </h3>
                <p className="text-sm text-gray-700 text-center mb-4">
                  Instructivo visual con los pasos para consultar tus resultados de estudios en línea.
                </p>
              </div>
              <a
                href="/pdfs/TUTORIAL PARA DESCARGAS IMAGENES .pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#2E86AB] hover:bg-[#256b87] text-white font-medium px-6 py-2 rounded-lg transition duration-300"
              >
                Descargar
              </a>
            </div>

            {/* Tutorial 3 (PDF) */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-center mb-4">
                  <FaFilePdf className="w-20 h-20 mb-1" />
                </div>
                <h3 className="font-semibold text-[#0A2342] text-center mb-2">
                  Orden Medica
                </h3>
                <p className="text-sm text-gray-700 text-center mb-4">
                  Aprendé cómo descargar tus orden médicas en formato PDF desde el portal de pacientes.
                </p>
              </div>
              <a
                href="/pdfs/ICRR Tutorial OM.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-center bg-[#2E86AB] hover:bg-[#256b87] text-white font-medium px-6 py-2 rounded-lg transition duration-300"
              >
                Descargar
              </a>
            </div>
          </div>
        </section>

      </div>

      <Preparaciones />
      <CTA />
    </>
  )
}
