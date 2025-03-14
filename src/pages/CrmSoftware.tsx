
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedText from '@/components/AnimatedText';
import FaqItem from '@/components/FaqItem';
import { motion } from 'framer-motion';
import { 
  CheckCircle, 
  Database, 
  Users, 
  BarChart, 
  Settings, 
  ShieldCheck,
  Send,
  ChevronRight
} from 'lucide-react';

const CrmSoftware = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    const message = "Hello, I'm interested in your Custom CRM Software services. I would like to discuss my business requirements.";
    const phoneNumber = "9354149726";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 20 }).map((_, index) => (
              <div 
                key={index}
                className="absolute rounded-full bg-purple-500"
                style={{ 
                  width: `${Math.random() * 300}px`, 
                  height: `${Math.random() * 300}px`, 
                  top: `${Math.random() * 100}%`, 
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5,
                  animation: `float ${5 + Math.random() * 10}s infinite ease-in-out ${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Custom <AnimatedText text="CRM Software" animation="typing" className="inline-block" /> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Enhance your business operations with tailor-made CRM solutions that fit your unique processes and scale with your growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton 
                  customMessage="Hello, I'm interested in your Custom CRM Software services. I would like to discuss my business requirements."
                  className="text-lg py-6 px-8"
                >
                  Get Started Now
                </WhatsAppButton>
                <motion.button 
                  className="text-gray-700 font-medium flex items-center justify-center"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ChevronRight className="ml-1 h-5 w-5" />
                </motion.button>
              </div>
              <div className="mt-8 inline-flex items-center justify-center lg:justify-start gap-x-6 text-sm font-medium">
                <motion.div 
                  className="flex items-center gap-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>20+ CRM Systems Developed</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-x-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>100% Client Satisfaction</span>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692" 
                alt="CRM Software Development" 
                className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-2xl" 
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="CRM Dashboard" 
                  className="w-32 h-24 object-cover rounded" 
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CRM Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features of Our CRM Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build custom CRM systems with features tailored to your business needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-purple-600" />,
                title: "Contact Management",
                description: "Centralize customer data and interaction history for a comprehensive view of your clients."
              },
              {
                icon: <BarChart className="h-10 w-10 text-purple-600" />,
                title: "Sales Pipeline Management",
                description: "Track leads through your sales process with visual pipelines and automated workflows."
              },
              {
                icon: <Database className="h-10 w-10 text-purple-600" />,
                title: "Reporting & Analytics",
                description: "Gain insights into your business with customizable reports and real-time dashboards."
              },
              {
                icon: <Settings className="h-10 w-10 text-purple-600" />,
                title: "Process Automation",
                description: "Automate repetitive tasks and workflows to improve efficiency and productivity."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-purple-600" />,
                title: "Data Security",
                description: "Protect your business data with advanced security features and role-based access control."
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-purple-600" />,
                title: "Third-Party Integration",
                description: "Seamlessly connect with your existing tools and software for a unified business ecosystem."
              }
            ].map((feature, index) => (
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
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits of Custom CRM Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how a tailor-made CRM system can transform your business operations.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978" 
                alt="Business Team Using CRM" 
                className="w-full h-auto rounded-xl shadow-xl" 
              />
            </motion.div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Improved Customer Relationships",
                  description: "Better understand and serve your customers by centralizing all interactions and data."
                },
                {
                  title: "Increased Productivity",
                  description: "Streamline workflows and automate routine tasks to free up time for high-value activities."
                },
                {
                  title: "Enhanced Collaboration",
                  description: "Enable teams to share information and work together seamlessly across departments."
                },
                {
                  title: "Data-Driven Decision Making",
                  description: "Gain valuable insights from comprehensive reports and analytics to make informed business decisions."
                },
                {
                  title: "Scalable Growth",
                  description: "Your CRM grows with your business, adapting to changing needs and increasing demands."
                }
              ].map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CRM Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our custom CRM solutions have helped businesses achieve their goals.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: "Real Estate Agency",
                title: "Streamlined Property Management",
                description: "Developed a custom CRM that increased sales by 45% by automating lead nurturing and property matching.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              },
              {
                client: "Healthcare Provider",
                title: "Patient Relationship Management",
                description: "Created a HIPAA-compliant CRM system that improved patient satisfaction by 60% through better appointment scheduling and follow-ups.",
                image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
              },
              {
                client: "E-commerce Retailer",
                title: "Customer Retention System",
                description: "Implemented a CRM solution that boosted customer retention by 35% through personalized marketing and improved support.",
                image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df"
              }
            ].map((study, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="h-48 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
                <div className="p-6">
                  <span className="text-sm text-purple-600 font-medium">{study.client}</span>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-600">{study.description}</p>
                </div>
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
              Find answers to common questions about our custom CRM solutions.
            </p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <FaqItem 
              question="How long does it take to develop a custom CRM?"
              answer="The timeline for CRM development varies based on complexity and specific requirements. A basic system might take 2-3 months, while a complex, enterprise-level CRM could take 4-6 months or more. We provide a detailed timeline during the consultation phase."
            />
            
            <FaqItem 
              question="Can I integrate my existing software with the CRM?"
              answer="Yes, our custom CRM solutions are designed to integrate with your existing software and tools. We can connect with most third-party applications through APIs or custom integrations."
            />
            
            <FaqItem 
              question="How much does a custom CRM cost?"
              answer="The cost varies depending on your specific requirements, the complexity of the system, and the number of users. We provide detailed quotes after understanding your business needs during the initial consultation."
            />
            
            <FaqItem 
              question="Do you provide training for our team?"
              answer="Yes, we offer comprehensive training to ensure your team can effectively use the CRM system. We also provide detailed documentation and ongoing support to address any questions or issues."
            />
            
            <FaqItem 
              question="Can the CRM be accessed on mobile devices?"
              answer="Yes, our CRM solutions are designed to be responsive and work on desktops, tablets, and mobile phones. We can also develop native mobile apps if required."
            />
          </div>
          
          <div className="text-center mt-12">
            <WhatsAppButton customMessage="Hello, I have a question about your custom CRM solutions that wasn't answered in the FAQ section.">
              Still Have Questions?
            </WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">Get Your Custom CRM Solution</h2>
              <p className="text-gray-600 mb-8 text-center">
                Tell us about your business needs and let's discuss how a custom CRM can help you grow.
              </p>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                handleContactClick();
              }}>
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your phone number"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Business Requirements</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us about your business and CRM requirements"
                    required
                  ></textarea>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    type="submit" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md flex items-center justify-center w-full transition-all duration-300"
                  >
                    Submit <Send className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
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
            Ready to Transform Your Business Operations?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us today to get started on your custom CRM solution.
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
              customMessage="Hello, I'm ready to discuss a custom CRM solution for my business. Can we schedule a consultation?"
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

export default CrmSoftware;
