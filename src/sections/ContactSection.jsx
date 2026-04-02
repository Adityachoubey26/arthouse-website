import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, User, Smartphone, MessageSquare } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import ScrollReveal from '../components/ScrollReveal.jsx';
import { CONTACT } from '../assets/index.js';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.message.trim()) {
      alert('Please enter your inquiry');
      return;
    }

    const whatsappMessage = `Hello Art House,\n\nI want to inquire:\n${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/917903202538?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Optional: Reset form after success
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section id="contact" className="relative bg-[#050810] overflow-hidden py-20">
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Content Area */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-teal text-[10px] font-bold uppercase tracking-[0.5em]">
                  Let's Converse
                </span>
                <h2 
                  className="text-5xl md:text-6xl font-bold text-white leading-[1.1] max-w-2xl break-words" 
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  Begin Your <br /> Narrative
                </h2>
                <p className="text-white/30 text-lg md:text-xl leading-relaxed font-light max-w-md break-words">
                  Your walls are waiting for their story. Reach out to our studio for a bespoke consultation and discover the possibilities of luxury.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8 pt-4">
                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal group-hover:border-teal/50 transition-all duration-500">
                    <User size={22} />
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Founder</p>
                    <p className="text-white text-lg font-medium tracking-wide">{CONTACT.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal group-hover:border-teal/50 transition-all duration-500">
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">Phone</p>
                    <p className="text-white text-lg font-medium tracking-wide">{CONTACT.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-teal group-hover:border-teal/50 transition-all duration-500">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">WhatsApp</p>
                    <a
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal hover:text-white transition-colors text-lg font-medium border-b border-teal/20 hover:border-teal pb-1"
                    >
                      Connect on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Quote Block */}
              <div className="pt-6 max-w-md">
                <div className="border-l-2 border-teal-400 pl-4 space-y-3">
                  <p className="text-white/70 text-2xl font-serif italic leading-relaxed break-words">
                    "Excellence is not a skill, it is an attitude."
                  </p>
                  <p className="text-teal/40 text-[10px] font-bold uppercase tracking-[0.5em]">— Art House Philosophy</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Form Card */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative group hover:border-teal/20 transition-all duration-500 shadow-2xl">
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-teal/5 rounded-full blur-[80px] pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/10 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">Mobile Number</label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/10 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="message" className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wider">Inquiry Details</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your inquiry here..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/10 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 outline-none transition-all resize-none min-h-[120px]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-teal to-teal-dark py-4 text-xs font-bold uppercase tracking-[0.4em] text-white shadow-lg shadow-teal/10 hover:shadow-teal/40 hover:scale-[1.02] transition-all duration-500 flex items-center justify-center gap-3 mt-4"
                >
                  Initiate Project
                  <Send size={16} className="transition-transform group-hover:translate-x-2" />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
