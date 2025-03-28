
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import MarqueeSection from './MarqueeSection';
import { useIsMobile } from '@/hooks/use-mobile';

const LandingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [loaded, setLoaded] = React.useState(false);
  const isMobile = useIsMobile();
  
  // Source data for marquee with the specific sources you provided
  const sources = [
    { id: 1, name: 'GST' },
    { id: 2, name: 'UDYAM' },
    { id: 3, name: 'PAN' },
    { id: 4, name: 'TAN' },
    { id: 5, name: 'SEBI' },
    { id: 6, name: 'SFIO' },
    { id: 7, name: 'MCA' },
    { id: 8, name: 'IBBI' },
    { id: 9, name: 'DIN' },
    { id: 10, name: 'IEC' },
    { id: 11, name: 'EPF' },
    { id: 12, name: 'LEI' },
    { id: 13, name: 'BIFR' },
    { id: 14, name: 'TDS' },
    { id: 15, image: "/sources/google.png", name: 'Google' },
    { id: 16, image: "/sources/facebook.png", name: 'Facebook' },
    { id: 17, image: "/sources/indiamart.png", name: 'IndiaMART' },
    { id: 18, image: '/sources/justdial.png', name: 'JustDial' },
  ];
  
  // Create USP card items for the marquee
  const uspItems = sources.map((source) => (
    <div 
      key={source.id} 
      className="flex items-center justify-center glass-morphism p-6 h-24 w-48 rounded-lg border border-white/10 transition-all duration-300 hover:border-saakh-blue/50 hover:bg-white/10 mx-4"
    >
      {source.image ? (
        <img src={source.image} alt={source.name} className="h-8" />
      ) : (
        <span className="text-lg font-medium text-white">{source.name}</span>
      )}
    </div>
  ));
  
  // Create simple text items for background marquee
  const sourceItems = sources.map((source) => (
    <div 
      key={source.id} 
      className="source-item opacity-5 text-white whitespace-nowrap"
    >
      {source.name}
    </div>
  ));
  
  useEffect(() => {
    // Initial loading animation
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 800);
    
    if (searchRef.current) {
      searchRef.current.style.opacity = '0';
      searchRef.current.style.transform = 'translateY(50px)';
    }
    
    if (titleRef.current) {
      titleRef.current.style.opacity = '0';
      titleRef.current.style.transform = 'translateY(-30px)';
    }
    
    if (subtitleRef.current) {
      subtitleRef.current.style.opacity = '0';
      subtitleRef.current.style.transform = 'translateY(-20px)';
    }
    
    if (buttonsRef.current) {
      buttonsRef.current.style.opacity = '0';
      buttonsRef.current.style.transform = 'translateY(30px)';
    }
    
    // Animate elements in sequence
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.style.opacity = '1';
        titleRef.current.style.transform = 'translateY(0)';
      }
    }, 1000);
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.style.opacity = '1';
        subtitleRef.current.style.transform = 'translateY(0)';
      }
    }, 1200);
    
    setTimeout(() => {
      if (searchRef.current) {
        searchRef.current.style.opacity = '1';
        searchRef.current.style.transform = 'translateY(0)';
      }
    }, 1400);
    
    setTimeout(() => {
      if (buttonsRef.current) {
        buttonsRef.current.style.opacity = '1';
        buttonsRef.current.style.transform = 'translateY(0)';
      }
    }, 1600);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to detect device type for app store redirects
  const handleDownloadClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor;
    
    if (/android/i.test(userAgent)) {
      // Android device - redirect to Play Store
      window.location.href = "https://play.google.com/store/apps/details?id=your.app.id";
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      // iOS device - redirect to App Store
      window.location.href = "https://apps.apple.com/app/your-app-id";
    } else {
      // Default to Play Store for other devices
      window.location.href = "https://play.google.com/store/apps/details?id=your.app.id";
    }
  };
  
  return (
    <section className="pt-20 pb-16 relative overflow-hidden min-h-[100vh] flex items-center justify-center">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-radial from-saakh-blue-dark/30 to-transparent"></div>
      
      {/* Background USP marquee with low opacity */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] w-full">
          <MarqueeSection 
            items={uspItems} 
            direction="left" 
            speed="slow" 
            pauseOnHover={false}
          />
        </div>
        
        <div className="absolute top-[30%] w-full">
          <MarqueeSection 
            items={uspItems} 
            direction="right" 
            speed="slow" 
            pauseOnHover={false}
          />
        </div>
        
        <div className="absolute top-[50%] w-full">
          <MarqueeSection 
            items={uspItems} 
            direction="left" 
            speed="normal" 
            pauseOnHover={false}
          />
        </div>
        
        <div className="absolute top-[70%] w-full">
          <MarqueeSection 
            items={uspItems} 
            direction="right" 
            speed="slow" 
            pauseOnHover={false}
          />
        </div>
      </div>
      
      {/* Loader screen that fades out */}
      <div 
        className={`absolute inset-0 z-40 bg-background flex items-center justify-center transition-opacity duration-700 ${loaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <div className="relative w-24 h-24 animate-zoom-out">
          <div className="absolute inset-0 border-4 border-saakh-blue/20 rounded-full animate-spin"></div>
          <div className="absolute inset-0 border-t-4 border-saakh-blue rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-saakh-blue rounded-full p-2 flex items-center justify-center">
              <span className="text-xl font-bold text-white">S</span>
            </div>
          </div>
        </div>
      </div>
      
      <div ref={containerRef} className="container mx-auto px-6 z-10 flex flex-col items-center">
        {/* Title */}
        <h1 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 transition-all duration-700"
        >
          Find Reputed Recruiters
        </h1>
        
        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="text-xl text-white/70 text-center mb-10 max-w-2xl transition-all duration-700"
        >
          Get <span className="text-yellow-400 font-bold">350+</span> data points on any business instantly from every possible source
        </p>
        
        {/* Enhanced Cosmic Search Bar */}
        <div 
          ref={searchRef} 
          className="mb-14 transition-all duration-700 w-full max-w-2xl"
        >
          <div className="cosmic-search-container">
            <div id="search-container">
              <div className="nebula"></div>
              <div className="starfield"></div>
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>
              <div className="cosmic-dust"></div>
              <div className="stardust"></div>
              <div className="cosmic-ring"></div>

              <div id="main">
                <input
                  className="input"
                  name="text"
                  type="text"
                  placeholder="Search for a company..."
                />
                <div id="input-mask"></div>
                <div id="cosmic-glow"></div>
                <div className="wormhole-border"></div>
                <div id="wormhole-icon">
                  <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="#a9c7ff"
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <circle r="10" cy="12" cx="12"></circle>
                    <path
                      d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                    ></path>
                    <path d="M2 12h20"></path>
                  </svg>
                </div>
                <div id="search-icon">
                  <svg
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="url(#cosmic-search)"
                    fill="none"
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                  >
                    <circle r="8" cy="11" cx="11"></circle>
                    <line y2="16.65" x2="16.65" y1="21" x1="21"></line>
                    <defs>
                      <linearGradient gradientTransform="rotate(45)" id="cosmic-search">
                        <stop stopColor="#a9c7ff" offset="0%"></stop>
                        <stop stopColor="#6e8cff" offset="100%"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons - positioned at the bottom */}
        <div 
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 transition-all duration-700 mt-auto fixed bottom-10"
        >
          {/* Download Now Button with QR Code on hover */}
          <HoverCard openDelay={0} closeDelay={200}>
            <HoverCardTrigger asChild>
              <Button
                className="px-5 py-2 bg-saakh-blue hover:bg-saakh-blue-light text-white font-medium rounded-xl text-base h-auto"
                onClick={handleDownloadClick}
              >
                Download Now
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-0">
              <div className="p-4 bg-white rounded-lg">
                <p className="text-black font-medium mb-2 text-center">Scan to download</p>
                <div className="w-48 h-48 bg-white p-2 rounded-lg flex items-center justify-center">
                  {/* Replace with your actual QR code image */}
                  <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
                    <p className="text-xs text-gray-500 text-center">Your QR Code Here</p>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          
          {/* Book a Demo Button */}
          <Popover>
            <PopoverTrigger asChild>
              <Button 
                variant="outline" 
                className="px-5 py-2 border-saakh-blue hover:bg-saakh-blue/10 text-white font-medium rounded-xl text-base h-auto"
              >
                Book a Demo
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="center">
              <div className="p-4 bg-white rounded-lg">
                <p className="text-black font-medium mb-2 text-center">Select a date</p>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                {date && (
                  <div className="mt-4">
                    <p className="text-center text-sm text-gray-500">Available time slots for {date.toLocaleDateString()}</p>
                    <ScrollArea className="h-24 mt-2">
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full text-sm">10:00 AM</Button>
                        <Button variant="outline" className="w-full text-sm">11:30 AM</Button>
                        <Button variant="outline" className="w-full text-sm">1:00 PM</Button>
                        <Button variant="outline" className="w-full text-sm">2:30 PM</Button>
                        <Button variant="outline" className="w-full text-sm">4:00 PM</Button>
                      </div>
                    </ScrollArea>
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
