import { motion } from 'motion/react';
import { Instagram, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <footer className="py-20 border-t border-gold/10 bg-black-deep overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <h4 className="text-3xl md:text-4xl font-serif font-bold tracking-tighter mb-6 group select-none">
              MS<span className="text-gold">VK</span><span className="text-gold">.</span>
            </h4>
            <p className="text-white/30 max-w-sm font-light leading-relaxed mb-10 text-[13px]">
              Muhammed Sinan VK (MSVK) - Redefining digital authority for luxury brands from Dubai to Norway. Specialized in AI-driven growth for Real Estate and E-commerce.
            </p>
            <div className="flex space-x-8">
                <a href="https://www.instagram.com/muhammed_sinan_vk_85/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-gold transition-colors"><Instagram size={18} /></a>
                <a href="https://www.linkedin.com/in/sinan-vk/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-gold transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="text-white/20 hover:text-gold transition-colors"><Twitter size={18} /></a>
            </div>
          </div>
          
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8">Strategic Markets</h5>
            <ul className="space-y-4 text-sm text-white/60">
                <li><span className="text-gold mr-2">/</span> Dubai Real Estate</li>
                <li><span className="text-gold mr-2">/</span> Norway Healthcare</li>
                <li><span className="text-gold mr-2">/</span> USA Luxury DTC</li>
                <li><span className="text-gold mr-2">/</span> India Tech & AI</li>
            </ul>
          </div>

          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-8">Founder Office</h5>
            <p className="text-sm text-white/60 leading-loose">
              Sinan VK (MSVK)<br/>
              Best Digital Marketer in Palakkad<br/>
              Kerala, India<br/>
              Kochi • Calicut • Malappuram<br/>
              +91 85901 81381
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[9px] uppercase tracking-[0.4em] text-white/20 font-bold">
                © 2026 MUHAMMED SINAN VK • THE MSVK STANDARD
            </div>
            
            <motion.button 
                onClick={scrollToTop}
                whileHover={{ y: -5 }}
                className="flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] font-bold text-gold/60 hover:text-gold transition-colors group"
            >
                Elevate to Top
                <div className="h-14 w-14 border border-gold/10 rounded-full flex items-center justify-center group-hover:border-gold/40 group-hover:bg-gold/5 transition-all duration-500">
                    <ArrowUp size={20} />
                </div>
            </motion.button>

            <div className="flex gap-8 text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold">
                <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
