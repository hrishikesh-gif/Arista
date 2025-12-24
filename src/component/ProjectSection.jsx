import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Creative Production",
      imageSrc: "/images/CreativeProduction.avif",
      desc: "Professional creative production services for all your media needs.",
      link: "/services/creative-production",
    },
    {
      id: 2,
      title: "Website Development",
      imageSrc: "/images/websiteDevlopment.webp",
      desc: "Custom website development with modern technologies and responsive design.",
      link: "/services/website-development",
    },
    {
      id: 3,
      title: "Digital Marketing",
      imageSrc: "/images/DigitalMarketing.avif",
      desc: "Comprehensive digital marketing strategies to grow your online presence.",
      link: "/services/digital-marketing",
    },
    {
      id: 4,
      title: "Finance & Reconciliation",
      imageSrc: "/images/f.jpg",
      desc: "Financial management and reconciliation services for businesses.",
      link: "/services/finance-reconciliation",
    },
    {
      id: 5,
      title: "Amazon & Marketplace Management",
      imageSrc: "/images/AM.avif",
      desc: "Expert management of Amazon and other marketplace platforms.",
      link: "/services/amazon-marketplace",
    },
    {
      id: 6,
      title: "Customer Experience & Support",
      imageSrc: "/images/CS.avif",
      desc: "Enhanced customer experience and support solutions.",
      link: "/services/customer-support",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const cards = cardsRef.current;

      if (!section || cards.length === 0) return;

      // 1. Header Animation
      if (titleRef.current) {
        gsap.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
      }
      if (subtitleRef.current) {
        gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 });
      }

      // 2. Initial Stack Setup
      gsap.set(cards, {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: "auto",
        opacity: 1,
        scale: (i) => 1 - i * 0.04, 
        yPercent: (i) => i * 3, 
        zIndex: (i) => projects.length - i,
        transformOrigin: "center bottom"
      });

      // 3. The Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top", 
          end: `+=${projects.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // 4. "Fly Up" Logic
      cards.forEach((card, i) => {
        tl.to(card, {
          yPercent: -120, // Fly up off screen
          opacity: 0,      // Fade out
          scale: 1.1,      // Slight grow as it leaves
          rotation: Math.random() * 5 - 2.5, // Slight random tilt
          duration: 1,
          ease: "power2.in",
        });
        
        if (cards[i+1]) {
           tl.to(cards[i+1], {
             scale: 1,          // Restore to full size
             yPercent: 0,       // Move to center
             filter: "brightness(1)",
             duration: 1,
             ease: "power2.out"
           }, "<"); 
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [imagesLoaded]);

  const handleNavigation = (link) => {
    window.location.href = link;
  };

  return (
    <div className="relative bg-gradient-to-b from-black via-[#1a0b2e] to-black font-sans min-h-screen">
      
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

      {/* HEADER CONTENT */}
      <div className="relative z-10 w-full min-h-[15vh] flex flex-col items-center justify-center px-4 pt-10">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" />
            </svg>
            <span className="text-xs font-medium tracking-wider text-purple-100 uppercase">
              Next Gen Technology
            </span>
          </div>

          {/* Title */}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.15] mb-4 md:mb-6 drop-shadow-2xl"
          >
            Our Core IT Services in <span className="text-indigo-300">India</span>,
            <span className="block mt-1 md:mt-2">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient bg-300% drop-shadow-md">
                Global Brands
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed opacity-0"
          >
            Scalable. Secure. Sustainable. Empowering clients to achieve digital success.
          </p>
        </div>
      </div>

      {/* STACK CARDS SECTION */}
      <section ref={sectionRef} className="relative h-screen w-full z-10 overflow-hidden pt-24 pb-10">
        <div className="h-full w-full flex items-center justify-center relative perspective-1000">
          {projects.map((p, i) => (
            <div
              key={p.id}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="
                absolute
                w-[92%] sm:w-[85%] md:w-[70%] max-w-5xl
                min-h-[430px] h-auto md:h-[460px]
                rounded-2xl shadow-2xl
                flex flex-col md:flex-row
                border border-white/10 bg-[#1a0b2e]/90 backdrop-blur-xl
                overflow-hidden
                will-change-transform
              "
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 h-44 sm:h-52 md:h-full relative overflow-hidden shrink-0 group">
                {/* REMOVED 'group-hover:scale-110' below */}
                <img
                  src={p.imageSrc}
                  alt={p.title}
                  className="w-full h-full object-cover absolute inset-0 transition-transform duration-700" 
                  onError={(e) => { e.target.src = `https://picsum.photos/600/400?random=${p.id}`; }}
                  onLoad={() => {
                    if (i === projects.length - 1) {
                      setImagesLoaded((prev) => prev + 1);
                      ScrollTrigger.refresh();
                    }
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 h-full flex flex-col p-5 sm:p-6 md:p-10 relative z-10">
                <div className="flex flex-col justify-center flex-grow">
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    {p.title}
                  </h2>
                  <div className="w-10 sm:w-12 h-1 bg-purple-500 mb-4 sm:mb-5 rounded-full" />
                  <p className="text-xs sm:text-sm md:text-lg text-gray-300 leading-relaxed max-w-prose">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-4 sm:mt-5 md:mt-6 pt-2 md:pt-6 relative z-50">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(p.link);
                    }}
                    className="
                      px-5 sm:px-6 py-2.5 sm:py-3
                      bg-gradient-to-r from-purple-600 to-pink-600
                      rounded-xl
                      text-xs sm:text-sm md:text-base
                      font-semibold text-white 
                      hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
                      transition-all duration-300 cursor-pointer
                      relative z-50
                    "
                  >
                    Learn More
                  </button>
                </div>

                {/* Glow */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-purple-500/20 blur-[70px] sm:blur-[80px] rounded-full pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectSection;