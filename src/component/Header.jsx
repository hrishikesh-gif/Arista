import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiTwitter,
  FiLinkedin,
  FiInstagram,
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronRight,
} from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // Mobile menu
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  // Scroll detection for glass morphism
  const [isScrolled, setIsScrolled] = useState(false);

  // Services dropdown (desktop)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const dropdownRef = useRef(null);

  // close-delay timer to prevent accidental closes
  const closeTimer = useRef(null);
  const scheduleClose = (ms = 250) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      setServicesDropdownOpen(false);
      setHoveredService(null);
    }, ms);
  };
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Contact form
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  // Routing
  const location = useLocation();
  const navigate = useNavigate();

  // Base nav items (Services is handled separately)
  const navStart = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  const navEnd = [
    { name: "Case Studies", path: "/case-studies" },
    { name: "Careers", path: "/Careers" },
    { name: "Blog", path: "/blog" },
  ];

  // Services data
  const servicesData = [
    {
      title: "Customer Experience & Support",
      hasSubItems: true,
      subItems: [
        { name: "Customer Service", path: "/services/customer-service" },
        { name: "Chargeback & Dispute Resolution", path: "/services/chargeback-dispute" },
        { name: "Lead Reconciliation & Portal Auditing", path: "/services/lead-reconciliation" },
      ],
    },
    {
      title: "Amazon & Marketplace Management",
      hasSubItems: true,
      subItems: [
        { name: "Amazon Seller Support", path: "/services/amazon-seller-support" },
        { name: "Amazon Image Editing", path: "/services/amazon-image-editing" },
        { name: "Marketplace Advertising", path: "/services/marketplace-advertising" },
        { name: "Marketplace Customer Support", path: "/services/marketplace-customer-support" },
      ],
    },
    {
      title: "Creative Production",
      hasSubItems: true,
      subItems: [
        { name: "Photo Editing & Retouching", path: "/services/photo-editing" },
        { name: "Video & Motion Content", path: "/services/video-motion" },
        { name: "Design Services", path: "/services/design-services" },
        { name: "Website Design", path: "/services/website-design" },
      ],
    },
    {
      title: "Digital Marketing",
      hasSubItems: true,
      subItems: [
        { name: "SEO Services", path: "/services/seo" },
        { name: "PPC & Paid Media", path: "/services/ppc-paid-media" },
        { name: "Social Media Marketing", path: "/services/social-media" },
        { name: "Email Marketing", path: "/services/email-marketing" },
        { name: "CRO", path: "/services/cro" },
      ],
    },
    {
      title: "Website Development",
      hasSubItems: true,
      subItems: [
        { name: "Shopify Development", path: "/services/shopify-development" },
        { name: "WordPress / CMS Development", path: "/services/wordpress-cms" },
        { name: "Magento, BigCommerce & Custom CMS", path: "/services/magento-bigcommerce" },
        { name: "Website Maintenance & Product Launch Ops", path: "/services/website-maintenance" },
      ],
    },
    {
      title: "Content & Catalog Management",
      hasSubItems: true,
      subItems: [
        { name: "Product Content Migration & Management", path: "/services/content-migration" },
        { name: "404 Cleanup & Categorization Structure", path: "/services/404-cleanup" },
      ],
    },
    {
      title: "Operations & Fulfillment Support",
      hasSubItems: false,
      path: "/services/operations-fulfillment",
    },
    {
      title: "Finance & Reconciliation",
      hasSubItems: false,
      path: "/services/finance-reconciliation",
    },
    {
      title: "Data, Reporting & Insights",
      hasSubItems: false,
      path: "/services/data-reporting",
    },
  ];

  // Kill ScrollTriggers when navigating away from home
  const handleNavigation = (_e, path) => {
    setServicesDropdownOpen(false);
    setHoveredService(null);
    if (location.pathname === "/" && path !== "/") {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    }
  };

  // Scroll detection for glass morphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        scheduleClose(0);
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") scheduleClose(0);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setHoveredService(null);
    setIsOpen(false);
  }, [location.pathname]);

  // Framer variants
  const fadeInUp = {
    hidden: { opacity: 0, y: -20 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20, delay: 0.7 + i * 0.2 },
    }),
  };

  return (
    <header className="fixed w-full z-[150] transition-all duration-500">
      {/* Glass Morphism Container */}
      <div className={`mx-4 mt-4 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30 rounded-2xl' 
          : 'bg-black/20 backdrop-blur-md border border-white/5 rounded-2xl'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3, duration: 1.2 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center" onClick={(e) => handleNavigation(e, "/")}>
              <img 
                src="images/aristasystems_logo.png" 
                alt="Arista Systems Logo" 
                className="h-10 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="lg:flex hidden space-x-8 relative items-center">
            {navStart.map((item, index) => (
              <motion.div key={item.name} variants={fadeInUp} initial="hidden" animate="show" custom={index}>
                <Link
                  to={item.path}
                  onClick={(e) => handleNavigation(e, item.path)}
                  className={`relative font-medium transition-colors duration-300 group ${
                    location.pathname === item.path ? "text-violet-400" : "text-gray-200 hover:text-violet-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-violet-500 transition-all duration-300 ${
                      location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Services (dark hierarchical) */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              custom={2}
              className="relative"
              ref={dropdownRef}
              onMouseEnter={cancelClose}
              onMouseLeave={() => scheduleClose(250)}
            >
              <button
                type="button"
                className={`relative font-medium transition-colors duration-300 group flex items-center gap-1 ${
                  location.pathname.startsWith("/services") ? "text-violet-400" : "text-gray-200 hover:text-violet-400"
                }`}
                aria-haspopup="true"
                aria-expanded={servicesDropdownOpen}
                aria-controls="services-menu"
                onMouseEnter={() => {
                  cancelClose();
                  setServicesDropdownOpen(true);
                }}
                onClick={() => setServicesDropdownOpen((v) => !v)}
              >
                Services
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                />
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 bg-violet-500 transition-all duration-300 ${
                    location.pathname.startsWith("/services") || servicesDropdownOpen ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>

              {/* Root panel */}
              <AnimatePresence>
                {servicesDropdownOpen && (
                  <motion.div
                    id="services-menu"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.16 }}
                    className="absolute top-full left-0 mt-2 rounded-2xl shadow-2xl border border-gray-800 bg-gray-950 w-80 py-2 z-[2000]"
                    role="menu"
                  >
                    {servicesData.map((service, index) => {
                      const showSub = hoveredService === index && service.hasSubItems;
                      return (
                        <div
                          key={service.title}
                          className="relative"
                          onMouseEnter={() => (service.hasSubItems ? setHoveredService(index) : setHoveredService(null))}
                        >
                          {/* Row */}
                          <button
                            type="button"
                            role="menuitem"
                            aria-haspopup={service.hasSubItems ? "true" : undefined}
                            aria-expanded={service.hasSubItems ? (showSub ? "true" : "false") : undefined}
                            onClick={() => {
                              if (service.hasSubItems) {
                                setHoveredService((v) => (v === index ? null : index));
                              } else if (service.path) {
                                setServicesDropdownOpen(false);
                                handleNavigation(null, service.path);
                                navigate(service.path);
                              }
                            }}
                            className={`w-full flex items-center justify-between px-4 py-3 text-[13px] tracking-wide uppercase font-semibold text-gray-100 hover:bg-gray-900 ${
                              showSub ? "bg-gray-900" : ""
                            }`}
                          >
                            <span className="text-left">{service.title}</span>
                            {service.hasSubItems ? (
                              <FiChevronRight className={`h-4 w-4 transition-transform ${showSub ? "translate-x-0.5" : ""}`} />
                            ) : null}
                          </button>

                          {/* Flyout */}
                          <AnimatePresence>
                            {showSub && (
                              <motion.div
                                initial={{ opacity: 0, x: 8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 6 }}
                                transition={{ duration: 0.14 }}
                                className="absolute top-0 left-full -ml-px w-[28rem] bg-gray-950 border border-gray-800 rounded-2xl shadow-2xl py-2 z-[2100]"
                                role="menu"
                                aria-label={`${service.title} submenu`}
                                onMouseEnter={cancelClose}
                                onMouseLeave={() => scheduleClose(250)}
                              >
                                {service.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.path}
                                    role="menuitem"
                                    onClick={(e) => { setServicesDropdownOpen(false); handleNavigation(e, sub.path); }}
                                    className="block px-4 py-3 text-sm text-gray-100 hover:bg-gray-900"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* End: Case Studies, Careers, Blog */}
            {navEnd.map((item, index) => (
              <motion.div key={item.name} variants={fadeInUp} initial="hidden" animate="show" custom={3 + index}>
                <Link
                  to={item.path}
                  onClick={(e) => handleNavigation(e, item.path)}
                  className={`relative font-medium transition-colors duration-300 group ${
                    location.pathname === item.path ? "text-violet-400" : "text-gray-200 hover:text-violet-400"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 bg-violet-500 transition-all duration-300 ${
                      location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Socials */}
          <div className="md:flex hidden items-center space-x-4">
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FiInstagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FiTwitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="text-gray-400 hover:text-violet-400 transition-colors duration-300"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </motion.a>
          </div>

          {/* CTA */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-500 text-white font-bold hover:from-violet-700 hover:to-purple-700 transition-all duration-500"
          >
            Let&apos;s talk
          </motion.button>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center">
            <motion.button whileTap={{ scale: 0.9 }} onClick={toggleMenu} className="text-gray-300" aria-label="Toggle menu">
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-gray-950 shadow-lg px-4 py-5 space-y-5 mx-4 mt-2 rounded-2xl"
          >
            <nav className="flex flex-col space-y-3">
              {[{ name: "Home", path: "/" }, { name: "About", path: "/about" }].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={(e) => {
                    toggleMenu();
                    handleNavigation(e, item.path);
                  }}
                  className={`font-medium py-2 transition-colors duration-300 ${
                    location.pathname === item.path ? "text-violet-400" : "text-gray-300 hover:text-violet-400"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/services"
                onClick={(e) =>{ toggleMenu(); handleNavigation(e, "/services"); }}
                className={`font-medium py-2 transition-colors duration-300 ${
                  location.pathname.startsWith("/services") ? "text-violet-400" : "text-gray-300 hover:text-violet-400"
                }`}
              >
                Services
              </Link>

              {[{ name: "Case Studies", path: "/case-studies" }, { name: "Careers", path: "/Careers" }, { name: "Blog", path: "/blog" }].map(
                (item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={(e) => {
                      toggleMenu();
                      handleNavigation(e, item.path);
                    }}
                    className={`font-medium py-2 transition-colors duration-300 ${
                      location.pathname === item.path ? "text-violet-400" : "text-gray-300 hover:text-violet-400"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}

              {/* Mobile Services breakdown */}
              <div className="pt-2">
                <p className="text-violet-400 font-medium mb-3">Services</p>
                <div className="space-y-2 ml-4">
                  {servicesData.map((service, index) => (
                    <div key={index}>
                      {service.hasSubItems ? (
                        <>
                          <p className="text-gray-400 text-sm font-medium mb-1">{service.title}</p>
                          {service.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              onClick={(e) => { toggleMenu(); handleNavigation(e, "/services"); }}
                              className="block text-gray-300 hover:text-violet-400 transition-colors duration-300 text-sm py-1 ml-4"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </>
                      ) : (
                        <Link to={service.path}
                          onClick={(e) => { toggleMenu(); handleNavigation(e, service.path); }}
                          className="block text-gray-300 hover:text-violet-400 transition-colors duration-300 text-sm py-1"
                        >
                          {service.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </nav>

            <div className="pt-4 border-t border-gray-800">
              <div className="flex space-x-5">
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FiInstagram className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FiTwitter className="h-5 w-5 text-gray-300" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin className="h-5 w-5 text-gray-300" />
                </a>
              </div>
              <button
                onClick={() => {
                  toggleMenu();
                  openContactForm();
                }}
                className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold text-white"
              >
                Let&apos;s Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 26, stiffness: 220, duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Get In Touch</h1>
                <button onClick={closeContactForm} aria-label="Close contact form">
                  <FiX className="w-5 h-5 text-gray-700 dark:text-gray-300 font-extrabold" />
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Contact No."
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md text-white font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;