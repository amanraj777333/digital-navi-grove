
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioCard from '@/components/PortfolioCard';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce platform with integrated payment gateway and inventory management.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      link: "/portfolio/ecommerce-platform",
      category: "web",
      tags: ["Web Development", "E-commerce"]
    },
    {
      id: 2,
      title: "Health & Fitness App",
      description: "A comprehensive mobile app for tracking fitness goals and nutrition.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      link: "/portfolio/fitness-app",
      category: "app",
      tags: ["App Development", "Mobile"]
    },
    {
      id: 3,
      title: "Real Estate CRM",
      description: "Custom CRM software tailored for a leading real estate company.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      link: "/portfolio/real-estate-crm",
      category: "crm",
      tags: ["CRM Software", "Real Estate"]
    },
    {
      id: 4,
      title: "Corporate Website",
      description: "Modern, responsive website for a financial consulting firm.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "/portfolio/corporate-website",
      category: "web",
      tags: ["Web Development", "Corporate"]
    },
    {
      id: 5,
      title: "Food Delivery App",
      description: "Mobile application for a restaurant chain with order tracking and loyalty program.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      link: "/portfolio/food-delivery-app",
      category: "app",
      tags: ["App Development", "Mobile"]
    },
    {
      id: 6,
      title: "Healthcare Management System",
      description: "Comprehensive CRM for hospital management with patient records and scheduling.",
      image: "https://images.unsplash.com/photo-1516549655619-6cbd766babfc",
      link: "/portfolio/healthcare-crm",
      category: "crm",
      tags: ["CRM Software", "Healthcare"]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <WhatsAppButton variant="floating">I'm interested in your portfolio</WhatsAppButton>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our recent projects showcasing our expertise and innovation
          </motion.p>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full mb-12">
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>All Projects</TabsTrigger>
                <TabsTrigger value="web" onClick={() => setSelectedCategory("web")}>Web Development</TabsTrigger>
                <TabsTrigger value="app" onClick={() => setSelectedCategory("app")}>App Development</TabsTrigger>
                <TabsTrigger value="crm" onClick={() => setSelectedCategory("crm")}>CRM Software</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {projects.map((project) => (
                  <motion.div key={project.id} variants={fadeIn}>
                    <PortfolioCard 
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      tags={project.tags}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="web">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {projects.filter(project => project.category === "web").map((project) => (
                  <motion.div key={project.id} variants={fadeIn}>
                    <PortfolioCard 
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      tags={project.tags}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="app">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {projects.filter(project => project.category === "app").map((project) => (
                  <motion.div key={project.id} variants={fadeIn}>
                    <PortfolioCard 
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      tags={project.tags}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="crm">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {projects.filter(project => project.category === "crm").map((project) => (
                  <motion.div key={project.id} variants={fadeIn}>
                    <PortfolioCard 
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      link={project.link}
                      tags={project.tags}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expertise.
          </p>
          <WhatsAppButton className="bg-white text-purple-700 hover:bg-gray-100" customMessage="Hi, I saw your portfolio and I'm interested in discussing a potential project.">
            Schedule a Consultation
          </WhatsAppButton>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
