
import React, { useEffect, useRef, useState } from 'react';

const FeatureSection = () => {
  const mobileScreenRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const featureCards = [
    {
      id: 1,
      title: "Financial Dashboard",
      description: "Access all your financial data at a glance, streamlining your management process.",
      position: "left",
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
      position: "right",
      items: [
        "Spending analytics",
        "Custom reports",
        "Investment tracking"
      ]
    },
    {
      id: 3,
      title: "Payment Management",
      description: "Simplify payment processes with automated scheduling and tracking.",
      position: "left",
      items: [
        "Automated payments",
        "Payment reminders",
        "Transaction history"
      ]
    },
    {
      id: 4,
      title: "Business Analytics",
      description: "Make data-driven decisions with powerful business performance metrics.",
      position: "right",
      items: [
        "Revenue tracking",
        "Expense monitoring",
        "Growth projections"
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the section (0 to 1)
      let progress = 1 - (containerTop / (windowHeight - containerHeight * 0.5));
      progress = Math.max(0, Math.min(1, progress));
      
      setScrollPosition(progress);
      
      // Update mobile screen content scroll position
      if (mobileScreenRef.current) {
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
            <div className="relative rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-black shadow-2xl">
              <div className="absolute top-0 w-full h-6 bg-black z-20 flex justify-center items-center">
                <div className="w-20 h-4 bg-black rounded-b-lg"></div>
              </div>
              
              <div className="h-[600px] w-[300px] overflow-hidden relative">
                {/* Scrollable content in the phone */}
                <div ref={mobileScreenRef} className="transition-transform duration-300 ease-out">
                  <div className="bg-black text-white p-4">
                    <div className="text-center pb-4">
                      <h3 className="text-xl">Dashboard</h3>
                    </div>
                    
                    {/* Dashboard Screen */}
                    <div className="rounded-lg bg-gray-900 p-4 mb-6">
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="bg-gray-800 p-3 rounded-lg">
                          <div className="text-xs text-gray-400">Earnings</div>
                          <div className="text-xl font-bold">$ 85,222.00</div>
                        </div>
                        <div className="bg-gray-800 p-3 rounded-lg">
                          <div className="text-xs text-gray-400">Expenses</div>
                          <div className="text-xl font-bold">- $52,150.50</div>
                        </div>
                      </div>
                      
                      {/* Chart */}
                      <div className="h-40 bg-gray-800 rounded-lg mb-4 p-3">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-saakh-cyan mr-1"></div>
                            <span className="text-xs">Earnings</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                            <span className="text-xs">Expenses</span>
                          </div>
                        </div>
                        
                        <div className="h-24 flex items-end justify-between">
                          {[70, 85, 40, 30, 65, 80, 55].map((height, i) => (
                            <div key={i} className="w-[8%] relative">
                              <div className="absolute bottom-0 w-full bg-saakh-cyan rounded-t" style={{ height: `${height}%` }}></div>
                              <div className="absolute bottom-0 w-full bg-red-400 rounded-t" style={{ height: `${height * 0.6}%` }}></div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between mt-1">
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, i) => (
                            <div key={i} className="text-[8px] text-gray-400">{month}</div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Transactions */}
                      <div>
                        <div className="flex justify-between mb-2">
                          <h4 className="text-sm font-medium">Transactions</h4>
                          <span className="text-xs text-saakh-blue">View All</span>
                        </div>
                        
                        {[
                          { name: 'Coffee', category: 'Restaurant', amount: '- $ 3.99' },
                          { name: 'Fast Food', category: 'Restaurant', amount: '- $ 12.99' },
                          { name: 'Sunny Holidays', category: 'Travel', amount: '- $ 1,200.00' },
                          { name: 'Clothes', category: 'Shopping', amount: '- $ 250.00' }
                        ].map((transaction, i) => (
                          <div key={i} className="flex justify-between items-center p-2 border-b border-gray-800">
                            <div>
                              <div className="text-sm">{transaction.name}</div>
                              <div className="text-xs text-gray-400">{transaction.category}</div>
                            </div>
                            <div className="text-sm">{transaction.amount}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Analytics Screen */}
                    <div className="rounded-lg bg-gray-900 p-4 mb-6">
                      <div className="text-center mb-4">
                        <h3 className="text-xl">Monthly Expenses</h3>
                      </div>
                      
                      {/* Pie Chart */}
                      <div className="h-40 relative mb-4 flex justify-center items-center">
                        <div className="w-32 h-32 rounded-full border-8 border-red-400 relative">
                          <div className="absolute inset-0 border-8 border-transparent border-t-yellow-400 border-r-yellow-400 rounded-full"></div>
                          <div className="absolute inset-0 border-8 border-transparent border-b-saakh-cyan rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Yearly Expenses */}
                      <div>
                        <h4 className="text-sm font-medium mb-2">Yearly Expenses</h4>
                        
                        <div className="flex items-center mb-2">
                          <div className="flex items-center mr-4">
                            <div className="w-3 h-3 rounded-full bg-saakh-cyan mr-1"></div>
                            <span className="text-xs">Earnings</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-red-400 mr-1"></div>
                            <span className="text-xs">Expenses</span>
                          </div>
                        </div>
                        
                        <div className="h-24 flex items-end justify-between">
                          {[65, 80, 40].map((height, i) => (
                            <div key={i} className="w-[28%] relative">
                              <div className="absolute bottom-0 w-full bg-saakh-cyan rounded-t" style={{ height: `${height}%` }}></div>
                              <div className="absolute bottom-0 w-full bg-red-400 rounded-t" style={{ height: `${height * 0.7}%` }}></div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between mt-1">
                          {['Jan', 'Feb', 'Mar'].map((month, i) => (
                            <div key={i} className="text-xs text-gray-400">{month}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Navigation */}
                    <div className="flex justify-around pt-4">
                      {['Dashboard', 'Analytics', 'Contacts', 'Account'].map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${i === 0 || i === 1 ? 'bg-saakh-blue/20' : 'bg-gray-800'}`}>
                            <div className={`w-3 h-3 rounded-full ${i === 0 || i === 1 ? 'bg-saakh-blue' : 'bg-gray-600'}`}></div>
                          </div>
                          <span className="text-xs mt-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating labels around the phone */}
            <div className="absolute z-10">
              <div className={`absolute transition-all duration-500 ${
                scrollPosition > 0.1 && scrollPosition < 0.4 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`} style={{ left: '-270px', top: '100px' }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                  <div className="text-saakh-blue text-sm mb-1">+ $4,250 Salary</div>
                </div>
              </div>
              
              <div className={`absolute transition-all duration-500 ${
                scrollPosition > 0.15 && scrollPosition < 0.45 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`} style={{ right: '-220px', top: '80px' }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                  <div className="text-saakh-cyan text-sm mb-1">- $3.99 Coffee</div>
                </div>
              </div>
              
              <div className={`absolute transition-all duration-500 ${
                scrollPosition > 0.25 && scrollPosition < 0.55 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`} style={{ left: '-270px', top: '250px' }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                  <div className="text-red-400 text-sm mb-1">- $1,200 Holidays</div>
                </div>
              </div>
              
              <div className={`absolute transition-all duration-500 ${
                scrollPosition > 0.35 && scrollPosition < 0.65 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`} style={{ right: '-220px', top: '230px' }}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg p-4 shadow-neon-blue w-64">
                  <div className="text-yellow-400 text-sm mb-1">+ $250 Dividend</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature cards on sides - visible based on scroll position */}
          <div className="lg:absolute inset-0 w-full">
            <div className="container mx-auto h-full">
              <div className="grid grid-cols-1 lg:grid-cols-3 h-full">
                {/* Left column for cards */}
                <div className="space-y-24 py-24">
                  {featureCards.filter(card => card.position === 'left').map((card, index) => (
                    <div 
                      key={card.id}
                      className={`feature-card transition-all duration-700 transform ${
                        scrollPosition > (index * 0.25) && scrollPosition < ((index + 1) * 0.25 + 0.25) 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 -translate-x-20'
                      }`}
                    >
                      <div className="text-saakh-blue/80 text-sm mb-1">{card.id === 1 ? 'DASHBOARD' : 'ANALYTICS'}</div>
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
                  ))}
                </div>
                
                {/* Center column for phone - empty */}
                <div></div>
                
                {/* Right column for cards */}
                <div className="space-y-24 py-24">
                  {featureCards.filter(card => card.position === 'right').map((card, index) => (
                    <div 
                      key={card.id}
                      className={`feature-card transition-all duration-700 transform ${
                        scrollPosition > (index * 0.25 + 0.125) && scrollPosition < ((index + 1) * 0.25 + 0.375) 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-20'
                      }`}
                    >
                      <div className="text-saakh-blue/80 text-sm mb-1">{card.id === 2 ? 'FINANCIAL OVERVIEW' : 'BUSINESS REPORTS'}</div>
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
