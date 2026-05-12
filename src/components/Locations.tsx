import { motion } from 'motion/react';

const Locations = () => {
  const locations = [
    { city: "Palakkad", keywords: ["Digital Marketing Services Palakkad", "SEO Expert Palakkad", "Freelance Digital Marketer Palakkad", "Google Ads Expert Palakkad", "Social Media Marketing Palakkad", "Best Digital Marketer in Palakkad"] },
    { city: "Kochi", keywords: ["Digital Marketing Services Kochi", "SEO Services Kochi", "Meta Ads Expert Kochi", "Best Digital Marketer in Kochi"] },
    { city: "Calicut", keywords: ["Digital Marketing Services Calicut", "SEO Consultant Calicut", "Social Media Marketing Calicut", "Freelance Marketer Calicut"] },
    { city: "International", keywords: ["Real Estate Marketing Agency Dubai", "Healthcare Marketing Agency Norway", "Ecommerce Marketing Expert USA", "Shopify Marketing Expert USA"] }
  ];

  return (
    <section className="py-20 bg-black-rich border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 font-bold block">Serving Locations</span>
          <h2 className="text-3xl font-serif font-bold">Dominating <span className="text-gold">Kerala's</span> Digital Landscape.</h2>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {locations.map((loc, i) => (
            <div key={i} className="glass-card p-6 border border-white/5">
              <h3 className="text-gold font-serif font-bold text-xl mb-4">{loc.city}</h3>
              <ul className="space-y-2">
                {loc.keywords.map((kw, j) => (
                  <li key={j} className="text-white/30 text-[10px] uppercase tracking-widest">{kw}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
