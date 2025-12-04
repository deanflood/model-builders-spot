const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display text-xl font-bold text-primary-foreground">
              Scale Masters
            </span>
            <p className="font-body text-primary-foreground/60 text-sm mt-1">
              Crafting miniature masterpieces since 2009
            </p>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              About
            </a>
            <a href="#gallery" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Gallery
            </a>
            <a href="#events" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Events
            </a>
            <a href="#contact" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </div>

          <p className="font-body text-primary-foreground/50 text-sm">
            © 2024 Scale Masters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
