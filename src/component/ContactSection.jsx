import React, { useRef, useEffect } from "react";

const ContactSection = () => {
  const circleRef = useRef(null);
  const sectionRef = useRef(null);
  const initialTextRef = useRef(null);
  const finalTextRef = useRef(null);
  const pinWrapperRef = useRef(null);
  
  
  useEffect(() => {
    let scrollHandler;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const section = sectionRef.current;
          const pinWrapper = pinWrapperRef.current;
          if (!section || !pinWrapper) return;

          const sectionRect = section.getBoundingClientRect();
          const sectionTop = sectionRect.top;
          const sectionHeight = section.offsetHeight;
          const windowHeight = window.innerHeight;
          
          // Define scroll range for animation (like GSAP's start: "top top", end: "+=800")
          const animationScrollDistance = 800; // Much longer than 200px
          const totalSectionHeight = windowHeight + animationScrollDistance;
          
          let progress = 0;
          let isPinned = false;
          
          if (sectionTop <= 0 && Math.abs(sectionTop) < animationScrollDistance) {
            // Section is pinned and animating
            isPinned = true;
            progress = Math.abs(sectionTop) / animationScrollDistance;
            progress = Math.min(Math.max(progress, 0), 1);
            
            // Apply GSAP-like scrub easing (0.5 factor)
            progress = progress * 0.5 + (progress * progress) * 0.5;
          } else if (sectionTop > 0) {
            // Section hasn't reached pin point
            progress = 0;
            isPinned = false;
          } else {
            // Section has completed animation and should unpin
            progress = 1;
            isPinned = false;
          }
          
          // Pin/unpin the content
          if (isPinned) {
            pinWrapper.style.position = 'fixed';
            pinWrapper.style.top = '0';
            pinWrapper.style.left = '0';
            pinWrapper.style.width = '100%';
            pinWrapper.style.height = '100vh';
          } else if (Math.abs(sectionTop) >= animationScrollDistance) {
            // Animation complete, unpin but keep final state
            pinWrapper.style.position = 'absolute';
            pinWrapper.style.top = `${animationScrollDistance}px`;
            pinWrapper.style.left = '0';
            pinWrapper.style.width = '100%';
            pinWrapper.style.height = '100vh';
          } else {
            // Before pinning
            pinWrapper.style.position = 'absolute';
            pinWrapper.style.top = '0';
            pinWrapper.style.left = '0';
            pinWrapper.style.width = '100%';
            pinWrapper.style.height = '100vh';
          }
          
          const circle = circleRef.current;
          const initialText = initialTextRef.current;
          const finalText = finalTextRef.current;
          
          if (circle) {
            // Scale from 1 to 17 (matching your original code)
            const scale = 1 + (progress * 16); // 1 + (1 * 16) = 17 at full progress
            circle.style.transform = `scale(${scale})`;
            
            // Color transitions matching GSAP timeline
            if (progress < 0.3) {
              circle.style.backgroundColor = "#C084FC"; // Initial purple
            } else if (progress < 0.6) {
              circle.style.backgroundColor = "#9333EA"; // Mid purple
            } else {
              circle.style.backgroundColor = "#E9D5FF"; // Final light purple
              circle.style.boxShadow = "0 0 50px 20px rgba(233, 213, 255, 0.3)";
            }
          }
          
          // Text transitions matching GSAP timeline timing
          if (initialText) {
            if (progress < 0.1) {
              initialText.style.opacity = "1";
            } else if (progress < 0.2) {
              // Fade out over progress 0.1 to 0.2 (like duration: 0.2 starting at 0.1)
              const fadeProgress = (progress - 0.1) / 0.1;
              initialText.style.opacity = 1 - fadeProgress;
            } else {
              initialText.style.opacity = "0";
            }
          }
          
          if (finalText) {
            if (progress < 0.7) {
              finalText.style.opacity = "0";
            } else if (progress < 0.9) {
              // Fade in over progress 0.7 to 0.9 (like duration: 0.2 starting at 0.7)
              const revealProgress = (progress - 0.7) / 0.2;
              finalText.style.opacity = revealProgress;
            } else {
              finalText.style.opacity = "1";
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black"
      style={{ height: 'calc(100vh + 800px)' }} // Window height + animation scroll distance
    >
      <div
        ref={pinWrapperRef}
        className="absolute top-0 left-0 w-full h-screen flex items-center justify-center bg-black"
      >
        {/* Circle */}
        <div
          ref={circleRef}
          className="w-32 h-32 rounded-full relative z-10"
          style={{
            backgroundColor: "#C084FC",
            transformOrigin: "center center",
            willChange: "transform"
          }}
        />
        
        {/* Initial Text */}
        <div
          ref={initialTextRef} 
          className="absolute inset-0 flex items-center justify-center text-black font-bold text-lg z-20"
          style={{ willChange: "opacity" }}
        >
          <span className="select-none">SCROLL<br /> DOWN </span>
        </div>
        
        {/* Final Text */}
        <div
          ref={finalTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-20"
          style={{ willChange: "opacity" }}
        >
          <h1 className="text-black font-bold text-7xl leading-tight mb-8 max-w-4xl">
            Step Into The Future
          </h1>
          <p className="text-gray-800 text-2xl max-w-3xl mb-10 leading-relaxed">
            At Arista Systems, we turn complex ideas into immersive digital solutions
            that enhance your brand presence, connect you with your audience, and help grow your business.
          </p>
          <button className="px-12 py-4 rounded-2xl bg-black text-white hover:bg-gray-800 transition-all duration-300 text-xl font-medium shadow-2xl">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;