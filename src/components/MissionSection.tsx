import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, ClipboardCheck, Handshake, Landmark } from "lucide-react";

const pillars = [
  { Icon: Users, title: "Supporting Cuban Families", desc: "Helping families maintain connections through compliant travel and civil documentation." },
  { Icon: ClipboardCheck, title: "Facilitating Compliant Documentation", desc: "Every visa, passport, and certificate processed through proper consular channels." },
  { Icon: Handshake, title: "Constructive Engagement", desc: "Promoting meaningful, lawful interaction between U.S. travelers and the Cuban people." },
  { Icon: Landmark, title: "Long-Standing Commitment", desc: "25+ years dedicated to lawful travel documentation and consular services." },
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
              <p.Icon className="w-8 h-8 text-gold mx-auto mb-3" />
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
