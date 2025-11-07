import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

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

  // Mobile services accordion
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExpandedService, setMobileExpandedService] = useState(null);

  // Close-delay timer to prevent accidental closes
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

  // Routing
  const location = useLocation();
  const navigate = useNavigate();

  // Base nav items
  const navStart = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];
  const navEnd = [
    { name: "Case Studies", path: "/case-studies" },
    { name: "Careers", path: "/careers" },
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

  // Handle navigation
  const handleNavigation = (path) => {
    setServicesDropdownOpen(false);
    setHoveredService(null);
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileExpandedService(null);
    navigate(path);
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close dropdown
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        scheduleClose(0);
      }
    };
    const onEsc = (e) => {
      if (e.key === "Escape") {
        scheduleClose(0);
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesDropdownOpen(false);
    setHoveredService(null);
    setMobileServicesOpen(false);
    setMobileExpandedService(null);
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
      <div
        className={`mx-2 sm:mx-4 mt-2 sm:mt-4 transition-all duration-500 ${
          isScrolled
            ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/30 rounded-2xl"
            : "bg-black/20 backdrop-blur-md border border-white/5 rounded-2xl"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 flex items-center justify-between h-16 sm:h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 25, delay: 0.3, duration: 1.2 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center">
              <img 
                src="/images/aristasystems_logo.png" 
                alt="Arista Systems Logo" 
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain"
              />
            </Link>
          </motion.div>
        
          {/* Desktop Nav - Hidden on mobile/tablet, shown on lg+ */}
          <nav className="hidden lg:flex items-center space-x-3 xl:space-x-6 relative">
            {navStart.map((item, index) => (
              <motion.div key={item.name} variants={fadeInUp} initial="hidden" animate="show" custom={index}>
                <Link
                  to={item.path}
                  className={`relative font-medium text-sm xl:text-base transition-colors duration-300 group ${
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

            {/* Services Dropdown */}
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
                className={`relative font-medium text-sm xl:text-base transition-colors duration-300 group flex items-center gap-1 ${
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
                <ChevronDown
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
                          <button
                            type="button"
                            role="menuitem"
                            aria-haspopup={service.hasSubItems ? "true" : undefined}
                            aria-expanded={service.hasSubItems ? (showSub ? "true" : "false") : undefined}
                            onClick={() => {
                              if (service.hasSubItems) {
                                setHoveredService((v) => (v === index ? null : index));
                              } else if (service.path) {
                                handleNavigation(service.path);
                              }
                            }}
                            className={`w-full flex items-center justify-between px-4 py-3 text-xs xl:text-[13px] tracking-wide uppercase font-semibold text-gray-100 hover:bg-gray-900 transition-colors ${
                              showSub ? "bg-gray-900" : ""
                            }`}
                          >
                            <span className="text-left">{service.title}</span>
                            {service.hasSubItems ? (
                              <ChevronRight className={`h-4 w-4 transition-transform ${showSub ? "translate-x-0.5" : ""}`} />
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
                                    className="w-full text-left block px-4 py-3 text-sm text-gray-100 hover:bg-gray-900 transition-colors"
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

            {/* End Nav Items */}
            {navEnd.map((item, index) => (
              <motion.div key={item.name} variants={fadeInUp} initial="hidden" animate="show" custom={3 + index}>
                <Link
                  to={item.path}
                  className={`relative font-medium text-sm xl:text-base transition-colors duration-300 group ${
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

          {/* Right Side: Socials + CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Socials - Hidden on mobile, shown on sm+ */}
            <div className="hidden sm:flex items-center space-x-2 xl:space-x-3">
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
                <Instagram className="w-5 h-5" />
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
                <Twitter className="w-5 h-5" />
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
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>

            {/* CTA - Navigate to Contact Page */}
            <motion.button
              onClick={() => handleNavigation("/contact")}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 100, damping: 15 }}
              className="px-3 sm:px-4 xl:px-5 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white text-xs sm:text-sm xl:text-base font-bold hover:from-violet-700 hover:to-purple-700 transition-all duration-500 whitespace-nowrap shadow-lg hover:shadow-violet-500/50"
            >
              Let's talk
            </motion.button>

            {/* Mobile Hamburger - Shown only on lg and below */}
            <div className="lg:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleMenu}
                className="text-gray-300 p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </motion.button>
            </div>
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
            className="lg:hidden overflow-hidden bg-gray-950 shadow-lg mx-2 sm:mx-4 mt-2 rounded-2xl max-h-[calc(100vh-6rem)] overflow-y-auto"
          >
            <nav className="px-4 py-5 space-y-2">
              {/* Home & About */}
              {navStart.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block w-full text-left font-medium py-3 px-3 rounded-lg transition-colors duration-300 ${
                    location.pathname === item.path ? "text-violet-400 bg-violet-950/30" : "text-gray-300 hover:text-violet-400 hover:bg-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Services Accordion */}
              <div className="border-t border-gray-800 pt-2">
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className={`w-full text-left font-medium py-3 px-3 rounded-lg transition-colors duration-300 flex items-center justify-between ${
                    location.pathname.startsWith("/services") ? "text-violet-400 bg-violet-950/30" : "text-gray-300 hover:text-violet-400 hover:bg-gray-900"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-2 space-y-1">
                        {servicesData.map((service, idx) => (
                          <div key={idx}>
                            {service.hasSubItems ? (
                              <>
                                <button
                                  onClick={() => setMobileExpandedService(mobileExpandedService === idx ? null : idx)}
                                  className="w-full text-left text-gray-400 text-sm font-medium py-2 px-2 rounded hover:bg-gray-900 flex items-center justify-between"
                                >
                                  <span>{service.title}</span>
                                  <ChevronRight className={`w-4 h-4 transition-transform ${mobileExpandedService === idx ? "rotate-90" : ""}`} />
                                </button>
                                <AnimatePresence>
                                  {mobileExpandedService === idx && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="overflow-hidden ml-4 space-y-1"
                                    >
                                      {service.subItems.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          to={subItem.path}
                                          className="block text-gray-300 hover:text-violet-400 transition-colors duration-300 text-sm py-2 px-2 rounded hover:bg-gray-900"
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </>
                            ) : (
                              <Link
                                to={service.path}
                                className="block text-gray-300 hover:text-violet-400 transition-colors duration-300 text-sm py-2 px-2 rounded hover:bg-gray-900"
                              >
                                {service.title}
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Other Nav Items */}
              <div className="border-t border-gray-800 pt-2">
                {navEnd.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block w-full text-left font-medium py-3 px-3 rounded-lg transition-colors duration-300 ${
                      location.pathname === item.path ? "text-violet-400 bg-violet-950/30" : "text-gray-300 hover:text-violet-400 hover:bg-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Socials */}
              <div className="pt-4 border-t border-gray-800">
                <div className="flex space-x-5 justify-center pb-2">
                  {[
                    { 
                      icon: Instagram, 
                      color: "hover:text-pink-400 hover:bg-pink-900/30", 
                      link: "#",
                      label: "Instagram"
                    },
                    { 
                      icon: Twitter, 
                      color: "hover:text-blue-400 hover:bg-blue-900/30", 
                      link: "#",
                      label: "Twitter"
                    },
                    { 
                      icon: Linkedin, 
                      color: "hover:text-blue-500 hover:bg-blue-900/30", 
                      link: "#",
                      label: "LinkedIn"
                    },
                  ].map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`text-gray-400 p-2 rounded-full border border-transparent hover:border-current transition-all duration-300 hover:scale-110 hover:rotate-6 ${social.color}`}
                      >
                        <IconComponent className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;