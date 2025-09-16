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
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Contact
          </h2>
          <p className="text-xl text-muted-foreground">
            Prêt à discuter de votre projet ? Contactez-nous :
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Coordonnées</h3>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">ExtrusionDirectes</p>
                <p>Bois-des-Filion, QC, Canada</p>
              </div>
              <div>
                <p>Tél. : <a href="tel:+15141234567" className="text-primary hover:underline">+1 (514) 123-4567</a></p>
              </div>
              <div>
                <p>Email : <a href="mailto:info@extrusiondirectes.com" className="text-primary hover:underline">info@extrusiondirectes.com</a></p>
              </div>
            </div>
          </Card>
          
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Entreprise</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button type="submit" className="w-full">
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