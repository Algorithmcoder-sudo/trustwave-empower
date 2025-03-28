
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { AnimatedBackground } from '@/components/ui/animated-background';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />
      
      <main className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto bg-black/30 backdrop-blur-lg rounded-xl p-8 border border-white/10">
          <h1 className="text-3xl font-bold text-white mb-6">Terms & Conditions</h1>
          
          <div className="space-y-6 text-white/80">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Agreement to Terms</h2>
              <p>
                By accessing or using Saakh's application, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of the terms, you may not access the application.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the application for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, 
                and under this license you may not:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in the application</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate, complete, and current information. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
              <p className="mt-2">
                You are responsible for safeguarding the password and for all activities that occur under your account. 
                You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Payment Terms</h2>
              <p>
                For paid services, you agree to pay all fees or charges to your account according to the fees, 
                charges, and billing terms in effect at the time a fee or charge is due and payable.
              </p>
              <p className="mt-2">
                If you dispute any charges you must inform us within thirty (30) days after the date that we 
                invoice you. We reserve the right to change our prices upon thirty (30) days notice.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Intellectual Property</h2>
              <p>
                The application and its original content, features, and functionality are and will remain the 
                exclusive property of Saakh. The application is protected by copyright, trademark, and other 
                laws of both the United States and foreign countries.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Termination</h2>
              <p>
                We may terminate or suspend your account immediately, without prior notice or liability, for 
                any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="mt-2">
                Upon termination, your right to use the application will immediately cease. If you wish to 
                terminate your account, you may simply discontinue using the application.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>
                In no event shall Saakh, nor its directors, employees, partners, agents, suppliers, or affiliates, 
                be liable for any indirect, incidental, special, consequential or punitive damages, including 
                without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your access to or use of or inability to access or use the application</li>
                <li>Any conduct or content of any third party on the application</li>
                <li>Any content obtained from the application</li>
                <li>Unauthorized access, use or alteration of your transmissions or content</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> legal@saakh.com<br />
                <strong>Address:</strong> 123 Business Street, Tech City, TC 12345
              </p>
            </section>
            
            <section>
              <p className="mt-6">
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

export default Terms;
