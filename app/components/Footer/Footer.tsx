const Footer = () => {
  return (
    <footer className="w-full px-4 pt-8 bg-white">
      <div className="max-w-7xl mx-auto bg-[#0B2B1D] text-white rounded-[40px] p-8 md:p-16">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-center">evergreen</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-b border-white/10 pb-16">
          <div className="space-y-4">
            <h4 className="font-bold">Evergreen</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Hilfe</li>
              <li>Expertise</li>
              <li>Kosten</li>
              <li>Sicherheit</li>
              <li>Nachhaltigkeit</li>
              <li>Nachhaltigkeitsbericht ↗</li>
              <li>Newsletter abonnieren</li>
              <li>Presse</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Wissen & Märkte</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Blog ↗</li>
              <li>Marktkommentar ↗</li>
              <li>Fondsmanagement-Sprechstunde ↗</li>
              <li>Robo-Advisor-Studien ↗</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Investieren</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Zinsen</li>
              <li>Vermögensaufbau</li>
              <li>VL-Sparen</li>
              <li>Kinderdepot</li>
              <li>Betriebsrente</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold">Downloads</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Fondsinformationen</li>
              <li>Rechtliche Dokumente</li>
              <li>Nachhaltigkeitsdokumente</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
