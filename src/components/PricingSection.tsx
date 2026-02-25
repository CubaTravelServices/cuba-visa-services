import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const plans = [
  {
    name: "Standard Cuba E-Visa",
    tagline: "Perfect for travelers with flexible schedules",
    price: 85,
    features: [
      "Single-Entry Cuba E-Visa",
      "Valid for 90 Days from Issuance",
      "Email Delivery",
      "Document Review Included",
      "Standard Customer Support",
    ],
    popular: false,
  },
  {
    name: "Express Cuba E-Visa",
    tagline: "As fast as 10 minutes — ideal for last-minute plans",
    price: 135,
    features: [
      { text: "Includes Everything From Standard Package Plus:", italic: true },
      "Priority Customer Support",
      { text: "⚡ 15 Minute Application Processing", bold: true },
      { text: "D'Viajeros Assistance Included", bold: true },
    ],
    popular: true,
  },
  {
    name: "Signature Service Cuba E-Visa",
    tagline: "All Express benefits, plus optional VIP upgrades",
    price: 225,
    features: [
      { text: "Includes Everything From Express Package Plus:", italic: true },
      { text: "✅ VIP Immigration Processing on Arrival", bold: true },
      "✅ VIP Departure Lounge Access",
      "✅ VIP Transfer to City Center",
      "✅ Meet & Greet at Airport",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useScrollAnimation();
  return (
    <section
      id="pricing"
      className="section-padding bg-navy"
      style={{ backgroundImage: "radial-gradient(ellipse at 15% 60%, rgba(201,168,76,0.07), transparent 55%)" }}
      ref={ref}
    >
      <div className="text-center mb-12">
        <p className="eyebrow">Pricing</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-3">Cuba E-Visa Packages for Every Traveler</h2>
        <p className="text-white/50 max-w-xl mx-auto">Choose the package that fits your travel timeline</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl p-8 transition-all duration-300 animate-on-scroll ${
              plan.popular
                ? "bg-white border-2 border-gold scale-100 lg:scale-[1.04] shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
                : "bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] hover:border-gold/30 hover:-translate-y-1"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full">
                ★ Most Popular
              </span>
            )}
            <h3 className={`font-display text-[22px] font-bold ${plan.popular ? "text-navy" : "text-white"}`}>{plan.name}</h3>
            <p className={`text-[13px] min-h-[38px] mt-1 ${plan.popular ? "text-slate-brand" : "text-white/50"}`}>{plan.tagline}</p>
            <div className="mt-4 mb-1">
              <span className={`font-display text-[52px] font-bold ${plan.popular ? "text-navy" : "text-white"}`}>${plan.price}</span>
              <span className={`text-[13px] ml-2 ${plan.popular ? "text-slate-brand" : "text-white/40"}`}>per traveler</span>
            </div>
            <hr className={`my-4 ${plan.popular ? "border-ivory-mid" : "border-white/10"}`} />
            <ul className="space-y-2.5 mb-6">
              {plan.features.map((f, i) => {
                const text = typeof f === "string" ? f : f.text;
                const bold = typeof f !== "string" && f.bold;
                const italic = typeof f !== "string" && (f as any).italic;
                return (
                  <li key={i} className={`text-sm flex items-start gap-2 ${plan.popular ? "text-navy" : "text-white/70"} ${bold ? "font-semibold" : ""} ${italic ? "italic text-[13px] opacity-70" : ""}`}>
                    <span className="text-gold mt-0.5">✓</span> {text}
                  </li>
                );
              })}
            </ul>
            {plan.popular ? (
              <button className="w-full bg-navy text-white font-semibold py-3 rounded text-sm uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300">
                Get Started →
              </button>
            ) : (
              <button className="w-full border border-gold/40 text-gold font-semibold py-3 rounded text-sm uppercase tracking-wider hover:bg-gold/10 transition-all duration-300">
                Get Started →
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="text-center text-white/40 text-sm mt-8">
        All packages include secure credit card payment · OFAC-compliant documentation · Direct consulate authorization
      </p>
    </section>
  );
};

export default PricingSection;
