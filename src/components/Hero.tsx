import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dryer.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Industrial corrugated box dryer manufacturing equipment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center lg:text-left max-w-3xl">
          <h1 className="hero-text mb-6 animate-fade-in">
            Freez Home Service Center
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground mb-4 animate-fade-in">
            Professional Corrugated Box Dryer Manufacturing
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-in">
            Led by <span className="font-semibold">Anand Bhatnagar</span>, we specialize in designing and manufacturing 
            high-quality corrugated box dryers with cutting-edge technology and reliable performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-accent text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call 9837439412
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
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
          <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;