
import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileDeviceRef = useRef<HTMLDivElement>(null);
  const [scrollPhase, setScrollPhase] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isMobile = useIsMobile();
  
  // Labels state for fading animation
  const [visibleLabels, setVisibleLabels] = useState<number[]>([]);
  
  const featureCards = [
    {
      id: 1,
      title: "Financial Overview",
      label: "DASHBOARD",
      description: "Access all your financial data at a glance, streamlining your management process and enhancing your financial decision-making.",
      items: [
        "Real-time balance updates",
        "Transaction categorization",
        "Budget tracking"
      ]
    },
    {
      id: 2,
      title: "Financial Insights",
      label: "ANALYTICS",
      description: "Gain comprehensive insights into your spending patterns and financial behaviors with detailed analytics, empowering informed financial choices.",
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
    { text: "+ $4,250 Salary", color: "text-saakh-blue", position: { left: "-290px", top: "100px" }, icon: "💵" },
    { text: "- $3.99 Coffee", color: "text-saakh-cyan", position: { right: "-290px", top: "80px" }, icon: "☕" },
    { text: "- $1,200 Holidays", color: "text-red-400", position: { left: "-290px", top: "250px" }, icon: "✈️" },
    { text: "+ $250 Dividend", color: "text-yellow-400", position: { right: "-290px", top: "230px" }, icon: "💰" }
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
      
      // We'll divide our section into 2 phases - first with phone only, second with card 1, third with card 2
      const scrollPosition = Math.max(0, -sectionTop + windowHeight * 0.1);
      
      // Each phase is one screen height worth of scrolling
      const phaseHeight = windowHeight * 0.8; // 80% of screen height per phase
      const currentPhase = Math.min(2, Math.floor(scrollPosition / phaseHeight));
      const phaseProgress = (scrollPosition % phaseHeight) / phaseHeight;
      
      setScrollPhase(currentPhase);
      setScrollProgress(phaseProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set up correct state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[200vh] relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 floating-dots bg-black bg-opacity-90"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-8 pt-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Comprehensive <span className="text-saakh-blue">Business Analysis</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl text-center">
            Get detailed insights and real-time data to make informed business decisions and prevent fraud.
          </p>
        </div>
        
        {isMobile ? (
          // Mobile view layout
          <div className="flex flex-col space-y-8 pb-16">
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
                          <div className="text-white font-bold">$ 85,222.00</div>
                        </div>
                        <div>
                          <div className="text-gray-400 text-xs">Expenses</div>
                          <div className="text-white font-bold">- $52,150.50</div>
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
                      <div className="text-white text-lg font-bold py-2 mt-2">Transactions</div>
                      <div className="flex items-center justify-between p-3 border-b border-gray-800">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center mr-3">
                            ☕
                          </div>
                          <div>
                            <div className="text-white">Coffee</div>
                            <div className="text-gray-400 text-xs">Restaurants</div>
                          </div>
                        </div>
                        <div className="text-white">- $3.99</div>
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
                      <div className="w-8 h-8 rounded-full bg-saakh-blue/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-saakh-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
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
                      
                      <div className="flex justify-between my-3">
                        <div>
                          <div className="text-gray-400 text-xs">Earnings</div>
                          <div className="text-white font-bold">$ 85,222.00</div>
                        </div>
                      </div>
                      
                      {/* Monthly Expenses */}
                      <div className="text-gray-300 text-sm mt-4">Monthly Expenses</div>
                      
                      {/* Pie chart mock */}
                      <div className="h-[120px] w-[120px] relative bg-transparent rounded-full my-4 mx-auto">
                        <div className="absolute inset-0 rounded-full" style={{ 
                          background: 'conic-gradient(#f87171 0% 45%, #eab308 45% 65%, #4ade80 65% 100%)'
                        }}></div>
                        <div className="absolute inset-[15%] bg-gray-900 rounded-full"></div>
                      </div>
                      
                      {/* Yearly Expenses */}
                      <div className="text-gray-300 text-sm mt-4">Yearly Expenses</div>
                      
                      {/* Chart */}
                      <div className="h-[100px] bg-gray-900 rounded-lg mt-2 flex items-end justify-between p-2">
                        {[70, 80, 60].map((height, i) => (
                          <div key={i} className="w-16 flex flex-col items-center">
                            <div className="h-16 w-full flex flex-col-reverse">
                              <div 
                                className="w-full bg-saakh-blue rounded-t" 
                                style={{height: `${height}%`}}
                              ></div>
                              <div 
                                className="w-full bg-red-400 rounded-t" 
                                style={{height: `${Math.min(100-height, 30)}%`}}
                              ></div>
                            </div>
                            <div className="text-gray-400 text-xs mt-2">
                              {['Jan', 'Feb', 'Mar'][i]}
                            </div>
                          </div>
                        ))}
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
                      <div className="w-8 h-8 rounded-full bg-saakh-blue/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-saakh-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ) : (
          // Desktop view layout with scroll effects and sticky behavior
          <div className="h-[180vh] relative">
            {/* Sticky container for the mobile device and labels */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">
              {/* Mobile in center with labels */}
              <div ref={mobileDeviceRef} className="relative">
                <div className="relative rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-black shadow-2xl">
                  <div className="absolute top-0 w-full h-6 bg-black z-20 flex justify-center items-center">
                    <div className="w-20 h-4 bg-black rounded-b-lg"></div>
                  </div>
                  
                  <div className="h-[600px] w-[300px] overflow-hidden relative">
                    {/* Fixed content in the phone instead of scrolling */}
                    <div className="bg-gradient-to-b from-black to-gray-900 h-[600px] w-full">
                      <div className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-white text-xl font-bold py-2">Dashboard</div>
                          <div className="text-white opacity-50">⋮</div>
                        </div>
                        <div className="flex justify-between my-4">
                          <div className="flex-1 bg-black/40 p-3 rounded-lg mr-2">
                            <div className="text-gray-400 text-xs">Earnings</div>
                            <div className="text-white font-bold">$ 85,222.00</div>
                          </div>
                          <div className="flex-1 bg-black/40 p-3 rounded-lg">
                            <div className="text-gray-400 text-xs">Expenses</div>
                            <div className="text-white font-bold">- $52,150.50</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between mt-6 mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-saakh-blue mr-1"></div>
                            <span className="text-xs text-gray-300">Earnings</span>
                          </div>
                          <div className="flex items-center ml-4">
                            <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                            <span className="text-xs text-gray-300">Expenses</span>
                          </div>
                          <div className="flex items-center ml-auto">
                            <span className="text-xs bg-black/30 text-gray-300 px-2 py-1 rounded">Year ▼</span>
                          </div>
                        </div>
                        
                        {/* Chart */}
                        <div className="h-[180px] bg-black/20 rounded-lg my-4 flex items-end justify-between p-4">
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
                        <div className="flex items-center justify-between">
                          <div className="text-white text-lg font-bold py-2 mt-4">Transactions</div>
                          <div className="text-saakh-blue text-xs">View All →</div>
                        </div>
                        
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
                        <div className="bg-black/40 backdrop-blur-lg border border-white/10 rounded-lg p-3 px-4 shadow-neon-blue flex items-center">
                          <div className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center mr-3 text-xl">
                            {label.icon}
                          </div>
                          <div className={`${label.color} text-sm`}>{label.text}</div>
                        </div>
                      </div>
                    ))}
                  </>
                )}
                
                {/* Glowing orb behind phone */}
                <div className="absolute w-64 h-64 bg-saakh-blue/20 rounded-full filter blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-soft"></div>
              </div>
            </div>
            
            {/* Card 1 - Comes from bottom on the right side */}
            <div 
              className="absolute w-[400px] transition-all duration-700 ease-out"
              style={{
                opacity: (scrollPhase >= 1 || (scrollPhase === 0 && scrollProgress > 0.7)) ? 1 : 0,
                right: '10%',
                top: `calc(50vh - 200px + ${
                  scrollPhase === 0 
                    ? `${(1 - scrollProgress) * 50}vh` 
                    : '0vh'
                })`,
                visibility: (scrollPhase === 0 && scrollProgress > 0.5) || scrollPhase >= 1 ? 'visible' : 'hidden',
              }}
            >
              <div className="feature-card w-full p-8 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
                <div className="text-saakh-blue/80 text-sm mb-1">{featureCards[0].label}</div>
                <h3 className="text-white text-4xl font-bold mb-3">
                  Financial<br />Overview
                </h3>
                <p className="text-white/70 mb-6">{featureCards[0].description}</p>
                <ul className="space-y-4">
                  {featureCards[0].items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-saakh-blue/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-saakh-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Card 2 - Comes from bottom on the left side */}
            <div 
              className="absolute w-[400px] transition-all duration-700 ease-out" 
              style={{
                opacity: (scrollPhase >= 1 && scrollProgress > 0.5) ? 1 : 0,
                left: '10%',
                top: `calc(50vh - 200px + ${
                  scrollPhase < 1 || scrollProgress < 0.3
                    ? '50vh' 
                    : `${(1 - scrollProgress) * 80}vh`
                })`,
                visibility: (scrollPhase === 1 && scrollProgress > 0.3) ? 'visible' : 'hidden',
              }}
            >
              <div className="feature-card w-full p-8 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl shadow-lg">
                <div className="text-saakh-blue/80 text-sm mb-1">{featureCards[1].label}</div>
                <h3 className="text-white text-4xl font-bold mb-3">
                  Financial<br />Insights
                </h3>
                <p className="text-white/70 mb-6">{featureCards[1].description}</p>
                <ul className="space-y-4">
                  {featureCards[1].items.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-saakh-blue/20 flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-saakh-blue" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/80 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureSection;
