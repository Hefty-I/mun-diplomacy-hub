import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, Award, Target, Heart, Lightbulb, BookOpen, Handshake } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Global Events', icon: Globe },
    { number: '10,000+', label: 'Delegates Trained', icon: Users },
    { number: '75+', label: 'Countries Represented', icon: Award },
    { number: '15+', label: 'Years of Excellence', icon: Target }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'We believe in creating an environment where every voice is heard and every perspective is valued, regardless of background or experience.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our programs and methodologies to provide cutting-edge diplomatic education and training experiences.'
    },
    {
      icon: BookOpen,
      title: 'Excellence',
      description: 'We maintain the highest standards in all our conferences, ensuring exceptional educational value and professional development.'
    },
    {
      icon: Handshake,
      title: 'Collaboration',
      description: 'We foster international cooperation and understanding through structured dialogue and diplomatic engagement.'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Executive Director',
      bio: 'Former UN diplomat with 20+ years of international relations experience.',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Prof. Ahmed Hassan',
      role: 'Academic Director',
      bio: 'International law professor and MUN expert with global recognition.',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Ms. Elena Rodriguez',
      role: 'Program Coordinator',
      bio: 'Youth development specialist focusing on diplomatic education.',
      avatar: '/placeholder.svg'
    },
    {
      name: 'Mr. James Chen',
      role: 'Technology Director',
      bio: 'Digital innovation expert transforming diplomatic education.',
      avatar: '/placeholder.svg'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-background via-surface/20 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm font-medium text-accent mb-6">
              <Users className="w-4 h-4 mr-2" />
              About Us
            </div>
            <h1 className="font-playfair font-bold text-5xl md:text-6xl text-foreground mb-6">
              Empowering Future <span className="gradient-text">Diplomats</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              MUN Diplomacy Hub is a premier international organization dedicated to fostering diplomatic excellence, 
              global understanding, and leadership development through immersive Model United Nations experiences.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-card p-6 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair font-bold text-4xl text-foreground mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To provide transformative educational experiences that develop critical thinking, diplomatic skills, 
                and global awareness among young leaders. We create platforms where future diplomats can engage 
                with complex international issues while building lasting connections across cultures.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Foster international understanding and cooperation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Develop next-generation diplomatic leaders</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Promote peaceful resolution of global challenges</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-playfair font-bold text-4xl text-foreground mb-6">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the world's leading platform for diplomatic education, creating a global community of 
                informed, empathetic, and skilled individuals who will shape the future of international relations. 
                We envision a world where understanding transcends borders and collaboration solves humanity's 
                greatest challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6 bg-surface/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair font-bold text-4xl text-foreground mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card border-border h-full text-center">
                  <CardHeader>
                    <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <CardTitle className="font-playfair text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair font-bold text-4xl text-foreground mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to shaping the next generation of global leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card border-border text-center">
                  <CardHeader>
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <AvatarImage src={member.avatar} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="font-playfair text-foreground">{member.name}</CardTitle>
                    <Badge variant="outline" className="mx-auto">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </CardDescription>
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

export default About;