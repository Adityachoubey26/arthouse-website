import { motion } from 'framer-motion';

const SectionHeading = ({ label, title, subtitle, accent = 'teal', center = false }) => {
  return (
    <div className={`mb-16 md:mb-24 ${center ? 'text-center' : ''}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <span className={`text-[10px] font-bold uppercase tracking-[0.4em] px-4 py-2 rounded-full border ${
            accent === 'gold' ? 'text-gold border-gold/20' : 'text-teal border-teal/20'
          }`}>
            {label}
          </span>
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight break-words"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-white/30 text-lg md:text-xl max-w-3xl leading-relaxed font-light break-words"
          style={{ marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
