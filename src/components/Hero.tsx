import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-navy/10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            L'extrusion durable pour vos 
            <span className="text-eco-light"> lattes d'intimité</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            ExtrusionDirectes conçoit et fabrique des lattes de clôture robustes, 
            esthétiques et respectueuses de l'environnement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection('produits')}
              className="text-lg px-8 py-6"
            >
              Voir les produits
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
            >
              Contactez-nous
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-eco/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;