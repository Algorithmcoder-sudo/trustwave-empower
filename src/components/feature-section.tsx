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
      className="min-h-[100vh] relative overflow-hidden bg-black" // Reduced height since we're only showing the mobile part
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
          // Desktop view layout - now only showing the mobile with business profile content
          <div className="h-[100vh] relative flex justify-center items-center py-20">
            {/* Mobile device with scrollable content */}
            <div ref={mobileDeviceRef} className="relative">
              <div className="relative rounded-[40px] overflow-hidden border-[8px] border-gray-800 bg-white shadow-2xl">
                <div className="absolute top-0 w-full h-6 bg-black z-20 flex justify-center items-center">
                  <div className="w-20 h-4 bg-black rounded-b-lg"></div>
                </div>
                
                <div className="h-[600px] w-[300px] overflow-y-auto relative bg-white">
                  {/* Company Profile Content */}
                  <div className="bg-white">
                    {/* Header with back button and verified icon */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-600 mr-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        <div className="text-xs text-gray-500">verified</div>
                      </div>
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2z" />
                      </svg>
                    </div>
                    
                    {/* Company Profile */}
                    <div className="p-4 flex items-start">
                      <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 mr-3">
                        <img src="/lovable-uploads/606e2688-1f8c-488b-9f24-1940aae820f6.png" alt="Company logo" className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <h1 className="font-bold text-lg">R. K. INFRATEL LIMITED</h1>
                        <p className="text-xs text-gray-500">Internet service provider |PUBLIC LIMITED</p>
                        <p className="text-xs text-gray-500">Founded in 1993</p>
                        <div className="flex items-center text-xs mt-2">
                          <svg className="w-4 h-4 text-gray-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span>Surat</span>
                          <div className="h-3 border-l border-gray-300 mx-2"></div>
                          <span>Rajaendra rachamalla sheth</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Tabs */}
                    <div className="flex overflow-x-auto border-b text-xs text-gray-600 px-4">
                      <div className="border-b-2 border-blue-500 px-4 py-2 text-blue-500 whitespace-nowrap">Business Summary</div>
                      <div className="px-4 py-2 whitespace-nowrap">Compliance Risks</div>
                      <div className="px-4 py-2 whitespace-nowrap">Defaults & Fraud</div>
                    </div>
                    
                    {/* Business Summary Card */}
                    <div className="p-4">
                      <div className="flex items-center justify-between">
                        <h2 className="font-bold text-lg">Business Summary</h2>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      
                      {/* Company Description */}
                      <div className="mt-4">
                        <h3 className="font-medium">Company Description</h3>
                        <p className="text-xs text-gray-600 mt-1">
                          Established and begun functioning in 1993 as R. K. Cable, 
                          Net Det Ltd. which Presently is known as R.K. INFRATEL Ltd.
                        </p>
                      </div>
                      
                      {/* Ratings & Photos */}
                      <div className="flex justify-between mt-4">
                        <div>
                          <div className="text-sm font-medium">Ratings</div>
                          <div className="flex items-center mt-1">
                            <div className="text-lg font-bold mr-1">3</div>
                            <div className="flex">
                              {[1, 2, 3].map(star => (
                                <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                              {[4, 5].map(star => (
                                <svg key={star} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <div className="text-xs text-gray-500 ml-1">(based on feedback)</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-medium">Photos</div>
                          <div className="w-12 h-12 bg-gray-200 rounded-md mt-1 overflow-hidden">
                            <img src="/lovable-uploads/606e2688-1f8c-488b-9f24-1940aae820f6.png" className="w-full h-full object-cover" alt="Company" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Address */}
                      <div className="mt-4">
                        <h3 className="font-medium">Address:</h3>
                        <p className="text-xs text-gray-600 mt-1">
                          10th floor, No.24, Sundar Chambers, Ashram Path, 
                          Ashram Road, Gujarat - 395000
                        </p>
                        <div className="flex mt-2 space-x-2">
                          <button className="bg-blue-100 text-blue-500 text-xs py-1 px-3 rounded-full">Directions</button>
                          <button className="bg-blue-100 text-blue-500 text-xs py-1 px-3 rounded-full">Website</button>
                          <button className="bg-blue-500 text-white text-xs py-1 px-3 rounded-full flex items-center">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Contact
                          </button>
                        </div>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex justify-between mt-4">
                        <button className="bg-blue-100 text-blue-500 text-xs py-1 px-3 rounded-full">ratings</button>
                        <button className="bg-blue-100 text-blue-500 text-xs py-1 px-3 rounded-full">reviews</button>
                        <button className="bg-blue-100 text-blue-500 text-xs py-1 px-3 rounded-full">photos</button>
                      </div>
                    </div>
                    
                    {/* Compliance Risks Card */}
                    <div className="p-4 border-t mt-2">
                      <div className="flex items-center justify-between">
                        <h2 className="font-bold text-lg">Compliance Risks</h2>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      
                      <div className="flex items-center mt-4">
                        <div className="mr-6">
                          <div className="text-sm font-medium">Active</div>
                          <div className="text-sm font-medium">Non-Compliances</div>
                        </div>
                        <div className="flex items-baseline">
                          <span className="text-3xl font-bold text-red-500">7</span>
                          <span className="text-xs text-gray-500">/95</span>
                        </div>
                      </div>
                      
                      {/* Non-compliance tags */}
                      <div className="mt-4">
                        <div className="text-xs text-gray-500 mb-2">Type of Non-Compliances</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-500 text-white text-xs py-1 px-3 rounded-full">SEVERE (1)</span>
                          <span className="bg-orange-500 text-white text-xs py-1 px-3 rounded-full">HIGH (2)</span>
                          <span className="bg-yellow-400 text-white text-xs py-1 px-3 rounded-full">PF Deduction Default</span>
                          <span className="bg-yellow-400 text-white text-xs py-1 px-3 rounded-full">Staff PF</span>
                          <span className="bg-blue-400 text-white text-xs py-1 px-3 rounded-full">IRDA/Structural</span>
                          <span className="bg-blue-400 text-white text-xs py-1 px-3 rounded-full">GST Cancelled</span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 text-right">Tap to see details</div>
                      </div>
                    </div>
                    
                    {/* Defaults & Frauds Card */}
                    <div className="p-4 border-t mt-2">
                      <div className="flex items-center justify-between">
                        <h2 className="font-bold text-lg">Defaults & Frauds</h2>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm font-medium mb-2">ACTIVE RISKS (10)</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-red-500 text-white text-xs py-1 px-3 rounded-full">PF Deduction Default</span>
                          <span className="bg-red-500 text-white text-xs py-1 px-3 rounded-full">Staff PF</span>
                          <span className="bg-red-400 text-white text-xs py-1 px-3 rounded-full">IRDA/Structural</span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <div className="text-sm font-medium mb-2">PASSED CHECKS (10)</div>
                        <div className="flex flex-wrap gap-2">
                          <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">GST Transaction History</span>
                          <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">GST Black Listed</span>
                          <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">RBI Defaulter List</span>
                          <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">TDS Default Default</span>
                          <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">CIBIL Default</span>
                          <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">GST Fraud</span>
                          <span className="bg-green-500 text-white text-xs py-1 px-3 rounded-full">Bank Auction</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Business Reputation */}
                    <div className="p-4 border-t mt-2">
                      <h2 className="
