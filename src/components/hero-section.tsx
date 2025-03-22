
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const sourcesRef = useRef<HTMLDivElement>(null);
  const userCounterRef = useRef<HTMLDivElement>(null);
  
  // Sources marquee data for multiple rows with different starting points
  const sources = [
    { id: 1, name: 'GST' },
    { id: 2, name: 'UDYAM' },
    { id: 3, name: 'PAN' },
    { id: 4, name: 'TAN' },
    { id: 5, name: 'SEBI' },
    { id: 6, name: 'SFIO' },
    { id: 7, name: 'MCA' },
    { id: 8, name: 'IBBI' },
    { id: 9, name: 'DIN' },
    { id: 10, name: 'IEC' },
    { id: 11, name: 'EPF' },
    { id: 12, name: 'LEI' },
    { id: 13, name: 'BIFR' },
    { id: 14, name: 'TDS' },
  ];

  useEffect(() => {
    // Floating animation for trusted users badge
    if (userCounterRef.current) {
      const floatAnimation = () => {
        const badge = userCounterRef.current;
        if (badge) {
          badge.style.transform = 'translateY(-8px)';
          setTimeout(() => {
            if (badge) badge.style.transform = 'translateY(0)';
          }, 1500);
        }
      };
      
      // Start the animation immediately
      floatAnimation();
      
      // Then set interval for continuous animation
      const interval = setInterval(floatAnimation, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section className="pt-20 pb-16 relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 floating-dots"></div>
      
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-radial from-saakh-blue-dark/30 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in">
              <span className="text-white/80">Solve for trust in business</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-fade-in" style={{ animationDelay: '200ms' }}>
              Prevent Fraud. <br />
              <span className="text-saakh-blue">Block Defaulters.</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '400ms' }}>
              A B2B vendor screening platform for MSMEs, Enterprises, CAs and Fintechs to assess vendor credibility and prevent fraud.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <a 
                href="#download" 
                className="px-8 py-3 rounded-full bg-saakh-blue hover:bg-saakh-blue-light transition text-white font-medium text-center flex items-center justify-center"
              >
                Download App
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </a>
              
              <a 
                href="#contact" 
                className="px-8 py-3 rounded-full border border-saakh-blue hover:bg-saakh-blue/10 transition text-white font-medium text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center items-center relative">
            <div 
              ref={phoneRef}
              className="relative z-10"
            >
              <div className="relative rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-black shadow-2xl">
                <div className="absolute top-0 w-full h-6 bg-black z-10 flex justify-center items-center">
                  <div className="w-20 h-4 bg-black rounded-b-lg"></div>
                </div>
                
                <div className="h-[600px] w-[300px] overflow-hidden relative">
                  {/* Phone screen with app UI */}
                  <div className="absolute inset-0 bg-black flex flex-col">
                    <div className="p-6 pt-10 text-white text-center">
                      <div className="text-sm text-white/60">Saakh</div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-between px-6 py-2">
                      <div className="text-center">
                        <h3 className="text-white text-xl font-bold mb-4 px-2">
                          Get 350+ data points on any business instantly from every possible source
                        </h3>
                        
                        {/* Source logos triple marquee */}
                        <div className="space-y-3 mt-4 mb-6">
                          {/* Row 1 - starts at beginning */}
                          <div className="marquee-container">
                            <div className="marquee-content">
                              {[...sources, ...sources, ...sources].map(source => (
                                <div key={source.id} className="source-item">
                                  {source.name}
                                </div>
                              ))}
                            </div>
                            <div className="marquee-content">
                              {[...sources, ...sources, ...sources].map(source => (
                                <div key={`dup-${source.id}`} className="source-item">
                                  {source.name}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Row 2 - starts in middle */}
                          <div className="marquee-container">
                            <div className="marquee-content" style={{ animationDelay: '-15s' }}>
                              {[...sources, ...sources, ...sources].map(source => (
                                <div key={`r2-${source.id}`} className="source-item">
                                  {source.name}
                                </div>
                              ))}
                            </div>
                            <div className="marquee-content" style={{ animationDelay: '-15s' }}>
                              {[...sources, ...sources, ...sources].map(source => (
                                <div key={`r2-dup-${source.id}`} className="source-item">
                                  {source.name}
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          {/* Row 3 - starts near end */}
                          <div className="marquee-container">
                            <div className="marquee-content" style={{ animationDelay: '-22s' }}>
                              {[...sources, ...sources, ...sources].map(source => (
                                <div key={`r3-${source.id}`} className="source-item">
                                  {source.name}
                                </div>
                              ))}
                            </div>
                            <div className="marquee-content" style={{ animationDelay: '-22s' }}>
                              {[...sources, ...sources, ...sources].map(source => (
                                <div key={`r3-dup-${source.id}`} className="source-item">
                                  {source.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full mb-4">
                        <h3 className="text-white text-xl font-medium mb-3">
                          What's your name?
                        </h3>
                        
                        <div className="relative">
                          <input 
                            type="text" 
                            placeholder="Name*" 
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-saakh-blue"
                          />
                          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-saakh-blue rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </button>
                        </div>
                        
                        <div className="mt-4 text-center text-xs text-white/60">
                          By continuing, you agree to our 
                          <span className="text-saakh-blue ml-1 mr-1">Terms of Service</span>
                          <span className="text-saakh-blue ml-1">Privacy Policy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Trusted users badge - floating */}
              <div 
                ref={userCounterRef}
                className="absolute -bottom-4 -left-4 px-4 py-3 bg-black/80 backdrop-blur-lg rounded-lg border border-white/10 flex items-center space-x-3 animate-fade-in shadow-neon-blue transition-transform duration-1000 ease-in-out"
                style={{ animation: 'float 3s ease-in-out infinite' }}
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-saakh-blue/30 border-2 border-saakh-blue flex items-center justify-center text-white font-bold text-xs">
                    AB
                  </div>
                  <div className="w-8 h-8 rounded-full bg-saakh-blue/30 border-2 border-saakh-blue flex items-center justify-center text-white font-bold text-xs">
                    CD
                  </div>
                  <div className="w-8 h-8 rounded-full bg-saakh-blue/30 border-2 border-saakh-blue flex items-center justify-center text-white font-bold text-xs">
                    EF
                  </div>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">152,78k+</div>
                  <div className="text-xs text-white/70">Trusted Users</div>
                </div>
              </div>
            </div>
            
            {/* Glowing orb behind phone */}
            <div className="absolute w-64 h-64 bg-saakh-blue/20 rounded-full filter blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-soft"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
