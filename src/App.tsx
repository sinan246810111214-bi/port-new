/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import { motion } from 'motion/react';

export default function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sinanvk.com/#person",
        "name": "Muhammed Sinan VK",
        "jobTitle": "International SEO Strategist & AI Digital Marketer",
        "description": "Sinan VK is the best digital marketer in Palakkad, specialized in SEO services Kerala, Ecommerce growth strategies USA, and Real Estate lead generation Dubai.",
        "url": "https://sinanvk.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Palakkad",
          "addressRegion": "Kerala",
          "addressCountry": "India"
        },
        "sameAs": [
          "https://www.instagram.com/muhammed_sinan_vk_85/",
          "https://www.linkedin.com/in/sinan-vk/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://sinanvk.com/#website",
        "url": "https://sinanvk.com",
        "name": "Sinan VK | Best Digital Marketer in Palakkad",
        "publisher": { "@id": "https://sinanvk.com/#person" }
      },
      {
        "@type": "Service",
        "name": "SEO Services Kerala",
        "provider": { "@id": "https://sinanvk.com/#person" },
        "description": "Result-oriented SEO services in Kerala to rank premium brands on top of Google.",
        "areaServed": { "@type": "Country", "name": "India" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is SEO and how does it help businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO (Search Engine Optimization) is the process of improving your website's visibility on search engines like Google. For businesses, this means more organic traffic, higher trust, and better conversions without paying for every click."
            }
          },
          {
            "@type": "Question",
            "name": "How much does SEO cost in Kerala?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of SEO services Kerala varies based on competition and scope. Typically, freelance digital marketer Kerala rates are more affordable than big agencies."
            }
          },
          {
            "@type": "Question",
            "name": "How to choose the best digital marketer in Palakkad?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To find the best digital marketer in Palakkad, look for a proven track record, case studies, and someone who understands local and global search trends."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Sinan VK Digital Marketing Services",
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Marcus Thorne" },
            "reviewRating": { "@type": "Rating", "ratingValue": "5" },
            "reviewBody": "Sinan transformed our SEO strategy. We saw a 300% increase in high-intent US traffic within 4 months."
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "100"
        }
      }
    ]
  };

  return (
    <Router>
      <div className="bg-black-deep selection:bg-gold selection:text-black-deep overflow-x-hidden relative">
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
        <div className="grain-bg" />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/digital-marketing-services-kerala" element={<Home />} />
          <Route path="/best-digital-marketer-palakkad" element={<Home />} />
          <Route path="/seo-services-kerala" element={<Home />} />
          <Route path="/portfolio" element={<Home />} />
          <Route path="/blog" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>

        <Footer />

      {/* Floating WhatsApp CTA */}
      <motion.a
        href="https://wa.me/918590181381"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[90] h-16 w-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] text-white group"
      >
        <div className="absolute -top-12 right-0 bg-white text-black-deep text-[10px] font-bold py-2 px-4 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
           Chat on WhatsApp
        </div>
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
      </div>
    </Router>
  );
}
