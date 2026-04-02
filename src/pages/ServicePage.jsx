import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle2, ArrowLeft, MessageCircle } from 'lucide-react';
import { services } from '../data/services.js';
import { CONTACT } from '../assets/index.js';
import ScrollReveal from '../components/ScrollReveal.jsx';

const ServicePage = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);

  if (!service) return <div className="min-h-screen pt-32 text-center text-white">Service not found</div>;

  return (
    <div className="bg-dark pt-20">
      {/* Hero Banner */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <img
          src={service.images[0]}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <Link to="/" className="inline-flex items-center gap-2 text-teal mb-6 hover:gap-3 transition-all">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {service.title}
          </motion.h1>
          <p className="text-white/60 text-lg max-w-2xl">{service.shortDescription}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Left: Info */}
        <div className="lg:col-span-2">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-6">Overview</h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">{service.description}</p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl font-bold text-white mb-8">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4 items-start p-5 glass rounded-xl border border-white/5">
                  <CheckCircle2 size={24} className="text-teal flex-shrink-0" />
                  <p className="text-white/80">{benefit}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-3xl font-bold text-white mb-8">Our Process</h2>
            <div className="space-y-6">
              {service.process.map((step, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="w-12 h-12 rounded-full border-2 border-teal/30 flex items-center justify-center text-teal font-bold group-hover:bg-teal group-hover:text-white transition-all">
                    {step.step}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-white font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-white/50">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Right: Sidebar / CTA */}
        <div className="space-y-8">
          <div className="glass p-8 rounded-3xl border border-teal/20 sticky top-32">
            <h3 className="text-2xl font-bold text-white mb-4">Interested?</h3>
            <p className="text-white/50 mb-8">Get a personalized quote for your {service.title} project today.</p>
            
            <a 
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center mb-4"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
            <p className="text-white/30 text-center text-sm font-medium">Free site visit & measurement</p>
            
            <div className="mt-10 border-t border-white/10 pt-8 text-center text-white/50 italic font-serif">
              "Every wall has potential to be a masterpiece."
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 max-w-7xl mx-auto px-6 border-t border-white/5">
        <h2 className="text-3xl font-bold text-white mb-10">Project Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.images.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl aspect-video group">
              <img 
                src={img} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                alt={`${service.title} project ${i+1}`}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
