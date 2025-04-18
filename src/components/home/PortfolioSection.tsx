
import React from 'react';
import { motion } from 'framer-motion';
import PortfolioCard from '@/components/PortfolioCard';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          <h2 className="text-4xl md:text-6xl font-space font-extrabold mb-4 text-navy">Featured Projects</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-poppins font-bold">
            Take a look at some of our recent projects that showcase our expertise.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
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
              title="AI-Powered CRM System"
              description="A modern CRM system with integrated AI for automated lead scoring and customer insights."
              image="https://images.unsplash.com/photo-1551434678-e076c223a692"
              link="/portfolio"
              tags={["AI/ML", "CRM", "Web App"]}
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
              title="E-commerce Platform"
              description="A scalable e-commerce solution with AI-powered product recommendations."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
              link="/portfolio"
              tags={["E-commerce", "AI/ML", "Mobile"]}
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
              title="Healthcare Management System"
              description="An integrated healthcare platform with patient management and telemedicine features."
              image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d"
              link="/portfolio"
              tags={["Healthcare", "Web App", "Mobile"]}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/portfolio">
            <Button 
              size="lg" 
              variant="default" 
              className="ripple bg-gradient-to-r from-mint to-cta hover:shadow-lg hover:shadow-mint/20 text-navy font-space font-extrabold py-4 px-8"
            >
              View All Projects <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
