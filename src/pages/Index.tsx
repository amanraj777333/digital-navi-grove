import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedText from '@/components/AnimatedText';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import PortfolioCard from '@/components/PortfolioCard';
import FaqItem from '@/components/FaqItem';
import { toast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  BarChart, 
  Headphones,
  CheckCircle,
  ChevronRight,
  Send,
  ArrowRight,
  Play
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Toast notification for form submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Redirecting you to WhatsApp for immediate consultation.",
      variant: "default",
    });
    
    // Redirect to WhatsApp
    const phoneNumber = "9354149726";
    const message = "Hello, I'm interested in your services. I've submitted the form on your website. Can you help me?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  const slideInFromRightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar />
      
      {/* Hero Section - Cinema-inspired */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-16 lg:py-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white opacity-50"></div>
          <motion.div 
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1500&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(10px)'
            }}
          />
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="text-center lg:text-left">
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">
                  Creating Tomorrow's Technology Today
                </span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants} 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
              >
                Create <br />
                <span className="text-purple-600">Software</span> <br />
                <span className="text-purple-600">Solutions</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
              >
                Unlock your business potential with our comprehensive suite of technology solutions crafted for innovation and growth.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="text-lg py-6 px-8 bg-purple-600 hover:bg-purple-700">
                  <Link to="/services" className="flex items-center">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <Button variant="outline" size="lg" className="text-lg py-6 px-8 border-purple-600 text-purple-600 hover:bg-purple-50">
                  <WhatsAppButton>
                    Contact Us
                  </WhatsAppButton>
                </Button>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-purple-${i*100}`}>
                      <img 
                        src={`https://randomuser.me/api/portraits/men/${i+20}.jpg`} 
                        alt={`Client ${i}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">35+ Clients</span>
                  <span className="block text-gray-500">Trust our expertise</span>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={slideInFromRightVariants}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1500&q=80" 
                  alt="Technology Solutions" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">Innovative Solutions</h3>
                    <p className="text-white/80">Transforming ideas into digital reality</p>
                  </div>
                </div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Development" 
                  className="w-32 h-24 object-cover rounded" 
                />
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold">3+ Years</h4>
                    <p className="text-sm text-gray-600">Excellence</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <a 
            href="#services" 
            className="flex flex-col items-center text-gray-600 hover:text-purple-600 transition-colors duration-300"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <motion.div 
              className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="h-4 w-4 rotate-90" />
            </motion.div>
          </a>
        </motion.div>
      </section>

      {/* Services Section - Keep the existing structure but enhance with animations */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Services We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technology solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<Globe size={24} />}
                title="Web Development"
                description="From consultation to launch, our expert team delivers high-performance, scalable web solutions tailored to your business needs."
                link="/services/web-development"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<Smartphone size={24} />}
                title="App Development"
                description="We design and develop user-friendly, feature-rich mobile and web apps that drive engagement and growth."
                link="/services/app-development"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<Database size={24} />}
                title="Custom CRM Software"
                description="Enhance your business operations with custom CRM solutions that fit your unique processes and scale with your growth."
                link="/services/crm-software"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<Shield size={24} />}
                title="Cyber Security"
                description="Protect your data and ensure compliance with our robust cybersecurity solutions."
                link="/services/cyber-security"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<BarChart size={24} />}
                title="SEO and Marketing"
                description="Boost your online presence and drive organic traffic with our comprehensive SEO and digital marketing services."
                link="/services/seo-marketing"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<Headphones size={24} />}
                title="MSME Tech Support"
                description="We provide dedicated tech support solutions tailored to the unique needs of MSMEs."
                link="/services/msme-tech-support"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Create Software Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our unique approach and commitment to excellence.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Features */}
            {[
              {
                icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
                title: "Expertise",
                description: "3+ years of industry experience serving over 35 startups."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
                title: "Custom Solutions",
                description: "Tailored solutions to fit your specific business needs."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
                title: "Client Success",
                description: "Proven track record of delivering results and building long-term partnerships."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
                title: "Innovative Technology",
                description: "Stay ahead with the latest technology and trends."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
                title: "Dedicated Support",
                description: "Personalized support from our expert team."
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
                title: "Transparent Pricing",
                description: "Clear, upfront pricing with no hidden costs."
              }
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <motion.div 
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">
              Client Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients who have experienced the difference.
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <TestimonialCard 
                quote="Working with Create Software Solutions transformed our business. The custom CRM they built has streamlined our operations and boosted productivity."
                name="Rajiv Sharma"
                company="TechStart India"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <TestimonialCard 
                quote="Their web development team created a stunning website that perfectly represents our brand and has significantly improved our online presence."
                name="Ananya Patel"
                company="Innovate Solutions"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <TestimonialCard 
                quote="The SEO and digital marketing strategies implemented by their team have resulted in a 200% increase in organic traffic to our website."
                name="Vikram Singh"
                company="Growth Partners"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <WhatsAppButton className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 px-8 rounded-md inline-flex items-center">
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
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-medium text-sm mb-6">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="app">App Development</TabsTrigger>
                <TabsTrigger value="crm">CRM Software</TabsTrigger>
              </TabsList>
            </motion.div>
            
            <TabsContent value="all">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <PortfolioCard 
                    title="E-commerce Platform"
                    description="A modern e-commerce platform with integrated payment gateway and inventory management."
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    link="/portfolio/ecommerce-platform"
                    tags={["Web Development", "E-commerce"]}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <PortfolioCard 
                    title="Health & Fitness App"
                    description="A comprehensive mobile app for tracking fitness goals and nutrition."
                    image="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    link="/portfolio/fitness-app"
                    tags={["App Development", "Mobile"]}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <PortfolioCard 
                    title="Real Estate CRM"
                    description="Custom CRM software tailored for a leading real estate company."
                    image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                    link="/portfolio/real-estate-crm"
                    tags={["CRM Software", "Real Estate"]}
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
                  link="/portfolio/ecommerce-platform"
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
                  link="/portfolio/fitness-app"
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
                  link="/portfolio/real-estate-crm"
                  tags={["CRM Software", "Real Estate"]}
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
            <Link to="/portfolio" className="text-purple-600 font-medium flex items-center justify-center hover:text-purple-700">
              View More Projects <ChevronRight className="h-4 w-4 ml-1" />
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
              <h2 className="text-3xl font-bold mb-4 text-center">Get a Free Consultation</h2>
              <p className="text-gray-600 mb-8 text-center">
                Tell us about your project and let's discuss how we can help.
              </p>
              
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
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
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md flex items-center justify-center w-full"
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
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Contact us today to get started on your journey to digital success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <WhatsAppButton className="bg-white text-purple-700 hover:bg-gray-100">
              Get Started Now
            </WhatsAppButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
