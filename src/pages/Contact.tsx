import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle, 
  Users, 
  Calendar,
  Globe,
  Instagram,
  Twitter,
  Linkedin,
  Facebook
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email',
      details: 'info@munhub.org',
      action: 'mailto:info@munhub.org'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Our headquarters',
      details: '123 Diplomatic Avenue, New York, NY 10001',
      action: '#'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      description: 'We\'re available',
      details: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      action: '#'
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#', color: 'text-pink-500' },
    { icon: Twitter, label: 'Twitter', href: '#', color: 'text-blue-400' },
    { icon: Linkedin, label: 'LinkedIn', href: '#', color: 'text-blue-600' },
    { icon: Facebook, label: 'Facebook', href: '#', color: 'text-blue-500' }
  ];

  const offices = [
    {
      city: 'New York',
      country: 'United States',
      address: '123 Diplomatic Avenue, NY 10001',
      phone: '+1 (555) 123-4567',
      email: 'newyork@munhub.org'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '45 Diplomatic Square, SW1A 1AA',
      phone: '+44 20 7123 4567',
      email: 'london@munhub.org'
    },
    {
      city: 'Dubai',
      country: 'United Arab Emirates',
      address: 'Dubai International Financial Centre',
      phone: '+971 4 123 4567',
      email: 'dubai@munhub.org'
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
              <MessageCircle className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-foreground mb-6">
              Contact <span className="gradient-text">Our Team</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our conferences or want to get involved? We'd love to hear from you. 
              Reach out to our team of diplomatic education experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card border-border text-center smooth-hover h-full">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="font-playfair text-foreground">{info.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {info.action.startsWith('#') ? (
                      <p className="text-sm text-muted-foreground">{info.details}</p>
                    ) : (
                      <a 
                        href={info.action}
                        className="text-sm text-primary hover:text-primary-muted transition-colors"
                      >
                        {info.details}
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Main Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl text-foreground">Send us a Message</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                      <Input id="firstName" placeholder="John" className="glass-card" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="glass-card" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" className="glass-card" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Select>
                      <SelectTrigger className="glass-card">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="registration">Event Registration</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="sponsorship">Sponsorship</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..."
                      className="glass-card min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary-muted text-primary-foreground font-semibold py-3"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Contact & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Quick Actions */}
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="font-playfair text-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start glass-card text-foreground hover:bg-card-hover">
                    <Users className="mr-2 w-4 h-4" />
                    Register for Events
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-card text-foreground hover:bg-card-hover">
                    <Calendar className="mr-2 w-4 h-4" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start glass-card text-foreground hover:bg-card-hover">
                    <Globe className="mr-2 w-4 h-4" />
                    Partnership Inquiry
                  </Button>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="glass-card border-border">
                <CardHeader>
                  <CardTitle className="font-playfair text-foreground">Follow Us</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Stay updated with our latest events and announcements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`w-10 h-10 rounded-lg glass-card flex items-center justify-center ${social.color} hover:scale-110 transition-all duration-200`}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 px-6 bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair font-bold text-3xl text-foreground mb-4">
              Global <span className="gradient-text">Offices</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our international presence ensures we can support delegates and partners worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card border-border">
                  <CardHeader>
                    <CardTitle className="font-playfair text-foreground">{office.city}</CardTitle>
                    <CardDescription className="text-muted-foreground">{office.country}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{office.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-muted-foreground mr-2" />
                      <a href={`tel:${office.phone}`} className="text-sm text-primary hover:text-primary-muted">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-muted-foreground mr-2" />
                      <a href={`mailto:${office.email}`} className="text-sm text-primary hover:text-primary-muted">
                        {office.email}
                      </a>
                    </div>
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

export default Contact;