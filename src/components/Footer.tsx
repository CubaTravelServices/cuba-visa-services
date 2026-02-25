const footerLinks = {
  services: ["Cuba E-Visa", "D'Viajeros Form", "Business Visa", "Passport Renewal", "Birth Certificate", "Consular Services"],
  travel: ["Cuba Visa for US Citizens", "Cuba Travel Requirements 2026", "OFAC Categories", "D'Viajeros Guide", "E-Visa vs Tourist Card", "Cuba Travel Insurance"],
  airlines: ["American Airlines Cuba Visa", "Delta Airlines Cuba Visa", "Southwest Airlines Cuba Visa", "JetBlue Cuba Visa", "Cuba Cruise Visa", "Miami Airport Cuba"]
};

const Footer = () =>
<footer className="bg-darkest text-white/40 px-[6%] pt-12 pb-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto mb-10">
      <div>
        <div className="font-display text-xl text-white font-bold mb-3">
          Cuba<span className="text-gold">Visa</span>Services
        </div>
        <p className="text-sm leading-relaxed mb-3">America's most trusted Cuba visa and e-visa provider since 1999. Direct Cuban Consulate contract. Physical staff at MIA and TPA airports. Cuba Visa Services is a Cuba Travel Services affiliate. 

      </p>
        <p className="text-[12px]">Airport offices: Miami (MIA) · Tampa (TPA)</p>
      </div>
      {Object.entries(footerLinks).map(([title, links]) =>
    <div key={title}>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">{title === "travel" ? "Travel Info" : title.charAt(0).toUpperCase() + title.slice(1)}</h4>
          <ul className="space-y-2">
            {links.map((link) =>
        <li key={link}>
                <a href="#" className="text-sm hover:text-gold transition-colors">{link}</a>
              </li>
        )}
          </ul>
        </div>
    )}
    </div>
    <div className="border-t border-white/[0.07] pt-6 text-center text-[12px]">
      © 2026 Cuba Visa Services. All rights reserved. · IATA Accredited · OFAC Authorized · Florida Seller of Travel · Not affiliated with the Cuban Government.
    </div>
  </footer>;


export default Footer;