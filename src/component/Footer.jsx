import React from "react";
import { Link } from "react-router-dom";
// Importing specific icons from lucide-react, which are commonly available.
// However, to ensure maximum compatibility in environments where external libraries fail,
// we will replace the contact icons (Phone, Mail, MapPin) with inline SVGs/placeholders 
// and keep the social icons as placeholders since their links are '#'.

// Placeholder for social icons (since external icons like react-icons/fi failed)
const GithubIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.75c3.27-1.46 6.57-2.92 6.57-6.57 0-3.65-2.92-6.57-6.57-6.57s-6.57 2.92-6.57 6.57c0 3.65 3.3 5.11 6.57 6.57a4.8 4.8 0 0 0-1 3.75v4"/><path d="M12 2a10 10 0 0 0-3.3 19.4c.5.1.7-.2.7-.5v-2c-3.3-.7-4-1.6-4-3.4 0-.8.2-1.6.5-2.2-1.5-.2-2.3-1-2.3-2.6 0-1.6.8-2.5 2.3-2.6.3-.6.6-1.3 1-1.9-3.2-.5-6.5 1-6.5 6.5 0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0-5.5-3.3-7-6.5-6.5.4.6.7 1.3 1 1.9 1.5.1 2.3 1 2.3 2.6 0 1.6-.8 2.4-2.3 2.6.3.6.6 1.3 1 1.9z"/></svg>;
const TwitterIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4-.8 5.4-2.2A4.5 4.5 0 0 1 8.2 9c.7 0 1.3.1 1.8.4-1.3-.8-2.7-1.4-4.5-1.4V8a4.5 4.5 0 0 0 3.5 4.5c-.3.1-.7.2-1.1.2.3 1.3 1.4 2.3 2.6 2.3s2.2-.6 2.9-1.8c.8.5 1.7.9 2.7.9a9 9 0 0 0 6.6-2.5c.3-.2.6-.4.9-.7 1-.3 1.9-.8 2.6-1.4.3-.2.6-.4.9-.7-.8.5-1.7.9-2.6 1.4-1.2.8-2.6 1.3-4.1 1.5 1-.6 1.8-1.4 2.4-2.4C19 6.5 20.2 5 21.5 4"/></svg>;
const LinkedinIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const InstagramIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;

// Specific icons for contact info
const PhoneIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "text-green-400"}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.7-6.7A19.79 19.79 0 0 1 2 4.18V2a2 2 0 0 1 2-2h3.18a2 2 0 0 1 2 1.73l.2 2.66a2 2 0 0 1-.41 1.77l-1.57 1.57a15.46 15.46 0 0 0 6.88 6.88l1.57-1.57a2 2 0 0 1 1.77-.41l2.66.2A2 2 0 0 1 22 16.92z"/></svg>;
const MailIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className || "text-blue-400"}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
const MapPinIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;

