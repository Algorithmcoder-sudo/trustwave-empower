
import React from 'react';

const SourcesSection = () => {
  // Define the sources data
  const sourceGroups = [
    [
      "GST", "UDYAM", "PAN", "TAN", "IEC", "EPF", 
      "MCA", { name: "RBI", logo: true }, { name: "SEBI", logo: true }, "BSE", "NSE", "LEI", "IBBI"
    ],
    [
      "BIFR", "SFIO", "Credit Rating Agencies", 
      "DIN", "TDS", "Website", { name: "Google", logo: true }, { name: "ChatGPT", logo: true }, { name: "IndiaMART", logo: true }
    ],
    [
      { name: "JustDial", logo: true }, { name: "TradeIndia", logo: true }, 
      { name: "LinkedIn", logo: true }, { name: "Facebook", logo: true }, 
      { name: "Instagram", logo: true }, { name: "YouTube", logo: true }
    ]
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Our <span className="text-saakh-blue">Sources</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl text-center">
            Get comprehensive data from over 350+ data points from various trusted sources
          </p>
        </div>
        
        <div className="space-y-12">
          {sourceGroups.map((group, groupIndex) => (
            <div 
              key={groupIndex} 
              className={`marquee-container ${groupIndex % 2 === 0 ? '' : 'flex-row-reverse'}`}
            >
              <div className={groupIndex % 2 === 0 ? 'marquee-content' : 'marquee-content-reverse'}>
                {group.map((source, index) => (
                  <div key={index} className="source-item">
                    {typeof source === 'string' ? (
                      <span className="text-white">{source}</span>
                    ) : (
                      <span className="text-white flex items-center">
                        <span className="w-2 h-2 bg-saakh-blue rounded-full mr-2"></span>
                        {source.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className={groupIndex % 2 === 0 ? 'marquee-content' : 'marquee-content-reverse'}>
                {group.map((source, index) => (
                  <div key={`dup-${index}`} className="source-item">
                    {typeof source === 'string' ? (
                      <span className="text-white">{source}</span>
                    ) : (
                      <span className="text-white flex items-center">
                        <span className="w-2 h-2 bg-saakh-blue rounded-full mr-2"></span>
                        {source.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SourcesSection;
