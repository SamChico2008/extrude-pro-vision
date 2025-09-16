import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ED
            </div>
            <div className="text-xl font-bold text-foreground">ExtrusionDirectes</div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Accueil
            </button>
            <button 
              onClick={() => scrollToSection('a-propos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              À propos
            </button>
            <button 
              onClick={() => scrollToSection('produits')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Produits
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
          
          <Button 
            variant="default" 
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex"
          >
            Demande de soumission
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;