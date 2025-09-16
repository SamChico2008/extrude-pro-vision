import { Card } from "@/components/ui/card";
import { Shield, Palette, Wrench } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Durabilité",
      description: "Matériaux résistants aux intempéries."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Différents profils et couleurs disponibles."
    },
    {
      icon: Wrench,
      title: "Service",
      description: "Production sur mesure & livraison."
    }
  ];

  return (
    <section id="a-propos" className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            À propos
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-4">
            Nous sommes spécialisés dans l'extrusion de lattes d'intimité en plastique haute performance. 
            Nos produits sont pensés pour durer et minimiser l'impact environnemental : formulation recyclable, 
            procédés de production optimisés et finition soignée.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 sm:p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <feature.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground text-base sm:text-lg">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;