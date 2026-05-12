import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: "Luxavya Perfumes",
      category: "International SMM (Dubai/Qatar)",
      image: "https://i.ibb.co/6R4bBNHw/Screenshot-2026-05-12-174255.png",
      description: "Global brand positioning and high-performance social marketing for a luxury fragrance house.",
      link: "https://www.luxavya.com/"
    },
    {
      title: "Gadjenix E-commerce",
      category: "Full-stack Dev & SEO",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
      description: "A high-conversion e-commerce ecosystem integrated with performance-driven SEO architectures.",
      link: "https://gadjenix.in/"
    },
    {
      title: "Jamalullail Education",
      category: "Web Development & SEO",
      image: "https://i.ibb.co/PGv3ct4K/Screenshot-2026-05-12-180124.png",
      description: "Premium educational portal delivering a seamless learning experience, optimized for organic visibility.",
      link: "https://jamalullail.vercel.app/"
    },
    {
      title: "Minco Kids",
      category: "Global Brand SMM",
      image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&q=80&w=800",
      description: "International kids' product market penetration via data-backed social media growth systems.",
      link: "https://www.mincokids.com/"
    },
    {
      title: "Elite Estates Dubai",
      category: "SEO for Real Estate in Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
      description: "Luxury Property Marketing UAE & Real Estate Lead Generation Dubai for high-net-worth clients."
    },
    {
      title: "Nordic Health AI",
      category: "Healthcare SEO Specialist Norway",
      image: "https://i.ibb.co/39R9mWpC/Screenshot-2026-05-12-175857.png",
      description: "AI-Powered Marketing for Clinics in Norway & Patient Acquisition Systems Norway."
    }
  ];

  return (
    <section id="portfolio" className="py-32 relative">
      {/* Decorative vertical line */}
      <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
            <span className="text-sm uppercase tracking-[0.4em] text-gold mb-6 block">Global Success Stories</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8">Selected <span className="text-gold">Works</span></h2>
            <p className="max-w-xl mx-auto text-white/40 font-light text-sm italic">
                A showcase of international collaborations delivering results in Dubai, Norway, and India.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden bg-black-deep aspect-[4/5] border border-white/5 ${index === 1 ? 'lg:translate-y-12' : index === 4 ? 'lg:-translate-y-12' : ''}`}
            >
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.category} - Freelance Marketer Kerala Portfolio`} 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-40"
                loading="lazy"
                decoding="async"
                width="800"
                height="1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-black-deep/20 to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="mb-auto transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-[9px] uppercase tracking-[0.4em] font-bold block mb-4">{project.category}</span>
                    <h3 className="text-3xl font-serif font-bold text-white/90 leading-tight">{project.title}</h3>
                  </div>

                  <div className="flex justify-between items-end pt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-white/40 text-[10px] leading-relaxed font-light max-w-[180px]">{project.description}</p>
                      {project.link && (
                        <motion.a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="h-12 w-12 glass-card rounded-full flex items-center justify-center text-gold hover:text-white transition-colors border border-gold/20"
                        >
                            <ExternalLink size={18} />
                        </motion.a>
                      )}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
            <Link to="/contact">
                <button className="text-xs uppercase tracking-[0.4em] font-bold text-white/40 hover:text-gold transition-colors py-4 border-b border-white/10 hover:border-gold">
                    Explore More Case Studies
                </button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
