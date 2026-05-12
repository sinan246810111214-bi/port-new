import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Certificates from '../components/Certificates';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Locations from '../components/Locations';
import Contact from '../components/Contact';
import { motion } from 'motion/react';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let targetId = '';

    if (path === '/digital-marketing-services-kerala' || path === '/seo-services-kerala') targetId = 'services';
    else if (path === '/best-digital-marketer-palakkad') targetId = 'about';
    else if (path === '/portfolio') targetId = 'portfolio';
    else if (path === '/blog') targetId = 'blog';
    else if (path === '/contact') targetId = 'contact';

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <main>
      {/* Section 1: Hero (Deep Black) */}
      <section id="hero" className="bg-black-deep">
        <Hero />
      </section>
      
      {/* Transition: SEO Keywords Belt */}
      <div className="py-12 bg-black-rich border-y border-gold/5 flex whitespace-nowrap overflow-hidden">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 items-center px-10"
        >
          {[
            "Best SEO Expert Palakkad",
            "Freelance Digital Marketer Kerala",
            "Top Google Ads Specialist Kerala",
            "E-commerce Marketing Expert Palakkad",
            "DTC Brand Growth Specialist Kerala",
            "Luxury Brand Strategist Dubai",
            "Result-Driven SEO Services Kerala",
            "Best AI Digital Marketer in Palakkad",
            "Google Ads Freelancer Palakkad",
            "Organic Growth Specialist Kerala",
            "Lead Generation Expert Kerala",
            "Hire Best Digital Marketer Kerala"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-gold/30">
                {text}
              </span>
              <div className="w-2 h-2 rounded-full bg-gold/20" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Section 2: About (Rich Black / Darker) */}
      <section id="about" className="bg-black-rich relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold/[0.02] -skew-x-12" />
        <About />
      </section>
      
      {/* Section 3: Services (Deep Black + Grid) */}
      <section id="services" className="bg-black-deep border-t border-gold/5">
        <Services />
      </section>
      
      {/* Mid-Page Visual Break (Full Width) */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2000" 
              alt="Digital Marketing Services Kerala - Sinan VK Strategy Workspace" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 filter grayscale scale-110"
              loading="lazy"
              decoding="async"
              width="2000"
              height="1000"
          />
          <div className="relative z-10 text-center px-6 max-w-4xl">
              <span className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6 block">
                The MSVK Standard
              </span>
              <h4 className="text-4xl md:text-6xl font-serif italic mb-6 leading-tight">"Digital presence is the modern-day real estate. Build it with prestige."</h4>
              <div className="w-24 h-px bg-gold/50 mx-auto" />
          </div>
      </section>

      {/* Section 4: Portfolio (Rich Black / Masonry Style) */}
      <section id="portfolio" className="bg-black-rich py-10 border-t border-gold/5">
        <Portfolio />
      </section>

      <Certificates />

      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>

      <div id="locations">
        <Locations />
      </div>

      {/* Section 5: Blog (Deep Black) */}
      <section id="blog" className="bg-black-deep">
        <Blog />
      </section>
      
      {/* Section 6: Contact (Gold Gradient Accent) */}
      <section id="contact" className="bg-black-deep relative border-t border-gold/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-gold/[0.03] via-transparent to-transparent" />
        <Contact />
      </section>
    </main>
  );
}
