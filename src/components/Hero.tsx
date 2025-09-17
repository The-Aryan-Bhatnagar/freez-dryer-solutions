import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dryer.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Industrial corrugated box dryer manufacturing equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-800/70 to-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight">
            Professional Corrugated Box Dryer Manufacturing
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in max-w-4xl mx-auto">
            Led by <span className="font-semibold text-white">Anand Bhatnagar</span>, Freez Home Service Center specializes in designing and manufacturing 
            high-quality corrugated box dryers with cutting-edge technology and reliable performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white shadow-accent text-lg px-12 py-4 font-semibold"
            >
              Call Now
            </Button>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-12 py-4 font-semibold"
            >
              View Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;