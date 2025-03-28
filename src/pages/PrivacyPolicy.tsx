
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { AnimatedBackground } from '@/components/ui/animated-background';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
          
          <div className="space-y-6 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                At Saakh, we respect your privacy and are committed to protecting your personal data. 
                This Privacy Policy explains how we collect, use, and safeguard your information when 
                you use our application.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, such as when you create an account, 
                use our services, or contact customer support. This may include:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Contact information (name, email address, phone number)</li>
                <li>Account credentials (username, password)</li>
                <li>Profile information (company name, job title)</li>
                <li>Transaction information (purchase history, billing details)</li>
                <li>Device information (IP address, browser type, operating system)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Providing and maintaining our services</li>
                <li>Improving and personalizing user experience</li>
                <li>Processing transactions and sending related information</li>
                <li>Responding to comments, questions, and customer service requests</li>
                <li>Sending administrative information and service updates</li>
                <li>Marketing and promotional communications (with your consent)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                information from unauthorized access, disclosure, alteration, or destruction. However, 
                no method of transmission over the Internet or electronic storage is 100% secure, so we 
                cannot guarantee absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, 
                including:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate or incomplete data</li>
                <li>Deletion of your personal data</li>
                <li>Restriction of processing of your personal data</li>
                <li>Data portability</li>
                <li>Objection to processing of your personal data</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> privacy@saakh.com<br />
                <strong>Address:</strong> 123 Business Street, Tech City, TC 12345
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="mt-2">
                <strong>Last Updated:</strong> June 1, 2024
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
