import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logoEd from "@/assets/logo-ed.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant border-b border-border/50' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src={logoEd} 
                alt="ExtrusionDirectes Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="text-xl font-bold text-foreground">ExtrusionDirectes</div>
            </div>
            
            <nav className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('a-propos')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('produits')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Produits
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>
            
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                variant="default" 
                onClick={() => scrollToSection('contact')}
                className="hidden md:inline-flex"
              >
                Demande de soumission
              </Button>
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-20 right-4 left-4 bg-card border border-border rounded-lg shadow-elegant p-6">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('accueil')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Accueil
              </button>
              <button 
                onClick={() => scrollToSection('a-propos')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                À propos
              </button>
              <button 
                onClick={() => scrollToSection('produits')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Produits
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Contact
              </button>
              <Button 
                variant="default" 
                onClick={() => scrollToSection('contact')}
                className="mt-4"
              >
                Demande de soumission
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;