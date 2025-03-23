import React, { useEffect, useRef, useState } from 'react';

const FeatureSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobileScreenRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCard, setActiveCard] = useState(-1); // -1: no card, 0,1,2: card index
  
  // Labels state
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
    { text: "+ $4,250 Salary", color: "text-saakh-blue", position: { left: "-270px", top: "100px" } },
    { text: "- $3.99 Coffee", color: "text-saakh-cyan", position: { right: "-220px", top: "80px" } },
    { text: "- $1,200 Holidays", color: "text-red-400", position: { left: "-270px", top: "250px" } },
    { text: "+ $250 Dividend", color: "text-yellow-400", position: { right: "-220px", top: "230px" } }
  ];

  // Effect to randomly show/hide labels in the first phase
  useEffect(() => {
    if (activeCard === -1) {
      // Only run the label animation in the first phase (before any cards)
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
    } else {
      // Clear all labels when we move to the cards phase
      setVisibleLabels([]);
    }
  }, [activeCard, visibleLabels]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const sectionRect = section.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Determine overall progress through the section
      const totalScrollableHeight = sectionHeight;
      const scrollPosition = Math.max(0, -sectionTop + windowHeight * 0.1); // Small offset for better timing
      const scrollRatio = Math.min(1, scrollPosition / totalScrollableHeight);
      
      setScrollProgress(scrollRatio);
      
      // Section is split into 4 phases:
      // 1. Initial phone with labels (0-0.25)
      // 2. Card 1 animation (0.25-0.5)
      // 3. Card 2 animation (0.5-0.75)
      // 4. Card 3 animation (0.75-1.0)
      
      if (scrollRatio < 0.25) {
        setActiveCard(-1); // No cards visible yet
      } else if (scrollRatio < 0.5) {
        setActiveCard(0); // First card
      } else if (scrollRatio < 0.75) {
        setActiveCard(1); // Second card
      } else {
        setActiveCard(2); // Third card
      }
      
      // Update mobile screen scroll based on overall progress
      if (mobileScreenRef.current) {
        const maxScroll = 1200; // Adjust this based on the actual height of your screenshot
        const scrollY = scrollRatio * maxScroll;
        mobileScreenRef.current.style.transform = `translateY(-${scrollY}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial call to set up correct state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate progress for the current card transition (normalized to 0-1 range)
  const getCurrentCardProgress = () => {
    if (activeCard === -1) return 0;
    
    const baseProgress = scrollProgress - 0.25 * (activeCard + 1);
    return Math.min(1, Math.max(0, baseProgress * 4));
  };

  // Calculate transition for the previous card (as it exits)
  const getPrevCardProgress = () => {
    if (activeCard <= 0) return 0;
    
    const baseProgress = scrollProgress - 0.25 * activeCard;
    return Math.min(1, Math.max(0, baseProgress * 4));
  };

  const cardProgress = getCurrentCardProgress();
  const prevCardProgress = getPrevCardProgress();

  return (
    <section 
      ref={sectionRef} 
      className="min-h-[400vh] relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 floating-dots bg-black bg-opacity-90"></div>
      
      {/* Sticky container to keep content in view as we scroll through the phases */}
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
            <div className="lg:w-1/3 flex justify-center relative">
              <div 
                className="relative rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-black shadow-2xl"
              >
                <div className="absolute top-0 w-full h-6 bg-black z-20 flex justify-center items-center">
                  <div className="w-20 h-4 bg-black rounded-b-lg"></div>
                </div>
                
                <div className="h-[600px] w-[300px] overflow-hidden relative">
                  {/* Scrollable content in the phone */}
                  <div ref={mobileScreenRef} className="transition-transform duration-700 ease-out">
                    <div className="bg-black text-white">
                      {/* App screenshot - placeholder for now */}
                      <div className="h-[1800px] bg-gradient-to-b from-black to-gray-900 w-full">
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
                          
                          <div className="text-white text-xl font-bold py-2 mt-4">Transactions</div>
                          
                          {/* Transactions */}
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
                          
                          {/* More chart sections */}
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
              </div>
              
              {/* Floating labels around the phone - only visible in initial phase */}
              {labels.map((label, index) => (
                <div 
                  key={index}
                  className={`absolute transition-all duration-500 ${
                    visibleLabels.includes(index) ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ 
                    ...label.position,
                    transform: `translateY(${visibleLabels.includes(index) ? '0' : '-10px'})`,
                    transition: 'opacity 0.5s ease, transform 0.5s ease',
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                    <div className={`${label.color} text-sm mb-1`}>{label.text}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Feature cards container */}
            <div className="lg:w-2/3 relative h-screen">
              {/* Card 1 */}
              {activeCard >= 0 && (
                <div 
                  className="feature-card w-full p-8 lg:p-10 bg-black/30 backdrop-blur-md border border-white/5 rounded-xl shadow-lg transition-all duration-1000 absolute right-0"
                  style={{
                    opacity: activeCard === 0 ? cardProgress : (activeCard === 1 ? 1 - prevCardProgress : 0),
                    transform: activeCard === 0 
                      ? `translateY(${(1 - cardProgress) * 100}vh)` 
                      : (activeCard === 1 
                        ? `translateY(${-prevCardProgress * 100}vh)` 
                        : 'translateY(100vh)'),
                    visibility: activeCard >= 0 && activeCard <= 1 ? 'visible' : 'hidden'
                  }}
                >
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
              )}
              
              {/* Card 2 */}
              {activeCard >= 1 && (
                <div 
                  className="feature-card w-full p-8 lg:p-10 bg-black/30 backdrop-blur-md border border-white/5 rounded-xl shadow-lg transition-all duration-1000 absolute right-0"
                  style={{
                    opacity: activeCard === 1 ? cardProgress : (activeCard === 2 ? 1 - prevCardProgress : 0),
                    transform: activeCard === 1 
                      ? `translateY(${(1 - cardProgress) * 100}vh)` 
                      : (activeCard === 2 
                        ? `translateY(${-prevCardProgress * 100}vh)` 
                        : 'translateY(100vh)'),
                    visibility: activeCard >= 1 && activeCard <= 2 ? 'visible' : 'hidden'
                  }}
                >
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
              )}
              
              {/* Card 3 */}
              {activeCard >= 2 && (
                <div 
                  className="feature-card w-full p-8 lg:p-10 bg-black/30 backdrop-blur-md border border-white/5 rounded-xl shadow-lg transition-all duration-1000 absolute right-0"
                  style={{
                    opacity: activeCard === 2 ? cardProgress : 0,
                    transform: `translateY(${(1 - cardProgress) * 100}vh)`,
                    visibility: activeCard === 2 ? 'visible' : 'hidden'
                  }}
                >
                  <div className="text-saakh-blue/80 text-sm mb-1">{featureCards[2].label}</div>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
