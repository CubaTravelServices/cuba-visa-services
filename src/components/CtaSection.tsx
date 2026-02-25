const CtaSection = () => (
  <section
    className="bg-navy text-center section-padding"
    style={{ backgroundImage: "radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.1), transparent 60%)" }}
  >
    <p className="eyebrow">Ready to Travel?</p>
    <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">Get Your Cuba E-Visa in Minutes</h2>
    <p className="text-white/55 max-w-[560px] mx-auto mb-8">
      Join 500,000+ travelers who trusted us with their Cuba e-visa. Instant delivery, direct consulate authorization, airport support.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <a href="#pricing" className="btn-gold">Apply for Cuba E-Visa Now →</a>
      <a href="#" className="btn-ghost">📞 Speak to Our Team</a>
    </div>
  </section>
);

export default CtaSection;
