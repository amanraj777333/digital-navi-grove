import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { 
  Code2,
  Brain,
  Rocket,
  LineChart,
  ShieldCheck,
  Smartphone,
  Database,
  Bot,
  Building2,
  Gem,
  Stethoscope,
  Warehouse,
  Code,
  Cloud,
  AppWindow,
  Globe
} from 'lucide-react';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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

  const services = {
    core: [
      {
        icon: <AppWindow size={24} />,
        title: "Web Development",
        description: "Custom web solutions built with modern technologies to help your business grow online.",
        link: "/services/web-development"
      },
      {
        icon: <Smartphone size={24} />,
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for exceptional user experiences.",
        link: "/services/app-development"
      },
      {
        icon: <Cloud size={24} />,
        title: "Cloud Services",
        description: "Scalable cloud solutions to modernize your infrastructure and optimize efficiency.",
        link: "/services/cloud-services"
      },
      {
        icon: <Brain size={24} />,
        title: "AI & Machine Learning",
        description: "Cutting-edge AI solutions to automate processes and create intelligent applications.",
        link: "/services/ai-services"
      }
    ],
    enterprise: [
      {
        icon: <Database size={24} />,
        title: "Custom CRM Development",
        description: "Tailor-made CRM solutions to streamline your business operations and improve efficiency.",
        link: "/services/crm-software"
      },
      {
        icon: <ShieldCheck size={24} />,
        title: "Cybersecurity Solutions",
        description: "Comprehensive security services to protect your digital assets and infrastructure.",
        link: "/services/cyber-security"
      }
    ],
    digital: [
      {
        icon: <Globe size={24} />,
        title: "Digital Marketing",
        description: "Strategic digital marketing services to boost your online presence and reach.",
        link: "/services/digital-marketing"
      },
      {
        icon: <LineChart size={24} />,
        title: "SEO Services",
        description: "Data-driven SEO strategies to improve your search rankings and visibility.",
        link: "/services/seo-services"
      }
    ],
    consulting: [
      {
        icon: <Building2 size={24} />,
        title: "IT Consulting",
        description: "Expert guidance for digital transformation and technology implementation.",
        link: "/services/it-consulting"
      },
      {
        icon: <Rocket size={24} />,
        title: "Startup Solutions",
        description: "Comprehensive tech support and solutions for growing startups.",
        link: "/services/startup-solutions"
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive technology solutions to help your business thrive in the digital age
          </motion.p>
        </div>
      </section>
      
      {/* Core Services */}
      <ServiceSection
        title="Core Technology Services"
        description="Custom software solutions for modern businesses"
        services={services.core}
        variants={staggerContainer}
        fadeIn={fadeIn}
      />
      
      {/* Enterprise Solutions */}
      <ServiceSection
        title="Enterprise Solutions"
        description="Scalable solutions for large organizations"
        services={services.enterprise}
        variants={staggerContainer}
        fadeIn={fadeIn}
        className="bg-gray-50"
      />
      
      {/* Digital Marketing */}
      <ServiceSection
        title="Digital Marketing"
        description="Boost your online presence and reach"
        services={services.digital}
        variants={staggerContainer}
        fadeIn={fadeIn}
      />
      
      {/* Consulting Services */}
      <ServiceSection
        title="Consulting Services"
        description="Expert guidance for your digital journey"
        services={services.consulting}
        variants={staggerContainer}
        fadeIn={fadeIn}
        className="bg-gray-50"
      />
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <Link to="/contact" className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium inline-block transition-all duration-300">
            Get in Touch
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

interface ServiceSectionProps {
  title: string;
  description: string;
  services: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
  }>;
  variants: any;
  fadeIn: any;
  className?: string;
}

const ServiceSection = ({ title, description, services, variants, fadeIn, className = "" }: ServiceSectionProps) => (
  <section className={`py-20 ${className}`}>
    <div className="container mx-auto px-4 md:px-6">
      <motion.div 
        className="text-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-xl text-gray-600">{description}</p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div key={index} variants={fadeIn}>
            <ServiceCard 
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
