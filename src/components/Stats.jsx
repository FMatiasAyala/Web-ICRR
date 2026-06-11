import { ClipboardList, FilePlus, Users } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <ClipboardList className="w-14 h-14 text-[#4A65F6] mb-4 opacity-90" strokeWidth={1.5} />,
      number: "+ 49",
      text: "años al servicio de los chaqueños",
    },
    {
      icon: <FilePlus className="w-14 h-14 text-[#4A65F6] mb-4 opacity-90" strokeWidth={1.5} />,
      number: "+ 340.000",
      text: "estudios anuales",
    },
    {
      icon: <Users className="w-14 h-14 text-[#4A65F6] mb-4 opacity-90" strokeWidth={1.5} />,
      number: "+ 30",
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
                {stat.number}
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
