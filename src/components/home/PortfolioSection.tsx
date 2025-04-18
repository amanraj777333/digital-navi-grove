import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/PortfolioCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PortfolioSection = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  return (
    <section className="py-20 bg-navy/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-mint/20 text-navy font-bold text-base mb-6">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl font-space font-extrabold mb-4 text-navy">Our Portfolio</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-poppins font-bold">
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
            <TabsList className="glass">
              <TabsTrigger value="all" className="text-base font-poppins font-bold">All Projects</TabsTrigger>
              <TabsTrigger value="web" className="text-base font-poppins font-bold">Web Development</TabsTrigger>
              <TabsTrigger value="app" className="text-base font-poppins font-bold">App Development</TabsTrigger>
              <TabsTrigger value="crm" className="text-base font-poppins font-bold">CRM Software</TabsTrigger>
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
              }} className="group">
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
              }} className="group">
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
              }} className="group">
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
              }} className="group">
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
          <Link to="/portfolio" className="group text-navy font-poppins font-extrabold text-xl flex items-center justify-center hover:text-mint transition-colors">
            View More Projects <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
