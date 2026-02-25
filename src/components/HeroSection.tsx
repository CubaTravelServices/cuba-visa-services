import havanaHero from "@/assets/havana-hero.jpg";
import HeroPricing from "./HeroPricing";

const HeroSection = () => (
  <section className="bg-navy relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{ backgroundImage: `url(${havanaHero})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))] via-[hsl(var(--navy))/0.85] to-[hsl(var(--navy))/0.7]" />
    <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.12), transparent 60%)" }} />
    <div className="relative z-10 px-[6%] py-16 lg:py-20">
      {/* Top hero text */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/[0.12] text-gold-light text-[12px] font-semibold uppercase tracking-wider mb-6">
          ★ America's #1 Authorized Cuba E-Visa Provider Since 2009
        </span>
        <h1 className="font-display text-[clamp(38px,5vw,62px)] font-bold text-white leading-[1.1] mb-6">
          Cuba E-Visa for <em className="text-gold-light italic">US Citizens</em> — Instant Delivery
        </h1>
        <p className="text-[17px] text-white/70 max-w-xl mx-auto leading-relaxed">
          The only authorized provider with a direct Cuban Consulate contract, service agreements with every US airline flying to Cuba, and physical staff at departure airports.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[
            ["15+", "Years in service"],
            ["500K+", "Visas processed"],
            ["3", "Airport offices"],
            ["~0 min", "Processing time"],
          ].map(([num, label]) => (
            <div key={label}>
              <div className="font-display text-[32px] font-bold text-gold-light">{num}</div>
              <div className="text-[12px] text-white/50">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing cards */}
      <HeroPricing />
    </div>
  </section>
);

export default HeroSection;
