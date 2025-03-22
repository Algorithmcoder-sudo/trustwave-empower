
import React from 'react';

const TrustChecksSection = () => {
  const checks = [
    {
      icon: "info",
      title: "GST Fraud Detection",
      description: "Identify potential GST fraud and non-compliance to protect your business from risky partnerships."
    },
    {
      icon: "user",
      title: "Willful Defaulter Tracking",
      description: "Track and identify willful defaulters with comprehensive history and risk assessment reports."
    },
    {
      icon: "bank",
      title: "Bank Auction Alerts",
      description: "Receive alerts about businesses with properties under bank auction, a key indicator of financial distress."
    },
    {
      icon: "file",
      title: "Defaulter Suits Filed",
      description: "Monitor businesses facing legal action from banks due to default, helping you avoid risky partnerships."
    },
    {
      icon: "alert",
      title: "Bankruptcy Tracking",
      description: "Stay informed about businesses heading for bankruptcy to make informed decisions and mitigate risks."
    },
    {
      icon: "refresh",
      title: "Restructuring Status",
      description: "Identify businesses undergoing financial restructuring, indicating potential instability and risk."
    },
    {
      icon: "payment",
      title: "GST Payment Defaults",
      description: "Detect businesses that have defaulted on GST payments, a key indicator of financial mismanagement."
    },
    {
      icon: "warning",
      title: "Liquidation Status",
      description: "Monitor businesses under liquidation to avoid potential losses and ensure secure business relationships."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in mx-auto text-center">
          <span className="text-white/80">Why Choose Us</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Comprehensive <span className="text-saakh-blue">Trust &</span><br />
          <span className="text-saakh-blue">Compliance</span> Checks
        </h2>
        
        <p className="text-xl text-white/70 max-w-3xl mx-auto text-center mb-16">
          Our platform provides 50+ metrics to verify business compliance and trustworthiness
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {checks.map((check, index) => (
            <div 
              key={index} 
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transition-all duration-300 hover:bg-saakh-blue-dark/30 hover:shadow-neon-blue"
            >
              <div className="mb-4 p-3 inline-block rounded-lg bg-saakh-blue/20">
                <div className="w-6 h-6 text-saakh-blue flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{check.title}</h3>
              <p className="text-white/70">{check.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustChecksSection;
