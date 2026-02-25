import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const steps = [
  {
    num: "01",
    title: "Choose Your E-Visa Package",
    desc: "Select the package that fits your timeline — Standard ($85), Express ($135), or Signature ($225). Each includes a single-entry Cuba e-visa valid for 90 days.",
  },
  {
    num: "02",
    title: "Select Your OFAC Travel Category",
    desc: "US law requires travel to Cuba under one of 12 authorized categories. You'll self-certify your category during the application — no license application needed.",
  },
  {
    num: "03",
    title: "Complete Your Application",
    desc: "Enter your passport details, travel dates, and departing airline. Our system pre-validates all entries against Cuban consulate requirements before submission.",
  },
  {
    num: "04",
    title: "Secure Payment",
    desc: "Pay by credit card — US-issued cards work through our portal, unlike the Cuban government site (evisacuba.cu). All transactions are encrypted and PCI-compliant.",
  },
  {
    num: "05",
    title: "Receive Your E-Visa Instantly",
    desc: "Your Cuba e-visa arrives by email immediately (Express & Signature) or same-day (Standard). Print it or present it digitally at the airport.",
  },
  {
    num: "06",
    title: "Complete D'Viajeros Declaration",
    desc: "Cuba's mandatory digital health and customs form must be submitted before departure. Included with Express and Signature packages — we complete it correctly for you.",
  },
  {
    num: "07",
    title: "Board Your Flight to Cuba",
    desc: "Present your e-visa and passport at check-in. If you're departing from MIA or TPA, our airport staff is physically present to assist with any last-minute documentation needs.",
  },
];

const ofacCategories = [
  {
    name: "Support for the Cuban People",
    desc: "The most commonly used category. Travelers must engage in activities that support the Cuban people, such as staying at private accommodations (casas particulares), eating at private restaurants (paladares), and using private transportation.",
    popular: true,
  },
  {
    name: "Family Visits",
    desc: "For travelers visiting close relatives who are Cuban nationals or residents. No limit on visit frequency.",
    popular: false,
  },
  {
    name: "Journalism & Media",
    desc: "For journalists and media professionals engaged in reporting, filming, or information gathering activities.",
    popular: false,
  },
  {
    name: "Professional Research",
    desc: "For professionals conducting research in their professional field, including academics and scientists.",
    popular: false,
  },
  {
    name: "Educational Activities",
    desc: "Structured educational programs, academic courses, or scholarly research sponsored by a US or Cuban academic institution.",
    popular: false,
  },
  {
    name: "Religious Activities",
    desc: "For individuals traveling to engage in religious activities organized by a religious organization located in the US.",
    popular: false,
  },
  {
    name: "Humanitarian Projects",
    desc: "Projects designed to directly benefit the Cuban people, including activities by recognized human rights organizations.",
    popular: false,
  },
  {
    name: "Public Performances & Exhibitions",
    desc: "For artists, athletes, and other performers participating in public events, clinics, workshops, or competitions.",
    popular: false,
  },
  {
    name: "Activities of Private Foundations",
    desc: "Research or educational activities by private foundations or research/educational institutes with an established interest in Cuba.",
    popular: false,
  },
  {
    name: "Official Business of US Government",
    desc: "Travel on official business for the US government, foreign governments, or certain intergovernmental organizations.",
    popular: false,
  },
  {
    name: "Exportation & Importation of Information",
    desc: "Activities related to the creation, dissemination, or importation of informational materials (films, publications, artwork, etc.).",
    popular: false,
  },
  {
    name: "Authorized Export Transactions",
    desc: "For marketing, sales negotiation, delivery, or servicing of exports authorized under existing export regulations.",
    popular: false,
  },
];

const Process = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-navy section-padding text-center">
        <p className="eyebrow">Step-by-Step Guide</p>
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
          How to Get Your Cuba E-Visa
        </h1>
        <p className="text-white/60 max-w-xl mx-auto">
          From application to arrival — everything US citizens need to know about the Cuba e-visa process and OFAC travel categories.
        </p>
      </section>

      {/* Steps */}
      <section className="bg-white section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-10 text-center">
            The Process — 7 Simple Steps
          </h2>
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`flex gap-6 py-8 ${i < steps.length - 1 ? "border-b border-ivory-mid" : ""}`}
              >
                <div className="font-display text-[48px] font-bold text-gold/30 leading-none shrink-0 w-16">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-brand leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFAC Categories */}
      <section className="bg-ivory-mid section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow">OFAC Travel Categories</p>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-navy mb-3">
              12 Authorized Categories for US Travel to Cuba
            </h2>
            <p className="text-slate-brand text-sm max-w-xl mx-auto">
              The US Treasury Department's Office of Foreign Assets Control (OFAC) authorizes travel to Cuba under these 12 categories. Most travelers use "Support for the Cuban People." You self-certify — no license application is required.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {ofacCategories.map((cat) => (
              <div
                key={cat.name}
                className={`bg-white rounded-lg p-6 border ${cat.popular ? "border-gold shadow-md" : "border-ivory-mid"}`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display text-[17px] font-bold text-navy">{cat.name}</h3>
                  {cat.popular && (
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-gold text-navy px-2 py-0.5 rounded-full shrink-0">
                      Most Used
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-brand leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-center section-padding">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
          Ready to Start Your Application?
        </h2>
        <p className="text-white/55 max-w-md mx-auto mb-8">
          Choose your package and get your Cuba e-visa delivered to your inbox in minutes.
        </p>
        <Link to="/" className="btn-gold">
          View E-Visa Packages →
        </Link>
      </section>
    </main>
    <Footer />
  </div>
);

export default Process;
