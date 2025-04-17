import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import TestimonialCard from '@/components/TestimonialCard';
import PortfolioCard from '@/components/PortfolioCard';
import { motion } from 'framer-motion';
import { ChevronRight, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger, toast } from '@/components/ui';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Redirecting you to WhatsApp for immediate consultation.",
      variant: "default",
    });
    
    const phoneNumber = "9354149726";
    const message = "Hello, I'm interested in your services. I've submitted the form on your website. Can you help me?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar />
      <Hero />
      <ServicesSection />
      <WhyChooseUs />
      
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-base mb-6">
              Client Stories
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">What Our Clients Say</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-bold">
              Hear from our satisfied clients who have experienced the difference.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
            }}>
              <TestimonialCard 
                quote="Working with Create Software Solutions transformed our business. The custom CRM they built has streamlined our operations and boosted productivity."
                name="Rajiv Sharma"
                company="TechStart India"
              />
            </motion.div>
            
            <motion.div variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
            }}>
              <TestimonialCard 
                quote="Their web development team created a stunning website that perfectly represents our brand and has significantly improved our online presence."
                name="Ananya Patel"
                company="Innovate Solutions"
              />
            </motion.div>
            
            <motion.div variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
            }}>
              <TestimonialCard 
                quote="The SEO and digital marketing strategies implemented by their team have resulted in a 200% increase in organic traffic to our website."
                name="Vikram Singh"
                company="Growth Partners"
              />
            </motion.div>

            <motion.div variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
            }}>
              <TestimonialCard 
                quote="Their app development team delivered an amazing product that exceeded our expectations. The user experience is flawless and our customers love it!"
                name="Priya Kapoor"
                company="NextGen Apps"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <WhatsAppButton className="bg-purple-600 hover:bg-purple-700 text-white font-extrabold py-4 px-8 rounded-md inline-flex items-center">
              Get Your Free Consultation
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-base mb-6">
              Our Work
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Our Portfolio</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-bold">
              Take a look at some of our recent projects that showcase our expertise.
            </p>
          </motion.div>
          
          <Tabs defaultValue="all" className="w-full">
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TabsList>
                <TabsTrigger value="all" className="text-base font-bold">All Projects</TabsTrigger>
                <TabsTrigger value="web" className="text-base font-bold">Web Development</TabsTrigger>
                <TabsTrigger value="app" className="text-base font-bold">App Development</TabsTrigger>
                <TabsTrigger value="crm" className="text-base font-bold">CRM Software</TabsTrigger>
              </TabsList>
            </motion.div>
            
            <TabsContent value="all">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                <motion.div variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                  }
                }}>
                  <PortfolioCard 
                    title="E-commerce Platform"
                    description="A modern e-commerce platform with integrated payment gateway and inventory management."
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    link="/portfolio"
                    tags={["Web Development", "E-commerce"]}
                  />
                </motion.div>
                
                <motion.div variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                  }
                }}>
                  <PortfolioCard 
                    title="Health & Fitness App"
                    description="A comprehensive mobile app for tracking fitness goals and nutrition."
                    image="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    link="/portfolio"
                    tags={["App Development", "Mobile"]}
                  />
                </motion.div>
                
                <motion.div variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                  }
                }}>
                  <PortfolioCard 
                    title="Real Estate CRM"
                    description="Custom CRM software tailored for a leading real estate company."
                    image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                    link="/portfolio"
                    tags={["CRM Software", "Real Estate"]}
                  />
                </motion.div>

                <motion.div variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                  }
                }}>
                  <PortfolioCard 
                    title="Jewellery Billing Software"
                    description="Custom billing and inventory management software for a jewellery business with advanced reporting features."
                    image="https://images.unsplash.com/photo-1619119069152-a2b331eb392a"
                    link="/portfolio"
                    tags={["Billing Software", "Inventory Management"]}
                  />
                </motion.div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PortfolioCard 
                  title="E-commerce Platform"
                  description="A modern e-commerce platform with integrated payment gateway and inventory management."
                  image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  link="/portfolio"
                  tags={["Web Development", "E-commerce"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="app">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PortfolioCard 
                  title="Health & Fitness App"
                  description="A comprehensive mobile app for tracking fitness goals and nutrition."
                  image="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  link="/portfolio"
                  tags={["App Development", "Mobile"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="crm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PortfolioCard 
                  title="Real Estate CRM"
                  description="Custom CRM software tailored for a leading real estate company."
                  image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                  link="/portfolio"
                  tags={["CRM Software", "Real Estate"]}
                />
                <PortfolioCard 
                  title="Jewellery Billing Software"
                  description="Custom billing and inventory management software for a jewellery business with advanced reporting features."
                  image="https://images.unsplash.com/photo-1619119069152-a2b331eb392a"
                  link="/portfolio"
                  tags={["Billing Software", "Inventory Management"]}
                />
              </div>
            </TabsContent>
          </Tabs>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/portfolio" className="text-purple-600 font-extrabold text-xl flex items-center justify-center hover:text-purple-700">
              View More Projects <ChevronRight className="h-5 w-5 ml-1" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Contact Form Section */}
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
              <h2 className="text-3xl font-extrabold mb-4 text-center">Get a Free Consultation</h2>
              <p className="text-xl text-gray-600 mb-8 text-center font-bold">
                Tell us about your project and let's discuss how we can help.
              </p>
              
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-base font-extrabold text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-base font-extrabold text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-base font-extrabold text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-base font-extrabold text-gray-700 mb-1">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <motion.button 
                    type="submit" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-extrabold py-3 px-6 rounded-md flex items-center justify-center w-full text-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Submit <Send className="ml-2 h-4 w-4" />
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <WhatsAppButton className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium inline-block">
            Get Started Now
          </WhatsAppButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
