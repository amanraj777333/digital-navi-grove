import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedText from '@/components/AnimatedText';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import PortfolioCard from '@/components/PortfolioCard';
import { Link } from 'react-router-dom';
import { motion, useAnimate, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Code2,
  Brain,
  Rocket,
  LineChart,
  GraduationCap,
  Bot,
  ChevronRight,
  Send,
  ArrowRight
} from 'lucide-react';
import BookConsultation from '@/components/BookConsultation';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  BarChart, 
  Headphones,
  CheckCircle,
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger,
  toast
} from '@/components/ui';

const Index = () => {
  const [count, setCount] = useState(7);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isInView && count < 35) {
      const interval = setInterval(() => {
        setCount(prev => {
          if (prev >= 35) {
            clearInterval(interval);
            return 35;
          }
          return prev + 1;
        });
      }, 100);
      
      return () => clearInterval(interval);
    }
  }, [isInView, count]);

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

  const slideUpVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const logoVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      } 
    }
  };

  const textAnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const letterAnimationVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.5 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden py-16 lg:py-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white opacity-70"></div>
          <motion.div 
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2 }}
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1500&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(3px)'
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
              <motion.div variants={logoVariants} className="mb-8">
                <h2 className="inline-flex items-center text-4xl font-bold">
                  <span className="text-purple-600">Create</span>
                  <span className="text-purple-700">Software</span>
                  <span className="text-purple-800">.in</span>
                </h2>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-lg mb-6">
                  AI-Driven • Business-Focused • Future-Ready
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6"
                variants={itemVariants}
              >
                Transforming ideas into AI-powered, scalable realities
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 mb-8 font-medium"
              >
                Custom Software • AI/ML Tools • Mobile Apps • Startup MVPs • Deep-Tech Innovation
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <BookConsultation buttonText="Schedule a Free Consultation" className="text-lg py-6 px-8 font-semibold" />
                <Link to="/portfolio">
                  <Button size="lg" variant="outline" className="text-lg py-6 px-8 font-semibold">
                    See Our Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-purple-600 mb-2">50+</h3>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-purple-600 mb-2">100%</h3>
                  <p className="text-gray-600">Client Satisfaction</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-purple-600 mb-2">24/7</h3>
                  <p className="text-gray-600">Support</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              variants={slideUpVariants}
              className="relative hidden lg:block"
            >
              <motion.div 
                className="absolute -z-10 top-0 right-0 w-96 h-96 rounded-full bg-purple-300 blur-3xl opacity-20"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              <div className="relative w-full max-w-lg mx-auto">
                <motion.div
                  className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
                  animate={{
                    x: [0, 30, 0],
                    y: [0, 50, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
                  animate={{
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <motion.div
                  className="absolute bottom-0 right-24 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"
                  animate={{
                    x: [0, -20, 0],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                
                <motion.div
                  className="relative p-8 bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut"
                  }}
                >
                  <motion.div
                    className="flex justify-center mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                      alt="Technology"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
                  <p className="text-gray-700 mb-4">Transforming businesses with cutting-edge technology tailored to your specific needs.</p>
                  <motion.button
                    className="w-full py-2 bg-purple-600 text-white rounded-lg font-medium"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Learn More
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold text-base mb-6">
              Our Services
            </span>
            <h2 className="text-4xl font-bold mb-4">Unified Digital Powerhouse</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized service divisions combining AI, automation, and software expertise to help startups, SMEs, and legacy businesses scale intelligently.
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
                icon={<Code2 size={24} />}
                title="Custom Development"
                description="From custom software to business workflow automation, we build scalable solutions tailored to your needs."
                link="/services/custom-development"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<Brain size={24} />}
                title="AI/ML Prototyping"
                description="Leverage cutting-edge AI technology with custom models, NLP, Vision AI, and prediction engines."
                link="/services/ai-ml"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<Rocket size={24} />}
                title="Startup Services"
                description="From MVPs to investor-ready products, we help startups launch and scale quickly and efficiently."
                link="/services/startup-services"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<LineChart size={24} />}
                title="Marketing Solutions"
                description="Comprehensive digital marketing services to boost your online presence and drive growth."
                link="/services/marketing"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<GraduationCap size={24} />}
                title="Industry Solutions"
                description="Specialized solutions for Jewelry, Healthcare, Warehousing, and more sectors."
                link="/services/industry-solutions"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ServiceCard 
                icon={<Bot size={24} />}
                title="Deep-Tech & AI Lab"
                description="Advanced AI solutions, LLM applications, and smart automation for your business."
                link="/services/deep-tech"
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
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-base mb-6">
              Our Advantage
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Why Choose Create Software Solutions?</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-bold">
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
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-extrabold mb-3">{feature.title}</h3>
                <p className="text-lg text-gray-600 font-bold">{feature.description}</p>
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

            <motion.div variants={itemVariants}>
              <TestimonialCard 
                quote="Their app development team delivered an amazing product that exceeded our expectations. The user experience is flawless and our customers love it!"
                name="Priya Kapoor"
                company="NextGen Apps"
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
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <PortfolioCard 
                    title="E-commerce Platform"
                    description="A modern e-commerce platform with integrated payment gateway and inventory management."
                    image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    link="/portfolio"
                    tags={["Web Development", "E-commerce"]}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <PortfolioCard 
                    title="Health & Fitness App"
                    description="A comprehensive mobile app for tracking fitness goals and nutrition."
                    image="https://images.unsplash.com/photo-1518770660439-4636190af475"
                    link="/portfolio"
                    tags={["App Development", "Mobile"]}
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <PortfolioCard 
                    title="Real Estate CRM"
                    description="Custom CRM software tailored for a leading real estate company."
                    image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                    link="/portfolio"
                    tags={["CRM Software", "Real Estate"]}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
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
        <div className="container mx-auto px-4 md:px-6 text-
