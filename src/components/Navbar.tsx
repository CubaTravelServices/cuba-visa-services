import { useState, useEffect, useRef } from "react";
import logo from "@/assets/logo.svg";
import { Menu, X, ShoppingBag, ChevronDown } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";

const visaDropdownItems = [
  { label: "Travel to Cuba (E-Visa)", href: "/apply?plan=standard" },
  { label: "Cuban Passport Services", href: "#services" },
  { label: "Birth Certificates & Civil Documents", href: "#services" },
  { label: "Help / FAQs", href: "#faq" },
];

const navLinks = [
  { label: "Visas & Consular Services", href: "#", dropdown: true },
  { label: "Airport Locations", href: "#airports" },
  { label: "Insights", href: "/insights" },
  { label: "Travel Services", href: "https://CubaTravelServices.com", external: true },
  { label: "About Us", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { itemCount, setDrawerOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex items-center justify-between px-[6%] bg-burgundy backdrop-blur-xl border-b border-gold/20 transition-all duration-300 ${scrolled ? "h-[80px] shadow-lg shadow-navy/5" : "h-[140px]"}`}
      >
        <a href="/" className="shrink-0 flex flex-col items-center">
          <img src={logo} alt="Cuba Travel Services" className={`transition-all duration-300 ${scrolled ? "h-[50px]" : "h-[100px]"}`} />
          <span className={`text-white/70 font-medium tracking-wide transition-all duration-300 ${scrolled ? "text-[8px] mt-0.5" : "text-[10px] mt-1"}`}>A Cuba Travel Services Company</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div key={l.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-sm font-medium text-white/80 hover:text-gold transition-colors flex items-center gap-1"
                >
                  {l.label}
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-[260px] bg-white rounded-lg shadow-xl border border-ivory-mid py-2 z-50">
                    {visaDropdownItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-navy hover:bg-ivory-mid hover:text-gold transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a key={l.href} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-sm font-medium text-white/80 hover:text-gold transition-colors">{l.label}</a>
            )
          )}
          <a href="/apply?plan=standard" className="btn-gold text-[12px] py-2.5 px-5">Apply Now</a>
          <button onClick={() => setDrawerOpen(true)} className="relative text-white/80 hover:text-gold transition-colors" aria-label="Open cart">
            <ShoppingBag className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-navy text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">{itemCount}</span>
            )}
          </button>
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
          <div className="flex flex-col items-center">
            <img src={logo} alt="Cuba Travel Services" className="h-8" />
            <span className="text-navy/60 text-[7px] font-medium tracking-wide">A Cuba Travel Services Company</span>
          </div>
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-navy">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 gap-1">
          {/* Visas & Consular Services dropdown */}
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center justify-between text-[16px] font-medium text-navy hover:text-gold transition-colors py-3 border-b border-ivory-mid"
          >
            <span>Visas & Consular Services</span>
            <ChevronDown size={16} className={`transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileDropdownOpen && (
            <div className="pl-4 mb-1">
              {visaDropdownItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-[14px] text-slate-brand hover:text-gold transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {navLinks.filter(l => !l.dropdown).map((l) => (
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
            href="/apply?plan=standard"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-center mt-6"
          >
            Apply Now
          </a>
        </div>
      </div>
      <CartDrawer />
    </>
  );
};

export default Navbar;
