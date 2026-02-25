import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Airport Locations", href: "#airports" },
  { label: "Blog", href: "/blog" },
  { label: "Travel Services", href: "https://CubaTravelServices.com", external: true },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 h-[68px] flex items-center justify-between px-[6%] bg-burgundy backdrop-blur-xl border-b border-gold/20 transition-shadow duration-300 ${scrolled ? "shadow-lg shadow-navy/5" : ""}`}
      >
        <a href="#" className="font-display text-2xl font-bold text-white">
          Cuba<span className="text-gold">Visa</span>Services
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-sm font-medium text-white/80 hover:text-gold transition-colors">{l.label}</a>
          ))}
          <a href="#pricing" className="btn-gold text-[12px] py-2.5 px-5">Apply Now</a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-navy/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile slide-in panel */}
      <div
        className={`fixed top-0 right-0 z-[70] h-full w-[280px] bg-ivory shadow-2xl transition-transform duration-300 ease-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 h-[68px] border-b border-gold/20">
          <span className="font-display text-xl font-bold text-navy">
            Cuba<span className="text-gold">Visa</span>Services
          </span>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-navy">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              onClick={() => setMenuOpen(false)}
              className="text-[16px] font-medium text-navy hover:text-gold transition-colors py-3 border-b border-ivory-mid"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-center mt-6"
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
