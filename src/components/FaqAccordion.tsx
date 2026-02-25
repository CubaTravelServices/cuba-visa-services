import { useState } from "react";

const faqs = [
  { q: "Do US citizens need a visa to travel to Cuba?", a: "Yes, all US citizens must get a Cuba e-visa before travel. It cannot be obtained on arrival. Apply online and receive it by email instantly." },
  { q: "What is the difference between a Cuba e-visa and the old tourist card?", a: "Cuba replaced physical pink (US) and green (other nationalities) tourist cards with a fully digital e-visa. The requirements are identical — the process is now electronic." },
  { q: "What OFAC travel categories allow Americans to visit Cuba legally?", a: "There are 12 categories including: Support for the Cuban People (most common), Family Visits, Journalism, Educational Activities, Religious Activities, Humanitarian Projects, and more. Self-certify — no license application needed." },
  { q: "How long is a Cuba e-visa valid?", a: "30 days from entry, single-entry. Extendable by an additional 30 days inside Cuba at Inmigración. Must be used within 180 days of issuance." },
  { q: "Can I get a Cuba visa at the airport?", a: "Not on arrival in Cuba. However, our staff is physically present at American Airlines and Delta at MIA and Southwest at TPA for last-minute assistance before departure." },
  { q: "What is the D'Viajeros form and is it required?", a: "Cuba's mandatory digital health and customs declaration (Declaración de Viajero). Required for all travelers and must be submitted before departure. Separate from your e-visa. We include assistance in Express and Signature packages." },
  { q: "Is Cuba Visa Services an authorized and legitimate provider?", a: "Yes. Direct Cuban Consulate contract, IATA accredited, OFAC authorized, Florida Seller of Travel. Formal service agreements with all US airlines. Physical staff at 3 airports. Operating since 2009." },
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
