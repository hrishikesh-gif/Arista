import React, { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, User, MessageSquare, Sparkles, Brain, Globe, Users, Shield, Award } from 'lucide-react';
import ClientShowcase from '../component/ClientShowcaseSection';
import Footer from '../component/Footer';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState({});
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          (entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsVisible(prev => ({ ...prev, [key]: true }));
              }
            });
          },
          { threshold: 0.1 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    // Scroll progress for sequential animation
    const handleScroll = () => {
      const storybeatsSection = sectionRefs.current['storybeats'];
      if (storybeatsSection) {
        const rect = storybeatsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          const progress = 1 - (rect.top / (windowHeight * 0.8));
          const clampedProgress = Math.max(0, Math.min(1, progress));
          setScrollProgress(clampedProgress);

          if (clampedProgress >= 0.95 && !hasAnimated) {
            setHasAnimated(true);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasAnimated]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const storyBeats = [
    {
      title: 'AI-Powered Solutions',
      icon: Brain,
      gradient: 'from-purple-400 to-indigo-400'
    },
    {
      title: '360° Communication',
      icon: Globe,
      gradient: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'Flexible Offshore Teams',
      icon: Users,
      gradient: 'from-purple-500 to-fuchsia-400'
    },
    {
      title: 'Transparent Processes',
      icon: Shield,
      gradient: 'from-fuchsia-400 to-pink-400'
    },
    {
      title: 'Expert Professionals',
      icon: Award,
      gradient: 'from-pink-400 to-rose-400'
    }
  ];

  // Sequential animation with scale effect
  const getCardAnimation = (index, totalCards) => {
    // Calculate individual card progress with sequential delay
    const cardDelay = index * 0.15; // 150ms delay between cards
    const cardProgress = Math.max(0, (scrollProgress - cardDelay) / (1 - cardDelay));

    if (cardProgress <= 0) {
      // Before animation starts
      return {
        transform: 'translateY(20px) scale(0.9)',
        opacity: 0
      };
    } else if (cardProgress < 0.5) {
      // First half: scale up and fade in
      const scaleProgress = cardProgress * 2; // 0 to 1 during first half
      return {
        transform: `translateY(${20 * (1 - scaleProgress)}px) scale(${0.9 + (0.15 * scaleProgress)})`,
        opacity: scaleProgress
      };
    } else if (cardProgress < 1) {
      // Second half: scale back to normal
      const scaleProgress = (cardProgress - 0.5) * 2; // 0 to 1 during second half
      return {
        transform: `translateY(0px) scale(${1.05 - (0.05 * scaleProgress)})`,
        opacity: 1
      };
    } else {
      // After animation completes
      return {
        transform: 'translateY(0px) scale(1)',
        opacity: 1
      };
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ fontFamily: '"Poppins", sans-serif' }}>
      {/* Hero Section with New Gradient Background */}
      <div style={{
        background: 'linear-gradient(to bottom, #000000 0%, #000000 20%, #2d0b57 80%, #000000 100%)'
      }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Responsive background elements using vw/vh */}
          <div className="absolute w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] bg-purple-600/20 rounded-full blur-3xl -top-[20vw] -left-[20vw] animate-pulse"></div>
          <div className="absolute w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] bg-indigo-600/15 rounded-full blur-3xl top-1/2 -right-[20vw] animate-pulse delay-1000"></div>
          <div className="absolute w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] md:w-[40vw] md:h-[40vw] lg:w-[30vw] lg:h-[30vw] bg-purple-700/15 rounded-full blur-3xl -bottom-[20vw] left-1/3 animate-pulse delay-2000"></div>
          <div className="absolute w-[60vw] h-[60vw] sm:w-[40vw] sm:h-[40vw] md:w-[30vw] md:h-[30vw] lg:w-[25vw] lg:h-[25vw] bg-indigo-900/10 rounded-full blur-3xl top-1/4 right-1/4 animate-pulse delay-1500"></div>
        </div>

        <div className="relative z-10">
          <header className="pt-4 sm:pt-6 pb-2 px-4 sm:px-6 md:px-8 lg:px-12">
            {/* Empty header - Logo has been removed */}
          </header>

          <main className="w-full px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
            {/* Hero Section with Contact Container - Fully Responsive */}
            <section
              ref={el => sectionRefs.current['hero'] = el}
              className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 min-h-[85vh] sm:min-h-[80vh] md:min-h-[75vh] flex items-center pt-8 sm:pt-10 md:pt-12 lg:pt-16"
            >
              <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center w-full mt-0 sm:mt-2 md:mt-4 lg:mt-6">
                {/* Left Side - Text Content */}
                <div className={`w-full transform transition-all duration-1000 delay-200 ${isVisible['hero'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} order-1 lg:order-1 mt-6 sm:mt-8 md:mt-0`}>
                  <div className="lets-connect-button inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 md:py-2.5 mb-2 sm:mb-3 md:mb-4 rounded-full border border-purple-500 backdrop-blur-sm animate-float mx-auto lg:mx-0" style={{
                    background: 'linear-gradient(135deg, rgba(35, 8, 70, 0.9) 0%, rgba(25, 6, 50, 0.9) 50%, rgba(15, 4, 30, 0.9) 100%)'
                  }}>
                    <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-purple-300 animate-spin-slow" />
                    <span className="text-purple-300 font-semibold text-xs sm:text-xs md:text-sm" style={{ fontFamily: '"Poppins", sans-serif' }}>Let's Connect</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4 leading-tight text-center lg:text-left" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    <span className={`inline-block transform transition-all duration-1000 delay-300 animated-gradient-text ${isVisible['hero'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                      Let's Talk
                    </span>
                    <br />
                    <span className={`inline-block bg-gradient-to-r from-white via-purple-200 to-fuchsia-200 bg-clip-text text-transparent transform transition-all duration-1000 delay-500 ${isVisible['hero'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-100'} text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left mt-1 sm:mt-2`}>
                      Ready to take your brand to next level ?
                    </span>
                  </h2>
                  <p className={`text-[11px] sm:text-sm md:text-base font-medium text-white max-w-full lg:max-w-xl transform transition-all duration-1000 delay-700 mt-2 sm:mt-3 md:mt-4 text-center lg:text-left ${isVisible['hero'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ fontFamily: '"Poppins", sans-serif' }}>
                    Whether you're starting a new project or exploring possibilities, we're here to help.
                  </p>
                </div>

                {/* Right Side - Contact Form */}
                <div className={`w-full transform transition-all duration-1000 delay-400 ${isVisible['hero'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} order-2 lg:order-2 mb-4 sm:mb-6 lg:mb-0 mt-2 lg:mt-0`}>
                  <div className="relative transform-origin-center">
                    {/* Contact Form with Animated Gradient Border - Fully Responsive */}
                    <div className="relative rounded-xl sm:rounded-2xl p-[1.5px] sm:p-[2px] w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-lg mx-auto animated-gradient-border">
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-gradient border-2 border-transparent" style={{
                        backgroundSize: '200% 200%',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        maskComposite: 'exclude',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                      }}></div>

                      {/* Inner form container */}
                      <div className="relative rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 backdrop-blur-sm" style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                      }}>
                        {/* Minimal background elements */}
                        <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-purple-400/10 rounded-full blur-lg"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-indigo-400/10 rounded-full blur-lg"></div>

                        <div className="text-center mb-2 sm:mb-3 md:mb-4">
                          <h3 className="text-xs sm:text-sm md:text-base font-normal text-purple-900 mb-1" style={{ fontFamily: '"Poppins", sans-serif' }}>
                            Request a free consultation
                          </h3>
                          <p className="text-sm sm:text-base md:text-lg font-bold text-purple-800" style={{ fontFamily: '"Poppins", sans-serif' }}>
                            Let's Create Something AMAZING Together
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-2 sm:space-y-3 md:space-y-4">
                          <div className="group">
                            <label className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-purple-800 mb-1 group-focus-within:text-purple-900 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif' }}>
                              <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              Your Name
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                required
                                className="w-full bg-white border border-purple-200 focus:border-purple-500 outline-none py-1.5 sm:py-2 px-2.5 sm:px-3 text-purple-900 placeholder-purple-500 font-medium rounded-lg transition-all duration-300 focus:scale-105 focus:translate-x-1 text-xs sm:text-sm"
                                style={{ fontFamily: '"Poppins", sans-serif' }}
                              />
                              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 w-0 group-focus-within:w-full transition-all duration-500 rounded-b-lg"></div>
                            </div>
                          </div>

                          <div className="group">
                            <label className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-purple-800 mb-1 group-focus-within:text-purple-900 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif' }}>
                              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              Email Address
                            </label>
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                required
                                className="w-full bg-white border border-purple-200 focus:border-purple-500 outline-none py-1.5 sm:py-2 px-2.5 sm:px-3 text-purple-900 placeholder-purple-500 font-medium rounded-lg transition-all duration-300 focus:scale-105 focus:translate-x-1 text-xs sm:text-sm"
                                style={{ fontFamily: '"Poppins", sans-serif' }}
                              />
                              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 w-0 group-focus-within:w-full transition-all duration-500 rounded-b-lg"></div>
                            </div>
                          </div>

                          <div className="group">
                            <label className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-purple-800 mb-1 group-focus-within:text-purple-900 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif' }}>
                              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              Phone Number <span className="text-purple-600 text-xs font-normal">(Optional)</span>
                            </label>
                            <div className="relative">
                              <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                className="w-full bg-white border border-purple-200 focus:border-purple-500 outline-none py-1.5 sm:py-2 px-2.5 sm:px-3 text-purple-900 placeholder-purple-500 font-medium rounded-lg transition-all duration-300 focus:scale-105 focus:translate-x-1 text-xs sm:text-sm"
                                style={{ fontFamily: '"Poppins", sans-serif' }}
                              />
                              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 w-0 group-focus-within:w-full transition-all duration-500 rounded-b-lg"></div>
                            </div>
                          </div>

                          <div className="group">
                            <label className="flex items-center gap-1.5 sm:gap-2 text-xs font-medium text-purple-800 mb-1 group-focus-within:text-purple-900 transition-colors duration-300" style={{ fontFamily: '"Poppins", sans-serif' }}>
                              <MessageSquare className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                              Your Message
                            </label>
                            <div className="relative">
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                required
                                rows="3"
                                className="w-full bg-white border border-purple-200 focus:border-purple-500 outline-none py-1.5 sm:py-2 px-2.5 sm:px-3 text-purple-900 placeholder-purple-500 font-medium rounded-lg resize-none transition-all duration-300 focus:scale-105 text-xs sm:text-sm"
                                style={{ fontFamily: '"Poppins", sans-serif' }}
                              ></textarea>
                              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 w-0 group-focus-within:w-full transition-all duration-500 rounded-b-lg"></div>
                            </div>
                          </div>

                          <div className="flex justify-center pt-2 sm:pt-3">
                            <button
                              type="submit"
                              className="connect-button group relative px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 text-xs sm:text-sm"
                              style={{ fontFamily: '"Poppins", sans-serif' }}
                            >
                              <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                                Send Message
                                <Send className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                              </span>
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Story Beats Section - Fully Responsive */}
            <section
              ref={el => sectionRefs.current['storybeats'] = el}
              className="mb-8 sm:mb-12 md:mb-16 lg:mb-20 py-8 sm:py-12 md:py-16 lg:py-20"
              style={{ minHeight: "50vh" }}
            >
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start">
                {/* Left Side - Text Content */}
                <div className={`transform transition-all duration-1000 ${isVisible['storybeats'] ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-2 sm:mb-3 md:mb-4 animated-gradient-text-primary text-center lg:text-left" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    We shape your digital presence
                  </h3>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 animated-gradient-text-secondary text-center lg:text-left" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    using these five powerful story beats
                  </p>
                  <div className="text-[11px] sm:text-sm md:text-base text-white space-y-1.5 sm:space-y-2 md:space-y-3 text-center lg:text-left" style={{ fontFamily: '"Poppins", sans-serif' }}>
                    <p>Our comprehensive approach ensures your digital transformation is seamless and impactful.</p>
                    <p>From AI-powered solutions to expert teams, we cover every aspect of your digital journey.</p>
                  </div>
                </div>

                {/* Right Side - Cards with Sequential Scale Animation */}
                <div className={`transform transition-all duration-1000 delay-300 ${isVisible['storybeats'] ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                  <div className="space-y-2 sm:space-y-3 md:space-y-4">
                    {storyBeats.map((beat, index) => {
                      const Icon = beat.icon;
                      const animation = getCardAnimation(index, storyBeats.length);

                      return (
                        <div
                          key={index}
                          className="group relative"
                          style={{
                            transform: animation.transform,
                            opacity: animation.opacity,
                            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                          }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${beat.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-xl sm:rounded-2xl blur-xl`}>
                          </div>

                          {/* Horizontal Card Layout - Responsive */}
                          <div className="relative h-12 sm:h-14 md:h-16 backdrop-blur-sm border border-purple-600 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-6 hover:border-purple-400 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl flex items-center gap-2 sm:gap-3 md:gap-4" style={{
                            background: 'linear-gradient(135deg, rgba(40, 10, 80, 0.9) 0%, rgba(30, 8, 60, 0.9) 50%, rgba(20, 5, 40, 0.9) 100%)'
                          }}>

                            {/* Responsive Icon */}
                            <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-md sm:rounded-lg bg-gradient-to-br ${beat.gradient} flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110`}>
                              <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 text-white" />
                            </div>

                            {/* Responsive Title */}
                            <h4 className={`text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r ${beat.gradient} group-hover:bg-clip-text transition-all duration-500 flex-1`} style={{ fontFamily: '"Poppins", sans-serif' }}>
                              {beat.title}
                            </h4>

                            {/* Right Side Gradient Line */}
                            <div className={`absolute right-0 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b ${beat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-r-lg sm:rounded-r-xl`}>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Rest of the content with original gradient */}
      <div style={{
        background: 'linear-gradient(135deg, #2F0D66 0%, #1A0844 25%, #0D0633 50%, #000000 100%)'
      }}>
        <ClientShowcase />
        <Footer />
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes particle {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(var(--tx), var(--ty)) scale(0);
            opacity: 0;
          }
        }

        /* Animated Gradient Text */
        @keyframes gradientShiftPrimary {
          0%, 100% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 50% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
        }

        @keyframes gradientShiftSecondary {
          0%, 100% {
            background-position: 100% 50%;
          }
          25% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 50% 0%;
          }
          75% {
            background-position: 100% 0%;
          }
        }

        .animated-gradient-text-primary {
          background: linear-gradient(
            45deg,
            #ffffff 0%,
            #c084fc 20%,
            #a855f7 40%,
            #9333ea 60%,
            #7e22ce 80%,
            #6b21a8 100%
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShiftPrimary 6s ease infinite;
          font-family: "Poppins", sans-serif;
        }

        .animated-gradient-text-secondary {
          background: linear-gradient(
            45deg,
            #c084fc 0%,
            #a855f7 15%,
            #ec4899 30%,
            #f97316 45%,
            #eab308 60%,
            #84cc16 75%,
            #22c55e 90%,
            #06b6d4 100%
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShiftSecondary 8s ease infinite;
          font-family: "Poppins", sans-serif;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        .animate-particle {
          --tx: ${Math.random() * 200 - 100}px;
          --ty: ${Math.random() * 200 - 100}px;
          animation: particle 1s ease-out forwards;
        }

        .animated-gradient-border {
          background: transparent;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-1500 {
          animation-delay: 1.5s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .transform-origin-center {
          transform-origin: center;
        }
        .animated-gradient-text {
  background: linear-gradient(
    45deg,
    #ffffff 0%,
    #c084fc 25%,
    #a855f7 50%,
    #ec4899 75%,
    #f59e0b 100%
  );
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientShift 3s ease infinite;
  font-family: "Poppins", sans-serif;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Media queries for all three breakpoints - Lower the Let's Connect button animation */
@media (max-width: 375px) and (max-height: 667px) {
  .lets-connect-button {
    margin-top: 50px !important;
    margin-bottom: 25px !important;
    transform: translateY(20px) !important;
  }
  
  .lets-connect-button.animate-float {
    animation: float-mobile 3s ease-in-out infinite;
  }
  
  @keyframes float-mobile {
    0%, 100% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(12px);
    }
  }
  
  .connect-button {
    margin-top: 20px !important;
  }
}

@media (max-width: 360px) and (max-height: 750px) {
  .lets-connect-button {
    margin-top: 45px !important;
    margin-bottom: 20px !important;
    transform: translateY(15px) !important;
  }
  
  .lets-connect-button.animate-float {
    animation: float-mobile-360 3s ease-in-out infinite;
  }
  
  @keyframes float-mobile-360 {
    0%, 100% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(7px);
    }
  }
  
  .connect-button {
    margin-top: 18px !important;
  }
}

@media (max-width: 540px) and (max-height: 720px) {
  .lets-connect-button {
    margin-top: 40px !important;
    margin-bottom: 20px !important;
    transform: translateY(15px) !important;
  }
  
  .lets-connect-button.animate-float {
    animation: float-mobile-540 3s ease-in-out infinite;
  }
  
  @keyframes float-mobile-540 {
    0%, 100% {
      transform: translateY(15px);
    }
    50% {
      transform: translateY(7px);
    }
  }
  
  .connect-button {
    margin-top: 15px !important;
  }
}
      `}</style>
    </div>
    
  );
};

export default ContactForm;