
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileScreenRef = useRef<HTMLDivElement>(null);
  const [scrollPhase, setScrollPhase] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();
  
  // Labels state for fading animation
  const [visibleLabels, setVisibleLabels] = useState<number[]>([]);
  
  const featureCards = [
    {
      id: 1,
      title: "Financial Dashboard",
      label: "DASHBOARD",
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
      label: "FINANCIAL OVERVIEW",
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
      label: "BUSINESS REPORTS",
      description: "Make data-driven decisions with powerful business performance metrics.",
      items: [
        "Revenue tracking",
        "Expense monitoring",
        "Growth projections"
      ]
    }
  ];

  const labels = [
    { text: "+ $4,250 Salary", color: "text-saakh-blue", position: { left: "-290px", top: "100px" } },
    { text: "- $3.99 Coffee", color: "text-saakh-cyan", position: { right: "-290px", top: "80px" } },
    { text: "- $1,200 Holidays", color: "text-red-400", position: { left: "-290px", top: "250px" } },
    { text: "+ $250 Dividend", color: "text-yellow-400", position: { right: "-290px", top: "230px" } }
  ];

  // Effect to randomly show/hide labels in the first phase
  useEffect(() => {
    // Only run this effect in desktop view and in the first phase
    if (isMobile || scrollPhase > 0) return;
    
    const toggleLabels = () => {
      // Ensure at least 2 labels are visible
      const newVisibleLabels = [];
      const availableIndices = [0, 1, 2, 3];
      
      // Keep some of the currently visible labels
      const keepCount = Math.min(visibleLabels.length, 2);
      if (keepCount > 0) {
        const keepIndices = visibleLabels
          .sort(() => Math.random() - 0.5)
          .slice(0, keepCount);
          
        newVisibleLabels.push(...keepIndices);
        keepIndices.forEach(idx => {
          const index = availableIndices.indexOf(idx);
          if (index !== -1) availableIndices.splice(index, 1);
        });
      }
      
      // Add new random labels until we have at least 2
      while (newVisibleLabels.length < Math.min(2 + Math.floor(Math.random() * 2), 4)) {
        if (availableIndices.length === 0) break;
        
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        const labelIndex = availableIndices[randomIndex];
        
        newVisibleLabels.push(labelIndex);
        availableIndices.splice(randomIndex, 1);
      }
      
      setVisibleLabels(newVisibleLabels);
    };
    
    const intervalId = setInterval(toggleLabels, 2000);
    toggleLabels(); // Initial call
    
    return () => clearInterval(intervalId);
  }, [visibleLabels, scrollPhase, isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const windowHeight = window.innerHeight;
      
      // We'll divide our section into 3 phases
      const scrollPosition = Math.max(0, -sectionTop + windowHeight * 0.1);
      
      // Each phase is one screen height worth of scrolling
      const phaseHeight = windowHeight * 0.9; // 90% of screen height per phase
      const currentPhase = Math.min(2, Math.floor(scrollPosition / phaseHeight));
      const phaseProgress = (scrollPosition % phaseHeight) / phaseHeight;
      
      setScrollPhase(currentPhase);
      setScrollProgress(phaseProgress);
      
      // Update mobile screen scroll based on overall progress
      if (mobileScreenRef.current) {
        const maxScroll = 600; // Adjust based on actual content height
        const totalPhases = 3; // Total number of phases
        const scrollRatio = Math.min(1, (scrollPosition / (phaseHeight * totalPhases)));
        const scrollY = scrollRatio * maxScroll;
        mobileScreenRef.current.style.transform = `translateY(-${scrollY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set up correct state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[400vh] relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 floating-dots bg-black bg-opacity-90"></div>
      
      {/* Sticky container to keep content in view as we scroll */}
      <div className="sticky top-0 min-h-screen py-10 flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Comprehensive <span className="text-saakh-blue">Business Analysis</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl text-center">
              Get detailed insights and real-time data to make informed business decisions and prevent fraud.
            </p>
          </div>
          
          {isMobile ? (
            // Mobile view layout
            <div className="flex flex-col space-y-16">
              {/* First mobile screen */}
              <div className="flex flex-col items-center">
                <div className="mobile-device mx-auto mb-6">
                  <div className="relative rounded-[30px] overflow-hidden border-[6px] border-gray-800 bg-black shadow-2xl">
                    <div className="absolute top-0 w-full h-4 bg-black z-20 flex justify-center items-center">
                      <div className="w-16 h-3 bg-black rounded-b-lg"></div>
                    </div>
                    
                    <div className="h-[400px] w-[220px] overflow-hidden relative bg-gradient-to-b from-black to-gray-900">
                      {/* Mobile dashboard content */}
                      <div className="p-4">
                        <div className="text-white text-lg font-bold py-2">Dashboard</div>
                        <div className="flex justify-between my-3">
                          <div>
                            <div className="text-gray-400 text-xs">Earnings</div>
                            <div className="text-white font-bold">$ 85,222</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-xs">Expenses</div>
                            <div className="text-white font-bold">- $52,150</div>
                          </div>
                        </div>
                        
                        {/* Chart */}
                        <div className="h-[120px] bg-gray-900 rounded-lg my-3 flex items-end justify-between p-2">
                          {[40, 60, 30, 20, 50, 70, 45].map((height, i) => (
                            <div key={i} className="w-6 flex flex-col items-center">
                              <div className="h-16 w-full flex flex-col-reverse">
                                <div 
                                  className="w-full bg-saakh-blue rounded-t" 
                                  style={{height: `${height}%`}}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* First card for mobile */}
                <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full">
                  <div className="text-saakh-blue/80 text-sm mb-1">{featureCards[0].label}</div>
                  <h3 className="text-white text-xl font-bold mb-3">{featureCards[0].title}</h3>
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
              </div>
              
              {/* Second mobile screen */}
              <div className="flex flex-col items-center">
                <div className="mobile-device mx-auto mb-6">
                  <div className="relative rounded-[30px] overflow-hidden border-[6px] border-gray-800 bg-black shadow-2xl">
                    <div className="absolute top-0 w-full h-4 bg-black z-20 flex justify-center items-center">
                      <div className="w-16 h-3 bg-black rounded-b-lg"></div>
                    </div>
                    
                    <div className="h-[400px] w-[220px] overflow-hidden relative bg-gradient-to-b from-black to-gray-900">
                      {/* Mobile dashboard content */}
                      <div className="p-4">
                        <div className="text-white text-lg font-bold py-2">Financial Insights</div>
                        
                        {/* Pie chart mock */}
                        <div className="h-[120px] w-[120px] bg-gray-900 rounded-full my-4 mx-auto border border-saakh-blue"></div>
                        
                        <div className="flex justify-between my-3">
                          <div>
                            <div className="text-gray-400 text-xs">Category</div>
                            <div className="text-white font-bold">Food & Drink</div>
                          </div>
                          <div>
                            <div className="text-gray-400 text-xs">Total Spend</div>
                            <div className="text-white font-bold">$1,245.89</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Second card for mobile */}
                <div className="bg-black/30 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full">
                  <div className="text-saakh-blue/80 text-sm mb-1">{featureCards[1].label}</div>
                  <h3 className="text-white text-xl font-bold mb-3">{featureCards[1].title}</h3>
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
              </div>
              
              {/* Third mobile screen */}
              <div className="flex flex-col items-center">
                <div className="mobile-device mx-auto mb-6">
                  <div className="relative rounded-[30px] overflow-hidden border-[6px] border-gray-800 bg-black shadow-2xl">
                    <div className="absolute top-0 w-full h-4 bg-black z-20 flex justify-center items-center">
                      <div className="w-16 h-3 bg-black rounded-b-lg"></div>
                    </div>
                    
                    <div className="h-[400px] w-[220px] overflow-hidden relative bg-gradient-to-b from-black to-gray-900">
                      {/* Mobile dashboard content */}
                      <div className="p-4">
                        <div className="text-white text-lg font-bold py-2">Analytics</div>
                        
                        {/* Bar chart mock */}
                        <div className="h-[150px] bg-gray-900 rounded-lg my-3 flex items-end justify-between p-2">
                          {[60, 40, 80].map((height, i) => (
                            <div key={i} className="w-16 flex flex-col items-center">
                              <div className="h-24 w-full flex flex-col-reverse">
                                <div 
                                  className="w-full bg-saakh-blue rounded-t" 
                                  style={{height: `${height}%`}}
                                ></div>
                              </div>
                              <div className="text-gray-400 text-xs mt-2">
                                {['Q1', 'Q2', 'Q3'][i]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // Desktop view layout with scroll effects and sticky behavior
            <div className="flex justify-center relative h-[70vh]">
              {/* Mobile in center - always visible and sticky */}
              <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center z-20">
                <div className="relative rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-black shadow-2xl">
                  <div className="absolute top-0 w-full h-6 bg-black z-20 flex justify-center items-center">
                    <div className="w-20 h-4 bg-black rounded-b-lg"></div>
                  </div>
                  
                  <div className="h-[600px] w-[300px] overflow-hidden relative">
                    {/* Scrollable content in the phone */}
                    <div ref={mobileScreenRef} className="transition-transform duration-700 ease-out">
                      <div className="bg-gradient-to-b from-black to-gray-900 h-[1800px] w-full">
                        {/* Dashboard Content */}
                        <div className="p-4">
                          <div className="text-white text-xl font-bold py-2">Dashboard</div>
                          <div className="flex justify-between my-4">
                            <div>
                              <div className="text-gray-400 text-xs">Earnings</div>
                              <div className="text-white font-bold">$ 85,222.00</div>
                            </div>
                            <div>
                              <div className="text-gray-400 text-xs">Expenses</div>
                              <div className="text-white font-bold">- $52,150.50</div>
                            </div>
                          </div>
                          
                          {/* Chart */}
                          <div className="h-[180px] bg-gray-900 rounded-lg my-4 flex items-end justify-between p-2">
                            {[40, 60, 30, 20, 50, 70, 45].map((height, i) => (
                              <div key={i} className="w-8 flex flex-col items-center">
                                <div className="h-24 w-full flex flex-col-reverse">
                                  <div 
                                    className="w-full bg-saakh-blue rounded-t" 
                                    style={{height: `${height}%`}}
                                  ></div>
                                  <div 
                                    className="w-full bg-red-400 rounded-t" 
                                    style={{height: `${Math.min(100-height, 40)}%`}}
                                  ></div>
                                </div>
                                <div className="text-gray-400 text-xs mt-2">
                                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i]}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Transactions */}
                          <div className="text-white text-xl font-bold py-2 mt-4">Transactions</div>
                          
                          {[
                            {icon: "☕", name: "Coffee", category: "Restaurants", amount: "$3.99"},
                            {icon: "🍔", name: "Fast Food", category: "Restaurants", amount: "$12.99"},
                            {icon: "✈️", name: "Sunny Holidays", category: "Travel", amount: "$1,200.00"},
                            {icon: "👔", name: "Clothes", category: "Shopping", amount: "$250.00"}
                          ].map((tx, i) => (
                            <div key={i} className="flex items-center justify-between p-3 border-b border-gray-800">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                                  {tx.icon}
                                </div>
                                <div>
                                  <div className="text-white">{tx.name}</div>
                                  <div className="text-gray-400 text-xs">{tx.category}</div>
                                </div>
                              </div>
                              <div className="text-white">- {tx.amount}</div>
                            </div>
                          ))}
                          
                          {/* More charts */}
                          <div className="text-white text-xl font-bold py-2 mt-8">Monthly Expenses</div>
                          <div className="h-[160px] w-[160px] bg-gray-900 rounded-full my-4 mx-auto"></div>
                          
                          <div className="text-white text-xl font-bold py-2 mt-8">Yearly Expenses</div>
                          <div className="h-[180px] bg-gray-900 rounded-lg my-4 flex items-end justify-between p-2">
                            {[40, 70, 35].map((height, i) => (
                              <div key={i} className="w-20 flex flex-col items-center">
                                <div className="h-24 w-full flex flex-col-reverse">
                                  <div 
                                    className="w-full bg-saakh-blue rounded-t" 
                                    style={{height: `${height}%`}}
                                  ></div>
                                  <div 
                                    className="w-full bg-red-400 rounded-t" 
                                    style={{height: `${Math.min(100-height, 40)}%`}}
                                  ></div>
                                </div>
                                <div className="text-gray-400 text-xs mt-2">
                                  {['2022', '2023', '2024'][i]}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating labels around the phone - only visible in first phase */}
                {scrollPhase === 0 && (
                  <>
                    {labels.map((label, index) => (
                      <div 
                        key={index}
                        className={`absolute transition-all duration-500 ${
                          visibleLabels.includes(index) ? 'opacity-100' : 'opacity-0'
                        }`}
                        style={{ 
                          ...label.position,
                          transform: `translateY(${visibleLabels.includes(index) ? '0' : '-10px'})`,
                        }}
                      >
                        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                          <div className={`${label.color} text-sm mb-1`}>{label.text}</div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
              
              {/* Card 1 - Comes from bottom on the right side */}
              <div 
                className={`absolute aspect-square w-80 h-80 transition-all duration-700 ease-out`}
                style={{
                  right: '5%',
                  opacity: scrollPhase === 1 ? 1 : 0,
                  transform: `translateY(${
                    scrollPhase === 0 
                      ? '100vh' 
                      : (scrollPhase === 1 
                        ? `${(1 - scrollProgress) * 100}vh` 
                        : `-${scrollProgress * 100}vh`)
                  })`,
                  visibility: (scrollPhase === 0 && scrollProgress > 0.9) || scrollPhase >= 1 ? 'visible' : 'hidden',
                }}
              >
                <div className="feature-card w-full h-full p-8 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
                  <div className="text-saakh-blue/80 text-sm mb-1">{featureCards[0].label}</div>
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
              </div>
              
              {/* Card 2 - Comes from bottom on the left side */}
              <div 
                className={`absolute aspect-square w-80 h-80 transition-all duration-700 ease-out`}
                style={{
                  left: '5%',
                  opacity: scrollPhase === 2 ? 1 : 0,
                  transform: `translateY(${
                    scrollPhase < 2 
                      ? '100vh' 
                      : `${(1 - scrollProgress) * 100}vh`
                  })`,
                  visibility: (scrollPhase === 1 && scrollProgress > 0.9) || scrollPhase === 2 ? 'visible' : 'hidden',
                }}
              >
                <div className="feature-card w-full h-full p-8 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
                  <div className="text-saakh-blue/80 text-sm mb-1">{featureCards[1].label}</div>
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
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
