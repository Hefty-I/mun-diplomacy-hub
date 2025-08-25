import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import istanbulEvent from '@/assets/istanbul-event.jpg';
import dubaiEvent from '@/assets/dubai-event.jpg';
import newyorkEvent from '@/assets/newyork-event.jpg';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'MUNHUB Istanbul',
      location: 'Istanbul, Turkey',
      date: 'March 15-18, 2024',
      image: istanbulEvent,
      description: 'Experience diplomacy at the crossroads of civilizations. Istanbul\'s rich cultural heritage provides the perfect backdrop for global discourse.',
      status: 'Registration Open',
      participants: '200+ Delegates',
      featured: true
    },
    {
      id: 2,
      title: 'MUNHUB Dubai',
      location: 'Dubai, UAE',
      date: 'April 22-25, 2024',
      image: dubaiEvent,
      description: 'Join us in the city of innovation where futuristic vision meets diplomatic excellence in the heart of the Middle East.',
      status: 'Early Bird',
      participants: '180+ Delegates',
      featured: false
    },
    {
      id: 3,
      title: 'MUNHUB New York',
      location: 'New York City, USA',
      date: 'June 10-13, 2024',
      image: newyorkEvent,
      description: 'Experience diplomacy in the birthplace of the United Nations. Network with delegates from across the globe in the diplomatic capital.',
      status: 'Coming Soon',
      participants: '300+ Delegates',
      featured: false
    }
  ];

  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm font-medium text-accent mb-6">
            <Calendar className="w-4 h-4 mr-2" />
            Upcoming Events
          </div>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6">
            Global <span className="gradient-text">Conference</span> Series
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join prestigious MUN conferences in major cities worldwide. Each event offers unique cultural experiences 
            and diplomatic challenges designed to enhance your global perspective.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl glass-card smooth-hover ${
                event.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Background Image */}
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'Registration Open' 
                      ? 'bg-success text-success-foreground' 
                      : event.status === 'Early Bird'
                      ? 'bg-warning text-warning-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {event.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {event.date}
                  </div>
                </div>

                <h3 className="font-playfair font-bold text-xl text-foreground mb-3">
                  {event.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {event.participants}
                  </div>

                  <Button 
                    variant="outline"
                    className="glass-card text-foreground hover:bg-card-hover border-border font-medium group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Events Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-muted text-primary-foreground font-semibold px-8 py-4 rounded-xl smooth-hover"
          >
            View All Events
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;