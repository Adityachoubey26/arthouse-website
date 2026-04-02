import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import { IMAGES, CONTACT } from '../assets/index.js';

const FounderSection = () => {
  return (
    <section id="founder" className="relative bg-[#050810] overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image side - Now Circle */}
          <ScrollReveal direction="right">
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Ring */}
                <div className="absolute -inset-4 border border-gold/20 rounded-full animate-pulse" />
                <div className="absolute -inset-8 border border-gold/10 rounded-full" />
                
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.2)]">
                  <img
                    src={IMAGES.founder}
                    alt="Rajan Tiwari - Founder, Art House"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Experience Badge */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 glass px-6 py-3 rounded-2xl border border-teal/20"
                >
                  <p className="text-teal font-bold text-3xl">8+</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Years of Mastery</p>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="text-center lg:text-left">
              <SectionHeading
                label="The Visionary"
                title="Rajan Tiwari"
                subtitle="Founder & Creative Director"
                accent="gold"
              />

              <div className="space-y-6 mt-8">
                <p className="text-white/40 text-lg leading-relaxed font-light max-w-md break-words">
                  With nearly a decade of expertise in high-end wall artistry, Rajan Tiwari established Art House to bridge the gap between architectural structure and human emotion.
                </p>
                <p className="text-white/40 text-lg leading-relaxed font-light max-w-md break-words">
                  Under his leadership, our team has curated over 500 bespoke spaces, earning a reputation for precision, innovation, and an uncompromising standard of luxury.
                </p>
              </div>

              {/* Quote Block */}
              <div className="glass-dark rounded-[2rem] p-8 mt-12 border-l-4 border-gold relative overflow-hidden group">
                <Quote size={48} className="text-gold/10 absolute -top-2 -right-2 transition-transform duration-500 group-hover:scale-125" />
                <p className="text-white/80 text-xl italic font-serif leading-relaxed">
                  "Walls are not just boundaries; they are the most expansive canvas of your life's story."
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <div className="w-10 h-px bg-gold/50" />
                  <p className="text-gold text-xs font-bold uppercase tracking-widest">Rajan Tiwari</p>
                </div>
              </div>

              {/* Social Connect */}
              <div className="flex items-center gap-6 mt-12 justify-center lg:justify-start">
                <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.4em]">Connect</span>
                <div className="flex items-center gap-4">
                  <a 
                    href={CONTACT.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-teal hover:border-teal/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,175,175,0.3)] transition-all duration-500"
                  >
                    <Instagram size={20} />
                  </a>
                  <a 
                    href={CONTACT.whatsapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-white/40 hover:text-teal hover:border-teal/50 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,175,175,0.3)] transition-all duration-500"
                  >
                    <MessageCircle size={20} />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
