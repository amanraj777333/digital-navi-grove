
import React from 'react';
import WhatsAppButton from '@/components/WhatsAppButton';

const CtaSection = () => {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="container mx-auto px-4 md:px-6 text-center relative overflow-hidden">
        {/* Matrix background effect */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 50 }).map((_, index) => (
            <div 
              key={index} 
              className="matrix-character"
              style={{ 
                left: `${Math.random() * 100}%`, 
                top: `${Math.random() * 100}%`,
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {String.fromCharCode(33 + Math.floor(Math.random() * 94))}
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl font-space font-bold mb-6 text-mint">Let's Build the Future Together</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto font-inter">
          Contact us today to discuss how our services can help you achieve your business goals.
        </p>
        <WhatsAppButton className="ripple bg-gradient-to-r from-mint to-cta hover:shadow-lg hover:shadow-mint/50 text-navy px-8 py-3 rounded-md text-lg font-poppins font-bold inline-block">
          Get Started Now
        </WhatsAppButton>
      </div>
    </section>
  );
};

export default CtaSection;
