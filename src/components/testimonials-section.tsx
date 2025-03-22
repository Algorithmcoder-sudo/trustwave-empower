
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      title: "Exceptional Creativity!",
      text: "The team went above and beyond to deliver a stunning design that exceeded our expectations. Their attention to detail and professionalism were top-notch!",
      author: "Alex Johnson",
      position: "CEO at CreativeFlow",
      avatar: "/lovable-uploads/c690c09c-185c-431f-b9f0-9bdac44e788e.png"
    },
    {
      id: 2,
      title: "A Pleasure to Work With!",
      text: "From start to finish, they made the entire process easy and stress-free. The end result perfectly captured our brand's essence. Highly recommended!",
      author: "Daniel Harris",
      position: "Founder at SparkMedia",
      avatar: "/lovable-uploads/c690c09c-185c-431f-b9f0-9bdac44e788e.png"
    },
    {
      id: 3,
      title: "Unmatched Expertise!",
      text: "We were amazed by the level of creativity and technical expertise. The final product was both functional and visually impressive, boosting our online presence significantly.",
      author: "Rebecca Turner",
      position: "Marketing Officer",
      avatar: "/lovable-uploads/c690c09c-185c-431f-b9f0-9bdac44e788e.png"
    },
    {
      id: 4,
      title: "Transformative Solution!",
      text: "Saakh has completely transformed how we evaluate potential business partners. The level of insight we now have access to has saved us from multiple risky partnerships.",
      author: "Michael Chen",
      position: "Operations Director",
      avatar: "/lovable-uploads/c690c09c-185c-431f-b9f0-9bdac44e788e.png"
    },
    {
      id: 5,
      title: "Game-Changing Platform!",
      text: "Being able to instantly access over 350 data points about any business has been a game-changer for our risk assessment process. The interface is intuitive and the data reliable.",
      author: "Priya Sharma",
      position: "Risk Analyst",
      avatar: "/lovable-uploads/c690c09c-185c-431f-b9f0-9bdac44e788e.png"
    },
    {
      id: 6,
      title: "Essential Tool for Business!",
      text: "In today's business environment, having a tool like Saakh is essential. It's helped us identify non-compliant businesses before engaging with them, saving us time and resources.",
      author: "James Wilson",
      position: "Financial Controller",
      avatar: "/lovable-uploads/c690c09c-185c-431f-b9f0-9bdac44e788e.png"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 floating-dots"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            What Our <span className="text-saakh-blue">Clients Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl text-center">
            Hear from businesses that have transformed their risk assessment and vendor management processes with Saakh
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <h3 className="text-xl font-bold text-white mb-3">{testimonial.title}</h3>
              <p className="text-white/70 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-saakh-blue/20 flex items-center justify-center">
                  <div className="text-saakh-blue font-bold">
                    {testimonial.author.split(' ').map(name => name[0]).join('')}
                  </div>
                </div>
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-white/60 text-sm">{testimonial.position}</div>
                </div>
                <div className="ml-auto">
                  <div className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6">
                  <span className="text-white/80">USER SATISFACTION</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Trusted by 1000+ businesses across the world
                </h3>
                
                <p className="text-white/70 mb-8">
                  Trusted by millions, this app offers seamless vendor screening and personalized insights for user satisfaction.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-saakh-blue mb-1">150k+</div>
                  <div className="text-white/70">Active Customers</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-saakh-blue mb-1">99k+</div>
                  <div className="text-white/70">Positive reviews</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-saakh-blue mb-1">5%+</div>
                  <div className="text-white/70">Risk reduction</div>
                </div>
                
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                  <div className="text-4xl font-bold text-saakh-blue mb-1">20%+</div>
                  <div className="text-white/70">Efficiency increase</div>
                </div>
              </div>
            </div>
            
            {/* Trusted clients logos marquee */}
            <div className="mt-12">
              <div className="marquee-container">
                <div className="marquee-content">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="mx-8 opacity-70 hover:opacity-100 transition-opacity">
                      <div className="w-24 h-8 bg-white/10 rounded-md flex items-center justify-center">
                        <div className="text-white text-xs">Client {i}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="marquee-content">
                  {[7, 8, 9, 10, 11, 12].map(i => (
                    <div key={i} className="mx-8 opacity-70 hover:opacity-100 transition-opacity">
                      <div className="w-24 h-8 bg-white/10 rounded-md flex items-center justify-center">
                        <div className="text-white text-xs">Client {i}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
