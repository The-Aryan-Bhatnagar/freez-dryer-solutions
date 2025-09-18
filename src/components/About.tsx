import { CheckCircle, Users, Award, Wrench } from "lucide-react";
import anandImage from "@/assets/anand-bhatnagar-new.jpg";

const About = () => {
  const achievements = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Excellence",
      description: "Years of expertise in corrugated box dryer manufacturing"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Technical Innovation",
      description: "Cutting-edge technology and reliable engineering solutions"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Customer Focused",
      description: "Dedicated to delivering quality products and service"
    }
  ];

  const features = [
    "Custom corrugated box dryer solutions",
    "High-efficiency industrial equipment",
    "Professional installation and support",
    "Quality manufacturing standards",
    "Timely delivery and service"
  ];

  return (
    <section id="about" className="py-20 bg-industrial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">About Freez Home Service Center</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Leading manufacturer of corrugated box dryers with a commitment to quality, 
            innovation, and customer satisfaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Owner Profile */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-6">
              <img 
                src={anandImage}
                alt="Anand Bhatnagar - Owner of Freez Home Service Center"
                className="w-64 h-64 rounded-lg object-cover shadow-professional mx-auto lg:mx-0"
              />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-2">Anand Bhatnagar</h3>
            <p className="text-lg text-accent font-semibold mb-4">Founder & Managing Director</p>
            <p className="text-muted-foreground leading-relaxed">
              With extensive experience in industrial manufacturing, Anand Bhatnagar leads 
              Freez Home Service Center with a vision to provide world-class corrugated box 
              drying solutions. His commitment to quality and innovation has established the 
              company as a trusted name in the industry.
            </p>
          </div>

          {/* Company Features */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-primary mb-6">Our Expertise</h3>
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="industrial-card p-6 text-center hover:scale-105 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg mb-4">
                {achievement.icon}
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">{achievement.title}</h4>
              <p className="text-muted-foreground">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;