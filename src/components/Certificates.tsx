import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certifications = [
    {
      title: "Google Ads Measurement Certification",
      issuer: "Google Digital Academy",
      id: "G-METRIC-2026",
      icon: <Award className="text-gold" size={32} />
    },
    {
      title: "Meta Certified Digital Marketing Associate",
      issuer: "Meta Blueprint",
      id: "M-BLUE-9921",
      icon: <ShieldCheck className="text-gold" size={32} />
    },
    {
      title: "HubSpot SEO Optimization Expert",
      issuer: "HubSpot Academy",
      id: "H-SEO-7762",
      icon: <CheckCircle className="text-gold" size={32} />
    }
  ];

  return (
    <section className="py-24 bg-black-deep">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 font-bold">Verified Expertise</h2>
          <h3 className="text-4xl font-serif font-bold">Official <span className="text-gold">Certifications</span>.</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card premium-border p-10 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-4 bg-gold/5 rounded-full group-hover:bg-gold/10 transition-colors">
                {cert.icon}
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">{cert.title}</h4>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-4">{cert.issuer}</p>
              <div className="mt-auto pt-6 border-t border-white/5 w-full">
                <span className="text-[10px] text-gold/30 font-mono">Verified ID: {cert.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
