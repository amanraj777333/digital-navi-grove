
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import AnimatedText from '@/components/AnimatedText';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import PortfolioCard from '@/components/PortfolioCard';
import FaqItem from '@/components/FaqItem';
import { toast } from '@/components/ui/use-toast';
import { 
  Globe, 
  Smartphone, 
  Database, 
  Shield, 
  BarChart, 
  Headphones,
  CheckCircle,
  ChevronRight,
  Send
} from 'lucide-react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';

const Index = () => {
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Transform Your Business with <AnimatedText text="Cutting-Edge" className="inline-block" /> Technology Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Unlock your business potential with our comprehensive suite of web development, app development, custom CRM software, cybersecurity, SEO, and marketing services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <WhatsAppButton className="text-lg py-6 px-8">Get Started Now</WhatsAppButton>
              </div>
              <div className="mt-8 inline-flex items-center justify-center lg:justify-start gap-x-6 text-sm font-medium">
                <div className="flex items-center gap-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>Serving 35+ Startups</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>3+ Years Industry Expertise</span>
                </div>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Technology Solutions" 
                className="w-full h-auto max-w-lg mx-auto rounded-xl shadow-2xl" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Development" 
                  className="w-32 h-24 object-cover rounded" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technology solutions to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Globe size={24} />}
              title="Web Development"
              description="From consultation to launch, our expert team delivers high-performance, scalable web solutions tailored to your business needs."
              link="/services/web-development"
            />
            
            <ServiceCard 
              icon={<Smartphone size={24} />}
              title="App Development"
              description="We design and develop user-friendly, feature-rich mobile and web apps that drive engagement and growth."
              link="/services/app-development"
            />
            
            <ServiceCard 
              icon={<Database size={24} />}
              title="Custom CRM Software"
              description="Enhance your business operations with custom CRM solutions that fit your unique processes and scale with your growth."
              link="/services/crm-software"
            />
            
            <ServiceCard 
              icon={<Shield size={24} />}
              title="Cyber Security"
              description="Protect your data and ensure compliance with our robust cybersecurity solutions."
              link="/services/cyber-security"
            />
            
            <ServiceCard 
              icon={<BarChart size={24} />}
              title="SEO and Marketing"
              description="Boost your online presence and drive organic traffic with our comprehensive SEO and digital marketing services."
              link="/services/seo-marketing"
            />
            
            <ServiceCard 
              icon={<Headphones size={24} />}
              title="MSME Tech Support"
              description="We provide dedicated tech support solutions tailored to the unique needs of MSMEs."
              link="/services/msme-tech-support"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Create Software Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out from the competition with our unique approach and commitment to excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise</h3>
              <p className="text-gray-600">3+ years of industry experience serving over 35 startups.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-600">Tailored solutions to fit your specific business needs.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client Success</h3>
              <p className="text-gray-600">Proven track record of delivering results and building long-term partnerships.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovative Technology</h3>
              <p className="text-gray-600">Stay ahead with the latest technology and trends.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
              <p className="text-gray-600">Personalized support from our expert team.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront pricing with no hidden costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our satisfied clients who have experienced the difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Working with Create Software Solutions transformed our business. The custom CRM they built has streamlined our operations and boosted productivity."
              name="Rajiv Sharma"
              company="TechStart India"
            />
            
            <TestimonialCard 
              quote="Their web development team created a stunning website that perfectly represents our brand and has significantly improved our online presence."
              name="Ananya Patel"
              company="Innovate Solutions"
            />
            
            <TestimonialCard 
              quote="The SEO and digital marketing strategies implemented by their team have resulted in a 200% increase in organic traffic to our website."
              name="Vikram Singh"
              company="Growth Partners"
            />
          </div>
          
          <div className="text-center mt-12">
            <WhatsAppButton>Get Your Free Consultation</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at some of our recent projects that showcase our expertise.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Development</TabsTrigger>
                <TabsTrigger value="app">App Development</TabsTrigger>
                <TabsTrigger value="crm">CRM Software</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PortfolioCard 
                  title="E-commerce Platform"
                  description="A modern e-commerce platform with integrated payment gateway and inventory management."
                  image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  link="/portfolio/ecommerce-platform"
                  tags={["Web Development", "E-commerce"]}
                />
                
                <PortfolioCard 
                  title="Health & Fitness App"
                  description="A comprehensive mobile app for tracking fitness goals and nutrition."
                  image="https://images.unsplash.com/photo-1518770660439-4636190af475"
                  link="/portfolio/fitness-app"
                  tags={["App Development", "Mobile"]}
                />
                
                <PortfolioCard 
                  title="Real Estate CRM"
                  description="Custom CRM software tailored for a leading real estate company."
                  image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                  link="/portfolio/real-estate-crm"
                  tags={["CRM Software", "Real Estate"]}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="web">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <PortfolioCard 
                  title="E-commerce Platform"
                  description="A modern e-commerce platform with integrated payment gateway and inventory management."
                  image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  link="/portfolio/ecommerce-platform"
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
                  link="/portfolio/fitness-app"
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
                  link="/portfolio/real-estate-crm"
                  tags={["CRM Software", "Real Estate"]}
                />
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <a href="/portfolio" className="text-purple-600 font-medium flex items-center justify-center hover:text-purple-700">
              View More Projects <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-center">Get a Free Consultation</h2>
              <p className="text-gray-600 mb-8 text-center">
                Tell us about your project and let's discuss how we can help.
              </p>
              
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your phone number"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit" 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-md flex items-center justify-center w-full"
                  >
                    Submit <Send className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <FaqItem 
              question="What types of businesses do you work with?"
              answer="We work with businesses of all sizes, from startups to established enterprises, across various industries. Our solutions are tailored to meet the specific needs of each client."
            />
            
            <FaqItem 
              question="How long does it take to develop a website or application?"
              answer="The timeline varies depending on the complexity of the project. A simple website might take 2-4 weeks, while a complex web or mobile application could take 3-6 months or more. We provide a detailed timeline during the consultation phase."
            />
            
            <FaqItem 
              question="Do you offer ongoing maintenance and support?"
              answer="Yes, we offer various maintenance and support packages to ensure your website or application continues to run smoothly after launch. Our team is always available to address any issues or implement updates as needed."
            />
            
            <FaqItem 
              question="What is your pricing structure?"
              answer="Our pricing is project-based and depends on the scope, complexity, and timeline of your project. We provide detailed quotes after understanding your requirements during the initial consultation."
            />
            
            <FaqItem 
              question="Do you provide SEO services for websites you develop?"
              answer="Yes, we offer comprehensive SEO services to help improve your website's visibility in search engines. This includes keyword research, on-page optimization, technical SEO, and ongoing SEO strategy."
            />
          </div>
          
          <div className="text-center mt-12">
            <WhatsAppButton>Still Have Questions?</WhatsAppButton>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to get started on your journey to digital success.
          </p>
          <WhatsAppButton className="bg-white text-purple-700 hover:bg-gray-100">
            Get Started Now
          </WhatsAppButton>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
