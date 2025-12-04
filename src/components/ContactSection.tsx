import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="font-body text-accent font-medium tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Join <br />Our Community?
            </h2>
            <p className="font-body text-muted-foreground text-lg mb-8">
              Whether you're a seasoned modeler or just starting out, we'd love to hear from you. Join us at our next meeting or drop us a message.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Meeting Location</h4>
                  <p className="font-body text-muted-foreground">
                    Community Center, Room 204<br />
                    123 Main Street, Downtown
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Regular Meetings</h4>
                  <p className="font-body text-muted-foreground">
                    Every 2nd Saturday of the month<br />
                    2:00 PM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="font-body text-muted-foreground">
                    info@scalemasters.club
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent transition-colors flex items-center justify-center group">
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent transition-colors flex items-center justify-center group">
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent transition-colors flex items-center justify-center group">
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-accent-foreground transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl shadow-elevated p-8 md:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  What interests you?
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all">
                  <option>Membership Information</option>
                  <option>Event Details</option>
                  <option>Beginner Resources</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-body focus:outline-none focus:ring-2 focus:ring-accent transition-all resize-none"
                  placeholder="Tell us about yourself and your modeling interests..."
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
