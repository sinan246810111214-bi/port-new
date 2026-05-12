import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowUpRight, X, Clock, User, Share2 } from 'lucide-react';
import { useState } from 'react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const posts = [
    {
      title: "How to Scale Ecommerce Business in USA: The 2026 Strategy",
      category: "Ecommerce Marketing USA",
      date: "Oct 25, 2024",
      excerpt: "Expert insights from a shopify marketing expert usa on scaling brands using high-performance ecommerce growth strategies usa and result-oriented meta ads specialist kerala techniques.",
      content: `Scaling a DTC brand to 1 million revenue requires a mathematically proven formula. As a <a href="#services" class="text-gold underline">shopify marketing expert usa</a>, I prioritize conversion-focused design, similar to the standards discussed on the <a href="https://www.shopify.com/blog/ecommerce-marketing" target="_blank" rel="noopener noreferrer" class="text-gold underline decoration-gold/30">Shopify Business Blog</a>.
      
      The core of my <a href="#services" class="text-gold underline">ecommerce growth strategies usa</a> is built on data-backed audience targeting and predictive analytics. By leveraging the skills of a <a href="#contact" class="text-gold underline">meta ads specialist kerala</a>, we bridge the gap between local talent and global scale.
      
      Success in the US market means understanding search intent and staying updated via <a href="https://www.entrepreneur.com/topic/ecommerce" target="_blank" rel="noopener noreferrer" class="text-gold underline decoration-gold/30">Entrepreneur's Ecommerce insights</a>.`, 
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      tags: ["Ecommerce USA", "Shopify Specialist", "Scaling USA"]
    },
    {
      title: "Best Marketing Strategy for Clinics in Norway: Fast Patient Growth",
      category: "Healthcare Norway",
      date: "Oct 24, 2024",
      excerpt: "The healthcare marketing agency norway playbook: implementing clinic marketing services norway and patient acquisition marketing norway systems that work.",
      content: `Trust is the currency of healthcare. Our <a href="#services" class="text-gold underline">healthcare marketing agency norway</a> roadmap focuses on building that trust through technical SEO and patient-centric storytelling.
      
      Implementing <a href="#services" class="text-gold underline">clinic marketing services norway</a> often requires navigating complex <a href="https://gdpr-info.eu/" target="_blank" rel="noopener noreferrer" class="text-gold underline decoration-gold/30">EU GDPR regulations</a>, but my AI-powered systems ensure 100% compliance while maximizing <a href="#portfolio" class="text-gold underline">patient acquisition marketing norway</a> results.
      
      Explore our <a href="#portfolio" class="text-gold underline">recent successes</a> in the Nordic market to see how we scale specialist clinics according to healthcare marketing best practices.`,
      image: "https://images.unsplash.com/photo-1504813184591-01592fd03cf7?auto=format&fit=crop&q=80&w=800",
      tags: ["Healthcare Norway", "Clinic Marketing", "Patient Acquisition"]
    },
    {
      title: "How to Get Real Estate Leads in Dubai: Luxury Market Secrets",
      category: "Real Estate Dubai",
      date: "Oct 23, 2024",
      excerpt: "Insights from a lead generation expert for real estate dubai on luxury real estate marketing dubai and property marketing services uae optimization.",
      content: `Dubai's real estate market demands prestige. As a <a href="#services" class="text-gold underline">lead generation expert for real estate dubai</a>, I create funnels that capture investors before they even land in the UAE, utilizing sophisticated techniques outlined by <a href="https://www.facebook.com/business/" target="_blank" rel="noopener noreferrer" class="text-gold underline decoration-gold/30">Meta for Business</a>.
      
      My approach to <a href="#services" class="text-gold underline">luxury real estate marketing dubai</a> combines high-impact visuals with <a href="#services" class="text-gold underline">real estate seo services dubai</a> that dominate the search results for premium property keywords.
      
      Check out our <a href="#locations" class="text-gold underline">international presence</a> and how we handle <a href="#portfolio" class="text-gold underline">property marketing services uae</a> for top-tier developers.`,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
      tags: ["Dubai Real Estate", "Lead Gen Dubai", "Premium Marketing"]
    },
    {
      title: "Mastering International SEO for Luxury Brands in USA",
      category: "SEO Strategy",
      date: "Oct 24, 2024",
      excerpt: "Why international SEO is the backbone of global brands. Tips from a freelance digital marketer Kerala on dominating US search results.",
      content: `International SEO isn't just about translation; it's about localization and technical excellence. Following the <a href="https://developers.google.com/search" target="_blank" rel="noopener noreferrer" class="text-gold underline decoration-gold/30">Google Search Central</a> guidelines, we build sites that search engines understand globally.
      
      As a <a href="#about" class="text-gold underline">freelance digital marketer kerala</a>, I've helped luxury brands in the USA achieve top-tier rankings by focusing on high-authority link building and semantic schema optimization.
      
      Dominating search results in competitive markets requires a long-term technical vision. See our <a href="#services" class="text-gold underline">SEO services kerala</a> roadmap for detailed methodology.`,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["USA Luxury", "SEO", "DTC"]
    },
    {
      title: "Patient Acquisition Systems for Clinics in Norway: A Case Study",
      category: "Healthcare",
      date: "Oct 12, 2024",
      excerpt: "Discover how our AI-Powered Marketing for Clinics in Norway revolutionized patient acquisition for specialist providers. This deep dive explains the technical implementation of medical SEO and automated lead nurturing systems that scaled appointment bookings by over 200% for our Nordic specialist healthcare clients.",
      content: `In the Norwegian healthcare sector, trust and visibility are paramount. We built an AI-powered engine that analyzes patient search behavior in real-time to adjust our targeting.
      
      Key Pillars:
      - Medical Compliance: Ensuring every word meets strict EU healthcare guidelines.
      - AI Personalization: Dynamic landing pages that change based on user symptoms searched.
      - Reputation Management: Automated systems to highlight patient successes.
      
      Result: Clinics in Oslo saw a massive uptick in private insurance patients and a 50% reduction in lead acquisition costs.`,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      tags: ["Norway", "Medical SEO", "AI"]
    },
    {
      title: "Real Estate Dubai: Lead Generation for Luxury Properties",
      category: "Real Estate",
      date: "Sep 28, 2024",
      excerpt: "Through performance marketing for premium brands, we helped Luxavya capture the essence of high-end real estate in Dubai. This case study covers the strategic use of hyper-targeted lead generation for luxury properties across the UAE and Qatar markets, ensuring maximum ROI through precision funnel engineering.",
      content: `Dubai's real estate market is one of the most competitive in the world. For Luxavya, the goal was to find international investors before they reached out to big agencies.
      
      The Method:
      - Social Retargeting: Using Meta and LinkedIn to target high-net-worth individuals globally.
      - Interactive Funnels: Virtual tour integrations directly inside lead forms.
      - Data Analytics: Tracking investor behavior from the UK and Europe to the UAE.
      
      The outcome was a consistent stream of multi-million dollar property inquiries that converted at a record-high 15%.`,
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
      tags: ["Dubai", "Real Estate", "Leads"]
    },
    {
      title: "The Future of E-commerce: AI Digital Marketing in Palakkad",
      category: "Innovation",
      date: "Sep 15, 2024",
      excerpt: "As the best AI digital marketer in Palakkad, I explore how local enterprises like Minco Kids can bridge the gap to international markets. This article breaks down our freelance digital marketing expert methodology for scaling Kerala-based brands to reach global audiences through sophisticated social media marketing systems.",
      content: `Palakkad is home to incredible manufacturing talent. Minco Kids represented a perfect opportunity to show how local brands can dominate globally.
      
      How we scaled:
      - Localization bypass: Using AI to translate and adapt branding for GCC and European markets.
      - Logistics-driven marketing: Tying ads to stock availability in specific fulfillment zones.
      - Brand Storytelling: Elevating a local Kerala brand to an international status.
      
      Today, Minco Kids is a staple name for quality kids' products in multiple international territories.`,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      tags: ["Palakkad", "AI", "Kerala"]
    },
    {
      title: "Interactive Web Dev: Why Next.js & GSAP are the MSVK Standard",
      category: "Development",
      date: "Aug 30, 2024",
      excerpt: "Building high-performance web development solutions like the Jamalullail Education portal requires more than just code. We analyze the MSVK standard of combining Next.js with GSAP animations to create interactive UI/UX designs that don't just look premium but convert users into long-term loyal brand advocates globally.",
      content: `For Jamalullail Education, the mission was to create an educational portal that felt high-end and technologically advanced. We utilized Next.js for its unparalleled performance.
      
      Tech Stack Highlights:
      - GSAP for buttery smooth scrolling and micro-animations.
      - Headless CMS for rapid content updates.
      - Responsive precision for a 100% mobile-friendly experience.
      
      The result is a platform that serves thousands of students daily without a single second of downtime, while maintaining a premium aesthetic.`,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      tags: ["Next.js", "GSAP", "UI/UX"]
    }
  ];

  return (
    <section id="blog" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-gold" />
            <span className="text-gold uppercase tracking-[0.4em] text-[10px] font-bold">Insights & Perspectives</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif font-bold">The <span className="text-gold">Journal</span>.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer glass-card premium-border p-4 bg-transparent hover:bg-white/[0.02] transition-all"
            >
              <div className="relative overflow-hidden aspect-[16/10] mb-8 border border-gold/10">
                <img 
                  src={post.image} 
                  alt={`${post.title} - Best Digital Marketer Kerala Insights`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="500"
                />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-gold/20 flex items-center gap-2">
                    <BookOpen size={12} className="text-gold" />
                    <span className="text-[9px] uppercase tracking-widest text-gold">{post.category}</span>
                </div>
              </div>

              <div className="px-2">
                <div className="flex items-center gap-4 mb-4 text-[10px] text-white/30 uppercase tracking-[0.2em]">
                  <span>{post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-gold/50" />
                  <span>By MSVK</span>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-white/40 text-xs font-light leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <div className="flex gap-2">
                      {post.tags.map((tag, i) => (
                          <span key={i} className="text-[8px] uppercase tracking-widest text-white/20">#{tag}</span>
                      ))}
                  </div>
                  <div className="text-gold flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Read Case Study
                      <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          >
            <div className="absolute inset-0 bg-black-deep/95 backdrop-blur-xl" onClick={() => setSelectedPost(null)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-black-rich border border-gold/20 overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button 
                onClick={() => setSelectedPost(null)}
                className="absolute top-6 right-6 z-20 h-10 w-10 glass-card rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all"
              >
                <X size={20} />
              </button>

              <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img 
                   src={selectedPost.image} 
                   alt={`${selectedPost.title} - Sinan VK Case Study`}
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black-rich via-transparent to-transparent" />
              </div>

              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-4 mb-6 text-gold/60">
                   <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                       <Clock size={12} />
                       5 min read
                   </div>
                   <div className="h-1 w-1 rounded-full bg-gold/20" />
                   <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest">
                       <User size={12} />
                       Sinan VK
                   </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight">{selectedPost.title}</h2>
                
                <div className="space-y-6 text-white/70 text-sm md:text-base leading-relaxed font-light blog-content">
                  {selectedPost.content.split('\n').map((para: string, i: number) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: para.trim() }} />
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
                   <div className="flex gap-2">
                      {selectedPost.tags.map((tag: string, i: number) => (
                        <span key={i} className="text-[10px] text-gold uppercase tracking-widest font-bold">#{tag}</span>
                      ))}
                   </div>
                   <button className="flex items-center gap-2 text-white/40 hover:text-gold transition-colors">
                      <Share2 size={16} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Share Case Study</span>
                   </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Blog;

