
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedText from '@/components/AnimatedText';
import FaqItem from '@/components/FaqItem';
import { motion } from 'framer-motion';
import { 
  CheckCircle,
  BarChart,
  Search,
  MousePointer,
  LineChart,
  Share2,
  Send,
  ChevronRight
} from 'lucide-react';

const SeoMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Boost Your Online Presence with <AnimatedText text="SEO & Marketing" animation="typing" className="inline-block" />
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Drive organic traffic and increase conversions with our comprehensive SEO and digital marketing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton 
                  customMessage="Hello, I'm interested in your SEO and Marketing services. I would like to improve my online presence."
                  className="text-lg py-6 px-8"
                >
                  Boost Your Traffic Now
                </WhatsAppButton>
              </div>
            </motion.div>
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                alt="SEO and Marketing" 
                className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-2xl" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO & Marketing Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our SEO & Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to help your business grow online.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-purple-600" />,
                title: "Search Engine Optimization",
                description: "Improve your website's visibility in search engines to drive organic traffic."
              },
              {
                icon: <MousePointer className="h-10 w-10 text-purple-600" />,
                title: "Pay-Per-Click Advertising",
                description: "Create targeted ad campaigns to reach potential customers across search engines and social media."
              },
              {
                icon: <Share2 className="h-10 w-10 text-purple-600" />,
                title: "Social Media Marketing",
                description: "Build your brand presence and engage with your audience on social media platforms."
              },
              {
                icon: <LineChart className="h-10 w-10 text-purple-600" />,
                title: "Content Marketing",
                description: "Create valuable content that attracts and engages your target audience."
              },
              {
                icon: <BarChart className="h-10 w-10 text-purple-600" />,
                title: "Analytics & Reporting",
                description: "Gain insights into your marketing performance with detailed analytics and reports."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-purple-600" />,
                title: "Conversion Rate Optimization",
                description: "Optimize your website to convert more visitors into customers."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our SEO and marketing services.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FaqItem 
              question="How long does it take to see results from SEO?"
              answer="SEO is a long-term strategy that typically takes 3-6 months to show significant results. However, this can vary based on your industry, competition, and the current state of your website."
            />
            
            <FaqItem 
              question="What's the difference between SEO and PPC?"
              answer="SEO (Search Engine Optimization) focuses on improving your organic (non-paid) visibility in search engines, while PPC (Pay-Per-Click) involves paid advertising where you pay for each click on your ads. Both strategies are valuable and often work best when used together."
            />
            
            <FaqItem 
              question="How do you measure the success of marketing campaigns?"
              answer="We track various metrics including website traffic, conversion rates, engagement, and ROI. We provide regular reports with insights into your campaign performance and recommendations for improvement."
            />
            
            <FaqItem 
              question="Do you offer social media management services?"
              answer="Yes, we offer comprehensive social media management services, including content creation, posting, community engagement, and paid social media advertising."
            />
          </div>
          
          <div className="text-center mt-12">
            <WhatsAppButton customMessage="Hello, I have a question about your SEO and marketing services that wasn't answered in the FAQ section.">
              Still Have Questions?
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Grow Your Online Presence?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us today to get started with a customized digital marketing strategy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <WhatsAppButton 
              className="bg-white text-purple-700 hover:bg-gray-100"
              customMessage="Hello, I'm interested in growing my online presence with your SEO and marketing services. Can we schedule a consultation?"
            >
              Get Started Now
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeoMarketing;
