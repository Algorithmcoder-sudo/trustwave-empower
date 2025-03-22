
import React from 'react';

const WhatWeSolve = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      {/* Title with shimmer effect */}
      <div className="container mx-auto px-6 relative z-10 mb-16">
        <div className="flex flex-col items-center">
          <h2 className="text-shimmer bg-shimmer-gradient mb-8">
            What is Saakh solving for?
          </h2>
          <div className="w-32 h-1 bg-saakh-blue rounded-full mb-12"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Prevent Fraud */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-neon-blue">
            <div className="p-8">
              <div className="flex items-start mb-6">
                <div className="mr-4 p-3 rounded-full bg-saakh-blue/20">
                  <svg className="w-6 h-6 text-saakh-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    <span className="text-saakh-blue">Prevent Fraud</span> and block defaulting customers
                  </h3>
                  <p className="text-white/70 mt-2 italic bg-black/30 p-2 rounded-lg">
                    "A non-compliant business is not likely to pay on time. True?"
                  </p>
                </div>
              </div>
              
              <div className="ml-16 mb-6">
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-saakh-blue/20 mr-2 flex items-center justify-center text-sm text-white">-</span>
                  Identify fraud & defaulters
                </h4>
                <ul className="space-y-2 pl-8">
                  {[
                    "GST Fraud",
                    "Willful Defaulter",
                    "Bank Auction",
                    "Defaulter suit filed by banks",
                    "Heading for Bankruptcy",
                    "In Restructuring",
                    "Defaulted on GST payment",
                    "Under liquidation"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-saakh-blue rounded-full mr-2"></span>
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="ml-16">
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-saakh-blue/20 mr-2 flex items-center justify-center text-sm text-white">-</span>
                  Decide if he will repay on time?
                </h4>
                <p className="text-white/80 pl-8">
                  Check non-compliances of any business, across 50+ metrics, just by searching his GSTN
                </p>
              </div>
            </div>
          </div>
          
          {/* Card 2: Vendor Credibility */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-neon-blue">
            <div className="p-8">
              <div className="flex items-start mb-6">
                <div className="mr-4 p-3 rounded-full bg-saakh-blue/20">
                  <svg className="w-6 h-6 text-saakh-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">
                    Conduct vendor <span className="text-saakh-blue">credibility checks</span>
                  </h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ml-16">
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-saakh-blue/20 mr-2 flex items-center justify-center text-sm text-white">-</span>
                    Decide credit limit
                  </h4>
                  <div className="pl-8">
                    <p className="text-white/80">Analyze business size and speed of growth:</p>
                    <ul className="space-y-1 mt-2">
                      {[
                        "Revenue",
                        "Employees count",
                        "Loans",
                        "Employee growth chart"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-saakh-blue rounded-full mr-2"></span>
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <span className="inline-block w-6 h-6 rounded-full bg-saakh-blue/20 mr-2 flex items-center justify-center text-sm text-white">-</span>
                    Contact Details
                  </h4>
                  <div className="pl-8">
                    <ul className="space-y-1">
                      {[
                        "Contact numbers",
                        "Email IDs & Addresses",
                        "Management information"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-saakh-blue rounded-full mr-2"></span>
                          <span className="text-white/80">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 ml-16">
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-saakh-blue/20 mr-2 flex items-center justify-center text-sm text-white">-</span>
                  Aggregate ratings & reviews
                </h4>
                <div className="pl-8">
                  <p className="text-white/80 mb-2">Trust seals, Ratings & Reviews & certificates from:</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Google", color: "bg-white" },
                      { name: "IndiaMART", color: "bg-red-500" },
                      { name: "JustDial", color: "bg-green-500" },
                      { name: "Trade India", color: "bg-yellow-500" }
                    ].map((platform, i) => (
                      <div key={i} className="px-3 py-1 rounded-full border border-white/10 text-sm flex items-center">
                        <div className={`w-2 h-2 rounded-full ${platform.color} mr-2`}></div>
                        <span className="text-white/80">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 ml-16">
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-saakh-blue/20 mr-2 flex items-center justify-center text-sm text-white">-</span>
                  Social media presence
                </h4>
                <div className="pl-8">
                  <p className="text-white/80 mb-2">Follower counts, no of posts, post engagement:</p>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { name: "Instagram", color: "bg-pink-500" },
                      { name: "Facebook", color: "bg-blue-600" },
                      { name: "LinkedIn", color: "bg-blue-700" },
                      { name: "YouTube", color: "bg-red-600" }
                    ].map((platform, i) => (
                      <div key={i} className="px-3 py-1 rounded-full border border-white/10 text-sm flex items-center">
                        <div className={`w-2 h-2 rounded-full ${platform.color} mr-2`}></div>
                        <span className="text-white/80">{platform.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 ml-16">
                <h4 className="text-xl font-semibold mb-3 flex items-center">
                  <span className="inline-block w-6 h-6 rounded-full bg-saakh-blue/20 mr-2 flex items-center justify-center text-sm text-white">-</span>
                  Data from web
                </h4>
                <div className="pl-8">
                  <div className="flex items-center">
                    <div className="px-3 py-1 rounded-full border border-white/10 text-sm flex items-center mr-4">
                      <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-white/80">ChatGPT</span>
                    </div>
                    <span className="text-white/80">Website data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeSolve;
