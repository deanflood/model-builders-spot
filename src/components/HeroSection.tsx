import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-models.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Scale model diorama featuring detailed military tanks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="font-body text-accent font-medium tracking-widest uppercase mb-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Welcome to
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Scale Masters
          </h1>
          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            A passionate community of scale model enthusiasts dedicated to the art of miniature craftsmanship. From aircraft to armor, ships to cars — we build, we share, we inspire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" size="xl">
              Explore Gallery
            </Button>
            <Button variant="heroOutline" size="xl">
              Join Our Community
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
