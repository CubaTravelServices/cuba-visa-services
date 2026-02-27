import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  { icon: "👨‍👩‍👧‍👦", title: "Supporting Cuban Families", desc: "Helping families maintain connections through compliant travel and civil documentation." },
  { icon: "📋", title: "Facilitating Compliant Documentation", desc: "Every visa, passport, and certificate processed through proper consular channels." },
  { icon: "🤝", title: "Constructive Engagement", desc: "Promoting meaningful, lawful interaction between U.S. travelers and the Cuban people." },
  { icon: "🏛️", title: "Long-Standing Commitment", desc: "25+ years dedicated to lawful travel documentation and consular services." },
];

const MissionSection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="bg-ivory-mid section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="eyebrow">Our Mission</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-4">
            Committed to Lawful Travel & Documentation
          </h2>
          <p className="text-slate-brand max-w-2xl mx-auto leading-relaxed">
            Since 1999, Cuba Visa Services has been dedicated to facilitating compliant travel documentation and supporting Cuban families through authorized consular services.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="bg-white rounded-lg border border-ivory-mid p-6 text-center animate-on-scroll">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-display text-lg font-bold text-navy mb-2">{p.title}</h3>
              <p className="text-sm text-slate-brand leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
