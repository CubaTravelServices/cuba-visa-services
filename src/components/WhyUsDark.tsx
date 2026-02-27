import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const diffs = [
  { icon: "🎖️", title: "25+ Years of Cuba Regulatory Experience", desc: "Deep expertise navigating Cuba's documentation requirements since 1999." },
  { icon: "🎯", title: "Exclusively Focused on Cuba Documentation", desc: "Cuba visas, passports, and civil documents are all we do." },
  { icon: "🤝", title: "Direct Consular Coordination", desc: "We work through official consular channels for your documentation." },
  { icon: "🌐", title: "Mission-Driven Commitment to Constructive Engagement", desc: "Supporting Cuban families and facilitating compliant travel documentation." },
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
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose Cuba Visa Services
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Authorized Cuba documentation services with direct consular coordination, airport staff, and 25+ years of regulatory experience.
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
