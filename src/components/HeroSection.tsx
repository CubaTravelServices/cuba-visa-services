import { ShieldCheck, MessageCircle, Landmark } from "lucide-react";
import havanaHero from "@/assets/havana-hero.jpg";
import consularService from "@/assets/consular-service.jpg";
import HeroPricing from "./HeroPricing";

const trustItems = [
  { Icon: ShieldCheck, label: "Secure Checkout" },
  { Icon: MessageCircle, label: "Support Available" },
  { Icon: Landmark, label: "Serving U.S. Travelers Since 1999" },
];

const HeroSection = () => (
  <section className="bg-navy relative overflow-hidden">
    <div
      className="absolute inset-0 bg-cover bg-center opacity-20"
      style={{ backgroundImage: `url(${havanaHero})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy))] via-[hsl(var(--navy))/0.85] to-[hsl(var(--navy))/0.7]" />
    <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 70% 40%, rgba(201,168,76,0.12), transparent 60%)" }} />

    <div className="relative z-10 px-[6%] py-16 lg:py-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="font-display font-bold text-white leading-[1.1] mb-4 lg:text-[clamp(28px,3.8vw,52px)] text-2xl">
          Trusted by U.S. Travelers Since 1999
        </h1>
        <p className="text-[17px] text-white/70 max-w-2xl mx-auto leading-relaxed mb-2">
          Authorized Cuba E-Visa, Cuban Passport, and Civil Document Services — Secure Online Processing with Direct Consular Coordination.
        </p>
        <p className="text-[13px] text-white/40 italic">We are not a government agency.</p>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {trustItems.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-5 h-5 text-gold" />
              <span className="text-[13px] text-white/60 font-medium">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="/apply?plan=standard" className="btn-gold">Apply for Cuba E-Visa</a>
          <a href="#services" className="btn-ghost-gold">Passport & Consular Services</a>
        </div>
      </div>

      <div className="flex items-start gap-8 max-w-6xl mx-auto shadow-none">
        <div className="hidden lg:block flex-shrink-0 w-[280px]">
          <img
            src={consularService}
            alt="Cuba visa document with Republic of Cuba consular stamp and passport"
            className="rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10"
          />
          <p className="text-center text-white/40 text-[11px] mt-3 italic">Consular Authorization Documentation</p>
        </div>
        <div className="flex-1">
          <HeroPricing />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
