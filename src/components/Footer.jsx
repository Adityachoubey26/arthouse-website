import { Link } from 'react-router-dom';
import { Instagram, Globe, Share2, MessageCircle, Phone, Mail } from 'lucide-react';
import { CONTACT } from '../assets/index.js';
import { services } from '../data/services.js';

const Footer = () => {
  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030508] border-t border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-teal/30 bg-teal/10">
                <span className="text-teal font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>A</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>Art</span>
                <span className="text-teal font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>House</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Transforming walls into art. Premium wall solutions crafted with passion and precision.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-teal hover:border-teal-400 hover:scale-110 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-teal hover:border-teal-400 hover:scale-110 transition-all duration-300">
                <Share2 size={18} />
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-teal hover:border-teal-400 hover:scale-110 transition-all duration-300">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="text-white/50 hover:text-teal transition-colors text-sm">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Gallery', id: 'gallery' },
                { label: 'Why Choose Us', id: 'why-us' },
                { label: 'About Founder', id: 'founder' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' },
              ].map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-white/50 hover:text-teal transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/50 text-sm">
                <Phone size={14} className="text-teal flex-shrink-0" />
                <span>{CONTACT.phone}</span>
              </div>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-teal text-sm transition-colors"
              >
                <MessageCircle size={14} className="text-teal flex-shrink-0" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-5 mt-5 inline-flex"
            >
              Get Free Consultation
            </a>
          </div>
        </div>

        <div className="gradient-line mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Art House. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Founded by <span className="text-teal">Rajan Tiwari</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
