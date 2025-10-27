import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ClientShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Clients organized in two rows
  const clientRows = [
    // Row 1
    [
      { 
        name: 'Google Fonts', 
        imagesrc: '/images/logo-1.webp',
        logo: 'GF' 
      },
      { 
        name: 'amazon', 
        imagesrc: '/images/logo-2.webp',
        logo: 'AMZ' 
      },
      { 
        name: 'Microsoft', 
        imagesrc: '/images/logo-3.webp',
        logo: 'MS' 
      },
      { 
        name: 'Help Scout', 
        imagesrc: '/images/logo-4.webp',
        logo: 'HS' 
      },
      { 
        name: 'Optimizely', 
        imagesrc: '/images/logo-5.webp',
        logo: 'OP' 
      },
    ],
    // Row 2
    [
      { 
        name: 'breezy', 
        imagesrc: '/images/logo-6.webp',
        logo: 'BZ' 
      },
      { 
        name: 'attio', 
        imagesrc: '/images/logo-7.webp',
        logo: 'AT' 
      },
      { 
        name: 'PayPal', 
        imagesrc: '/images/logo-8.webp',
        logo: 'PP' 
      },
      { 
        name: 'mparticle', 
        imagesrc: '/images/logo-1.webp',
        logo: 'MP' 
      },
      { 
        name: 'HubSpot', 
        imagesrc: '/images/logo-3.webp',
        logo: 'HS' 
      },
      { 
        name: 'miro', 
        imagesrc: '/images/logo-2.webp',
        logo: 'MI' 
      },
    ]
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-900 via-black to-purple-900 py-20 overflow-hidden"
    >
      {/* About Section Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              backgroundColor: "white",
              opacity: 0.1 + Math.random() * 0.3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: 'translate(0px, 0px) rotate(0deg)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Some of our valuable clients
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Client Logos with Enhanced Infinite Scrolling */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Row 1 - Infinite Scroll Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll-left">
              {/* Duplicate content for seamless infinite scroll */}
              {[...Array(6)].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-16 min-w-max px-8">
                  {clientRows[0].map((client, index) => (
                    <motion.div
                      key={`${client.name}-${duplicateIndex}`}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      className="group flex-shrink-0 flex flex-col items-center justify-center"
                    >
                      {/* Logo Only - No Card */}
                      <div className="relative flex items-center justify-center p-4">
                        <img 
                          src={client.imagesrc} 
                          alt={client.name}
                          className="h-16 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback text */}
                        <div className="text-2xl font-bold text-white hidden items-center justify-center h-16">
                          {client.logo}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Infinite Scroll Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-infinite-scroll-right">
              {/* Duplicate content for seamless infinite scroll */}
              {[...Array(6)].map((_, duplicateIndex) => (
                <div key={duplicateIndex} className="flex gap-16 min-w-max px-8">
                  {clientRows[1].map((client, index) => (
                    <motion.div
                      key={`${client.name}-${duplicateIndex}`}
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { type: "spring", stiffness: 400, damping: 10 }
                      }}
                      className="group flex-shrink-0 flex flex-col items-center justify-center"
                    >
                      {/* Logo Only - No Card */}
                      <div className="relative flex items-center justify-center p-4">
                        <img 
                          src={client.imagesrc} 
                          alt={client.name}
                          className="h-16 w-auto object-contain opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        {/* Fallback text */}
                        <div className="text-2xl font-bold text-white hidden items-center justify-center h-16">
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
        <div className="mt-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
      </div>

      {/* Custom Styles for Enhanced Infinite Scroll Animations */}
      <style jsx>{`
        @keyframes infinite-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes infinite-scroll-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-infinite-scroll-left {
          animation: infinite-scroll-left 45s linear infinite;
        }
        .animate-infinite-scroll-right {
          animation: infinite-scroll-right 50s linear infinite;
        }
        
        /* Pause animation on hover */
        .animate-infinite-scroll-left:hover,
        .animate-infinite-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ClientShowcase;