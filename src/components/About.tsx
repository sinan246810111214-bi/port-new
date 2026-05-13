import { motion } from 'motion/react';

const About = () => {
    const stats = [
        { label: 'Markets Covered', value: 'Global' },
        { label: 'Focus Areas', value: 'Retail & Real Estate' },
        { label: 'Client Retention', value: '98%' },
        { label: 'AI Integrated', value: '100%' },
    ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative pr-12 pb-12"
          >
            <div className="absolute top-0 left-0 w-full h-full border border-gold/10 translate-x-6 translate-y-6 z-0" />
            <div className="relative z-10 aspect-[3/4] bg-neutral-900 shadow-2xl overflow-hidden group">
               <img 
                 src="https://i.ibb.co/23DtQ1FC/best-digital-marketer-kerala.jpg" 
                 alt="Sinan VK - Best Digital Marketer in Palakkad & SEO Expert Kerala" 
                 className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                 loading="lazy"
                 decoding="async"
                 width="600"
                 height="800"
               />
               <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black-deep to-transparent opacity-60" />
            </div>
            
            <div className="absolute bottom-4 right-0 bg-gold p-8 md:p-10 text-black-deep shadow-2xl z-20">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 opacity-60">Founder</p>
                <span className="text-4xl md:text-5xl font-serif font-bold block leading-none">MSVK.</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gold" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold">The Strategic Vision</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold mb-10 leading-[1.1]">
              Sinan VK <span className="text-gold italic">Digital Marketer</span>.
            </h2>
            
            <p className="text-base text-white/50 font-light leading-relaxed mb-6">
              Recognized as the **best digital marketer in palakkad** and a top **freelance digital marketer kerala**, I provide result-driven <a href="#services" className="text-gold underline">seo services kerala</a> and <a href="#services" className="text-gold underline">google ads expert kerala</a> solutions. 
              My journey as a **sinan vk digital marketer** is built on delivering global authority from a local base.
            </p>

            <p className="text-base text-white/50 font-light leading-relaxed mb-12">
              From **real estate marketing kerala** to **best digital marketer in kerala** recognition, I help brands dominate search. 
              Whether it's <a href="#services" className="text-gold underline">seo expert in kerala</a> consulting or <a href="#services" className="text-gold underline">social media marketing kerala</a> campaigns, my focus is always on ranking.
            </p>
            
            <div className="grid grid-cols-2 gap-x-12 gap-y-10 mb-12">
                {stats.map((stat, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="border-b border-white/5 pb-4 group"
                    >
                        <div className="text-3xl font-serif text-gold font-bold mb-1 group-hover:text-white transition-colors">{stat.value}</div>
                        <div className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-bold group-hover:text-gold/50 transition-colors">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            <div className="bg-white/[0.02] border-l-2 border-gold p-8 mb-12 italic relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H14.017C13.4647 8 13.017 8.44772 13.017 9V15C13.017 16.3261 12.4893 17.5979 11.5517 18.5355C10.614 19.4732 9.34224 20 8.01611 20H7.01611V21H8.01611C9.34224 21 10.614 20.4732 11.5517 19.5355C12.4893 18.5979 13.017 17.3261 13.017 16V15C13.017 13.8954 13.9124 13 15.017 13H18.017V15H15.017C14.4647 15 14.017 15.4477 14.017 16V18C14.017 19.1046 13.1216 20 12.017 20H11.017V21H12.017C13.1216 21 14.017 20.1046 14.017 19V21H14.017Z" /></svg>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-4 relative z-10">
                "In markets as competitive as Dubai Real Estate or Norway's Healthcare, a generic approach is a failure. 
                We create patient acquisition systems and luxury lead pipelines that are mathematically superior."
              </p>
              <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold relative z-10">
                Foundational Integrity • AI-Driven Growth
              </p>
            </div>
            
            <div className="flex space-x-16">
               <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold mb-3">Headquarters</span>
                  <span className="text-xs font-semibold tracking-widest">KERALA, INDIA</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-white/20 font-bold mb-3">Consulting for</span>
                  <span className="text-xs font-semibold tracking-widest">USA / UAE / NORWAY</span>
               </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">99+ Google PageSpeed</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Sub-3s Load Guarantee</span>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
