import React, { useRef, useEffect } from "react";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const starsRef = useRef([]);
  const projectCountRef = useRef(null);
  const customerCountRef = useRef(null);
  const countriesCountRef = useRef(null);

  useEffect(() => {
    let animationTriggered = false;

    const animateCounter = (element, target, duration = 2000) => {
      let start = 0;
      const startTime = performance.now();
      
      const updateCounter = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(start + (target - start) * easeOutExpo);
        
        if (element) {
          element.textContent = current + (target >= 100 ? '+' : '');
        }
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    };

    const triggerAnimations = () => {
      // Start counter animations
      if (!animationTriggered) {
        animationTriggered = true;
        setTimeout(() => {
          animateCounter(projectCountRef.current, 150, 2500);
          animateCounter(customerCountRef.current, 75, 2000);
          animateCounter(countriesCountRef.current, 6, 1500);
        }, 500);
      }
    };

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section || animationTriggered) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.8;

      if (rect.top < triggerPoint) {
        triggerAnimations();
        
        // Animate stars
        starsRef.current.forEach((star, index) => {
          if (star) {
            const direction = index % 2 === 0 ? 1 : -1;
            const moveX = direction * (100 + index * 20);
            const moveY = direction * -50 - index * 10;
            const rotation = direction * 360;
            const delay = index * 100;
            
            setTimeout(() => {
              star.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${rotation}deg)`;
            }, delay);
          }
        });
      }
    };

    // Trigger immediately if already in view
    setTimeout(handleScroll, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className=" relative overflow-hidden bg-gradient-to-b from-black-900 to-violet-200" style={
        {
          minHeight:"50vh"
        }
      }
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Responsive Animated Gradient Orbs */}
        <div className="absolute top-10 left-5 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Stars - Reduced on mobile */}
        {[...Array(15)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full transition-all duration-1000 ease-out hidden sm:block"
            style={{
              width: `${6 + i * 1.5}px`,
              height: `${6 + i * 1.5}px`,
              backgroundColor: "white",
              opacity: 0.1 + Math.random() * 0.3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(0px, 0px) rotate(0deg)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-16 md:py-20">
        {/* Main Content Grid - Stack on mobile */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column - Stats */}
          <div className="space-y-8 md:space-y-12 order-2 lg:order-1">
            {/* Stats Section - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                  <span ref={projectCountRef}>0</span>
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-300">Projects Completed</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                  <span ref={customerCountRef}>0</span>
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-300">Happy Clients</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
                  <span ref={countriesCountRef}>0</span>
                </div>
                <div className="text-sm sm:text-base md:text-lg text-gray-300">Countries Served</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 border border-white/10">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 md:space-y-3 text-gray-300">
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                  Proven track record of success
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                  Global reach with local expertise
                </li>
                <li className="flex items-center text-sm sm:text-base">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                  Innovative and agile approach
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Main Content */}
          <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            {/* We are section */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  We Are
                </span>
              </h2>
              
              {/* Strategic Flow - Responsive layout */}
              <div className="mb-6 md:mb-8">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">Strategic</span>
                  <span className="text-xl sm:text-2xl text-purple-400">→</span>
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">Collaborative</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mb-3 md:mb-4">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">Innovative</span>
                  <span className="text-xl sm:text-2xl text-purple-400">→</span>
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">Agile</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                  <span className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white bg-white/10 px-3 py-1 sm:px-4 sm:py-2 rounded-lg">Seasoned</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Your brand is more than just a name; it's a catalyst for growth and transformation. 
                With a shared vision and close collaboration, we craft solutions that streamline operations, 
                elevate your digital presence, and position you as the trusted choice for your customers.
              </p>
            </div>

            {/* CTA Button - Stack on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button className="px-6 py-3 sm:px-8 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                Learn More
              </button>
              <button className="px-6 py-3 sm:px-8 sm:py-3 border border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
    </section>
  );
};

export default AboutSection;