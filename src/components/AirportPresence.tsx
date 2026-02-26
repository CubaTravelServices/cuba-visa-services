import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const airports = [
  { airline: "American Airlines", code: "MIA", location: "Miami International Airport, FL", desc: "Our staff serves AA Cuba-bound passengers at MIA — assisting with last-minute e-visa needs, D'Viajeros completion, and documentation questions at the terminal." },
  { airline: "Delta Air Lines", code: "MIA", location: "Miami International Airport, FL", desc: "Delta passengers departing Miami for Cuba can access our team at the airport in real-time for documentation issues and traveler support." },
  { airline: "Southwest Airlines", code: "TPA", location: "Tampa International Airport, FL", desc: "The only Cuba visa service staffed at Southwest's Tampa Cuba operation. Every passenger has correct documentation before reaching the gate." },
];

const AirportPresence = () => {
  const ref = useScrollAnimation();
  return (
    <section id="airports" className="bg-ivory section-padding" ref={ref}>
      <div className="text-center mb-12">
        <p className="eyebrow">Airport Offices</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">Exclusive Airport Presence At:</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {airports.map((a) => (
          <div key={a.airline + a.code} className="bg-white rounded-xl border border-ivory-mid overflow-hidden card-hover animate-on-scroll">
            <div className="bg-navy p-7 pb-5 relative">
              <span className="absolute top-4 right-4 bg-gold text-navy text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                Exclusive
              </span>
              <h3 className="font-display text-[22px] font-bold text-white">{a.airline}</h3>
              <div className="font-display text-[42px] font-bold text-white/[0.12] tracking-wider leading-none">{a.code}</div>
            </div>
            <div className="p-6">
              <p className="text-[13px] uppercase tracking-wider text-slate-brand mb-2">📍 {a.location}</p>
              <p className="text-sm text-slate-brand leading-relaxed">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AirportPresence;
