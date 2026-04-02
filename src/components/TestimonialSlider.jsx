import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials.js';

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef();

  const next = () => {
    setDirection(1);
    setCurrent((p) => (p + 1) % testimonials.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const t = testimonials[current];

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl glass p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={16} className="fill-gold text-gold" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-8 break-words">
              "{t.quote}"
            </p>

            {/* Author */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal/30"
                />
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
              <span className="sm:ml-auto text-[10px] text-teal/70 border border-teal/20 px-4 py-1.5 rounded-full uppercase tracking-widest font-bold">
                {t.project}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-8 bg-teal' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-teal hover:border-teal/30 transition-all"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-teal hover:border-teal/30 transition-all"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
