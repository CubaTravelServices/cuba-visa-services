import { useState } from "react";
import { useCart, itemTotal } from "@/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const STEPS = ["Review Order", "OFAC Category", "Application Details", "Payment"];

const OFAC_CATEGORIES = [
  "Support for the Cuban People",
  "Family Visits",
  "Official Business of the U.S. Government, Foreign Governments, and Certain Intergovernmental Organizations",
  "Journalistic Activity",
  "Professional Research and Professional Meetings",
  "Educational Activities",
  "Religious Activities",
  "Public Performances, Clinics, Workshops, Athletic and Other Competitions, and Exhibitions",
  "Humanitarian Projects",
  "Activities of Private Foundations or Research or Educational Institutes",
  "Exportation, Importation, or Transmission of Information or Informational Materials",
  "Certain Export Transactions",
];

const Checkout = () => {
  const { items, cartTotal } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  // Step 2 state
  const [ofacCategory, setOfacCategory] = useState("");
  const [attestation, setAttestation] = useState(false);

  // Step 3 state (per first traveler for now)
  const [form, setForm] = useState({
    fullName: "",
    passportNumber: "",
    passportExpiry: "",
    nationality: "US Citizen",
    dateOfBirth: "",
    travelDate: "",
    airline: "American Airlines",
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen">
        <TopBar />
        <Navbar />
        <main className="bg-navy min-h-[60vh] section-padding flex flex-col items-center justify-center">
          <p className="text-white/60 text-lg mb-4">Your cart is empty</p>
          <Link to="/" className="btn-gold">Browse Packages</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const canProceed = () => {
    if (step === 1) return ofacCategory !== "" && attestation;
    if (step === 2) return form.fullName && form.passportNumber && form.passportExpiry && form.dateOfBirth && form.travelDate;
    return true;
  };

  const inputClass = "w-full bg-ivory border border-ivory-mid rounded px-3 py-2.5 text-sm text-navy focus:outline-none focus:border-gold transition-colors";
  const labelClass = "block text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-brand mb-1.5";

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <main className="bg-navy min-h-[80vh] section-padding">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="text-gold text-sm hover:underline mb-6 inline-block">← Back to Home</Link>

          {/* Progress bar */}
          <div className="flex items-center gap-1 mb-8">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold shrink-0 transition-colors ${i < step ? "bg-gold text-navy" : i === step ? "bg-gold text-navy" : "bg-white/10 text-white/40"}`}>
                  {i < step ? <Check className="h-4 w-4" /> : i + 1}
                </div>
                <span className={`ml-2 text-xs font-semibold uppercase tracking-wider hidden sm:block ${i <= step ? "text-gold" : "text-white/30"}`}>{s}</span>
                {i < STEPS.length - 1 && <ChevronRight className="h-4 w-4 text-white/20 ml-auto" />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 lg:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">

            {/* Step 0: Review */}
            {step === 0 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Review Your Order</h2>
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between bg-ivory rounded-lg p-4 border border-ivory-mid">
                      <div>
                        <h4 className="font-display text-lg font-bold text-navy">{item.packageName}</h4>
                        <p className="text-xs text-slate-brand">{item.travelers} traveler{item.travelers > 1 ? "s" : ""}</p>
                        {item.addOns.dviajeros && <p className="text-xs text-gold">+ D'Viajeros Assistance</p>}
                        {item.addOns.expressProcessing && <p className="text-xs text-gold">+ Express Processing</p>}
                      </div>
                      <span className="font-display text-xl font-bold text-navy">${itemTotal(item)}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-baseline justify-between mt-6 pt-4 border-t border-ivory-mid">
                  <span className="text-sm font-semibold text-slate-brand uppercase tracking-wider">Total</span>
                  <span className="font-display text-3xl font-bold text-navy">${cartTotal}</span>
                </div>
              </div>
            )}

            {/* Step 1: OFAC */}
            {step === 1 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-navy mb-2">OFAC Travel Category</h2>
                <p className="text-sm text-slate-brand mb-6">U.S. travelers must select an authorized OFAC category for travel to Cuba.</p>
                <div>
                  <label className={labelClass}>Travel Category</label>
                  <select className={inputClass} value={ofacCategory} onChange={(e) => setOfacCategory(e.target.value)}>
                    <option value="">Select a category…</option>
                    {OFAC_CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="mt-6 bg-ivory border border-ivory-mid rounded p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <Checkbox checked={attestation} onCheckedChange={(c) => setAttestation(c === true)} className="mt-0.5" />
                    <p className="text-sm text-navy leading-relaxed">
                      I attest that my travel to Cuba falls within the selected OFAC-authorized category and that I will maintain records of my travel-related transactions for five years as required by U.S. law.
                    </p>
                  </label>
                </div>
              </div>
            )}

            {/* Step 2: Application Details */}
            {step === 2 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-navy mb-2">Application Details</h2>
                <p className="text-sm text-slate-brand mb-6">Enter passport and travel information for the primary traveler.</p>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>Full Name (as on passport)</label>
                    <input className={inputClass} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} placeholder="John Michael Doe" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Passport Number</label>
                      <input className={inputClass} value={form.passportNumber} onChange={(e) => setForm({ ...form, passportNumber: e.target.value })} placeholder="123456789" />
                    </div>
                    <div>
                      <label className={labelClass}>Passport Expiry</label>
                      <input type="date" className={inputClass} value={form.passportExpiry} onChange={(e) => setForm({ ...form, passportExpiry: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Nationality</label>
                      <select className={inputClass} value={form.nationality} onChange={(e) => setForm({ ...form, nationality: e.target.value })}>
                        <option>US Citizen</option><option>Canada</option><option>UK</option><option>Spain</option><option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Date of Birth</label>
                      <input type="date" className={inputClass} value={form.dateOfBirth} onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })} />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Travel Date</label>
                      <input type="date" className={inputClass} value={form.travelDate} onChange={(e) => setForm({ ...form, travelDate: e.target.value })} />
                    </div>
                    <div>
                      <label className={labelClass}>Departing Airline</label>
                      <select className={inputClass} value={form.airline} onChange={(e) => setForm({ ...form, airline: e.target.value })}>
                        <option>American Airlines</option><option>Delta</option><option>Southwest</option><option>JetBlue</option><option>Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Payment placeholder */}
            {step === 3 && (
              <div>
                <h2 className="font-display text-2xl font-bold text-navy mb-2">Secure Payment</h2>
                <p className="text-sm text-slate-brand mb-6">Your payment will be processed securely via Authorize.net.</p>

                <div className="bg-ivory border border-ivory-mid rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🔒</div>
                  <p className="font-display text-xl font-bold text-navy mb-1">Payment Integration Coming Soon</p>
                  <p className="text-sm text-slate-brand">Authorize.net Accept.js will be integrated here for PCI-compliant card processing.</p>
                </div>

                <div className="flex items-baseline justify-between mt-6 pt-4 border-t border-ivory-mid">
                  <span className="text-sm font-semibold text-slate-brand uppercase tracking-wider">Total Due</span>
                  <span className="font-display text-3xl font-bold text-navy">${cartTotal}</span>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-ivory-mid">
              {step > 0 ? (
                <button onClick={() => setStep(step - 1)} className="text-sm font-semibold text-slate-brand hover:text-navy transition-colors">
                  ← Back
                </button>
              ) : (
                <div />
              )}
              {step < 3 ? (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="bg-navy text-white font-semibold py-3 px-8 rounded text-sm uppercase tracking-wider hover:bg-gold hover:text-navy transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue →
                </button>
              ) : (
                <button
                  disabled
                  className="bg-gold text-navy font-semibold py-3 px-8 rounded text-sm uppercase tracking-wider opacity-40 cursor-not-allowed"
                >
                  Pay ${cartTotal} →
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6 text-[12px] text-white/40">
            <span>🔒 Secure Payment</span>
            <span>✓ Consulate Authorized</span>
            <span>⚡ 15 Min Processing</span>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
