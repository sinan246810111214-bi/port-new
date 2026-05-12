import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Thorne",
      country: "🇺🇸 USA",
      company: "Vogue Essentials",
      text: "Sinan transformed our SEO strategy. We saw a 300% increase in high-intent US traffic within 4 months. He is a DTC wizard.",
      result: "300% Traffic Growth"
    },
    {
      name: "Ahmed Al-Maktoum",
      country: "🇦🇪 UAE",
      company: "Luxavya Perfumes",
      text: "The lead generation systems Sinan built for our Dubai operations are flawless. The ROAS skyrocketed to 4.7X.",
      result: "4.7X ROAS Achieved"
    },
    {
      name: "Ingrid Solberg",
      country: "🇳🇴 Norway",
      company: "Nordic Health",
      text: "Our specialist clinic in Oslo now has a consistent stream of patients thanks to MSVK's AI-powered acquisition engine.",
      result: "50% Lower Lead Cost"
    }
  ];

  return (
    <section className="py-32 bg-black-rich relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <Quote size={400} className="text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 font-bold">Client Testimonials</h2>
          <h3 className="text-5xl font-serif font-bold">Global <span className="text-gold">Proof</span>.</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card premium-border p-12 flex flex-col relative"
            >
              <div className="flex gap-1 mb-6 text-gold">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-white/70 italic mb-8 leading-relaxed font-light">"{t.text}"</p>
              
              <div className="mt-auto">
                <div className="text-gold font-bold text-lg mb-1">{t.result}</div>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-serif font-bold text-white">{t.name}</h5>
                    <p className="text-[10px] text-white/30 uppercase tracking-widest">{t.company}</p>
                  </div>
                  <span className="text-lg">{t.country}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
