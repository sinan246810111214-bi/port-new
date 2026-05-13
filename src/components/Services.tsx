import { motion } from 'motion/react';
import { Search, Globe, Code, Video, TrendingUp, Layout } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="text-gold" />,
      title: 'SEO Expert Palakkad & Kerala',
      description: 'Result-driven SEO services kerala by the best digital marketer in palakkad. Focus on local SEO kerala, luxury brand growth, and international search marketing expert strategies.',
      keywords: ['Freelance Digital Marketer Kerala', 'SEO Services Kerala', 'Best Digital Marketer in Palakkad']
    },
    {
      icon: <TrendingUp className="text-gold" />,
      title: 'Google Ads & DTC Specialist',
      description: 'High-performance google ads specialist kerala. Scaling ecommerce brands with dtc marketing usa systems and luxury brand lead generation dubai strategies.',
      keywords: ['Google Ads Kerala', 'Ecommerce Marketing', 'Lead Generation']
    },
    {
      icon: <Code className="text-gold" />,
      title: 'Ecommerce Marketing Expert USA',
      description: 'Shopify marketing expert usa delivering dtc brand marketing usa results. Expert ecommerce growth strategies usa using high-performance facebook ads for ecommerce usa.',
      keywords: ['Shopify Expert USA', 'DTC Growth USA', 'Ecommerce Specialist']
    },
    {
      icon: <Layout className="text-gold" />,
      title: 'Healthcare Marketing Agency Norway',
      description: 'Specialist clinic marketing services norway. Patient acquisition marketing norway strategist and healthcare seo expert. Best marketing strategy for clinics in norway.',
      keywords: ['Clinic Marketing Norway', 'Patient Acquisition', 'Healthcare SEO']
    }
  ];

  return (
    <section id="services" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-24 flex flex-col items-center">
            <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                className="w-20 h-px bg-gold mb-12"
            />
            <span className="text-sm uppercase tracking-[0.4em] text-gold mb-4 text-center">Exclusive Specializations</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-center leading-tight">
              Crafted Solutions for <br/> <span className="italic text-white/90 underline decoration-gold/30 underline-offset-8">Global Expansion</span>.
            </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border border-white/5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black-deep p-12 flex flex-col items-start border border-white/5 hover:bg-white/[0.02] transition-colors group relative"
            >
              <span className="absolute top-8 right-8 text-[11px] font-mono text-gold/40">0{index + 1}</span>
              <div className="mb-10 text-gold group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-6 group-hover:text-gold transition-colors leading-snug">{service.title}</h3>
              <p className="text-white/40 text-[11px] leading-relaxed mb-10 font-light">
                {service.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-6 border-t border-white/5 w-full">
                {service.keywords.map((kw, i) => (
                    <span key={i} className="text-[8px] uppercase tracking-widest text-white/30 whitespace-nowrap">
                        {kw} {i < service.keywords.length - 1 && "•"}
                    </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Strategic Roadmap Section */}
      <div className="max-w-7xl mx-auto px-6 mt-32">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 font-bold block">The Methodology</span>
          <h2 className="text-5xl font-serif font-bold">Fast Rank <span className="text-gold">Formula</span>.</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-0 border border-white/5 overflow-hidden rounded-xl">
          {[
            {
              step: "01",
              title: "Right Keyword",
              desc: "Focus on buyer-ready terms using advanced semantic research."
            },
            {
              step: "02",
              title: "Semantic Engineering",
              desc: "On-page structure optimized for modern vector-search algorithms."
            },
            {
              step: "03",
              title: "Authority Content",
              desc: "E-E-A-T focused content strategies that match search intent."
            },
            {
              step: "04",
              title: "Domain Dominance",
              desc: "High-authority link acquisition to solidify your organic position."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 bg-white/[0.02] relative group min-h-[280px] flex flex-col justify-between ${i < 3 ? 'md:border-r border-white/5' : ''} border-b md:border-b-0 border-white/5`}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              <div>
                <div className="text-sm font-mono text-gold/30 mb-8">{item.step}</div>
                <h3 className="text-xl font-serif font-bold mb-4 leading-tight group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-white/30 text-xs leading-relaxed group-hover:text-white/50 transition-colors">{item.desc}</p>
              </div>
              
              <div className="pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-8 h-px bg-gold/50" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
