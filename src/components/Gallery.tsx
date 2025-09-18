import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play, Image as ImageIcon, Phone } from "lucide-react";
import modelAImage from "@/assets/model-a-dryer.jpg";
import finishedProductImage from "@/assets/finished-product-dryer.jpg";
import { useState } from "react";

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  // Placeholder gallery items - in a real implementation, these would be actual images/videos
  const galleryItems = [
    {
      type: "image",
      title: "Corrugated Box Dryer - Model A",
      description: "High-capacity industrial dryer in operation",
      image: modelAImage
    },
    {
      type: "video",
      title: "Production Process Demo",
      description: "Complete drying cycle demonstration"
    },
    {
      type: "image",
      title: "Quality Control Testing",
      description: "Rigorous testing and quality assurance"
    },
    {
      type: "image", 
      title: "Manufacturing Facility",
      description: "State-of-the-art production floor"
    },
    {
      type: "video",
      title: "Installation Process",
      description: "Professional installation walkthrough"
    },
    {
      type: "image",
      title: "Finished Products",
      description: "Ready-to-ship dryer units",
      image: finishedProductImage
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-industrial-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title animate-fade-in">Gallery</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Explore our manufacturing processes, products, and installations through 
            our comprehensive gallery of images and videos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div 
                  className="industrial-card overflow-hidden group cursor-pointer hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Media Container */}
                  <div className="relative h-48 bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors overflow-hidden">
                    {item.type === "video" ? (
                      <div className="flex flex-col items-center">
                        <Play className="w-12 h-12 text-accent mb-2" />
                        <span className="text-sm text-muted-foreground">Video</span>
                      </div>
                    ) : item.image ? (
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex flex-col items-center">
                        <ImageIcon className="w-12 h-12 text-primary mb-2" />
                        <span className="text-sm text-muted-foreground">Image</span>
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="sm">
                        View {item.type === "video" ? "Video" : "Image"}
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </DialogTrigger>
              
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                {selectedItem?.image ? (
                  <div className="relative">
                    <img 
                      src={selectedItem.image} 
                      alt={selectedItem.title}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-primary mb-2">{selectedItem.title}</h3>
                      <p className="text-muted-foreground">{selectedItem.description}</p>
                    </div>
                  </div>
                ) : (
                  <div className="p-6 text-center">
                    <div className="flex flex-col items-center mb-4">
                      {selectedItem?.type === "video" ? (
                        <Play className="w-16 h-16 text-accent mb-4" />
                      ) : (
                        <ImageIcon className="w-16 h-16 text-primary mb-4" />
                      )}
                      <h3 className="text-xl font-semibold text-primary mb-2">{selectedItem?.title}</h3>
                      <p className="text-muted-foreground">{selectedItem?.description}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {selectedItem?.type === "video" ? "Video content will be available soon" : "Image placeholder"}
                    </p>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in">
          <div className="industrial-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              See Our Products in Action
            </h3>
            <p className="text-muted-foreground mb-6">
              Interested in a live demonstration or facility visit? Contact us to schedule 
              a personalized presentation of our corrugated box dryers.
            </p>
            <Button className="bg-accent hover:bg-accent/90">
              <Phone className="w-4 h-4 mr-2" />
              Schedule Demo - 9837439412
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;