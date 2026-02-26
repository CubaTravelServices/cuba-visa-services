import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: "🇨🇺", name: "Cuba E-Visa", desc: "The mandatory travel authorization for all US citizens visiting Cuba. Instant email delivery.", price: "From $85 · incl. D'Viajeros" },
  { icon: "📝", name: "D'Viajeros Form", desc: "Cuba's mandatory digital health and customs declaration. Completed correctly for you.", price: "From $25" },
  { icon: "💼", name: "Cuba Business Visa", desc: "Business travel requires proper OFAC documentation and consulate authorization.", price: "Contact for pricing" },
  { icon: "", name: "Religious Visa", desc: "Processing official religious visa", price: "From $175" },
  { icon: "🛂", name: "Cuban Passport Renewal", desc: "Cuban-born US citizens: renew your Cuban passport through our authorized consular services.", price: "From $150" },
  { icon: "📄", name: "Cuban Birth Certificate & Consular", desc: "Certified documents, powers of attorney, official consular services for Cuban nationals in the US.", price: "From $100" },
];

const ServicesGrid = () => {
  const ref = useScrollAnimation();
  return (
    <section id="services" className="bg-white section-padding" ref={ref}>
      <div className="mb-12">
        <p className="eyebrow">Our Services</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">Complete Cuba Travel Solutions</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s) => (
          <div key={s.name} className="bg-ivory border border-ivory-mid rounded-lg p-8 card-hover animate-on-scroll">
            <div className="text-[32px] mb-3">{s.icon}</div>
            <h3 className="font-display text-[17px] font-bold text-navy mb-2">{s.name}</h3>
            <p className="text-sm text-slate-brand leading-relaxed mb-4">{s.desc}</p>
            <p className="font-display text-[22px] font-bold text-navy">{s.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
