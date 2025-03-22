
import React, { useEffect, useRef, useState } from 'react';

const FeatureSection = () => {
  const mobileScreenRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const featureCards = [
    {
      id: 1,
      title: "Financial Dashboard",
      description: "Access all your financial data at a glance, streamlining your management process.",
      items: [
        "Real-time balance updates",
        "Transaction categorization",
        "Budget tracking"
      ]
    },
    {
      id: 2,
      title: "Financial Insights",
      description: "Gain comprehensive insights into your spending patterns and financial behaviors.",
      items: [
        "Spending analytics",
        "Custom reports",
        "Investment tracking"
      ]
    },
    {
      id: 3,
      title: "Business Analytics",
      description: "Make data-driven decisions with powerful business performance metrics.",
      items: [
        "Revenue tracking",
        "Expense monitoring",
        "Growth projections"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !mobileRef.current) return;
      
      const container = containerRef.current;
      const mobile = mobileRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerBottom = container.getBoundingClientRect().bottom;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Check if mobile is visible
      const mobileTop = mobile.getBoundingClientRect().top;
      const mobileVisible = mobileTop < (windowHeight * 0.8) && mobileTop > 0;
      setIsVisible(mobileVisible);
      
      // Calculate how far we've scrolled into the section (0 to 1)
      let progress = 1 - (containerTop / (windowHeight - containerHeight * 0.5));
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollPosition(progress);
      
      // Update mobile screen content scroll position once mobile is visible
      if (mobileScreenRef.current && mobileVisible) {
        const maxScroll = 800; // Maximum scroll distance in pixels
        mobileScreenRef.current.style.transform = `translateY(-${progress * maxScroll}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen py-20 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Comprehensive <span className="text-saakh-blue">Business Analysis</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl text-center">
            Get detailed insights and real-time data to make informed business decisions and prevent fraud.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Mobile in center */}
          <div className="lg:w-1/3 mb-12 lg:mb-0 flex justify-center sticky top-32 h-[600px]">
            <div 
              ref={mobileRef}
              className={`relative rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-black shadow-2xl transition-all duration-500 ${
                isVisible ? 'opacity-100' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="absolute top-0 w-full h-6 bg-black z-20 flex justify-center items-center">
                <div className="w-20 h-4 bg-black rounded-b-lg"></div>
              </div>
              
              <div className="h-[600px] w-[300px] overflow-hidden relative">
                {/* Scrollable content in the phone */}
                <div ref={mobileScreenRef} className="transition-transform duration-700 ease-out">
                  <div className="bg-black text-white">
                    {/* App screenshot - fit to mobile width */}
                    <img 
                      src="/screenshot-dashboard.png" 
                      alt="App Dashboard" 
                      className="w-full object-cover"
                      style={{ maxHeight: '1400px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating labels around the phone - first phase only visible when phone appears */}
            <div className={`absolute z-10 transition-opacity duration-500 ${isVisible && scrollPosition < 0.3 ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute transition-all duration-500 delay-300" style={{ left: '-270px', top: '100px' }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                  <div className="text-saakh-blue text-sm mb-1">+ $4,250 Salary</div>
                </div>
              </div>
              
              <div className="absolute transition-all duration-500 delay-500" style={{ right: '-220px', top: '80px' }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                  <div className="text-saakh-cyan text-sm mb-1">- $3.99 Coffee</div>
                </div>
              </div>
              
              <div className="absolute transition-all duration-500 delay-700" style={{ left: '-270px', top: '250px' }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                  <div className="text-red-400 text-sm mb-1">- $1,200 Holidays</div>
                </div>
              </div>
              
              <div className="absolute transition-all duration-500 delay-900" style={{ right: '-220px', top: '230px' }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                  <div className="text-yellow-400 text-sm mb-1">+ $250 Dividend</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature cards with parallax scroll reveal */}
          <div className="w-full lg:w-2/3 space-y-8">
            {featureCards.map((card, index) => {
              // Calculate when this card should be visible
              const startPoint = 0.3 + (index * 0.2); // Start showing cards after initial mobile intro
              const endPoint = startPoint + 0.3;
              
              return (
                <div 
                  key={card.id}
                  className={`feature-card transition-all duration-700 transform ${
                    scrollPosition > startPoint && scrollPosition < endPoint
                      ? 'opacity-100 translate-y-0'
                      : scrollPosition < startPoint
                        ? 'opacity-0 translate-y-40'
                        : 'opacity-0 -translate-y-40'
                  }`}
                >
                  <div className="text-saakh-blue/80 text-sm mb-1">
                    {index === 0
                      ? 'DASHBOARD'
                      : index === 1
                        ? 'FINANCIAL OVERVIEW'
                        : 'BUSINESS REPORTS'}
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-white/70 mb-4">{card.description}</p>
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-5 h-5 rounded-full bg-saakh-blue/20 flex items-center justify-center mr-3">
                          <div className="w-2 h-2 rounded-full bg-saakh-blue"></div>
                        </div>
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
