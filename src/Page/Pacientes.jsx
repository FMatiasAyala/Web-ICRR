import ObraSociales from "../components/ObraSociales";
import Preparaciones from "../components/Preparaciones"
import SeoTags from "../components/SeoTags";

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
        <section className="bg-[#0A2342] text-white p-10 rounded-2xl text-center shadow-lg mb-12">
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
      </div>
      <ObraSociales />
      <Preparaciones />
    </>
  )
}