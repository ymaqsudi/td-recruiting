import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <div className="mb-4">
            <Logo variant="light" />
          </div>
          <p className="text-gray-300 text-sm max-w-sm leading-relaxed">
            Executive search and embedded recruiting for growth-stage
            founders in AI, tech, and finance.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
            Explore
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a href="#services" className="hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-white transition-colors">
                Our Process
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
            Connect
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <a
                href="https://www.techduels.com"
                className="hover:text-white transition-colors"
              >
                TechDuels
              </a>
            </li>
            <li>
              <a
                href="https://logicoach.ai"
                className="hover:text-white transition-colors"
              >
                Logicoach.ai
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-xs text-gray-400 flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} TD Recruiting. A talent practice by TechDuels.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
