import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const steps = [
  { num: "01", title: "Choose Your Service", desc: "Select your OFAC travel category, travel dates, and optional add-ons:" },
  { num: "02", title: "Complete Application", desc: "Fill in passport details. Pre-validated against Cuban consulate requirements." },
  { num: "03", title: "Secure Payment", desc: "Pay by credit card — US cards work here unlike evisacuba.cu" },
  { num: "04", title: "Express Application Processing", desc: "E-Visa arrives by email usually within 15 Minutes. Print or present digitally." },
  { num: "05", title: "Receive Your Electronic Visa", desc: "Receive your Electronic Visa proof of purchase via email." },
  { num: "06", title: "Complete Your D'Viajeros Form", desc: "Complete no more than 7 days before departure. Your E-Visa will not be accepted unless the E-Visa number & \"Dirección de Identificación, Inmigración y Extranjería\" seal is included on your D'Viajeros confirmation page.", note: true },
  { num: "07", title: "Receive Completed D'Viajeros Form", desc: "Receive your completed D'Viajeros Form with seal and Electronic Visa number. Print or save to your phone for easy access." },
];

const addOns = [
  { name: "D'Viajeros Assistance", price: "$25", tip: "We complete Cuba's mandatory digital health & customs declaration (D'Viajeros) on your behalf — correctly and on time." },
  { name: "Express Processing", price: "$25", tip: "Your e-visa application is prioritized and processed in as fast as 15 minutes." },
];

const HowItWorks = () => {
  const ref = useScrollAnimation();
  return (
    <section id="how-it-works" className="bg-white section-padding" ref={ref}>
      <div className="text-center mb-12">
        <p className="eyebrow">Simple Process</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">Your Cuba E-Visa in 7 Steps</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.num} className="relative bg-ivory border border-ivory-mid rounded-lg p-7 card-hover animate-on-scroll">
            <div className="font-display text-[52px] font-bold text-gold/20 leading-none mb-2">{s.num}</div>
            <h3 className="font-display text-xl font-bold text-navy mb-2">{s.title}</h3>
            <p className="text-sm text-slate-brand leading-relaxed">{s.desc}</p>
            {s.num === "01" && (
              <TooltipProvider delayDuration={200}>
                <div className="mt-2 space-y-1.5">
                  {addOns.map((a) => (
                    <Tooltip key={a.name}>
                      <TooltipTrigger asChild>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold cursor-help">
                          {a.name} (+{a.price}) <Info size={13} className="text-gold/60" />
                        </span>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="max-w-[220px] text-xs">
                        {a.tip}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </TooltipProvider>
            )}
            {s.num === "06" && (
              <div className="mt-3 space-y-1.5">
                <p className="text-xs text-slate-brand leading-relaxed">• Include your email address in case you need to edit your information</p>
                <p className="text-xs text-slate-brand leading-relaxed">• Print confirmation page and/or save to your phone</p>
                <a href="https://cubatravelservices.com/dviajeros-how-to-video/" target="_blank" rel="noopener noreferrer" className="text-xs text-gold font-semibold hover:underline inline-block mt-1">
                  View D'Viajeros Guide →
                </a>
              </div>
            )}
            {i < steps.length - 1 && (
              <span className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-gold text-xl">→</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
