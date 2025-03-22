
import React, { useEffect, useRef, useState } from 'react';

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileScreenRef = useRef<HTMLDivElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const [scrollPhase, setScrollPhase] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  
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
      if (!sectionRef.current || !mobileRef.current) return;
      
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate section visibility (0 to 1, where 0 is not visible, 1 is fully visible)
      let sectionVisibility = 1 - (sectionTop / windowHeight);
      sectionVisibility = Math.max(0, Math.min(1, sectionVisibility));
      
      // For the first phase - Mobile with floating labels
      if (sectionVisibility < 0.3) {
        setScrollPhase(0);
        setScrollProgress(sectionVisibility / 0.3);
      } 
      // For the second phase - First feature card
      else if (sectionVisibility < 0.6) {
        setScrollPhase(1);
        setScrollProgress((sectionVisibility - 0.3) / 0.3);
      } 
      // For the third phase - Second feature card
      else if (sectionVisibility < 0.9) {
        setScrollPhase(2);
        setScrollProgress((sectionVisibility - 0.6) / 0.3);
      }
      // For the fourth phase - Third feature card
      else {
        setScrollPhase(3);
        setScrollProgress((sectionVisibility - 0.9) / 0.1);
      }
      
      // Update mobile screen content scroll position
      if (mobileScreenRef.current) {
        const maxScroll = 800; // Maximum scroll distance in pixels
        mobileScreenRef.current.style.transform = `translateY(-${sectionVisibility * maxScroll}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[300vh] relative overflow-hidden"
    >
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="sticky top-0 min-h-screen py-20 flex items-center">
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
            {/* Mobile in center - always visible and sticky */}
            <div className="lg:w-1/3 flex justify-center">
              <div 
                ref={mobileRef}
                className="relative rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-black shadow-2xl transition-all duration-500 opacity-100"
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
              
              {/* Floating labels around the phone - only visible in first phase */}
              <div className={`absolute z-10 transition-opacity duration-500 ${scrollPhase === 0 ? 'opacity-100' : 'opacity-0'}`}>
                <div 
                  className={`absolute transition-all duration-500 delay-300 transform ${
                    scrollPhase === 0 && scrollProgress > 0.4 ? 'opacity-100' : 'opacity-0'
                  }`} 
                  style={{ 
                    left: '-270px', 
                    top: '100px',
                    transform: `translateX(${scrollPhase === 0 && scrollProgress > 0.4 ? '0' : '-30px'})`
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                    <div className="text-saakh-blue text-sm mb-1">+ $4,250 Salary</div>
                  </div>
                </div>
                
                <div 
                  className={`absolute transition-all duration-500 delay-500 transform ${
                    scrollPhase === 0 && scrollProgress > 0.5 ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    right: '-220px', 
                    top: '80px',
                    transform: `translateX(${scrollPhase === 0 && scrollProgress > 0.5 ? '0' : '30px'})`
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                    <div className="text-saakh-cyan text-sm mb-1">- $3.99 Coffee</div>
                  </div>
                </div>
                
                <div 
                  className={`absolute transition-all duration-500 delay-700 transform ${
                    scrollPhase === 0 && scrollProgress > 0.6 ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    left: '-270px', 
                    top: '250px',
                    transform: `translateX(${scrollPhase === 0 && scrollProgress > 0.6 ? '0' : '-30px'})`
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                    <div className="text-red-400 text-sm mb-1">- $1,200 Holidays</div>
                  </div>
                </div>
                
                <div 
                  className={`absolute transition-all duration-500 delay-900 transform ${
                    scrollPhase === 0 && scrollProgress > 0.7 ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    right: '-220px', 
                    top: '230px',
                    transform: `translateX(${scrollPhase === 0 && scrollProgress > 0.7 ? '0' : '30px'})`
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                    <div className="text-yellow-400 text-sm mb-1">+ $250 Dividend</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature cards with scroll reveal effect - appear one by one from bottom */}
            <div className="w-full lg:w-2/3 relative">
              {/* Card 1 - phase 1 */}
              <div 
                className={`feature-card absolute left-0 w-full transition-all duration-1000 transform ${
                  scrollPhase >= 1 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-[50vh]'
                }`}
                style={{
                  opacity: scrollPhase === 1 ? scrollProgress : (scrollPhase > 1 ? (1 - Math.min(1, scrollProgress * 2)) : 0),
                  transform: `translateY(${
                    scrollPhase === 0 
                      ? '50vh' 
                      : (scrollPhase === 1 
                        ? `${(1 - scrollProgress) * 50}vh` 
                        : `${-(scrollProgress) * 50}vh`)
                  })`,
                  pointerEvents: scrollPhase === 1 ? 'auto' : 'none'
                }}
              >
                <div className="text-saakh-blue/80 text-sm mb-1">DASHBOARD</div>
                <h3 className="text-white text-2xl font-bold mb-3">{featureCards[0].title}</h3>
                <p className="text-white/70 mb-4">{featureCards[0].description}</p>
                <ul className="space-y-2">
                  {featureCards[0].items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-saakh-blue/20 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-saakh-blue"></div>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Card 2 - phase 2 */}
              <div 
                className={`feature-card absolute left-0 w-full transition-all duration-1000 transform ${
                  scrollPhase >= 2 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-[50vh]'
                }`}
                style={{
                  opacity: scrollPhase === 2 ? scrollProgress : (scrollPhase > 2 ? (1 - Math.min(1, scrollProgress * 2)) : 0),
                  transform: `translateY(${
                    scrollPhase < 2 
                      ? '50vh' 
                      : (scrollPhase === 2 
                        ? `${(1 - scrollProgress) * 50}vh` 
                        : `${-(scrollProgress) * 50}vh`)
                  })`,
                  pointerEvents: scrollPhase === 2 ? 'auto' : 'none'
                }}
              >
                <div className="text-saakh-blue/80 text-sm mb-1">FINANCIAL OVERVIEW</div>
                <h3 className="text-white text-2xl font-bold mb-3">{featureCards[1].title}</h3>
                <p className="text-white/70 mb-4">{featureCards[1].description}</p>
                <ul className="space-y-2">
                  {featureCards[1].items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-saakh-blue/20 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-saakh-blue"></div>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Card 3 - phase 3 */}
              <div 
                className={`feature-card absolute left-0 w-full transition-all duration-1000 transform ${
                  scrollPhase >= 3 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-[50vh]'
                }`}
                style={{
                  opacity: scrollPhase === 3 ? scrollProgress : 0,
                  transform: `translateY(${
                    scrollPhase < 3 
                      ? '50vh' 
                      : `${(1 - scrollProgress) * 50}vh`
                  })`,
                  pointerEvents: scrollPhase === 3 ? 'auto' : 'none'
                }}
              >
                <div className="text-saakh-blue/80 text-sm mb-1">BUSINESS REPORTS</div>
                <h3 className="text-white text-2xl font-bold mb-3">{featureCards[2].title}</h3>
                <p className="text-white/70 mb-4">{featureCards[2].description}</p>
                <ul className="space-y-2">
                  {featureCards[2].items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-saakh-blue/20 flex items-center justify-center mr-3">
                        <div className="w-2 h-2 rounded-full bg-saakh-blue"></div>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
