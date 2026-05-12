import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/best-digital-marketer-palakkad' },
    { name: 'Services', href: '/digital-marketing-services-kerala' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black-deep/90 backdrop-blur-md py-4 border-b border-gold/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tighter"
        >
          <Link to="/" className="flex items-center group">
            <span className="text-gold transition-transform group-hover:scale-110">MSVK</span>
            <span className="text-white">.</span>
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
                key={link.name}
                to={link.href}
                className="text-[10px] uppercase tracking-[0.3em] text-white/50 hover:text-gold transition-colors relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold !py-3 !px-8 !text-[9px] !rounded-full"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gold">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="md:hidden fixed inset-0 z-40 bg-black-deep flex flex-col items-center justify-center space-y-8 px-10"
        >
          <div className="absolute top-8 right-6">
             <button onClick={() => setIsOpen(false)} className="text-gold">
                <X size={32} />
             </button>
          </div>

          <div className="flex flex-col items-center space-y-6 w-full">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="w-full text-center"
              >
                <Link 
                  to={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-serif text-white/80 hover:text-gold transition-colors block py-2"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex space-x-12 pt-12 border-t border-white/5 w-full justify-center">
            <a href="https://www.instagram.com/muhammed_sinan_vk_85/" target="_blank" rel="noopener noreferrer" className="text-gold/60 hover:text-gold transition-colors">
              <Instagram size={28} />
            </a>
            <a href="https://www.linkedin.com/in/sinan-vk/" target="_blank" rel="noopener noreferrer" className="text-gold/60 hover:text-gold transition-colors">
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
