import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  { name: "Maria T.", location: "Miami, FL", text: "I applied at 10pm the night before my flight and had my e-visa in my inbox within 5 minutes. No other service comes close.", detail: "American Airlines · MIA" },
  { name: "Carlos R.", location: "Tampa, FL", text: "Their staff was literally at the American Airlines counter in Miami when I had a documentation problem. Fixed it in minutes.", detail: "Southwest Airlines · TPA" },
  { name: "Ana L.", location: "Hialeah, FL", text: "As a Cuban-born American I've used them for my tourist visa AND my passport renewal. Only company that does both.", detail: "Delta Air Lines · MIA" },
];

const ReviewsSection = () => {
  const ref = useScrollAnimation();
  return (
    <section className="bg-ivory-mid section-padding" ref={ref}>
      <div className="text-center mb-12">
        <p className="eyebrow">Testimonials</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">Trusted by Travelers</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-white rounded-lg p-7 border border-gold/15 animate-on-scroll">
            <div className="text-gold text-lg mb-3">★★★★★</div>
            <p className="text-sm text-slate-brand italic leading-relaxed mb-4">"{r.text}"</p>
            <p className="text-[13px] font-bold text-navy">{r.name}</p>
            <p className="text-[12px] text-slate-brand">{r.location} · {r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
