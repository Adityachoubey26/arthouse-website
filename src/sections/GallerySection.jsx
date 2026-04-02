import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeading from '../components/SectionHeading.jsx';
import { IMAGES } from '../assets/index.js';

const GalleryItem = ({ src, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-2xl group cursor-pointer border border-white/5 bg-white/5 hover:border-teal/20 transition-colors duration-500"
    >
      <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden">
        <motion.img
          src={src}
          alt={`Gallery ${index + 1}`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#050810]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
          <div className="px-6 py-2 bg-white text-black text-[10px] font-bold uppercase tracking-[0.3em] rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            Explore Space
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  return (
    <section id="gallery" className="relative bg-[#050810] overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal/[0.01] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Text Block - High Layering */}
        <div className="relative z-20 mb-16 max-w-4xl mx-auto">
          <SectionHeading
            label="Curated Transformations"
            title="The Gallery of Style"
            subtitle="Explore our visual anthology of luxury wall designs, where every project is a testament to our commitment to artisanal perfection."
            center
          />
        </div>
        
        {/* Image Grid - Lower Layering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {IMAGES.gallery.map((src, i) => (
            <GalleryItem key={i} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