const Footer = () => {
  // Helper function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Use 'auto' for instant jump
    });
  };

  return (
    <>
      {/* New CTA Section with Animated Background */}
      <section className="relative bg-black text-white overflow-hidden min-h-[35vh] md:min-h-[35vh] lg:min-h-[35vh] py-8 md:py-12">
        {/* Container to keep all three sections together */}
        <div className="relative flex flex-col items-center justify-center gap-4 md:gap-6 h-full">
          
          {/* === Animated Background Text - Top === */}
          <div className="w-full flex items-center pointer-events-none overflow-hidden whitespace-nowrap">
            <div className="flex space-x-8 md:space-x-16 animate-scroll-left">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-700"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
                >
                  ARISTASYSTEMS
                </span>
              ))}
            </div>
          </div>

          {/* === Main Content === */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Turn ideas into measurable results.
              </h2>
              <button className="group relative bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 rounded-lg overflow-hidden">
              <Link to="/contact">
                <span className="relative z-10">GET A CUSTOM QUOTE TODAY</span>
              </Link>

                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              </button>
            </div>
          </div>

          {/* === Animated Background Text - Bottom === */}
          <div className="w-full flex items-center pointer-events-none overflow-hidden whitespace-nowrap">
            <div className="flex space-x-8 md:space-x-16 animate-scroll-right">
              {[...Array(8)].map((_, i) => (
                <span
                  key={i}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-700"
                  style={{ WebkitTextStroke: "1px rgba(255,255,255,0.08)" }}
                >
                  ARISTASYSTEMS
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Animations */}
        {/* FIX: Removed the non-standard 'jsx' attribute from the style tag */}
        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 25s linear infinite;
            display: flex;
            will-change: transform;
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
            display: flex;
            will-change: transform;
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900 via-transparent to-pink-900 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
          {/* Logo + Address */}
          <div className="group">
            <Link to="/" onClick={scrollToTop}> {/* Added onClick here */}
              <img 
                src="/images/aristasystems_logo.png" 
                alt="Arista Systems" 
                className="h-14 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </Link>
            <div className="mt-4 text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
              <div className="flex items-start gap-2 hover:text-white transition-colors duration-200">
                <MapPinIcon className="mt-1 flex-shrink-0" /> {/* Replaced FiMapPin with MapPinIcon */}
                <p>
                  Infotech Tower, Ground Floor, South Ambazari Rd,
                  <br /> Gayatri Nagar IT Park, Nagpur, Maharashtra 440022
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <span className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-purple-600 hover:scale-105 transition-all duration-300 cursor-pointer">
                Shopify Partner
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-pink-600 hover:scale-105 transition-all duration-300 cursor-pointer">
                Shopify Expert
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-purple-400 transition-colors duration-300 cursor-pointer">
              SERVICES
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "Creative Production", path: "/services/creative-production" },
                { name: "Website Development", path: "/services/website-development" },
                { name: "Digital Marketing", path: "/services/digital-marketing" },
                { name: "Finance & Reconciliation", path: "/services/finance-reconciliation" },
                { name: "Amazon & Marketplace Management", path: "/services/amazon-marketplace" },
                { name: "Customer Experience & Support", path: "/services/customer-experience" },
              ].map((service, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group"
                >
                  <Link 
                    to={service.path} 
                    onClick={scrollToTop} // Added onClick here
                    className="relative z-10"
                  >
                    {service.name}
                  </Link>
                  <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-purple-600 to-transparent opacity-20 group-hover:w-full transition-all duration-300 -z-10"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
              QUICK LINKS
            </h3>
            <ul className="space-y-2 text-gray-400">
              {[
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Work", path: "/case-studies" },
                { name: "Careers", path: "/careers" },
                { name: "blogs", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li
                  key={index}
                  className="hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer relative group"
                >
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop} // Added onClick here
                    className="relative z-10"
                  >
                    {link.name}
                  </Link>
                  <div className="absolute left-0 top-0 w-0 h-full bg-gradient-to-r from-pink-600 to-transparent opacity-20 group-hover:w-full transition-all duration-300 -z-10"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch + Socials */}
          <div>
            <h3 className="text-white font-semibold mb-4 hover:text-yellow-400 transition-colors duration-300 cursor-pointer">
              GET IN TOUCH
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <PhoneIcon className="text-green-400 w-5 h-5" /> {/* Replaced FiPhone with PhoneIcon */}
                <a href="tel:+917028001906">(+91) 702-8001-906</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <PhoneIcon className="text-green-400 w-5 h-5" /> {/* Replaced FiPhone with PhoneIcon */}
                <a href="tel:+919178298442">(+91) 917-829-8442</a>
              </li>
              <li className="flex items-center gap-2 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
                <MailIcon className="text-blue-400 w-5 h-5" /> {/* Replaced FiMail with MailIcon */}
                <a href="mailto:hr@aristasystems.in">hr@aristasystems.in</a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Follow us on</p>
              <div className="flex gap-4 text-xl">
                {[
                  { icon: GithubIcon, color: "hover:text-gray-300 hover:bg-gray-800", link: "#" },
                  { icon: TwitterIcon, color: "hover:text-blue-400 hover:bg-blue-900/30", link: "#" },
                  { icon: InstagramIcon, color: "hover:text-pink-400 hover:bg-pink-900/30", link: "#" },
                  { icon: LinkedinIcon, color: "hover:text-blue-500 hover:bg-blue-900/30", link: "#" },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 p-2 rounded-full border border-transparent hover:border-current transition-all duration-300 hover:scale-110 hover:rotate-6 ${social.color}`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 relative">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-500 text-sm hover:text-gray-300 transition-colors duration-300 items-center justify-center">
              Copyright © 2025 Arista Systems Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;