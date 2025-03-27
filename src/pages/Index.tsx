
import React, { useEffect } from 'react';
import { AnimatedBackground } from '@/components/ui/animated-background';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import FeatureSection from '@/components/feature-section';
import WhatWeSolve from '@/components/what-we-solve';
import SourcesSection from '@/components/sources-section';
import TrustChecksSection from '@/components/trust-checks-section';
import ServicesSection from '@/components/services-section';
import AboutSection from '@/components/about-section';
import IntegrationSection from '@/components/integration-section';
import TestimonialsSection from '@/components/testimonials-section';
import FAQSection from '@/components/faq-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import LandingSection from '@/components/landing-section';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        const id = target.getAttribute('href')?.substring(1);
        if (!id) return;
        
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <LandingSection />
      <HeroSection />
      <FeatureSection />
      <WhatWeSolve />
      <SourcesSection />
      <TrustChecksSection />
      <ServicesSection />
      <AboutSection />
      <IntegrationSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
