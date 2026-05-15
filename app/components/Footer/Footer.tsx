import Link from "next/link"; // Update this import if using react-router-dom

const investLinks = [
  { label: "Vermögensaufbau", href: "/vermoegensaufbau" },
  { label: "Zinsen", href: "/zinsen" },
  { label: "VL-Sparen", href: "/vl-sparen" },
  { label: "Kinderdepot", href: "/kinderdepot" },
  { label: "Betriebsrente", href: "/betriebsrente" },
];

const aboutLinks = [
  { label: "Expertise", href: "/expertise" },
  { label: "Nachhaltigkeit", href: "/nachhaltigkeit" },
  { label: "Sicherheit", href: "/sicherheit" },
];

const Footer = () => {
  return (
    <footer className="w-full px-4 pt-8 bg-white">
      <div className="max-w-7xl mx-auto bg-[#0B2B1D] text-white rounded-[40px] p-8 md:p-16">
        {/* Logo Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-center md:text-left">
            evergreen
          </h2>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10 pb-12">
          
          {/* Evergreen */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Evergreen</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/hilfe" className="hover:text-white transition-colors">Hilfe</Link></li>
              {aboutLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li><Link href="/kosten" className="hover:text-white transition-colors">Kosten</Link></li>
              <li><Link href="/nachhaltigkeitsbericht" className="hover:text-white transition-colors">Nachhaltigkeitsbericht ↗</Link></li>
              <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter abonnieren</Link></li>
              <li><Link href="/presse" className="hover:text-white transition-colors">Presse</Link></li>
            </ul>
          </div>

          {/* Wissen & Märkte */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Wissen & Märkte</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog ↗</Link></li>
              <li><Link href="/marktkommentar" className="hover:text-white transition-colors">Marktkommentar ↗</Link></li>
              <li><Link href="/sprechstunde" className="hover:text-white transition-colors">Fondsmanagement-Sprechstunde ↗</Link></li>
              <li><Link href="/studien" className="hover:text-white transition-colors">Robo-Advisor-Studien ↗</Link></li>
            </ul>
          </div>

          {/* Investieren */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Investieren</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              {investLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Downloads */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">Downloads</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/fondsinformationen" className="hover:text-white transition-colors">Fondsinformationen</Link></li>
              <li><Link href="/rechtliches" className="hover:text-white transition-colors">Rechtliche Dokumente</Link></li>
              <li><Link href="/nachhaltigkeitsdokumente" className="hover:text-white transition-colors">Nachhaltigkeitsdokumente</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-sm text-gray-300">
          
          {/* Address */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span>Musterstraße 123, 10115 Berlin</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <a href="tel:+49301234567" className="hover:text-white transition-colors">
              +49 (0) 30 123 456 7
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <a href="mailto:kontakt@evergreen.de" className="hover:text-white transition-colors">
              kontakt@evergreen.de
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;