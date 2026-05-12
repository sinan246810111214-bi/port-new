import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Calendar, CheckCircle2, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'International SEO (USA/Dubai)',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        triggerConfetti();
        
        // Construct WhatsApp message
        const whatsappNumber = '918590181381';
        const message = `*New Inquiry via Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        setFormData({ name: '', email: '', service: 'International SEO (USA/Dubai)', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-gold mb-4 text-center lg:text-left">Freelance Digital Marketer Palakkad</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center lg:text-left">Let's Rank your <span className="text-gold">Money Keywords</span>.</h3>
            <p className="text-white/60 text-lg font-light leading-relaxed mb-12 text-center lg:text-left">
              Searching for the **best digital marketer in Palakkad** or <a href="#services" className="text-gold underline">SEO services Kerala</a>? 
              From <a href="#portfolio" className="text-gold underline">Real Estate Marketing Kerala</a> to **Dubai Growth Strategies**, I'm your consultant.
            </p>

            <div className="space-y-8 mb-12 flex flex-col items-center lg:items-start">
              <div className="flex items-center space-x-6 w-full max-w-md lg:max-w-none">
                <div className="h-12 w-12 glass-card rounded-full flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">International Consultation</p>
                  <a href="https://calendly.com/marketersinanvk" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg text-gold hover:underline">Book Calendly Strategy Call</a>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-full max-w-md lg:max-w-none">
                <div className="h-12 w-12 glass-card rounded-full flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Direct Intelligence</p>
                  <p className="text-base sm:text-lg">marketersinanvk@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 w-full max-w-md lg:max-w-none">
                <div className="h-12 w-12 glass-card rounded-full flex items-center justify-center text-gold border border-gold/20 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Executive Phone</p>
                  <p className="text-base sm:text-lg">+91 85901 81381</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-6 p-6 bg-gold/5 border border-gold/10 rounded-xl">
                <div className="flex -space-x-4">
                    <div className="w-10 h-10 rounded-full border-2 border-black-deep overflow-hidden bg-neutral-800">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" alt="Client Testimonial - Best Digital Marketer Kerala" referrerPolicy="no-referrer" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-black-deep overflow-hidden bg-neutral-800">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Real Estate Marketing Client UAE" referrerPolicy="no-referrer" />
                    </div>
                </div>
                <p className="text-xs text-white/40">Joined by <span className="text-gold font-bold">100+ Brands</span> globally from UAE to USA.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-16 border-gold/10"
          >
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-6 py-10"
              >
                <motion.div 
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.2
                  }}
                  className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 relative overflow-hidden"
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                </motion.div>
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl font-serif font-bold"
                >
                  Inquiry Transmitted
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-white/60"
                >
                  I have received your signal. Expect an intelligence briefing within 24 hours.
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  onClick={() => setStatus('idle')}
                  className="text-gold border-b border-gold/20 pb-1 hover:border-gold transition-colors"
                >
                  Send another inquiry
                </motion.button>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/40 block transition-colors group-focus-within:text-gold">Your Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-all text-white placeholder:text-white/10 font-light"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/40 block transition-colors group-focus-within:text-gold">Your Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-all text-white placeholder:text-white/10 font-light"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/40 block transition-colors group-focus-within:text-gold">Interested Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-all text-white/60 appearance-none cursor-pointer font-light"
                  >
                      <option className="bg-black-rich" value="International SEO (USA/Dubai)">International SEO (USA/Dubai)</option>
                      <option className="bg-black-rich" value="High Performance Web Dev">High Performance Web Dev</option>
                      <option className="bg-black-rich" value="Performance Marketing (UAE/Norway)">Performance Marketing (UAE/Norway)</option>
                      <option className="bg-black-rich" value="Creative Media & Branding">Creative Media & Branding</option>
                  </select>
                </div>

                <div className="space-y-2 group">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold/40 block transition-colors group-focus-within:text-gold">Message</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="How can I help you grow?" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-all text-white placeholder:text-white/10 resize-none font-light"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-xs font-mono tracking-tight">TRANSMISSION_ERROR: PLEASE RETRY OR EMAIL DIRECTLY</p>
                )}

                  <button 
                    disabled={status === 'loading'}
                    className="btn-gold w-full mt-8 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-gold rounded-full py-5 text-sm"
                  >
                    {status === 'loading' ? (
                      <>
                        TRANSMITTING...
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        HIRE ME: SEND MESSAGE
                        <Send size={18} />
                      </>
                    )}
                  </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
