import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';

const ServicesSection = () => {
  return (
    <section id="services" className="relative bg-[#050810]">
      <div className="section-container">
        <SectionHeading
          label="Our Portfolio of Excellence"
          title="Bespoke Wall Solutions"
          subtitle="From sculptural 3D panels to artisanal textures — discover how we transform ordinary walls into extraordinary masterpieces."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
