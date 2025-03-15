
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
import { motion, useAnimate, useInView } from 'framer-motion';
import BookConsultation from '@/components/BookConsultation';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  BarChart, 
  Headphones,
  CheckCircle,
  ChevronRight,
  ArrowRight,
  Send
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
  const [count, setCount] = useState(7);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  
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
      
      {/* Hero Section - Cinema & Manufacturing Inspired */}
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
                <h2 className="inline-flex items-center text-5xl font-extrabold">
                  <span className="text-purple-600">Create</span>
                  <span className="text-gold-500">Software</span>
                  <span className="text-gold-500">.in</span>
                </h2>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-lg mb-6">
                  Creating Tomorrow's Technology Today
                </span>
              </motion.div>
              
              <motion.div
                initial="hidden"
                animate="visible"
                variants={textAnimationVariants}
                className="overflow-hidden mb-8"
              >
                <h1 className="text-8xl md:text-9xl lg:text-10xl font-extrabold tracking-tight leading-tight">
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    {Array.from("Create").map((letter, index) => (
                      <motion.span
                        key={`c-${index}`}
                        variants={letterAnimationVariants}
                        className="text-gold-500"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    {Array.from("Software").map((letter, index) => (
                      <motion.span
                        key={`s-${index}`}
                        variants={letterAnimationVariants}
                        className="text-gold-500"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center lg:justify-start">
                    {Array.from("Solutions").map((letter, index) => (
                      <motion.span
                        key={`sol-${index}`}
                        variants={letterAnimationVariants}
                        className="text-purple-600"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </div>
                </h1>
              </motion.div>

              <motion.p 
                variants={itemVariants}
                className="text-3xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-extrabold"
              >
                Unlock your business potential with our comprehensive suite of technology solutions crafted for innovation and growth.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="text-lg py-7 px-10 bg-purple-600 hover:bg-purple-700 font-extrabold">
                  <Link to="/services" className="flex items-center">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                <BookConsultation buttonText="Book Consultation" className="text-lg py-7 px-10 font-extrabold" />
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="mt-10 flex items-center justify-center lg:justify-start gap-x-6"
                ref={scope}
              >
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-purple-200">
                    <img 
                      src="https://randomuser.me/api/portraits/men/22.jpg" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="text-xl font-extrabold">
                  <motion.span 
                    className="font-extrabold text-2xl"
                    key={count}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {count}+ Startup & Business IT Partner
                  </motion.span>
                  <span className="block text-gray-500 font-bold">Trust our expertise</span>
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
            <span className="text-base font-extrabold mb-2">Scroll to explore</span>
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
            <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-bold text-base mb-6">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Services We Offer</h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-bold">
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
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-2xl mb-8 max-w-3xl mx-auto font-bold"
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
            className="flex gap-4 justify-center"
          >
            <WhatsAppButton className="bg-white text-purple-700 hover:bg-gray-100 font-extrabold text-lg py-3 px-6">
              Chat on WhatsApp
            </WhatsAppButton>
            <BookConsultation buttonText="Book Consultation" className="bg-purple-600 border-2 border-white hover:bg-purple-700 font-extrabold text-lg py-3 px-6" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
