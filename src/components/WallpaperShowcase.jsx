import { motion } from 'framer-motion';
import { IMAGES } from '../assets/index.js';

const WallpaperShowcase = () => {
  const wallpapers = IMAGES.gallery;
  // Double the array for seamless infinite scroll
  const doubleWallpapers = [...wallpapers, ...wallpapers];

  return (
    <div className="relative w-full overflow-hidden mt-12 md:mt-20">
      {/* Side Fades for depth */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050810] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050810] to-transparent z-10 pointer-events-none" />

      <motion.div 
        className="flex gap-4 md:gap-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        {doubleWallpapers.map((src, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.05, transition: { duration: 0.4 } }}
            className="flex-shrink-0 w-[280px] md:w-[400px] h-[180px] md:h-[250px] rounded-2xl overflow-hidden relative group cursor-pointer border border-white/5 bg-white/5"
          >
            <img 
              src={src} 
              className="w-full h-full object-cover transition-all duration-700 blur-[3px] group-hover:blur-0 grayscale-[0.3] group-hover:grayscale-0"
              alt={`Art House Wallpaper ${i}`}
              loading="lazy"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/0 transition-all duration-700" />
            
            {/* Subtle Label */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="text-[10px] font-bold text-teal uppercase tracking-[0.3em] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-teal/30">
                Premium Design
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WallpaperShowcase;
