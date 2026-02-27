import { Shield, Landmark, MapPin, Handshake, Plane } from "lucide-react";

const badges = [
  { label: "IATA Accredited", sub: "Intl. Air Transport Association", Icon: Plane },
  { label: "OFAC Authorized", sub: "US Dept. of the Treasury", Icon: Shield },
  { label: "Florida Seller of Travel", sub: "State of Florida", Icon: Landmark },
  { label: "Consular Coordination", sub: "Direct Consular Channels", Icon: Handshake },
  { label: "Airline Agreements", sub: "All US Cuba Carriers", Icon: MapPin },
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
    </div>
  </section>
);

export default CredentialsBar;
