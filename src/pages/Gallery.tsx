import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Camera, Play, ExternalLink } from 'lucide-react';
import istanbulEvent from '@/assets/istanbul-event.jpg';
import dubaiEvent from '@/assets/dubai-event.jpg';
import newyorkEvent from '@/assets/newyork-event.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      src: istanbulEvent,
      title: 'Opening Ceremony - Istanbul 2023',
      location: 'Istanbul, Turkey',
      category: 'ceremonies',
      description: 'Delegates gathering for the grand opening of MUNHUB Istanbul 2023'
    },
    {
      id: 2,
      type: 'image',
      src: dubaiEvent,
      title: 'Committee Session - Dubai 2023',
      location: 'Dubai, UAE',
      category: 'sessions',
      description: 'Intense diplomatic negotiations in the Security Council chamber'
    },
    {
      id: 3,
      type: 'image',
      src: newyorkEvent,
      title: 'Cultural Night - New York 2023',
      location: 'New York, USA',
      category: 'social',
      description: 'Delegates showcasing their cultures during the international night'
    },
    {
      id: 4,
      type: 'video',
      src: istanbulEvent,
      title: 'Conference Highlights',
      location: 'Global Events',
      category: 'highlights',
      description: 'A compilation of memorable moments from our conferences'
    },
    {
      id: 5,
      type: 'image',
      src: dubaiEvent,
      title: 'Award Ceremony',
      location: 'Dubai, UAE',
      category: 'ceremonies',
      description: 'Recognizing outstanding delegates and their contributions'
    },
    {
      id: 6,
      type: 'image',
      src: newyorkEvent,
      title: 'Networking Session',
      location: 'New York, USA',
      category: 'social',
      description: 'Delegates building lasting international friendships'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Media', count: galleryItems.length },
    { id: 'ceremonies', label: 'Ceremonies', count: galleryItems.filter(item => item.category === 'ceremonies').length },
    { id: 'sessions', label: 'Sessions', count: galleryItems.filter(item => item.category === 'sessions').length },
    { id: 'social', label: 'Social Events', count: galleryItems.filter(item => item.category === 'social').length },
    { id: 'highlights', label: 'Highlights', count: galleryItems.filter(item => item.category === 'highlights').length }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

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
              <Camera className="w-4 h-4 mr-2" />
              Media Gallery
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-foreground mb-6">
              Moments of <span className="gradient-text">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore memorable moments from our international conferences. Witness the passion, 
              dedication, and diplomatic excellence of our global community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? 'default' : 'outline'}
                onClick={() => setActiveFilter(category.id)}
                className={`${
                  activeFilter === category.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'glass-card text-foreground hover:bg-card-hover'
                }`}
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 text-xs">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden rounded-2xl glass-card smooth-hover">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Media Type Icon */}
                    <div className="absolute top-4 right-4">
                      {item.type === 'video' ? (
                        <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                          <Play className="w-5 h-5 text-white" />
                        </div>
                      ) : (
                        <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-playfair font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-white/80">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] bg-card rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>
              
              <div className="aspect-video bg-black">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair font-bold text-xl text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground mb-2">{selectedImage.location}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-surface/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-playfair font-bold text-3xl text-foreground mb-4">
              Be Part of the Next <span className="gradient-text">Chapter</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our upcoming conferences and create your own memorable moments. 
              Experience the thrill of international diplomacy firsthand.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-muted text-primary-foreground font-semibold px-8 py-4 rounded-xl smooth-hover"
            >
              Join Our Next Event
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;