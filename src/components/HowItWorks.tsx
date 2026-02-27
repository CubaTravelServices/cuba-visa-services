import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
{ num: "01", title: "Submit Your Application Online", desc: "Complete our secure online form with your passport details and travel information. US credit cards accepted." },
{ num: "02", title: "We Coordinate Through Official Consular Channels", desc: "Our team processes your application through direct consular coordination — no consulate visit required on your part." },
{ num: "03", title: "Receive Your Authorized Documentation", desc: "Your Cuba e-visa arrives by email. Print or present digitally at the airport. It's that simple." }];


const HowItWorks = () => {
  const ref = useScrollAnimation();
  return (
    <section id="how-it-works" className="bg-white section-padding" ref={ref}>
      <div className="text-center mb-12">
        <p className="eyebrow">Simple Process</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">How It Works</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) =>
        <div key={s.num} className="relative bg-ivory border border-ivory-mid rounded-lg p-8 card-hover animate-on-scroll text-center">
            <div className="font-display text-[52px] font-bold leading-none mb-2 text-secondary">{s.num}</div>
            <h3 className="font-display text-xl font-bold text-navy mb-3">{s.title}</h3>
            <p className="text-sm text-slate-brand leading-relaxed">{s.desc}</p>
            {i < steps.length - 1 &&
          <span className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 text-gold text-2xl">→</span>
          }
          </div>
        )}
      </div>
      <div className="text-center mt-8">
        <a href="/process" className="text-sm text-gold font-semibold hover:underline">View detailed 7-step process →</a>
      </div>
    </section>);

};

export default HowItWorks;