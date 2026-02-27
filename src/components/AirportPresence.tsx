import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Plane } from "lucide-react";

const airports = [
  { airline: "American Airlines", code: "MIA", location: "Miami International Airport, FL", desc: "Our staff serves AA Cuba-bound passengers at MIA — assisting with last-minute e-visa needs, D'Viajeros completion, and documentation questions at the terminal." },
  { airline: "Delta Air Lines", code: "MIA", location: "Miami International Airport, FL", desc: "Delta passengers departing Miami for Cuba can access our team at the airport in real-time for documentation issues and traveler support." },
];

const AirportPresence = () => {
  const ref = useScrollAnimation();
  return (
    <section id="airports" className="bg-ivory section-padding" ref={ref}>
      <div className="text-center mb-12">
        <p className="eyebrow">Airport Offices</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">Airport Presence</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {airports.map((a) => (
          <div key={a.airline + a.code} className="bg-white rounded-xl border border-ivory-mid overflow-hidden card-hover animate-on-scroll">
            <div className="bg-navy p-7 pb-5 relative">
              <div className="flex items-center gap-2 mb-1">
                <Plane className="w-5 h-5 text-gold" />
                <h3 className="font-display text-[22px] font-bold text-white">{a.airline}</h3>
              </div>
              <div className="font-display text-[42px] font-bold text-white/[0.12] tracking-wider leading-none">{a.code}</div>
            </div>
            <div className="p-6">
              <p className="text-[13px] uppercase tracking-wider text-slate-brand mb-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold" /> {a.location}
              </p>
              <p className="text-sm text-slate-brand leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AirportPresence;
