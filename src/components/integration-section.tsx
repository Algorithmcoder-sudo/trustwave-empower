
import React, { useEffect, useRef } from 'react';

const IntegrationSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const integrations = [
    { id: 1, name: "Slack", position: { degree: 30, distance: 150 } },
    { id: 2, name: "Figma", position: { degree: 90, distance: 150 } },
    { id: 3, name: "Google", position: { degree: 150, distance: 150 } },
    { id: 4, name: "Notion", position: { degree: 210, distance: 150 } },
    { id: 5, name: "Zoom", position: { degree: 270, distance: 150 } },
    { id: 6, name: "GitHub", position: { degree: 330, distance: 150 } },
    { id: 7, name: "Trello", position: { degree: 60, distance: 240 } },
    { id: 8, name: "Asana", position: { degree: 120, distance: 240 } },
    { id: 9, name: "Jira", position: { degree: 180, distance: 240 } },
    { id: 10, name: "DropBox", position: { degree: 240, distance: 240 } },
    { id: 11, name: "Stripe", position: { degree: 300, distance: 240 } },
    { id: 12, name: "Adobe", position: { degree: 360, distance: 240 } }
  ];

  useEffect(() => {
    const createOrbitalSystem = () => {
      const container = containerRef.current;
      if (!container) return;
      
      // Create orbital circles
      const orbit1 = document.createElement('div');
      orbit1.className = 'orbit';
      orbit1.style.width = '300px';
      orbit1.style.height = '300px';
      orbit1.style.top = '50%';
      orbit1.style.left = '50%';
      orbit1.style.transform = 'translate(-50%, -50%)';
      container.appendChild(orbit1);
      
      const orbit2 = document.createElement('div');
      orbit2.className = 'orbit';
      orbit2.style.width = '480px';
      orbit2.style.height = '480px';
      orbit2.style.top = '50%';
      orbit2.style.left = '50%';
      orbit2.style.transform = 'translate(-50%, -50%)';
      container.appendChild(orbit2);
      
      // Create Saakh logo in center
      const center = document.createElement('div');
      center.className = 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-saakh-blue flex items-center justify-center text-white font-bold text-xl z-10';
      center.textContent = 'S';
      container.appendChild(center);
      
      // Add animation to orbital circles
      orbit1.style.animation = 'rotate 60s linear infinite';
      orbit2.style.animation = 'rotate-reverse 80s linear infinite';
      
      // Create integration icons
      integrations.forEach(integration => {
        const icon = document.createElement('div');
        const radian = (integration.position.degree * Math.PI) / 180;
        const x = Math.cos(radian) * integration.position.distance;
        const y = Math.sin(radian) * integration.position.distance;
        
        icon.className = 'absolute w-10 h-10 rounded-full bg-black/70 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white transform -translate-x-1/2 -translate-y-1/2 z-20';
        icon.style.top = `calc(50% + ${y}px)`;
        icon.style.left = `calc(50% + ${x}px)`;
        
        // Create a circular ripple effect
        const ripple = document.createElement('div');
        ripple.className = 'absolute inset-0 rounded-full border border-saakh-blue/30 animate-ripple';
        icon.appendChild(ripple);
        
        // Add a small dot as content
        const dot = document.createElement('div');
        dot.className = 'w-3 h-3 rounded-full bg-saakh-blue';
        icon.appendChild(dot);
        
        container.appendChild(icon);
      });
    };
    
    createOrbitalSystem();
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in">
              <span className="text-white/80">INTEGRATION</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Seamless integration<br />
              for enhanced efficiency
            </h2>
            
            <p className="text-xl text-white/70 mb-8 max-w-xl">
              Explore our expansive range of integrations designed to synchronize perfectly with our CRM, enhancing your workflow and driving efficiency.
            </p>
            
            <a 
              href="#learn-more" 
              className="px-8 py-3 rounded-full bg-saakh-blue hover:bg-saakh-blue-light transition text-white font-medium inline-flex items-center"
            >
              Explore Integrations
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
          
          <div className="lg:w-1/2 h-[600px] relative" ref={containerRef}>
            {/* Orbital content will be added via JS in useEffect */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
