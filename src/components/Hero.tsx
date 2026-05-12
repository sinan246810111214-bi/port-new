import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[140px]" />
        
        {/* Refined Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Floating elements */}
        <motion.div 
            animate={{ 
                y: [0, -30, 0],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[20%] w-px h-64 bg-gradient-to-b from-gold/30 to-transparent" 
        />
        <motion.div 
            animate={{ 
                y: [0, 30, 0],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[20%] w-px h-64 bg-gradient-to-t from-gold/30 to-transparent" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center space-x-3 text-gold mb-8"
        >
          <div className="w-8 h-px bg-gold/30" />
          <Sparkles size={14} className="animate-spin-slow" />
          <span className="uppercase tracking-[0.5em] text-[10px] font-bold">Premium Digital Standard</span>
          <div className="w-8 h-px bg-gold/30" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-serif font-bold tracking-tighter leading-[0.95] mb-12"
        >
          Muhammed <br className="hidden md:block"/> <span className="text-gold-gradient italic">Sinan VK</span>
          <span className="sr-only"> - Best SEO Services Kerala & Best Digital Marketer in Palakkad</span>
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="mb-16"
        >
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed mb-8">
                The <span className="text-white font-medium">Digital Authority</span> for Luxury Brands. 
                Recognized as the <span className="text-gold font-medium">Best Digital Marketer in Palakkad</span> and top <span className="text-gold font-medium">SEO Expert Kerala</span> scaling brands across the US, Dubai, and Oslo.
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[10px] uppercase tracking-[0.5em] font-bold text-gold/40">
                <span>📍 PALAKKAD</span>
                <span>📍 KOCHI</span>
                <span>📍 KOZHIKODE</span>
                <span>📍 DUBAI</span>
            </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="btn-gold w-full flex items-center justify-center group hover:shadow-gold">
              Book Free Strategy Call
              <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <Link to="/portfolio" className="w-full sm:w-auto">
            <button className="btn-outline w-full">
              View Case Studies
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-x-16 gap-y-8 mb-16 py-12 border-y border-white/5 relative"
        >
            <div className="text-center relative group">
                <div className="text-sm font-mono text-gold/40 mb-2">01</div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tighter">$1M+</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mt-2">Ad Spend Managed</div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold group-hover:w-full transition-all duration-700" />
            </div>
            <div className="text-center relative group">
                <div className="text-sm font-mono text-gold/40 mb-2">02</div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tighter">5.2X</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mt-2">Avg. ROAS</div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold group-hover:w-full transition-all duration-700" />
            </div>
            <div className="text-center relative group">
                <div className="text-sm font-mono text-gold/40 mb-2">03</div>
                <div className="text-4xl md:text-5xl font-serif font-bold text-white tracking-tighter">100+</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mt-2">Global Clients</div>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px bg-gold group-hover:w-full transition-all duration-700" />
            </div>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;
