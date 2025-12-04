import { Users, Award, Calendar, Wrench } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "120+", label: "Active Members" },
    { icon: Award, value: "15", label: "Years Active" },
    { icon: Calendar, value: "48", label: "Events Per Year" },
    { icon: Wrench, value: "1000+", label: "Models Built" },
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="font-body text-accent font-medium tracking-widest uppercase mb-4">
              About Our Club
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Crafting Miniature <br />
              <span className="text-gradient">Masterpieces</span>
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2009, Scale Masters has grown into one of the region's most vibrant scale modeling communities. We welcome builders of all skill levels — from curious beginners to seasoned veterans — united by our love for precision, detail, and the stories our models tell.
            </p>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
              Our members specialize in a wide range of subjects: military vehicles and armor, aircraft from all eras, naval vessels, automobiles, science fiction, and dioramas that bring these miniature worlds to life.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Aircraft", "Armor", "Ships", "Cars", "Dioramas", "Sci-Fi"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-background rounded-full text-sm font-body font-medium text-muted-foreground border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card-gradient rounded-xl p-8 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="w-10 h-10 text-accent mb-4" />
                <p className="font-display text-4xl font-bold text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
