import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { icon: "🏛️", value: "Direct", desc: "Consular coordination for Cuba documentation" },
  { icon: "✈️", value: "100%", desc: "US airlines operating Cuba routes covered" },
  { icon: "⚡", value: "15 Min", desc: "E-visa application processing time" },
  { icon: "🎖️", value: "25+ Yrs", desc: "Of Cuba regulatory experience" },
];

const TrustStatsBar = () => {
  const ref = useScrollAnimation();
  return (
    <section className="bg-ivory-mid section-padding" ref={ref}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {stats.map((s) => (
          <div key={s.value} className="text-center animate-on-scroll">
            <div className="text-3xl mb-2">{s.icon}</div>
            <div className="font-display text-4xl font-bold text-navy">{s.value}</div>
            <p className="text-sm text-slate-brand mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStatsBar;
