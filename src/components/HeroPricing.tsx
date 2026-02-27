import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const plans = [
{
  key: "standard",
  name: "Standard Cuba E-Visa",
  tagline: "Perfect for travelers with flexible schedules",
  price: 85,
  originalPrice: null as number | null,
  features: [
  "Single-Entry Cuba E-Visa",
  "Valid for 90 Days from Issuance",
  "Email Delivery",
  "Document Review Included",
  "Standard Customer Support"],
  popular: false,
  discount: null as string | null
},
{
  key: "express",
  name: "Express Cuba E-Visa",
  tagline: "As fast as 10 minutes — ideal for last-minute plans",
  price: 121.50,
  originalPrice: 135,
  features: [
  { text: "Includes Everything From Standard Package Plus:", italic: true },
  "Priority Customer Support",
  { text: "15 Minute Application Processing", bold: true },
  { text: "D'Viajeros Assistance Included", bold: true }],
  popular: true,
  discount: "10% Off"
},
{
  key: "signature",
  name: "Signature Service Cuba E-Visa",
  tagline: "All Express benefits, plus optional VIP upgrades",
  price: 202.50,
  originalPrice: 225,
  features: [
  { text: "Includes Everything From Express Package Plus:", italic: true },
  { text: "VIP Immigration Processing on Arrival", bold: true },
  "VIP Departure Lounge Access",
  "VIP Transfer to City Center",
  "Meet & Greet at Airport"],
  popular: false,
  discount: "10% Off"
}];

const HeroPricing = () => {
  const navigate = useNavigate();
  const { addItem } = useCart();

  const handleGetStarted = (plan: typeof plans[0]) => {
    addItem({
      packageKey: plan.key as "standard" | "express" | "signature",
      packageName: plan.name,
      basePrice: plan.price,
      addOns: { dviajeros: plan.key !== "standard", expressProcessing: false },
      travelers: 1,
    });
  };

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch justify-items-center">
      {plans.map((plan) =>
      <div
        key={plan.key} className="relative rounded-xl p-6 bg-white shadow-md w-full flex flex-col">

        {plan.discount &&
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-bl-lg rounded-tr-xl shadow-lg z-10">
            {plan.discount}
          </span>
        }
        {plan.popular &&
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full">
            ★ Most Popular
          </span>
        }
        <h3 className="font-display text-[22px] font-bold text-navy min-h-[56px]">{plan.name}</h3>
        <p className="text-[13px] min-h-[40px] mt-1 text-slate-brand">{plan.tagline}</p>
        <div className="mt-4 mb-1 min-h-[68px] flex items-end">
          <div>
            {plan.originalPrice && (
              <span className="text-[18px] text-slate-400 line-through mr-2">${plan.originalPrice}</span>
            )}
            <span className="font-display text-[52px] font-bold text-navy">${plan.price % 1 === 0 ? plan.price : plan.price.toFixed(2)}</span>
            <span className="text-[13px] ml-2 text-slate-brand">per traveler</span>
          </div>
        </div>
        <hr className="my-4 border-ivory-mid" />
        <ul className="space-y-2.5 mb-6 flex-1">
          {plan.features.map((f, i) => {
          const text = typeof f === "string" ? f : f.text;
          const bold = typeof f !== "string" && f.bold;
          const italic = typeof f !== "string" && (f as any).italic;
          return (
            <li key={i} className={`text-sm flex items-start gap-2 text-navy ${bold ? "font-semibold" : ""} ${italic ? "italic text-[13px] opacity-70" : ""}`}>
                <span className="text-gold mt-0.5">✓</span> {text}
              </li>);

        })}
        </ul>
        <button
          onClick={() => handleGetStarted(plan)}
          className="w-full bg-navy text-white font-semibold py-3 rounded text-sm uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300 mt-auto">
            Add to Cart →
          </button>
      </div>
    )}

      <p className="md:col-span-3 text-center text-white/40 text-sm mt-4">
        All packages include secure credit card payment · Secure checkout · Direct consular coordination
      </p>
    </div>);

};

export default HeroPricing;
