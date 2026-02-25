import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 h-[68px] flex items-center justify-between px-[6%] bg-ivory/[0.97] backdrop-blur-xl border-b border-gold/20 transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-navy/5" : ""}`}
    >
      <a href="#" className="font-display text-2xl font-bold text-navy">
        Cuba<span className="text-gold">Visa</span>Services
      </a>
      <div className="hidden md:flex items-center gap-9">
        <a href="#services" className="text-sm font-medium text-navy hover:text-gold transition-colors">Services</a>
        <a href="#pricing" className="text-sm font-medium text-navy hover:text-gold transition-colors">Pricing</a>
        <a href="#airports" className="text-sm font-medium text-navy hover:text-gold transition-colors">Airport Offices</a>
        <a href="#faq" className="text-sm font-medium text-navy hover:text-gold transition-colors">FAQ</a>
        <a href="#pricing" className="btn-gold text-[12px] py-2.5 px-5">Apply Now</a>
      </div>
    </nav>
  );
};

export default Navbar;
