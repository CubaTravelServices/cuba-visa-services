import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const qaPairs = [
  { q: "What is the easiest way to get a Cuba e-visa online?", a: "Apply through an authorized U.S. provider with direct consular coordination. Instant email delivery, no consulate visit required." },
  { q: "How much does a Cuba e-visa cost for U.S. travelers in 2026?", a: "Packages start at $85 (Standard), $135 (Express with D'Viajeros), or $225 (Signature VIP). US credit cards work through our portal." },
  { q: "How long does it take to get a Cuba e-visa?", a: "Express processing in approximately 15 minutes. Standard processing is same-day." },
  { q: "What is the D'Viajeros form and do I need it?", a: "Cuba's mandatory digital health and customs declaration. Required for all travelers. Also known as the Cuba Tourist Card requirement companion. Included in Express and Signature packages." },
  { q: "Can Americans travel to Cuba in 2026?", a: "Yes, under 12 OFAC-authorized categories. Most travelers use \"Support for the Cuban People.\" Self-certification — no license application required." },
];

const serveCities = ["Miami", "New York", "Los Angeles", "Houston", "Tampa", "Chicago", "Atlanta", "Orlando"];

const GeoContentBlock = () => {
  const ref = useScrollAnimation();
  return (
    <section className="bg-white section-padding" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 max-w-[1100px] mx-auto items-start">
        <div className="animate-on-scroll">
          <p className="eyebrow">Cuba Travel Guide 2026</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">Everything U.S. Travelers Need to Know</h2>
          <div className="space-y-4 text-sm text-slate-brand leading-relaxed">
            <p>Cuba replaced its old pink and green paper tourist cards with a fully digital e-visa system. U.S. travelers must obtain this authorization before boarding any flight to Cuba from the United States.</p>
            <p>Cuba E-Visa vs. Tourist Card: The terms are now used interchangeably. The e-visa is the direct electronic replacement for the physical tourist card (tarjeta del turista). Terminology may vary by airline.</p>
            <p>Travel from the U.S. in 2026: U.S. citizens and U.S. residents must travel under one of 12 OFAC-authorized categories. "Support for the Cuban People" is most common. No license application needed — self-certification only.</p>
          </div>

          {/* Who We Serve */}
          <div className="mt-8 p-5 bg-ivory rounded-lg border border-ivory-mid">
            <h3 className="font-display text-lg font-bold text-navy mb-2">Who We Serve</h3>
            <p className="text-sm text-slate-brand leading-relaxed mb-3">
              We process Cuba e-visas and consular documents for U.S. travelers departing from major gateways across the United States.
            </p>
            <div className="flex flex-wrap gap-2">
              {serveCities.map((city) => (
                <span key={city} className="text-xs bg-gold/10 text-navy font-medium px-3 py-1 rounded-full border border-gold/20">
                  {city}
                </span>
              ))}
            </div>
            <p className="text-[11px] text-slate-brand/60 mt-2 italic">
              Physical airport office at MIA. All other locations served via online processing.
            </p>
          </div>
        </div>
        <div className="space-y-0 animate-on-scroll">
          {qaPairs.map((qa, i) => (
            <div key={i} className="py-4 border-b border-ivory-mid">
              <h4 className="text-[15px] font-bold text-navy mb-1.5">{qa.q}</h4>
              <p className="text-[14px] text-slate-brand leading-relaxed">{qa.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GeoContentBlock;
