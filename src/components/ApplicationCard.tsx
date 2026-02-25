import { useState } from "react";

const ApplicationCard = () => {
  const [nationality, setNationality] = useState("US Citizen");
  const [category, setCategory] = useState("Support for the Cuban People");
  const [date, setDate] = useState("");
  const [airline, setAirline] = useState("American Airlines");
  const [dviajeros, setDviajeros] = useState("no");

  const selectClass = "w-full bg-ivory border border-ivory-mid rounded px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-gold transition-colors";
  const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-brand mb-1.5";

  return (
    <div className="bg-white rounded-xl p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-[22px] font-bold text-navy">Apply for Cuba E-Visa</h3>
        <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">⚡ Instant Delivery</span>
      </div>

      <div className="space-y-4">
        <div>
          <label className={labelClass}>Nationality</label>
          <select className={selectClass} value={nationality} onChange={e => setNationality(e.target.value)}>
            <option>US Citizen</option><option>Canada</option><option>UK</option><option>Spain</option><option>Other</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Travel Category</label>
          <select className={selectClass} value={category} onChange={e => setCategory(e.target.value)}>
            <option>Support for the Cuban People</option><option>Family Visits</option><option>Religious Activities</option><option>Humanitarian Projects</option><option>Journalism</option><option>Professional Research</option><option>Education</option><option>Other OFAC</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Travel Date</label>
          <input type="date" className={selectClass} value={date} onChange={e => setDate(e.target.value)} />
        </div>
        <div>
          <label className={labelClass}>Departing Airline</label>
          <select className={selectClass} value={airline} onChange={e => setAirline(e.target.value)}>
            <option>American Airlines</option><option>Delta</option><option>Southwest</option><option>JetBlue</option><option>Other</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>D'Viajeros Add-On</label>
          <select className={selectClass} value={dviajeros} onChange={e => setDviajeros(e.target.value)}>
            <option value="yes">Yes, include assistance (+$15)</option>
            <option value="no">No, I'll complete it myself</option>
          </select>
        </div>
      </div>

      <div className="flex items-baseline justify-between mt-6 mb-4">
        <span className="font-display text-[28px] font-bold text-navy">${dviajeros === "yes" ? "100" : "85"}</span>
        <span className="text-sm text-slate-brand">per traveler</span>
      </div>

      <button className="w-full bg-navy text-white font-semibold py-3.5 rounded text-sm uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300">
        Continue to Application →
      </button>

      <div className="flex items-center justify-center gap-4 mt-4 text-[12px] text-slate-brand">
        <span>🔒 Secure Payment</span>
        <span>✓ Consulate Authorized</span>
        <span>⚡ Instant Email</span>
      </div>
    </div>
  );
};

export default ApplicationCard;
