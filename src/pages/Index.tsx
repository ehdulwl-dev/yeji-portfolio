
import { useState } from "react";
import Navigation from "@/components/Navigation";
import InfoOverlay from "@/components/InfoOverlay";

const Index = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <button
            onClick={() => setIsOverlayOpen(true)}
            className="group relative"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light text-primary hover:text-gray-300 transition-colors duration-300 tracking-tight">
              doyeji
            </h1>
            
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
          </button>
          
          <p className="mt-8 text-lg text-muted-foreground animate-slide-up">
            Frontend Developer & Problem Solver
          </p>
          
          <p className="mt-4 text-sm text-muted-foreground/70 animate-slide-up" style={{ animationDelay: "200ms" }}>
            Click my name to know more about me
          </p>
        </div>
      </main>
      
      <InfoOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
      />
    </div>
  );
};

export default Index;
