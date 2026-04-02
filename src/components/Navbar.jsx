import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { IMAGES, CONTACT } from '../assets/index.js';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'About', href: '/#founder' },
  { label: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-4 glass-dark border-b border-white/10' : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            {IMAGES.logo ? (
              <img 
                src={IMAGES.logo} 
                alt="Art House" 
                className="h-12 md:h-14 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              />
            ) : (
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-teal/30 bg-teal/10 group-hover:bg-teal/20 transition-all duration-300">
                <span className="text-teal font-bold text-2xl" style={{ fontFamily: 'Playfair Display, serif' }}>A</span>
              </div>
            )}
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-xl tracking-wider uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>Art</span>
              <span className="gradient-text-teal font-bold text-xl tracking-wider uppercase" style={{ fontFamily: 'Playfair Display, serif' }}>House</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="text-white/60 hover:text-white transition-all duration-300 text-sm font-semibold tracking-[0.2em] uppercase relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-teal transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 px-8 uppercase tracking-widest"
            >
              <MessageCircle size={14} />
              Consult Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/80 hover:text-teal transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[80px] z-40 glass-dark border-b border-white/10"
          >
            <ul className="flex flex-col px-8 py-10 gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-white/80 hover:text-teal transition-all duration-300 w-full text-left text-xl font-bold tracking-widest uppercase"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center py-4 text-sm tracking-widest uppercase"
                >
                  <MessageCircle size={18} />
                  Consult Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
