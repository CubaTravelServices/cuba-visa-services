import { useState } from "react";

const faqs = [
  { q: "Is this visa accepted at the airport?", a: "Yes. Our e-visa is the authorized electronic replacement for the former paper tourist card. It is accepted by all U.S. airlines operating Cuba routes, including American Airlines, Delta, Southwest, and JetBlue." },
  { q: "Are you authorized to process Cuba visas?", a: "Yes. We have 25+ years of experience with direct consular coordination, IATA accreditation, OFAC authorization, and Florida Seller of Travel registration. We are not a government agency." },
  { q: "Is this the official Cuba visa?", a: "This is the authorized Cuba e-visa (also known as the Cuba Tourist Card). We coordinate through official consular channels to process your documentation. We are not a government agency." },
  { q: "How long does processing take?", a: "Applications are typically processed within 15 minutes with our Express package. Standard processing is same-day delivery." },
  { q: "Can U.S. citizens travel to Cuba for tourism?", a: "U.S. citizens can travel to Cuba under 12 OFAC-authorized categories. \"Support for the Cuban People\" is the most commonly used category. Self-certification only — no license application required." },
  { q: "Do you work directly with the Cuban consulate?", a: "We coordinate through official consular channels for all Cuba documentation services. This direct coordination allows us to process applications efficiently and reliably." },
  { q: "What is the D'Viajeros form and is it required?", a: "Cuba's mandatory digital health and customs declaration (Declaración de Viajero). Required for all travelers and must be submitted before departure. Separate from your e-visa. We include assistance in Express and Signature packages." },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-ivory section-padding">
      <div className="max-w-[820px] mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow">FAQ</p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">Frequently Asked Questions</h2>
        </div>
        <div>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-ivory-mid">
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-[16px] font-semibold text-navy pr-4">{faq.q}</span>
                <span
                  className="text-gold text-xl shrink-0 transition-transform duration-300"
                  style={{ transform: openIndex === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: openIndex === i ? "300px" : "0" }}
              >
                <p className="pb-5 text-[15px] text-slate-brand leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
