import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const diffs = [
  { icon: "🤝", title: "Direct Cuban Consulate Contract", desc: "The only US consumer provider with a formal direct agreement with the Cuban Consulate" },
  { icon: "🏢", title: "Physical Airport Staff", desc: "Our team is physically present at American Airlines and Delta in Miami, and Southwest in Tampa" },
  { icon: "✈️", title: "Airline Service Agreements", desc: "Formal agreements with every US carrier operating Cuba flights" },
  { icon: "📋", title: "D'Viajeros Assistance Included", desc: "We complete Cuba's mandatory digital declaration form correctly for you" },
  { icon: "🌐", title: "Consular Services for Cuban-Born Americans", desc: "Cuban passport renewal, birth certificates — services competitors don't offer" },
];

const WhyUsDark = () => {
  const ref = useScrollAnimation();
  return (
    <section
      className="section-padding bg-navy"
      style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.06), transparent 60%)" }}
      ref={ref}
    >
      <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <p className="eyebrow">Why We're Different</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            The Only Full-Service Cuba Travel Provider in the US
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            No other company offers a direct consulate contract, airport staff, airline agreements, and Cuban consular services under one roof.
          </p>
          <a href="#pricing" className="btn-gold">Start Your Application</a>
        </div>
        <div className="space-y-0">
          {diffs.map((d) => (
            <div key={d.title} className="flex gap-5 py-5 border-b border-white/[0.07] animate-on-scroll">
              <div className="w-11 h-11 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center text-xl shrink-0">
                {d.icon}
              </div>
              <div>
                <h4 className="text-white text-[15px] font-bold">{d.title}</h4>
                <p className="text-white/50 text-[13px] leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsDark;
