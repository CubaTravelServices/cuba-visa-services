import { FileText, QrCode, Shield, ArrowDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DocumentSteps = () => {
  const ref = useScrollAnimation();

  return (
    <section className="bg-ivory section-padding" ref={ref}>
      <div className="text-center mb-12">
        <p className="eyebrow">Your Documents</p>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-navy">
          What You'll Receive
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Step 1 */}
        <div className="animate-on-scroll flex flex-col items-center text-center">
          <div className="bg-white rounded-lg border border-ivory-mid shadow-md w-full max-w-[280px] overflow-hidden mb-4">
            <div className="bg-navy px-4 py-3 flex items-center gap-2">
              <FileText className="text-gold" size={18} />
              <span className="text-white text-xs font-semibold uppercase tracking-wider">Electronic Visa</span>
            </div>
            <div className="p-5 space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-slate-brand font-semibold">Cuba Travel Services</div>
              <div className="border border-dashed border-ivory-mid rounded p-3">
                <div className="text-[10px] uppercase tracking-wider text-slate-brand mb-1">Electronic Visa Number</div>
                <div className="font-display text-lg font-bold text-navy tracking-wider">CU-XXXX-XXXX</div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-brand">
                <div><span className="block font-semibold text-navy">Name</span>Traveler Name</div>
                <div><span className="block font-semibold text-navy">Nationality</span>US Citizen</div>
                <div><span className="block font-semibold text-navy">Valid For</span>90 Days</div>
                <div><span className="block font-semibold text-navy">Entry</span>Single</div>
              </div>
            </div>
          </div>
          <div className="font-display text-[52px] font-bold leading-none text-secondary mb-1">01</div>
          <h3 className="font-display text-lg font-bold text-navy mb-1">Receive Your E-Visa</h3>
          <p className="text-sm text-slate-brand leading-relaxed">Electronic Visa proof of purchase delivered to your email</p>
          <ArrowDown className="text-gold mt-4 md:hidden" size={24} />
        </div>

        {/* Arrow desktop */}
        {/* Step 2 */}
        <div className="animate-on-scroll flex flex-col items-center text-center">
          <div className="bg-white rounded-lg border border-ivory-mid shadow-md w-full max-w-[280px] overflow-hidden mb-4">
            <div className="bg-navy px-4 py-3 flex items-center gap-2">
              <Shield className="text-gold" size={18} />
              <span className="text-white text-xs font-semibold uppercase tracking-wider">D'Viajeros Form</span>
            </div>
            <div className="p-5 space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-slate-brand font-semibold">República de Cuba</div>
              <div className="border border-gold/30 bg-gold-pale rounded p-3">
                <div className="text-[10px] uppercase tracking-wider font-bold text-navy mb-1">⚠ Important</div>
                <p className="text-[10px] text-navy leading-relaxed">
                  Complete this form with your E-Visa number and travel details
                </p>
              </div>
              <div className="space-y-2 text-[10px] text-slate-brand">
                <div className="flex justify-between border-b border-ivory-mid pb-1">
                  <span>Health Declaration</span><span className="text-navy font-semibold">Required</span>
                </div>
                <div className="flex justify-between border-b border-ivory-mid pb-1">
                  <span>Customs Form</span><span className="text-navy font-semibold">Required</span>
                </div>
                <div className="flex justify-between">
                  <span>E-Visa Number</span><span className="text-navy font-semibold">Required</span>
                </div>
              </div>
            </div>
          </div>
          <div className="font-display text-[52px] font-bold leading-none text-secondary mb-1">02</div>
          <h3 className="font-display text-lg font-bold text-navy mb-1">Complete D'Viajeros Form</h3>
          <p className="text-sm text-slate-brand leading-relaxed">Cuba's mandatory health & customs declaration form</p>
          <ArrowDown className="text-gold mt-4 md:hidden" size={24} />
        </div>

        {/* Step 3 */}
        <div className="animate-on-scroll flex flex-col items-center text-center">
          <div className="bg-white rounded-lg border border-ivory-mid shadow-md w-full max-w-[280px] overflow-hidden mb-4">
            <div className="bg-navy px-4 py-3 flex items-center gap-2">
              <QrCode className="text-gold" size={18} />
              <span className="text-white text-xs font-semibold uppercase tracking-wider">Completed Form</span>
            </div>
            <div className="p-5 space-y-3">
              <div className="text-[10px] uppercase tracking-widest text-slate-brand font-semibold">D'Viajeros Confirmation</div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 border-2 border-navy rounded flex items-center justify-center shrink-0">
                  <QrCode className="text-navy" size={32} />
                </div>
                <div className="text-left space-y-1">
                  <div className="text-[10px] text-slate-brand">E-Visa Number</div>
                  <div className="font-display text-sm font-bold text-navy">CU-XXXX-XXXX</div>
                  <div className="text-[10px] text-slate-brand">Status: <span className="text-gold font-semibold">Verified</span></div>
                </div>
              </div>
              <div className="border border-gold/40 bg-gold-pale rounded p-2 flex items-center gap-2">
                <Shield className="text-gold shrink-0" size={14} />
                <span className="text-[9px] font-semibold text-navy uppercase tracking-wider leading-tight">
                  Dirección de Identificación, Inmigración y Extranjería — Seal Included
                </span>
              </div>
            </div>
          </div>
          <div className="font-display text-[52px] font-bold leading-none text-secondary mb-1">03</div>
          <h3 className="font-display text-lg font-bold text-navy mb-1">Receive Completed Form</h3>
          <p className="text-sm text-slate-brand leading-relaxed">D'Viajeros form with QR code, E-Visa number & official seal</p>
        </div>
      </div>

      {/* Important notice */}
      <div className="max-w-4xl mx-auto mt-10 bg-navy rounded-lg p-5 text-center animate-on-scroll">
        <p className="text-[11px] uppercase tracking-wider font-bold text-gold leading-relaxed">
          ⚠ Your E-Visa will not be accepted unless the E-Visa number &amp; "Dirección de Identificación, Inmigración y Extranjería" seal is included on your D'Viajeros form confirmation page
        </p>
      </div>
    </section>
  );
};

export default DocumentSteps;
