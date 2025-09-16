import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-6xl sm:text-8xl font-bold mb-4 text-primary">404</h1>
        <p className="text-xl sm:text-2xl mb-6 text-muted-foreground">Oops! Page introuvable</p>
        <p className="text-base sm:text-lg mb-8 text-muted-foreground">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Button asChild>
          <a href="/">
            Retour à l'accueil
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
