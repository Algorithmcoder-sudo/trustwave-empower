
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in mx-auto text-center">
          <span className="text-white/80">About Us</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Dedicated to <span className="text-saakh-blue">Building Trust</span><br />
          in Business
        </h2>
        
        <div className="max-w-3xl mx-auto text-white/70 text-center mb-16 text-lg leading-relaxed">
          <p className="mb-6">
            At Saakh, we're on a mission to empower MSMEs and corporates with comprehensive solutions that prevent fraud, block defaulting customers, and ensure vendor credibility. We believe that trust is the foundation of successful business relationships.
          </p>
          <p>
            Our unique value proposition lies in our ability to identify non-compliant businesses that are unlikely to pay on time. By focusing on risk prevention and trust-building, we help you make informed decisions and protect your business interests.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl h-full p-6">
              <div className="border-l-4 border-saakh-blue pl-4 mb-8">
                <h3 className="text-xl font-bold text-white">Our Mission</h3>
                <p className="text-white/70 mt-2">To solve for trust in business, together. #trustus</p>
              </div>
              
              <div className="p-6 rounded-lg border border-white/10 bg-gradient-to-b from-saakh-blue-dark/30 to-transparent">
                <blockquote className="text-lg text-white/80 italic">
                  "We solve for trust in business by providing 350+ data points on any business, instantly from everywhere, at one place, using AI."
                </blockquote>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 p-3 inline-block rounded-lg bg-saakh-blue/20">
                <div className="w-6 h-6 text-saakh-blue flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Comprehensive Analysis</h3>
              <p className="text-white/70">
                We analyze business size, growth speed, revenue, loans, employee count and growth to provide you with actionable insights.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 p-3 inline-block rounded-lg bg-saakh-blue/20">
                <div className="w-6 h-6 text-saakh-blue flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Trust Seals</h3>
              <p className="text-white/70">
                Our trust seals, ratings, and reviews help determine the creditworthiness of businesses you work with.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 p-3 inline-block rounded-lg bg-saakh-blue/20">
                <div className="w-6 h-6 text-saakh-blue flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fraud Prevention</h3>
              <p className="text-white/70">
                Identify and prevent fraud with our advanced detection tools and comprehensive compliance checks.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="mb-4 p-3 inline-block rounded-lg bg-saakh-blue/20">
                <div className="w-6 h-6 text-saakh-blue flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Vendor Credibility</h3>
              <p className="text-white/70">
                Check non-compliance of any business using 50+ metrics by searching GSTN and other critical data points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
