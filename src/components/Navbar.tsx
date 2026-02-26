import { useState, useEffect } from "react";
import logo from "@/assets/logo.svg";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "@/components/CartDrawer";

const navLinks = [
  { label: "Application Process", href: "/process" },
  { label: "Airport Locations", href: "#airports" },
  { label: "Visa Blog", href: "/blog" },
  { label: "Travel Services", href: "https://CubaTravelServices.com", external: true },
  { label: "About Us", href: "https://CubaTravelServices.com/about", external: true },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { itemCount, setDrawerOpen } = useCart();

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
        className={`sticky top-0 z-50 flex items-center justify-between px-[6%] bg-burgundy backdrop-blur-xl border-b border-gold/20 transition-all duration-300 ${scrolled ? "h-[80px] shadow-lg shadow-navy/5" : "h-[140px]"}`}
      >
        <a href="/" className="shrink-0 flex flex-col items-center">
          <img src={logo} alt="Cuba Visa Services" className={`transition-all duration-300 ${scrolled ? "h-[50px]" : "h-[100px]"}`} />
          <span className={`text-white/70 font-medium tracking-wide transition-all duration-300 ${scrolled ? "text-[8px] mt-0.5" : "text-[10px] mt-1"}`}>A Cuba Travel Services Company</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="text-sm font-medium text-white/80 hover:text-gold transition-colors">{l.label}</a>
          ))}
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
            <img src={logo} alt="Cuba Visa Services" className="h-8" />
            <span className="text-navy/60 text-[7px] font-medium tracking-wide">A Cuba Travel Services Company</span>
          </div>
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
