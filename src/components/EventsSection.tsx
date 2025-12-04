import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  const events = [
    {
      date: "Dec 14",
      day: "Saturday",
      title: "Monthly Build Session",
      time: "2:00 PM - 6:00 PM",
      location: "Community Center, Room 204",
      description: "Open workbench session. Bring your current project and enjoy building alongside fellow enthusiasts.",
    },
    {
      date: "Dec 21",
      day: "Saturday",
      title: "Holiday Model Contest",
      time: "10:00 AM - 4:00 PM",
      location: "Downtown Exhibition Hall",
      description: "Our annual competition featuring categories for all skill levels. Prizes and certificates awarded.",
    },
    {
      date: "Jan 11",
      day: "Saturday",
      title: "Beginner's Workshop: Airbrushing",
      time: "1:00 PM - 4:00 PM",
      location: "Community Center, Room 204",
      description: "Learn the fundamentals of airbrushing from our experienced members. Equipment provided.",
    },
  ];

  return (
    <section id="events" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-accent font-medium tracking-widest uppercase mb-4">
            Upcoming Events
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Join Us
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            From casual build sessions to competitive shows, there's always something happening at Scale Masters.
          </p>
        </div>

        {/* Events List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {events.map((event, index) => (
            <div
              key={event.title}
              className="bg-card rounded-xl shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden group"
            >
              <div className="flex flex-col md:flex-row">
                {/* Date Block */}
                <div className="bg-primary text-primary-foreground p-6 md:p-8 flex flex-col items-center justify-center md:min-w-[140px]">
                  <span className="font-display text-3xl font-bold">{event.date.split(" ")[0]}</span>
                  <span className="font-body text-sm text-primary-foreground/70">{event.date.split(" ")[1]}</span>
                  <span className="font-body text-xs text-primary-foreground/60 mt-1">{event.day}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-body text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-accent" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      {event.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            <Calendar className="w-5 h-5 mr-2" />
            View Full Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
