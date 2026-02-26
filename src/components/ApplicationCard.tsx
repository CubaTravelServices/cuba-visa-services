import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

const PACKAGES = [
  {
    key: "standard",
    name: "Standard Cuba E-Visa",
    price: 85,
    features: [
      "Single-Entry Cuba E-Visa",
      "Valid for 90 Days from Issuance",
      "Email Delivery",
      "Document Review Included",
      "Standard Customer Support",
    ],
  },
  {
    key: "express",
    name: "Express Cuba E-Visa",
    price: 135,
    features: [
      "Everything in Standard, plus:",
      "Priority Customer Support",
      "15 Minute Application Processing",
      "D'Viajeros Assistance Included",
    ],
  },
  {
    key: "signature",
    name: "Signature Service Cuba E-Visa",
    price: 225,
    features: [
      "Everything in Express, plus:",
      "VIP Immigration Processing on Arrival",
      "VIP Departure Lounge Access",
      "VIP Transfer to City Center",
      "Meet & Greet at Airport",
    ],
  },
];

const ApplicationCard = () => {
  const [searchParams] = useSearchParams();
  const initialPlan = searchParams.get("plan") || "standard";
  const [selectedPackage, setSelectedPackage] = useState(initialPlan);
  const [nationality, setNationality] = useState("US Citizen");
  const [category, setCategory] = useState("Support for the Cuban People");
  const [date, setDate] = useState("");
  const [airline, setAirline] = useState("American Airlines");
  const [addDviajeros, setAddDviajeros] = useState(false);
  const [addExpress, setAddExpress] = useState(false);

  const basePrice = PACKAGES.find((p) => p.key === selectedPackage)?.price || 85;
  const total = basePrice + (addDviajeros ? 25 : 0) + (addExpress ? 25 : 0);

  const selectClass = "w-full bg-ivory border border-ivory-mid rounded px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-gold transition-colors";
  const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-brand mb-1.5";

  return (
    <div className="bg-white rounded-xl p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-display text-[22px] font-bold text-navy">Apply for Cuba E-Visa</h3>
        <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">⚡ Instant Delivery</span>
        </div>
        {/* Package features */}
        <div className="bg-ivory border border-ivory-mid rounded p-4">
          <ul className="space-y-1.5">
            {PACKAGES.find((p) => p.key === selectedPackage)?.features.map((f, i) => (
              <li key={i} className={`text-[13px] flex items-start gap-2 ${i === 0 && selectedPackage !== "standard" ? "text-slate-brand italic" : "text-navy"}`}>
                <span className="text-gold mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

      <div className="space-y-4">
        <div>
          <label className={labelClass}>E-Visa Package</label>
          <select
            className={selectClass}
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
          >
            {PACKAGES.map((pkg) => (
              <option key={pkg.key} value={pkg.key}>
                {pkg.name} — ${pkg.price}
              </option>
            ))}
          </select>
        </div>
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

        {/* Add-ons */}
        <div>
          <label className={labelClass}>Add-Ons</label>
          <div className="space-y-3 bg-ivory border border-ivory-mid rounded p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={addDviajeros}
                onCheckedChange={(checked) => setAddDviajeros(checked === true)}
                className="mt-0.5"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy">D'Viajeros Assistance</span>
                  <span className="text-sm font-bold text-gold">+$25.00</span>
                </div>
                <p className="text-[12px] text-slate-brand mt-0.5">We complete Cuba's mandatory health & customs form for you</p>
              </div>
            </label>
            <hr className="border-ivory-mid" />
            <label className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={addExpress}
                onCheckedChange={(checked) => setAddExpress(checked === true)}
                className="mt-0.5"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy">Express Application Processing</span>
                  <span className="text-sm font-bold text-gold">+$25.00</span>
                </div>
                <p className="text-[12px] text-slate-brand mt-0.5">Priority processing — e-visa delivered in ~15 minutes</p>
              </div>
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-baseline justify-between mt-6 mb-4">
        <span className="font-display text-[28px] font-bold text-navy">${total}</span>
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
