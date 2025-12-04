import { useState } from "react";
import aircraftImage from "@/assets/gallery-aircraft.jpg";
import carImage from "@/assets/gallery-car.jpg";
import shipImage from "@/assets/gallery-ship.jpg";

const GallerySection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      image: aircraftImage,
      title: "Spitfire Mk.IX",
      builder: "Michael Chen",
      scale: "1:48",
      category: "Aircraft",
    },
    {
      image: carImage,
      title: "1967 Ford Mustang",
      builder: "Sarah Williams",
      scale: "1:24",
      category: "Automotive",
    },
    {
      image: shipImage,
      title: "USS Missouri BB-63",
      builder: "David Park",
      scale: "1:350",
      category: "Naval",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-accent font-medium tracking-widest uppercase mb-4">
            Member Showcase
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Models
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Explore the incredible craftsmanship of our community members. Each model represents countless hours of dedication and passion.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl shadow-soft hover:shadow-elevated transition-all duration-500"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={`Scale model: ${item.title} by ${item.builder}`}
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    hoveredIndex === index ? "scale-110" : "scale-100"
                  }`}
                />
              </div>
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0 md:opacity-100"
              }`}>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-full mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-primary-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-primary-foreground/70 text-sm">
                    By {item.builder} • {item.scale}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-body text-primary font-medium hover:text-accent transition-colors"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
