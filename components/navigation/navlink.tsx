export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-teamm-gold hover:text-white transition-colors duration-200 font-montserrat uppercase tracking-wide font-medium"
  >
    {children}
  </a>
);

export const MobileNavLink = ({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-teamm-gold hover:text-white transition-colors duration-200 font-montserrat uppercase tracking-wide font-medium block py-1"
  >
    {children}
  </a>
);