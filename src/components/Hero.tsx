import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black-deep pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_70%)]" />
        <motion.div 
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-gold/5 blur-[120px] rounded-full" 
        />
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.15, 0.05],
            scale: [1.2, 1, 1.2] 
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-gold/5 blur-[100px] rounded-full" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center lg:justify-start space-x-3 text-gold mb-8"
            >
              <div className="w-8 h-px bg-gold/30" />
              <Sparkles size={14} className="animate-spin-slow" />
              <span className="uppercase tracking-[0.5em] text-[10px] font-bold">The SEO Powerhouse</span>
              <div className="w-8 h-px bg-gold/30 lg:hidden" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
              className="text-4xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] font-serif font-bold tracking-tighter leading-[0.95] mb-12"
            >
              Muhammed <br className="hidden md:block"/> <span className="text-gold-gradient italic">Sinan VK</span>
              <span className="sr-only"> - Best SEO Services Kerala & Best Digital Marketer in Palakkad</span>
            </motion.h1>

            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.4 }}
               className="mb-12"
            >
                <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8">
                    Dominating Search Result Pages. 
                    The <span className="text-white font-medium">SEO Architect</span> behind 450+ successful campaigns. 
                    Specialized in <span className="text-gold font-medium">Data-Led Growth</span> and <span className="text-gold font-medium">Revenue SEO</span>.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4 text-[9px] uppercase tracking-[0.4em] font-bold text-gold/40">
                    <span>📍 PALAKKAD</span>
                    <span>📍 KOCHI</span>
                    <span>📍 DUBAI</span>
                    <span>📍 OSLO</span>
                </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <Link to="/portfolio" className="w-full sm:w-auto">
                <button className="btn-outline w-full px-12 uppercase tracking-widest">
                  View Cases
                </button>
              </Link>
              <Link to="/contact" 
                onClick={() => {
                  if (window.location.pathname === '/contact') {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto"
              >
                <button className="btn-gold w-full bg-white text-black border-white hover:bg-gold hover:text-black transition-all px-12 group">
                  Audit My SEO
                  <ArrowRight size={14} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* 3D SEO Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex-1 relative hidden lg:block perspective-2000"
          >
            <motion.div 
              whileHover={{ rotateY: -10, rotateX: 5 }}
              className="relative w-full aspect-square max-w-md mx-auto transition-transform duration-500 transform-style-3d"
            >
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ rotateZ: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="w-full h-full border border-gold/10 rounded-full absolute"
                />
                <motion.div 
                  animate={{ rotateZ: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-3/4 h-3/4 border border-gold/5 rounded-full absolute"
                />
                
                <div className="relative z-10 w-64 h-64 flex items-center justify-center">
                   <div className="absolute inset-0 bg-gold/5 rounded-full blur-3xl animate-pulse" />
                   <div className="text-center group">
                      <div className="text-gold font-serif text-5xl italic mb-2 group-hover:scale-110 transition-transform">SEO</div>
                      <div className="text-[10px] uppercase tracking-[0.5em] text-white/30 font-bold">Authority</div>
                   </div>
                   
                   {/* Orbiting Nodes */}
                   {[
                     { name: "Technical", r: 160, speed: 25 },
                     { name: "Strategy", r: 130, speed: 30 },
                     { name: "Keywords", r: 190, speed: 20 },
                     { name: "ROI", r: 150, speed: 35 },
                     { name: "On-Page", r: 110, speed: 40 },
                   ].map((item, idx) => {
                     return (
                       <motion.div
                         key={item.name}
                         animate={{ 
                           rotate: [0, 360],
                         }}
                         transition={{ duration: item.speed, repeat: Infinity, ease: "linear" }}
                         style={{
                           position: 'absolute',
                           width: `${item.r * 2}px`,
                           height: `${item.r * 2}px`,
                         }}
                         className="flex items-center justify-start pointer-events-none"
                       >
                         <div className="bg-black-deep border border-gold/40 px-3 py-1.5 text-[7px] uppercase tracking-widest font-black text-gold shadow-gold/20 shadow-lg pointer-events-auto">
                           {item.name}
                         </div>
                       </motion.div>
                     )
                   })}
                </div>
              </div>

              {/* Data Floating Sheets (3D cards) */}
              <motion.div
                initial={{ z: 0 }}
                whileHover={{ z: 50, rotateY: -15 }}
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 bg-black-deep/80 border border-white/10 p-6 shadow-2xl backdrop-blur-xl transform-style-3d cursor-pointer"
              >
                  <div className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Audit Score</div>
                  <div className="text-3xl font-serif font-bold text-gold">100<span className="text-sm font-sans">%</span></div>
                  <div className="w-12 h-0.5 bg-gold/50 mt-4" />
              </motion.div>

              <motion.div
                initial={{ z: 0 }}
                whileHover={{ z: 50, rotateY: 15 }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-10 left-0 bg-black-deep/80 border border-white/10 p-6 shadow-2xl backdrop-blur-xl transform-style-3d cursor-pointer"
              >
                  <div className="text-[9px] uppercase tracking-widest text-white/30 mb-2">Organic Reach</div>
                  <div className="text-3xl font-serif font-bold text-gold">1.2M<span className="text-sm font-sans">+</span></div>
                  <div className="w-12 h-0.5 bg-gold/50 mt-4" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center lg:justify-start gap-x-16 gap-y-8 mt-24 py-12 border-y border-white/5 relative"
        >
            <div className="text-center relative group">
                <div className="text-sm font-mono text-gold/40 mb-2">01</div>
                <div className="text-3xl font-serif font-bold tracking-tight mb-1 group-hover:text-gold transition-colors">98%</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">Retention Rate</div>
                <div className="absolute -inset-4 bg-gold/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-center relative group">
                <div className="text-sm font-mono text-gold/40 mb-2">02</div>
                <div className="text-3xl font-serif font-bold tracking-tight mb-1 group-hover:text-gold transition-colors">450+</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">Growth Multiplier</div>
            </div>
            <div className="text-center relative group">
                <div className="text-sm font-mono text-gold/40 mb-2">03</div>
                <div className="text-3xl font-serif font-bold tracking-tight mb-1 group-hover:text-gold transition-colors">$12M+</div>
                <div className="text-[9px] uppercase tracking-widest text-white/40">Managed Ad Spend</div>
            </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold">Scroll to explore</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/40 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
