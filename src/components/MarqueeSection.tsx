
import React from 'react';
import { cn } from '@/lib/utils';

interface MarqueeSectionProps {
  items: React.ReactNode[];
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  className?: string;
}

const MarqueeSection = ({
  items,
  direction = 'left',
  speed = 'normal',
  pauseOnHover = true,
  className
}: MarqueeSectionProps) => {
  // Get animation duration based on speed
  const getDuration = () => {
    switch (speed) {
      case 'slow': return '100s';
      case 'fast': return '30s';
      default: return '60s';
    }
  };

  // Get animation class based on direction
  const getAnimationClass = () => {
    return direction === 'left' ? 'marquee-content' : 'marquee-content-reverse';
  };

  // Custom inline style for animation duration
  const animationStyle = {
    animationDuration: getDuration()
  };

  return (
    <div className={cn(
      'marquee-container',
      pauseOnHover && 'marquee-pause',
      className
    )}>
      <div className={getAnimationClass()} style={animationStyle}>
        {items.map((item, i) => (
          <div key={`marquee-item-${i}`} className="mx-4">
            {item}
          </div>
        ))}
      </div>
      <div className={getAnimationClass()} style={animationStyle}>
        {items.map((item, i) => (
          <div key={`marquee-item-dup-${i}`} className="mx-4">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
