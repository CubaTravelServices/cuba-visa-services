const airlines = [
  { name: "American Airlines", airport: "Miami International (MIA)" },
  { name: "Delta Air Lines", airport: "Miami International (MIA)" },
  { name: "Southwest Airlines", airport: "Tampa International (TPA)" },
  { name: "+ All US Airlines", airport: "Service agreements with all carriers" },
];

const AirlineStrip = () => (
  <div className="bg-navy-mid py-5 px-[6%] flex flex-wrap items-center justify-center gap-4 lg:gap-8">
    <span className="text-[11px] uppercase tracking-[0.12em] text-white/40 mr-2">Exclusive Airport Presence At:</span>
    {airlines.map((a) => (
      <div key={a.name} className="flex items-center gap-2 bg-white/[0.07] border border-gold/20 px-4 py-2.5 rounded-md">
        <span className="w-2 h-2 rounded-full bg-gold inline-block" />
        <span className="text-white text-sm font-semibold">{a.name}</span>
        <span className="text-gold-light text-[11px]">{a.airport}</span>
      </div>
    ))}
  </div>
);

export default AirlineStrip;
