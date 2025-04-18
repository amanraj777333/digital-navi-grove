
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';

const AIServices = () => {
  return (
    <>
      <Navbar />
      <ServiceDetail
        title="AI & Machine Learning"
        description="Cutting-edge AI solutions to automate processes, gain insights, and create intelligent applications."
        imageUrl="https://images.unsplash.com/photo-1677442135703-1787edc2d32e?auto=format&fit=crop&q=80"
        features={[
          "Custom AI Model Development",
          "Natural Language Processing",
          "Computer Vision Solutions",
          "Predictive Analytics",
          "Machine Learning Integration",
          "AI Chatbots",
          "Data Analysis & Visualization",
          "AutoML Solutions"
        ]}
        benefits={[
          "Automate Manual Processes",
          "Make Data-Driven Decisions",
          "Improve Customer Experience",
          "Reduce Operational Costs",
          "Gain Competitive Advantage"
        ]}
        technologies={[
          "TensorFlow",
          "PyTorch",
          "OpenAI",
          "scikit-learn",
          "BERT",
          "Computer Vision",
          "NLP",
          "MLOps"
        ]}
      />
      <Footer />
    </>
  );
};

export default AIServices;
