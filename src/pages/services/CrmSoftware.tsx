
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';

const CrmSoftware = () => {
  return (
    <>
      <Navbar />
      <ServiceDetail
        title="Custom CRM Development"
        description="Tailor-made CRM solutions that streamline your business operations and improve customer relationships."
        imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
        features={[
          "Customer Data Management",
          "Sales Pipeline Tracking",
          "Automated Workflows",
          "Analytics & Reporting",
          "Email Integration",
          "Task Management",
          "Mobile Access",
          "Custom Dashboards"
        ]}
        benefits={[
          "Improved Customer Relationships",
          "Increased Sales Efficiency",
          "Better Data Organization",
          "Enhanced Team Collaboration",
          "Data-Driven Decision Making"
        ]}
        technologies={[
          "Node.js",
          "React",
          "MongoDB",
          "PostgreSQL",
          "Redis",
          "Docker",
          "AWS",
          "REST APIs"
        ]}
      />
      <Footer />
    </>
  );
};

export default CrmSoftware;
