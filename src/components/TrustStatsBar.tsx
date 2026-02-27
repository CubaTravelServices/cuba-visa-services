import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Landmark, Plane, Zap, Award } from "lucide-react";

const stats = [
  { Icon: Landmark, value: "Direct", desc: "Consular coordination for Cuba documentation" },
  { Icon: Plane, value: "100%", desc: "US airlines operating Cuba routes covered" },
  { Icon: Zap, value: "15 Min", desc: "E-visa application processing time" },
  { Icon: Award, value: "25+ Yrs", desc: "Of Cuba regulatory experience" },
];

const TrustStatsBar = () => {
  const ref = useScrollAnimation();
  return (
    <section className="bg-ivory-mid section-padding" ref={ref}>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 max-w-6xl mx-auto">
        {stats.map((s) => (
          <div key={s.value} className="text-center animate-on-scroll">
            <s.Icon className="w-8 h-8 text-gold mx-auto mb-2" />
            <div className="font-display text-4xl font-bold text-navy">{s.value}</div>
            <p className="text-sm text-slate-brand mt-2 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStatsBar;
