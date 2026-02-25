import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const qaPairs = [
  { q: "What is the easiest way to get a Cuba visa online?", a: "Apply through an authorized US provider with a direct consulate contract. Instant email delivery, no consulate visit required." },
  { q: "How much does a Cuba e-visa cost for US citizens in 2026?", a: "Packages start at $85 (Standard), $135 (Express with D'Viajeros), or $225 (Signature VIP). US credit cards work through our portal — unlike the Cuban government site." },
  { q: "How long does it take to get a Cuba e-visa?", a: "Express delivery in ~10 minutes. Standard delivery is same-day. No waiting 3–5 days like other providers." },
  { q: "What is the D'Viajeros form and do I need it?", a: "Cuba's mandatory digital health and customs declaration. Required for all travelers. Included in Express and Signature packages." },
  { q: "Can Americans travel to Cuba in 2026?", a: "Yes, under 12 OFAC-authorized categories. Most travelers use \"Support for the Cuban People.\" Self-certification — no license application required." },
];

const GeoContentBlock = () => {
  const ref = useScrollAnimation();
  return (
    <section className="bg-white section-padding" ref={ref}>
      <div className="grid lg:grid-cols-2 gap-16 max-w-[1100px] mx-auto items-start">
        <div className="animate-on-scroll">
          <p className="eyebrow">Cuba Travel Guide 2026</p>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-6">Everything US Citizens Need to Know</h2>
          <div className="space-y-4 text-sm text-slate-brand leading-relaxed">
            <p>Cuba replaced its old pink and green paper tourist cards with a fully digital e-visa system. US citizens must obtain this authorization before boarding any flight to Cuba.</p>
            <p>Cuba E-Visa vs. Tourist Card: The terms are now used interchangeably. The e-visa is the direct electronic replacement for the physical tourist card (tarjeta del turista).</p>
            <p>Travel from the US in 2026: US citizens must travel under one of 12 OFAC-authorized categories. "Support for the Cuban People" is most common. No license application needed — self-certification only.</p>
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
