import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ClientShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const clientRows = [
    [
      { name: 'Google Fonts', imagesrc: '/images/logo-1.webp', logo: 'GF' },
      { name: 'amazon', imagesrc: '/images/logo-2.webp', logo: 'AMZ' },
      { name: 'Microsoft', imagesrc: '/images/logo-3.webp', logo: 'MS' },
      { name: 'Help Scout', imagesrc: '/images/logo-4.webp', logo: 'HS' },
      { name: 'Optimizely', imagesrc: '/images/logo-5.webp', logo: 'OP' },
    ],
    [
      { name: 'breezy', imagesrc: '/images/logo-6.webp', logo: 'BZ' },
      { name: 'attio', imagesrc: '/images/logo-7.webp', logo: 'AT' },
      { name: 'PayPal', imagesrc: '/images/logo-8.webp', logo: 'PP' },
      { name: 'mparticle', imagesrc: '/images/logo-1.webp', logo: 'MP' },
      { name: 'HubSpot', imagesrc: '/images/logo-3.webp', logo: 'HS' },
      { name: 'miro', imagesrc: '/images/logo-2.webp', logo: 'MI' },
    ]
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
     ref={sectionRef}
  className="relative overflow-hidden"
  style={{
    width: '100vw',
    minHeight:"50vh",
    paddingTop: '10vh',
    paddingBottom: '10vh',
    background: 'linear-gradient(to bottom, #000000 0%, #000000 20%, #2d0b57 80%, #000000 100%)',
  }}
    >
      <div className="relative z-10 w-[100vw] px-[5vw] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-[8vh]"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Some of our valuable clients
          </h2>
          <div className="w-[10vw] h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Logos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-[10vh]"
        >
          {/* Row 1 - Left Scroll */}
          <div className="relative overflow-hidden w-[100vw]">
            <div className="flex animate-infinite-scroll-left w-[200vw]">
              {[...Array(2)].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-[10vw] min-w-max px-[2vw]">
                  {clientRows[0].map((client) => (
                    <motion.div
                      key={`${client.name}-${duplicateIndex}`}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.15,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                      }}
                      className="group flex-shrink-0 flex flex-col items-center justify-center"
                    >
                      <div className="relative flex items-center justify-center p-[1.5vw]">
                       <img
  src={client.imagesrc}
  alt={client.name}
  className="h-[6vh] sm:h-[7vh] md:h-[8vh] lg:h-[9vh] w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
  onError={(e) => {
    e.target.style.display = 'none';
    e.target.nextSibling.style.display = 'flex';
  }}
/>

                        <div className="text-[2.5vw] font-bold text-white hidden items-center justify-center h-[9vh]">
                          {client.logo}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right Scroll */}
          <div className="relative overflow-hidden w-[100vw]">
            <div className="flex animate-infinite-scroll-right w-[200vw]">
              {[...Array(2)].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-[10vw] min-w-max px-[2vw]">
                  {clientRows[1].map((client) => (
                    <motion.div
                      key={`${client.name}-${duplicateIndex}`}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.15,
                        transition: { type: "spring", stiffness: 400, damping: 10 },
                      }}
                      className="group flex-shrink-0 flex flex-col items-center justify-center"
                    >
                      <div className="relative flex items-center justify-center p-[1.5vw]">
                        <img
                          src={client.imagesrc}
                          alt={client.name}
                          className="h-[9vh] w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="text-[2.5vw] font-bold text-white hidden items-center justify-center h-[9vh]">
                          {client.logo}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Border */}
        <div className="mt-[10vh] h-[0.5vh] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
      </div>

      {/* Infinite Scroll Animations */}
      <style jsx>{`
        @keyframes infinite-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes infinite-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-infinite-scroll-left {
          animation: infinite-scroll-left 15s linear infinite;
        }
        .animate-infinite-scroll-right {
          animation: infinite-scroll-right 15s linear infinite;
        }
        .animate-infinite-scroll-left:hover,
        .animate-infinite-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientShowcase;
