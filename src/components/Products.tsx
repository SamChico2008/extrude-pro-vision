import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import zelletteImage from "@/assets/zellette.jpg";
import zelletteXlImage from "@/assets/zellette-xl.jpg";
import customImage from "@/assets/custom.jpg";

const Products = () => {
  const products = [
    {
      image: zelletteImage,
      title: "Zellette",
      description: "Notre produit phare, latte de clôture profilée, installation facile et finition propre.",
      cta: "Demander info"
    },
    {
      image: zelletteXlImage,
      title: "Zellette XL",
      description: "Version plus longue pour une couverture accrue et une esthétique améliorée.",
      cta: "Demander info"
    },
    {
      image: customImage,
      title: "Profil sur mesure",
      description: "Extrusion sur mesure selon plans : couleurs, épaisseurs et longueurs adaptées.",
      cta: "Soumission"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="produits" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Produits phares
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">{product.title}</h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{product.description}</p>
                <Button 
                  variant="outline" 
                  onClick={scrollToContact}
                  className="w-full"
                >
                  {product.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;