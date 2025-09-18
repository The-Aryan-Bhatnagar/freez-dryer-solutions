import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Thermometer, Settings, Zap } from "lucide-react";
import productsImage from "@/assets/freez-service-center-dryer.jpg";

const Products = () => {
  const features = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Precise Temperature Control",
      description: "Advanced temperature regulation for optimal drying results"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Energy Efficient",
      description: "Designed for maximum efficiency and reduced operating costs"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable Solutions",
      description: "Tailored to meet specific production requirements"
    }
  ];

  const specifications = [
    "High-capacity drying systems",
    "Stainless steel construction",
    "Automated control systems",
    "Energy-efficient operation",
    "Low maintenance design",
    "Safety compliance standards"
  ];

  const benefits = [
    "Faster drying cycles",
    "Improved product quality",
    "Reduced energy consumption",
    "Minimal operator intervention",
    "Enhanced production efficiency",
    "Long-term reliability"
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">Corrugated Box Dryers</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            State-of-the-art corrugated box drying solutions engineered for superior 
            performance and reliability in industrial applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Product Image */}
          <div className="animate-fade-in">
            <img 
              src={productsImage}
              alt="Freez Home Service Center industrial dryer unit and manufacturing facility"
              className="w-full h-96 object-cover rounded-lg shadow-professional"
            />
          </div>

          {/* Product Description */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Professional Drying Solutions</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our corrugated box dryers are engineered using the latest technology to provide 
              efficient and reliable drying solutions for industrial applications. Each unit is 
              designed to meet specific customer requirements while maintaining the highest 
              quality standards.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-primary mb-3">Key Specifications</h4>
                <div className="space-y-2">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-3">Benefits</h4>
                <div className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button className="bg-accent hover:bg-accent/90">
              <Phone className="w-4 h-4 mr-2" />
              Request Quote
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="industrial-card p-6 text-center hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;