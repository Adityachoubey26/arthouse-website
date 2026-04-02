import { motion } from 'framer-motion';
import { Shield, Zap, Star, Users, Clock, Layers } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';

const features = [
  {
    icon: Shield,
    title: 'Premium Quality',
    desc: 'Only the finest materials sourced from globally trusted suppliers. Every product meets international luxury standards.',
    color: 'teal',
  },
  {
    icon: Star,
    title: 'Affordable Luxury',
    desc: 'High-end wall design doesn\'t have to be out of reach. We offer premium solutions tailored to your budget.',
    color: 'gold',
  },
  {
    icon: Zap,
    title: 'Fast Installation',
    desc: 'We respect your time. Our expert team ensures quick, seamless installation without compromising on precision.',
    color: 'teal',
  },
  {
    icon: Layers,
    title: 'Custom Designs',
    desc: 'Your walls should be as unique as you. We create bespoke solutions that reflect your personality and style.',
    color: 'gold',
  },
  {
    icon: Users,
    title: 'Expert Team',
    desc: 'Our skilled artisans bring years of specialized experience to every project — precision in every stroke.',
    color: 'teal',
  },
  {
    icon: Clock,
    title: 'Lifetime Support',
    desc: 'Our relationship doesn\'t end at installation. We offer post-installation support and touch-up services.',
    color: 'gold',
  },
];


const WhyChooseUs = () => {
  return (
    <section id="why-us" className="relative bg-[#050810] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative">
        <SectionHeading
          label="The Art House Edge"
          title="Why Choose Masterpieces?"
          subtitle="We don't just decorate walls — we craft enduring experiences that reflect your unique identity and prestige."
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-dark rounded-3xl p-10 group h-full border border-white/5 hover:border-teal/20 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 ${
                  f.color === 'gold'
                    ? 'bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold/20 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    : 'bg-teal/10 border border-teal/20 text-teal group-hover:bg-teal/20 group-hover:shadow-[0_0_20px_rgba(0,175,175,0.2)]'
                }`}>
                  <f.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
