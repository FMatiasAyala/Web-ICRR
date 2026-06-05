import { useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { FaInstagram } from "react-icons/fa"

const testimonials = [
  {
    id: 1,
    name: "Usuario de Instagram",
    date: "Enero 2025",
    text: "Es una experiencia agradable. El trato que brindan es excelente y de los profesionales del lugar también."
  },
  {
    id: 2,
    name: "Usuario de Instagram",
    date: "Enero 2025",
    text: "Siempre muy bien atendida y en horarios los estudios. Me los hago desde hace más de 15 años."
  },
  {
    id: 3,
    name: "Usuario de Instagram",
    date: "Enero 2025",
    text: "Excelente atención desde que ingresás. Instalaciones modernas y el personal médico muy atento a cada detalle."
  },
  {
    id: 4,
    name: "Usuario de Instagram",
    date: "Diciembre 2024",
    text: "Me hice una resonancia y me sentí muy contenido. Te explican todo con mucha paciencia."
  },
  {
    id: 5,
    name: "Usuario de Instagram",
    date: "Enero 2025",
    text: "Destaco la rapidez en la entrega de resultados y la amabilidad de las recepcionistas."
  },
  {
    id: 6,
    name: "Usuario de Instagram",
    date: "Noviembre 2024",
    text: "Todo impecable. Los equipos son de última generación y los informes médicos son muy precisos."
  }
];

export default function Testimonials() {
  // Duplicamos los testimonios para lograr el efecto infinito sin cortes
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#F4F6FB] py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative border border-gray-50 overflow-hidden">
          
          <h2 className="text-3xl md:text-5xl font-black text-[#0B2CF5] text-center mb-12 tracking-tight">
            Pacientes que nos eligen
          </h2>

          <div className="relative flex items-center group overflow-hidden">
            
            {/* Efectos de difuminado en los bordes para un look más pulido */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Contenedor marquesina continua */}
            <div className="flex gap-6 w-max animate-marquee hover:pause-animation py-4">
              {duplicatedTestimonials.map((t, index) => (
                <div 
                  key={`${t.id}-${index}`} 
                  className="w-[300px] md:w-[350px] lg:w-[400px] flex-none bg-[#F9FAFB] rounded-[2rem] p-8 transition-transform duration-300 hover:shadow-md border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm">{t.name}</h4>
                      <p className="text-gray-500 text-xs mt-0.5">{t.date}</p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center shadow-sm">
                      <FaInstagram className="text-white w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                    ))}
                  </div>

                  <p className="text-[#505050] text-[15px] font-medium leading-relaxed">
                    {t.text}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      
      {/* Estilos CSS para la animación infinita */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); } /* 12px es la mitad del gap de 24px (gap-6) */
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}} />
    </section>
  )
}

