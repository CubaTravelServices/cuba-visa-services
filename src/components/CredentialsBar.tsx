import { Shield, Landmark, MapPin, Handshake, Plane } from "lucide-react";
import iataLogo from "@/assets/iata-logo-full.jpg";
import astaLogo from "@/assets/asta-logo-full.webp";
import ntaLogo from "@/assets/nta-logo-full.jpg";
import authorizeBadge from "@/assets/authorize-badge.png";

const badges = [
  { label: "IATA Accredited", sub: "Intl. Air Transport Association", Icon: Plane },
  { label: "OFAC Authorized", sub: "US Dept. of the Treasury", Icon: Shield },
  { label: "Florida Seller of Travel", sub: "State of Florida", Icon: Landmark },
  { label: "Consular Coordination", sub: "Direct Consular Channels", Icon: Handshake },
  { label: "Airline Agreements", sub: "All US Cuba Carriers", Icon: MapPin },
];

const accreditationLogos = [
  { src: iataLogo, alt: "IATA Accredited Agent", height: "h-14" },
  { src: astaLogo, alt: "American Society of Travel Advisors", height: "h-12" },
  { src: ntaLogo, alt: "National Tour Association", height: "h-12" },
  { src: authorizeBadge, alt: "Authorize.Net Verified Merchant", height: "h-14" },
];

const CredentialsBar = () => (
  <section className="bg-navy-mid section-padding">
    <div className="flex flex-col items-center gap-10 max-w-6xl mx-auto">
      <h2 className="font-display text-[28px] lg:text-[32px] text-white text-center">
        Authorized, Accredited, and <em className="text-gold-light italic">Accountable</em> — since 1999
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((b) => (
          <div key={b.label} className="bg-white/[0.07] border border-gold/25 rounded-lg px-6 py-4 text-center min-w-[160px]">
            <b.Icon className="w-6 h-6 text-gold mx-auto mb-2" />
            <div className="text-gold-pale text-[14px] font-bold uppercase tracking-wider">{b.label}</div>
            <div className="text-white/50 text-[12px] mt-1">{b.sub}</div>
          </div>
        ))}
      </div>

      {/* Industry Accreditation */}
      <div className="w-full border-t border-white/10 pt-8">
        <h3 className="font-display text-[20px] lg:text-[24px] text-white text-center mb-6">
          Industry <em className="text-gold-light italic">Accreditation</em>
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {accreditationLogos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.height} bg-white rounded-md px-3 py-2 object-contain`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CredentialsBar;
