import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaSection from "@/components/CtaSection";

const AboutUs = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-burgundy text-white px-[6%] py-20 text-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
          About <span className="text-gold">Cuba Travel Services</span>
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          America's most trusted Cuba visa and travel services provider since 1999.
        </p>
      </section>

      {/* Story */}
      <section className="px-[6%] py-16 max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-navy mb-6">Our Story</h2>
        <p className="text-navy/70 leading-relaxed mb-4">
          Cuba Travel Services was founded in 1999 with a simple mission: make travel to Cuba accessible, legal, and stress-free for Americans. Over two decades later, we've helped hundreds of thousands of travelers navigate the complexities of Cuba travel — from visa procurement to full-service travel planning.
        </p>
        <p className="text-navy/70 leading-relaxed mb-4">
          Cuba Visa Services is our specialized visa division, operating under an exclusive contract with US Based Airlines and the Cuban Consulate in Washington, D.C. This direct relationship allows us to process visas faster and more reliably than any other provider in the United States.
        </p>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-ivory-mid px-[6%] py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-navy mb-8">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Direct Consulate Contract", desc: "We hold a direct contract with the Cuban Consulate, ensuring legitimate, government-recognized visa processing." },
              { title: "Airport Presence", desc: "Physical staff at Miami International (MIA) and Tampa International (TPA) airports for last-minute visa assistance." },
              { title: "IATA Accredited", desc: "Internationally accredited by the International Air Transport Association, meeting the highest industry standards." },
              { title: "OFAC Authorized", desc: "Fully compliant with U.S. Treasury Department regulations for Cuba travel under all 12 authorized categories." },
              { title: "Florida Seller of Travel", desc: "Licensed and registered in the state of Florida, providing consumer protection for every transaction." },
              { title: "25+ Years of Experience", desc: "Since 1999, we've built unmatched expertise in Cuba travel regulations, visa processing, and customer service." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm border border-gold/10">
                <h3 className="font-display text-lg font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="px-[6%] py-16 max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-navy mb-6">Our Services</h2>
        <ul className="space-y-3 text-navy/70">
          {[
            "Cuba E-Visa & Tourist Card processing",
            "D'Viajeros travel form assistance",
            "Business and journalist visa support",
            "Group and corporate travel coordination",
            "Cuba travel insurance",
            "Full-service Cuba trip planning via CubaTravelServices.com",
          ].map((s) => (
            <li key={s} className="flex items-start gap-3">
              <span className="text-gold font-bold mt-0.5">✦</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="bg-navy text-white px-[6%] py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-white/60 mb-6">Questions about our services? Our team is here to help.</p>
          <a href="mailto:Info@CubaVisaServices.com" className="btn-gold inline-block">
            Email Our Team
          </a>
        </div>
      </section>

      <CtaSection />
    </main>
    <Footer />
  </div>
);

export default AboutUs;
