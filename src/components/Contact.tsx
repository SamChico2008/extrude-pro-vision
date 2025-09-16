import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Demande de soumission - ${formData.company || formData.name}`;
    const body = `Nom: ${formData.name}\nEmail: ${formData.email}\nEntreprise: ${formData.company}\n\nMessage:\n${formData.message}`;
    const mailto = `mailto:info@extrusiondirectes.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailto;
    
    toast({
      title: "Email préparé",
      description: "Votre client email va s'ouvrir avec le message pré-rempli.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
            Contact
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Prêt à discuter de votre projet ? Contactez-nous :
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <Card className="p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">Coordonnées</h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">ExtrusionDirectes</p>
                <p className="text-sm sm:text-base">Bois-des-Filion, QC, Canada</p>
              </div>
              <div>
                <p className="text-sm sm:text-base">Tél. : <a href="tel:+15141234567" className="text-primary hover:underline">+1 (514) 123-4567</a></p>
              </div>
              <div>
                <p className="text-sm sm:text-base">Email : <a href="mailto:info@extrusiondirectes.com" className="text-primary hover:underline break-all">info@extrusiondirectes.com</a></p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm sm:text-base">Nom *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm sm:text-base">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company" className="text-sm sm:text-base">Entreprise</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="text-sm sm:text-base"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm sm:text-base">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="text-sm sm:text-base resize-none"
                />
              </div>
              
              <Button type="submit" className="w-full text-sm sm:text-base">
                Envoyer
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;