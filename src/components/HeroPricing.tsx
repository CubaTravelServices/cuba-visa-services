import { useNavigate } from "react-router-dom";

const plans = [
  {
    key: "standard",
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
    key: "express",
    name: "Express Cuba E-Visa",
    tagline: "As fast as 10 minutes — ideal for last-minute plans",
    price: 135,
    features: [
      "Single-Entry Cuba E-Visa",
      "Valid for 90 Days from Issuance",
      { text: "⚡ Priority Email Delivery — ~10 min", bold: true },
      "Document Review Included",
      "Priority Customer Support",
      { text: "D'Viajeros Form Assistance Included", bold: true },
    ],
    popular: true,
  },
  {
    key: "signature",
    name: "Signature Service Cuba E-Visa",
    tagline: "All Express benefits, plus optional VIP upgrades",
    price: 225,
    features: [
      "Single-Entry Cuba E-Visa",
      "Valid for 90 Days from Issuance",
      "⚡ Priority Email Delivery — ~10 min",
      "Document Review Included",
      "Priority Customer Support",
      "D'Viajeros Form Assistance Included",
      { text: "🌟 VIP Immigration Processing on Arrival", bold: true },
      { text: "🛋️ VIP Departure Lounge Access", italic: true },
      { text: "🚗 VIP Transfer to City Center", italic: true },
      { text: "🤝 Meet & Greet at Airport", italic: true },
    ],
    popular: false,
  },
];

const HeroPricing = () => {
  const navigate = useNavigate();

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
      {plans.map((plan) => (
        <div
          key={plan.key}
          className={`relative rounded-2xl p-8 transition-all duration-300 ${
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
            <button
              onClick={() => navigate(`/apply?plan=${plan.key}`)}
              className="w-full bg-navy text-white font-semibold py-3 rounded text-sm uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Get Started →
            </button>
          ) : (
            <button
              onClick={() => navigate(`/apply?plan=${plan.key}`)}
              className="w-full border border-gold/40 text-gold font-semibold py-3 rounded text-sm uppercase tracking-wider hover:bg-gold/10 transition-all duration-300"
            >
              Get Started →
            </button>
          )}
        </div>
      ))}

      <p className="md:col-span-3 text-center text-white/40 text-sm mt-4">
        All packages include secure credit card payment · OFAC-compliant documentation · Direct consulate authorization
      </p>
    </div>
  );
};

export default HeroPricing;
