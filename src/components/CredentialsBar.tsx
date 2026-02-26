const badges = [
  { label: "IATA Accredited", sub: "Intl. Air Transport Association" },
  { label: "OFAC Authorized", sub: "US Dept. of the Treasury" },
  { label: "Florida Seller of Travel", sub: "State of Florida" },
  { label: "Consulate Contract", sub: "Cuban Consulate — Direct" },
  { label: "Airline Agreements", sub: "All US Cuba Carriers" },
];

const CredentialsBar = () => (
  <section className="bg-navy-mid section-padding">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
      <h2 className="font-display text-[26px] text-white text-center lg:text-left">
        Authorized, Accredited, and <em className="text-gold-light italic">Accountable</em> — since 1999
      </h2>
      <div className="flex flex-wrap justify-center gap-3">
        {badges.map((b) => (
          <div key={b.label} className="bg-white/[0.07] border border-gold/25 rounded-md px-4 py-2.5 text-center">
            <div className="text-gold-pale text-[12px] font-bold uppercase tracking-wider">{b.label}</div>
            <div className="text-white/35 text-[10px] mt-0.5">{b.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CredentialsBar;
