
import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "What makes Saakh different from other tools?",
      answer: "Saakh stands out by providing over 350 data points on any business instantly from multiple sources. Our platform uniquely identifies non-compliant businesses that are unlikely to pay on time, helping you make more informed decisions about potential partners and customers."
    },
    {
      question: "How quickly can I get information on a business?",
      answer: "With Saakh, you can access comprehensive business information almost instantly. Simply enter the business's GSTN or other identifier, and our AI-powered system will gather data from over 350 data points and present it to you in an easy-to-understand format within seconds."
    },
    {
      question: "How do I start using Saakh?",
      answer: "Getting started with Saakh is simple. Download our mobile app from the App Store or Google Play, create an account, and you can immediately begin searching for businesses to screen. We also offer web access for enterprise clients with additional features."
    },
    {
      question: "Do you offer customized solutions for different business needs?",
      answer: "Yes, we offer customized solutions tailored to different business types and sizes. Whether you're a small MSME, a large corporate, a CA firm, or a fintech company, we can customize our platform to meet your specific vendor and customer screening requirements."
    },
    {
      question: "Is there a free trial available before purchasing?",
      answer: "Yes, we offer a limited free trial that allows you to experience the key features of Saakh. This gives you the opportunity to see how our platform can help your business before committing to a subscription plan."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, net banking, UPI, and wallet payments for our subscription plans. For enterprise clients, we also offer invoice-based payment options with credit terms."
    }
  ];

  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6 animate-fade-in mx-auto text-center">
          <span className="text-white/80">FAQ's</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
          Frequently Asked <span className="text-saakh-blue">Questions</span>
        </h2>
        
        <p className="text-xl text-white/70 max-w-3xl mx-auto text-center mb-16">
          Get quick answers to common questions about our services.
        </p>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-saakh-blue/50"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between bg-white/5 backdrop-blur-sm hover:bg-saakh-blue-dark/20 transition-all"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-xl font-medium text-white text-left">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  <svg className="w-4 h-4 text-saakh-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white/5 backdrop-blur-sm animate-fade-in">
                  <p className="text-white/70">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
