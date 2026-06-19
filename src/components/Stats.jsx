import { ClipboardList, FilePlus, Users } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function AnimatedNumber({ end, prefix = "+ " }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let frame = 0;
      const duration = 2000;
      const totalFrames = Math.round(duration / 16);

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.round(end * easeOut);

        if (frame >= totalFrames) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("es-AR")}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: <ClipboardList className="w-14 h-14 text-[#4A65F6] mb-4 opacity-90" strokeWidth={1.5} />,
      end: 49,
      text: "años al servicio de los chaqueños",
    },
    {
      icon: <FilePlus className="w-14 h-14 text-[#4A65F6] mb-4 opacity-90" strokeWidth={1.5} />,
      end: 340000,
      text: "estudios anuales",
    },
    {
      icon: <Users className="w-14 h-14 text-[#4A65F6] mb-4 opacity-90" strokeWidth={1.5} />,
      end: 30,
      text: "especialistas",
    },
  ];

  return (
    <section className="bg-[#F4F6FB] pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {stat.icon}
              <h3 className="text-4xl md:text-[2.8rem] font-black text-[#0B2CF5] mb-4 tracking-tight whitespace-nowrap">
                <AnimatedNumber end={stat.end} />
              </h3>
              <p className="text-[#505050] font-medium text-[15px] md:text-base">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
