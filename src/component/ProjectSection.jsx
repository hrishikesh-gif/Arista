import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";
//hrishi

const ProjectSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  const projectImages = [
    { id: 1, title: "Creative Production", imageSrc: "/images/CreativeProduction.avif" },
    { id: 2, title: "Website Development", imageSrc: "/images/websiteDevlopment.webp" },
    { id: 3, title: "Digital Marketing", imageSrc: "/images/DigitalMarketing.avif" },
    { id: 4, title: "Finance & Reconciliation", imageSrc: "/images/fiNDReco.avif" },
    { id: 5, title: "Amazon & Marketplace Management", imageSrc: "/images/AM.avif" }, 
    { id: 6, title: "Customer Experience & Support", imageSrc: "/images/CS.avif" },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Line animation
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100px",
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Section entrance effect
    gsap.fromTo(
      triggerRef.current,
      { y: 100, rotationX: 20, opacity: 0 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Horizontal scrolling - RESTORED
    const horizontalScroll = gsap.to(".panel", {
      xPercent: -100 * (projectImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImages.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    const panels = gsap.utils.toArray(".panel");
    panels.forEach((panel) => {
      const image = panel.querySelector(".project-image");
      const imageTitle = panel.querySelector(".project-title");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          containerAnimation: horizontalScroll,
          start: "left right",
          end: "right left",
          scrub: true,
        },
      });

      tl.fromTo(image, { scale: 0, rotate: -20 }, { scale: 1, rotate: 0, duration: 0.5 });

      if (imageTitle) {
        tl.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Section title */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4 opacity-0"
        >
          Services
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto opacity-0"
        />
      </div>

      {/* Horizontal Scroll - PROPERLY ALIGNED */}
      <div ref={triggerRef} className="overflow-hidden">
        <div ref={horizontalRef} className="horizontal-section flex w-full">
          {projectImages.map((project) => (
            <div key={project.id} className="panel relative flex items-center justify-center min-w-[80vw] md:min-w-[60vw] lg:min-w-[40vw] px-4">
              <div className="relative w-full flex flex-col items-center justify-center">
                {/* Properly sized image card */}
                <div className="relative w-full max-w-2xl mx-auto">
                  <img
                    className="project-image w-full h-[400px] md:h-[500px] rounded-2xl object-cover shadow-2xl"
                    src={project.imageSrc}
                    alt="project-img"
                  />
                  
                  {/* Overlay with glass effect */}
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <h2 className="project-title flex items-center gap-3 text-xl md:text-2xl font-bold text-white">
                      {project.title} <SlShareAlt className="text-purple-400" />
                    </h2>
                    <button className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white text-sm font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                      Explore Service
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {projectImages.map((_, index) => (
            <div
              key={index}
              className="w-3 h-1 rounded-full bg-gray-600 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;