import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -10 }}
      className="group relative glass-dark rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-teal/30 hover:shadow-[0_20px_50px_rgba(0,175,175,0.15)] transition-all duration-500"
    >
      <Link to={`/services/${service.slug}`} className="block">
        {/* Image Container */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={service.images[0]}
            alt={service.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050810] via-[#050810]/20 to-transparent" />
          
          {/* Floating Icon */}
          <div className={`absolute top-6 left-6 w-12 h-12 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md border transition-transform duration-500 group-hover:scale-110 ${
            service.color === 'gold'
              ? 'border-gold/30 bg-gold/10 text-gold'
              : 'border-teal/30 bg-teal/10 text-teal'
          }`}>
            {service.icon}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className={`w-8 h-[1px] ${service.color === 'gold' ? 'bg-gold' : 'bg-teal'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${service.color === 'gold' ? 'text-gold' : 'text-teal'}`}>
              Artisanal Design
            </span>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            {service.title}
          </h3>
          
          <p className="text-white/40 text-sm leading-relaxed mb-8 font-light line-clamp-3">
            {service.shortDescription}
          </p>
          
          <div className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 group-hover:gap-5 ${
            service.color === 'gold' ? 'text-gold' : 'text-teal'
          }`}>
            Explore Service
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
