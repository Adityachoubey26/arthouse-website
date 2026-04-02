import HeroSection from '../sections/HeroSection.jsx';
import ServicesSection from '../sections/ServicesSection.jsx';
import GallerySection from '../sections/GallerySection.jsx';
import WhyChooseUs from '../sections/WhyChooseUs.jsx';
import FounderSection from '../sections/FounderSection.jsx';
import TestimonialsSection from '../sections/TestimonialsSection.jsx';
import ContactSection from '../sections/ContactSection.jsx';

const Home = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <FounderSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
