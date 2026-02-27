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

      <div className="max-w-5xl mx-auto">
        <HeroPricing />
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex items-center gap-6 bg-white/[0.04] border border-white/10 rounded-xl px-8 py-5">
          <img
            src={consularService}
            alt="Cuba visa document with Republic of Cuba consular stamp and passport"
            className="w-28 h-28 rounded-lg object-cover border border-white/10 shadow-lg"
          />
          <div>
            <p className="text-white text-base font-semibold">Consular Authorization Documentation</p>
            <p className="text-white/50 text-sm mt-1">Direct coordination with the Cuban Consulate</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
