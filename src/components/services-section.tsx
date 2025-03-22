
import React from 'react';

const ServicesSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in mx-auto text-center">
          <span className="text-white/80">Our Services</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Comprehensive <span className="text-saakh-blue">Trust Solutions</span>
        </h2>
        
        <p className="text-xl text-white/70 max-w-3xl mx-auto text-center mb-16">
          We offer a range of services designed to help businesses build trust and mitigate risks in their relationships with customers and vendors.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-neon-blue">
            <div className="p-8">
              <div className="mb-6 p-4 inline-block rounded-lg bg-saakh-blue/20">
                <div className="w-8 h-8 text-saakh-blue flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Fraud Prevention</h3>
              
              <p className="text-white/70 mb-6">
                Our advanced fraud prevention system uses sophisticated analytics to detect and prevent fraudulent activities, protecting your business from potential risks.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">Real-time fraud detection alerts</span>
                </li>
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">Pattern recognition for suspicious activities</span>
                </li>
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">Comprehensive risk assessment reports</span>
                </li>
              </ul>
              
              <a href="#learn-more" className="inline-flex items-center text-saakh-blue hover:text-saakh-blue-light transition">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service 2 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-neon-blue">
            <div className="p-8">
              <div className="mb-6 p-4 inline-block rounded-lg bg-saakh-blue/20">
                <div className="w-8 h-8 text-saakh-blue flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Default Blocking</h3>
              
              <p className="text-white/70 mb-6">
                Our system identifies and blocks customers with a history of defaults, safeguarding your business from potential losses and ensuring reliable payment flows.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">Identification of willful defaulters</span>
                </li>
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">Default history tracking and alerts</span>
                </li>
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">Risk mitigation strategies for defaulting customers</span>
                </li>
              </ul>
              
              <a href="#learn-more" className="inline-flex items-center text-saakh-blue hover:text-saakh-blue-light transition">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Service 3 */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-neon-blue">
            <div className="p-8">
              <div className="mb-6 p-4 inline-block rounded-lg bg-saakh-blue/20">
                <div className="w-8 h-8 text-saakh-blue flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Vendor Credibility Checks</h3>
              
              <p className="text-white/70 mb-6">
                Our comprehensive vendor assessment tools evaluate credibility using over 50 metrics, including GST fraud, financial stability, and compliance history.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">GST compliance verification</span>
                </li>
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">Bankruptcy and liquidation status checks</span>
                </li>
                <li className="flex items-start">
                  <div className="text-saakh-blue mr-2">•</div>
                  <span className="text-white/80">Comprehensive vendor reliability scoring</span>
                </li>
              </ul>
              
              <a href="#learn-more" className="inline-flex items-center text-saakh-blue hover:text-saakh-blue-light transition">
                Learn More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
