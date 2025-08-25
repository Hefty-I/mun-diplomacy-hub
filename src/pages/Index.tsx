import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EventsSection from '@/components/EventsSection';
import MissionSection from '@/components/MissionSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EventsSection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
