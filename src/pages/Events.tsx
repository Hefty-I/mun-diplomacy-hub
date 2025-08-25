import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Clock, ArrowRight, Globe, Award } from 'lucide-react';
import istanbulEvent from '@/assets/istanbul-event.jpg';
import dubaiEvent from '@/assets/dubai-event.jpg';
import newyorkEvent from '@/assets/newyork-event.jpg';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'MUNHUB Istanbul 2024',
      location: 'Istanbul, Turkey',
      date: 'March 15-18, 2024',
      time: '9:00 AM - 6:00 PM',
      image: istanbulEvent,
      description: 'Experience diplomacy at the crossroads of civilizations. Istanbul\'s rich cultural heritage provides the perfect backdrop for global discourse and international relations.',
      status: 'Registration Open',
      participants: '200+ Delegates',
      price: '$150',
      committees: ['UNSC', 'UNGA', 'ECOSOC', 'WHO'],
      featured: true
    },
    {
      id: 2,
      title: 'MUNHUB Dubai 2024',
      location: 'Dubai, UAE',
      date: 'April 22-25, 2024',
      time: '9:00 AM - 6:00 PM',
      image: dubaiEvent,
      description: 'Join us in the city of innovation where futuristic vision meets diplomatic excellence in the heart of the Middle East.',
      status: 'Early Bird',
      participants: '180+ Delegates',
      price: '$175',
      committees: ['UNSC', 'HRC', 'DISEC', 'SPECPOL'],
      featured: false
    },
    {
      id: 3,
      title: 'MUNHUB New York 2024',
      location: 'New York City, USA',
      date: 'June 10-13, 2024',
      time: '9:00 AM - 6:00 PM',
      image: newyorkEvent,
      description: 'Experience diplomacy in the birthplace of the United Nations. Network with delegates from across the globe in the diplomatic capital.',
      status: 'Coming Soon',
      participants: '300+ Delegates',
      price: '$200',
      committees: ['UNSC', 'UNGA', 'ECOSOC', 'TRUSTEESHIP'],
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: 'MUNHUB London 2023',
      location: 'London, UK',
      date: 'September 2023',
      participants: 250,
      success: 'Outstanding success with delegates from 45 countries'
    },
    {
      title: 'MUNHUB Tokyo 2023',
      location: 'Tokyo, Japan',
      date: 'July 2023',
      participants: 180,
      success: 'Innovative tech integration and cultural exchange'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-background via-surface/20 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm font-medium text-accent mb-6">
              <Globe className="w-4 h-4 mr-2" />
              Global Events
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-foreground mb-6">
              Upcoming <span className="gradient-text">Conferences</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join prestigious Model United Nations conferences across the globe. Each event offers unique 
              opportunities for diplomatic excellence and international networking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair font-bold text-3xl text-foreground mb-12 text-center"
          >
            Upcoming Events
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={event.featured ? 'lg:col-span-2' : ''}
              >
                <Card className="glass-card border-border h-full overflow-hidden group smooth-hover">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge 
                      className={`absolute top-4 left-4 ${
                        event.status === 'Registration Open' 
                          ? 'bg-success text-success-foreground' 
                          : event.status === 'Early Bird'
                          ? 'bg-warning text-warning-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {event.status}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="font-playfair text-foreground">{event.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {event.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {event.participants}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Committees:</p>
                      <div className="flex flex-wrap gap-2">
                        {event.committees.map((committee) => (
                          <Badge key={committee} variant="outline" className="text-xs">
                            {committee}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-2xl font-bold text-primary">{event.price}</div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-primary-muted text-primary-foreground">
                      Register Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 px-6 bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair font-bold text-3xl text-foreground mb-4">
              Past <span className="gradient-text">Achievements</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our successful conferences have brought together thousands of delegates worldwide
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="glass-card border-border">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Award className="w-8 h-8 text-primary" />
                      <Badge variant="outline">{event.date}</Badge>
                    </div>
                    <CardTitle className="font-playfair text-foreground">{event.title}</CardTitle>
                    <CardDescription className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-1" />
                      {event.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{event.participants} Participants</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{event.success}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;