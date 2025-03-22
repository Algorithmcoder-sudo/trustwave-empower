
import React, { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
};

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Create random stars
    const createStars = () => {
      const stars: Star[] = [];
      const numStars = 100; // Adjust for density
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          speed: Math.random() * 0.5 + 0.1,
        });
      }
      
      starsRef.current = stars;
    };

    // Update stars position
    const updateStars = () => {
      starsRef.current.forEach(star => {
        // Move stars
        star.y += star.speed;
        
        // Reset stars that go off screen
        if (star.y > window.innerHeight) {
          star.y = 0;
          star.x = Math.random() * window.innerWidth;
        }
      });
    };

    // Render stars
    const renderStars = () => {
      if (!container) return;
      
      // Clear previous stars
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      // Add stars to DOM
      starsRef.current.forEach(star => {
        const starElement = document.createElement('div');
        starElement.className = 'star';
        starElement.style.width = `${star.size}px`;
        starElement.style.height = `${star.size}px`;
        starElement.style.left = `${star.x}px`;
        starElement.style.top = `${star.y}px`;
        starElement.style.opacity = star.opacity.toString();
        
        container.appendChild(starElement);
      });
    };

    // Animation loop
    const animate = () => {
      updateStars();
      renderStars();
      frameRef.current = requestAnimationFrame(animate);
    };

    // Create random revolving stars
    const createRevolvingStars = () => {
      const star1 = document.createElement('div');
      star1.className = 'absolute w-2 h-2 bg-saakh-blue rounded-full animate-revolve';
      star1.style.top = '50%';
      star1.style.left = '50%';
      container.appendChild(star1);
      
      const star2 = document.createElement('div');
      star2.className = 'absolute w-2 h-2 bg-saakh-cyan rounded-full animate-revolve-reverse';
      star2.style.top = '50%';
      star2.style.left = '50%';
      container.appendChild(star2);
    };

    const handleResize = () => {
      createStars();
      renderStars();
    };

    // Initialize
    createStars();
    createRevolvingStars();
    animate();
    
    window.addEventListener('resize', handleResize);

    // Create periodic falling stars
    const createFallingStar = () => {
      if (!container) return;
      
      const star = document.createElement('div');
      star.className = 'absolute w-1 h-8 bg-saakh-blue rounded-full star-animated';
      
      // Random position at top of screen
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = '0';
      star.style.opacity = '0.7';
      
      // Add tail
      star.style.boxShadow = '0 0 10px 2px rgba(1, 119, 251, 0.7)';
      star.style.transform = 'rotate(45deg)';
      
      container.appendChild(star);
      
      // Remove star after animation completes
      setTimeout(() => {
        star.remove();
      }, 3000);
    };
    
    const fallingStarInterval = setInterval(createFallingStar, 2000);

    // Cleanup
    return () => {
      cancelAnimationFrame(frameRef.current);
      clearInterval(fallingStarInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};
