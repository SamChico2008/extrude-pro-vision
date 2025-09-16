const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white/80">
              © {currentYear} ExtrusionDirectes — Tous droits réservés.
            </p>
          </div>
          
          <nav className="flex space-x-6">
            <button 
              onClick={() => scrollToSection('produits')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Produits
            </button>
            <button 
              onClick={() => scrollToSection('a-propos')}
              className="text-white/80 hover:text-white transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-white transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;