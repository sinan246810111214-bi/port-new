import { motion } from 'motion/react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is SEO and how does it help businesses?",
      answer: "SEO (Search Engine Optimization) is the process of improving your website's visibility on search engines like Google. For businesses, this means more organic traffic, higher trust, and better conversions without paying for every click. As an SEO expert in Kerala, I focus on ranking for high-intent 'money keywords'."
    },
    {
      question: "How much does SEO cost in Kerala?",
      answer: "The cost of SEO services Kerala varies based on competition and scope. Typically, freelance digital marketer Kerala rates are more affordable than big agencies, starting with performance-based packages that ensure a high ROI for your marketing budget."
    },
    {
      question: "How to choose the best digital marketer in Palakkad?",
      answer: "To find the best digital marketer in Palakkad, look for a proven track record, case studies, and someone who understands local and global search trends. Sinan VK is recognized for delivering result-oriented digital marketing services Kerala with a focus on data."
    },
    {
      question: "What results can I expect from digital marketing services Kerala?",
      answer: "By utilizing professional digital marketing services Kerala, you can expect increased website authority, higher search rankings, more qualified leads, and a significant boost in revenue. I provide monthly reports to track growth and ROAS."
    },
    {
      question: "How long does it take for SEO services in Kerala to show results?",
      answer: "SEO is a long-term game. While some 'low-hanging fruit' keywords can rank in weeks, significant authority building usually takes 3 to 6 months. My result-oriented SEO services Kerala ensure that the growth is sustainable and builds lasting value."
    },
    {
      question: "Why do small businesses need SEO in Kerala?",
      answer: "Small businesses need seo in kerala to compete with larger brands. As a freelance digital marketer kerala, I help local shops rank for 'best' and 'services' keywords to drive high-intent traffic and local leads."
    },
    {
      question: "How to get high quality real estate leads in dubai?",
      answer: "To get high quality real estate leads in dubai, you need a combination of real estate seo services dubai and property lead generation dubai systems. We focus on luxury real estate marketing dubai for premium conversions."
    },
    {
      question: "What is your ecommerce growth strategy for US brands?",
      answer: "My ecommerce growth strategies usa focus on scaling brands to 1 million revenue. As a shopify marketing expert usa, I implement facebook ads for ecommerce usa and result-oriented dtc brand marketing usa funnels."
    },
    {
      question: "How to get clients using digital marketing in kerala?",
      answer: "Getting clients using digital marketing in kerala requires a mix of google ads expert kerala precision and social media marketing kerala engagement. I build authority through personal branding as muhammed sinan vk."
    }
  ];

  return (
    <section className="py-24 bg-black-deep border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-4 font-bold block">Fast Rank FAQ</span>
          <h2 className="text-4xl font-serif font-bold">Strategy <span className="text-gold">Insights</span>.</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className="glass-card premium-border overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="font-medium text-lg text-white/80 pr-8">{faq.question}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-gold transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-white/50 leading-relaxed text-sm border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
