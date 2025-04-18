
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceDetail from '@/components/ServiceDetail';

const CloudServices = () => {
  return (
    <>
      <Navbar />
      <ServiceDetail
        title="Cloud Services"
        description="Scalable and secure cloud solutions to modernize your infrastructure and optimize operational efficiency."
        imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
        features={[
          "Cloud Migration",
          "Infrastructure as Code",
          "Serverless Architecture",
          "Microservices Implementation",
          "Container Orchestration",
          "Auto-scaling Solutions",
          "Disaster Recovery",
          "24/7 Monitoring"
        ]}
        benefits={[
          "Reduce Infrastructure Costs",
          "Improve Scalability",
          "Enhance Security",
          "Increase Reliability",
          "Enable Remote Access"
        ]}
        technologies={[
          "AWS",
          "Azure",
          "Google Cloud",
          "Kubernetes",
          "Docker",
          "Terraform",
          "Jenkins",
          "Prometheus"
        ]}
      />
      <Footer />
    </>
  );
};

export default CloudServices;
