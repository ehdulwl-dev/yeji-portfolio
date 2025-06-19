import { useState } from "react";
import Navigation from "@/components/Navigation";
import CareerSection from "@/components/CareerSection";

import { Phone, MapPin, Mail } from "lucide-react";

const Index = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleNameClick = () => {
    setShowInfo(true);
    setTimeout(() => {
      const infoSection = document.getElementById('info-section');
      if (infoSection) {
        infoSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-16 min-h-screen">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row min-h-screen">
          
          {/* Left: Profile (40%) with gray background */}
          <div className="md:basis-[30%] w-full flex flex-col items-center justify-center md:items-center md:justify-center text-center md:text-left p-8 md:p-12 bg-gray-100 space-y-6">
            <img 
              src="/assets/image/my.png" 
              alt="Profile" 
              className="w-60 h-70 shadow-md object-cover mb-4 "
              style={{ borderRadius: "100px" }}
            />
            <p className="text-lg md:text-xl leading-relaxed pt-4">
              끊임없이 성장하는 개발자 <span className="font-bold">도예지</span> 입니다.
            </p>
            <div className="space-y-3 text-base md:text-lg pt-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-black" />
                <span>010-3706-9975</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-black" />
                <span>경기도 안양시</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-black" />
                <span>ehdulwl@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right: Name & Role (60%) */}
          <div className="md:basis-[70%] w-full flex flex-col items-center justify-center text-center p-8 md:p-12 animate-fade-in">
            <button
              onClick={handleNameClick}
              className="group relative"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-title hover:text-gray-400 transition-colors duration-300 tracking-tight">
                Doyeji
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
            </button>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground animate-slide-up">
              Frontend Developer & Backend Developer
            </p>

            <p 
              className="mt-3 text-sm md:text-base text-muted-foreground/70 animate-slide-up" 
              style={{ animationDelay: "200ms" }}
            >
              Click my name to know more about me
            </p>
          </div>

        </div>

        {/* Career and Education Section */}
        {showInfo && (
          <div id="info-section" className="animate-fade-in">
            <CareerSection />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
