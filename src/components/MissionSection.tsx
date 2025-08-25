import { motion } from 'framer-motion';
import { Target, Users, Globe, Award, ChevronRight } from 'lucide-react';

const MissionSection = () => {
  const missions = [
    {
      icon: Target,
      title: 'Excellence in Diplomacy',
      description: 'Foster diplomatic excellence through immersive simulation experiences that mirror real-world international negotiations and decision-making processes.'
    },
    {
      icon: Users,
      title: 'Global Community',
      description: 'Build a diverse international community of young leaders who are passionate about global affairs and committed to positive change.'
    },
    {
      icon: Globe,
      title: 'Cultural Understanding',
      description: 'Promote cross-cultural understanding and dialogue by bringing together delegates from different backgrounds, countries, and perspectives.'
    },
    {
      icon: Award,
      title: 'Leadership Development',
      description: 'Develop essential leadership skills including public speaking, negotiation, critical thinking, and collaborative problem-solving.'
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center glass-card px-4 py-2 rounded-full text-sm font-medium text-accent mb-6">
            <Target className="w-4 h-4 mr-2" />
            Our Mission
          </div>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mb-6">
            Shaping Tomorrow's <span className="gradient-text">Diplomatic</span> Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At MUN Diplomacy Hub, we believe in the power of youth to create positive change in the world. 
            Our mission is to cultivate the next generation of diplomatic leaders through exceptional 
            Model United Nations experiences.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {missions.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl smooth-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <mission.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-playfair font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                    {mission.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {mission.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 rounded-3xl text-center"
        >
          <h3 className="font-playfair font-bold text-3xl text-foreground mb-6">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Integrity',
                description: 'Maintaining the highest standards of honesty and ethical conduct in all our activities.'
              },
              {
                title: 'Innovation',
                description: 'Continuously evolving our programs to provide cutting-edge diplomatic education experiences.'
              },
              {
                title: 'Inclusivity',
                description: 'Creating welcoming environments where delegates from all backgrounds can thrive and contribute.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-3"
              >
                <h4 className="font-playfair font-semibold text-xl text-primary">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;