
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
  Warehouse
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
        icon: <Code2 size={24} />,
        title: "Custom Software Development",
        description: "Business workflow automation, secure backend systems, and cross-platform support.",
        link: "/services/custom-software"
      },
      {
        icon: <Smartphone size={24} />,
        title: "Website & Mobile Apps",
        description: "Responsive websites and native + cross-platform apps with UI/UX-driven design.",
        link: "/services/web-mobile"
      },
      {
        icon: <Database size={24} />,
        title: "CRM & ERP Development",
        description: "Streamlined operations with custom dashboards for inventory, billing, HR, and client management.",
        link: "/services/crm-erp"
      },
      {
        icon: <ShieldCheck size={24} />,
        title: "Cybersecurity & Audits",
        description: "Comprehensive security testing, compliance checks, and performance optimization.",
        link: "/services/security"
      }
    ],
    industry: [
      {
        icon: <Gem size={24} />,
        title: "JewelryTech Solutions",
        description: "Specialized billing, inventory, and order management for jewelry businesses.",
        link: "/services/jewelry-tech"
      },
      {
        icon: <Warehouse size={24} />,
        title: "Smart Warehousing",
        description: "Inventory automation with real-time tracking and supply chain management.",
        link: "/services/warehousing"
      },
      {
        icon: <Stethoscope size={24} />,
        title: "HealthTech Tools",
        description: "Virtual consultation platforms and smart healthcare management solutions.",
        link: "/services/health-tech"
      }
    ],
    startup: [
      {
        icon: <Rocket size={24} />,
        title: "MVPs & Rapid Prototyping",
        description: "Go-to-market in 30 days with lean tech sprints and investor-ready products.",
        link: "/services/mvp"
      },
      {
        icon: <Building2 size={24} />,
        title: "Dedicated Tech Teams",
        description: "Scalable tech pods with developers, QA, and project managers.",
        link: "/services/tech-teams"
      }
    ],
    deepTech: [
      {
        icon: <Brain size={24} />,
        title: "Custom AI/ML Models",
        description: "NLP, Vision AI, and custom-trained prediction engines.",
        link: "/services/ai-ml"
      },
      {
        icon: <Bot size={24} />,
        title: "LLM Applications",
        description: "Advanced chatbots and industry-specific AI tools.",
        link: "/services/llm"
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
            Comprehensive technology solutions powered by AI and automation to help your business scale intelligently
          </motion.p>
        </div>
      </section>
      
      {/* Core Tech Services */}
      <ServiceSection
        title="Core Tech Services"
        description="Foundation technology services for businesses of all sizes"
        services={services.core}
        variants={staggerContainer}
        fadeIn={fadeIn}
      />
      
      {/* Industry Solutions */}
      <ServiceSection
        title="Industry-Specific Solutions"
        description="Specialized tools and platforms for different sectors"
        services={services.industry}
        variants={staggerContainer}
        fadeIn={fadeIn}
        className="bg-gray-50"
      />
      
      {/* Startup Services */}
      <ServiceSection
        title="Startup-Focused Services"
        description="Fast-track your startup's growth with our specialized services"
        services={services.startup}
        variants={staggerContainer}
        fadeIn={fadeIn}
      />
      
      {/* Deep-Tech & AI Lab */}
      <ServiceSection
        title="Deep-Tech & AI Lab"
        description="Cutting-edge AI solutions for modern businesses"
        services={services.deepTech}
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
