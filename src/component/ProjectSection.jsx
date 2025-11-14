import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const animationRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const projects = [
    { 
      id: 1, 
      title: "Creative Production", 
      imageSrc: "/images/CreativeProduction.avif",
      desc: "Professional creative production services for all your media needs."
    },
    { 
      id: 2, 
      title: "Website Development", 
      imageSrc: "/images/websiteDevlopment.webp",
      desc: "Custom website development with modern technologies and responsive design."
    },
    { 
      id: 3, 
      title: "Digital Marketing", 
      imageSrc: "/images/DigitalMarketing.avif",
      desc: "Comprehensive digital marketing strategies to grow your online presence."
    },
    { 
      id: 4, 
      title: "Finance & Reconciliation", 
      imageSrc: "/images/f.jpg",
      desc: "Financial management and reconciliation services for businesses."
    },
    { 
      id: 5, 
      title: "Amazon & Marketplace Management", 
      imageSrc: "/images/AM.avif",
      desc: "Expert management of Amazon and other marketplace platforms."
    },
    { 
      id: 6, 
      title: "Customer Experience & Support", 
      imageSrc: "/images/CS.avif",
      desc: "Enhanced customer experience and support solutions."
    },
  ];

  // Better ref management
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, projects.length);
  }, [projects.length]);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;

    const initializeAnimation = () => {
      const section = sectionRef.current;
      const cards = cardsRef.current.filter(Boolean);
      
      if (!section || cards.length !== projects.length) {
        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(initializeAnimation, 150);
          return;
        }
        console.warn('Failed to initialize animation after retries');
        return;
      }

      // Kill any existing triggers for this section
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });

      // Reset all styles with proper positioning
      gsap.set(cards, { 
        clearProps: "all",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      });

      // --- Initial states ---
      cards.forEach((card, i) => {
        gsap.set(card, {
          yPercent: i === 0 ? 0 : 100, // First card visible, others below
          opacity: i === 0 ? 1 : 0,    // Only first card visible
          scale: i === 0 ? 1 : 0.9,
          zIndex: projects.length - i
        });
      });

      // --- Title animation ---
      if (titleRef.current && subtitleRef.current) {
        gsap.fromTo(titleRef.current, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
        );
        gsap.fromTo(subtitleRef.current, 
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.3 }
        );
      }

      // --- ScrollTrigger timeline ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${projects.length * 100}%`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          markers: false,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });

      animationRef.current = tl;

      // --- Stacking upward animation ---
      cards.forEach((card, i) => {
        if (i > 0) {
          const prevCard = cards[i - 1];

          // Fade out and move down the previous card COMPLETELY
          tl.to(
            prevCard,
            {
              opacity: 0,
              scale: 0.8,
              yPercent: -20, // Move previous card up and out of the way
              ease: "power2.inOut",
              duration: 1
            },
            `card-${i}`
          );

          // Bring new card upward and visible
          tl.to(
            card,
            {
              yPercent: 0,
              opacity: 1,
              scale: 1,
              ease: "power2.inOut",
              duration: 1
            },
            `card-${i}` // Run at the same time as previous card fade out
          );
        }
      });

      // Final animation - fade out the last card when leaving the section
      tl.to(
        cards[cards.length - 1],
        {
          opacity: 0,
          scale: 0.9,
          duration: 1,
          ease: "power2.inOut"
        }
      );

      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    const timeoutId = setTimeout(initializeAnimation, 200);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        animationRef.current.scrollTrigger?.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, [projects.length]);

  return (
    <div className="bg-gradient-to-b from-violet-900 to-black ">
      {/* Reduced top padding to minimize gap */}
      <div className="h-30 flex items-center justify-center">
        <div className="text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl mt-20 font-semibold text-white mb-4"
          >
            Services
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg text-purple-200 font-bold"
          >
            Our Core IT Services in India, Built for Global Brands
          </p>
        </div>
      </div>

      {/* Scroll stacking section */}
      <section
        ref={sectionRef}
        className="relative h-screen bg-gradient-to-b from-violet-900 to-black overflow-hidden"
      >
        <div className="h-full w-full flex items-center justify-center relative">
          {projects.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="absolute w-11/12 md:w-5/6 lg:w-5/6 xl:w-5/6 
                         rounded-2xl shadow-2xl 
                         flex flex-col md:flex-row overflow-hidden 
                         border border-gray-700"
              style={{ 
                zIndex: projects.length - i,
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden'
              }}
            >
              <div className="w-full md:w-1/2 h-72 md:h-auto flex">
                <img
                  src={p.imageSrc}
                  alt={p.title}
                  className="w-full h-full object-cover flex-1"
                  onError={(e) => {
                    e.target.src = `https://picsum.photos/600/400?random=${p.id}`;
                  }}
                  onLoad={() => {
                    if (i === projects.length - 1) {
                      setTimeout(() => ScrollTrigger.refresh(), 50);
                    }
                  }}
                />
              </div>
              <div className="p-6 md:p-10 lg:p-12 flex flex-col justify-center w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
                  {p.title}
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed text-base md:text-lg lg:text-xl">{p.desc}</p>
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold text-white hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;