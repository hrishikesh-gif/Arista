import { FaFigma, FaWordpress, FaShopify, FaMagento, FaReact } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import {
  FiPhone,
  FiMail,
  FiLinkedin,
  FiTwitter,
  FiHeadphones,
  FiSearch,
  FiDollarSign,
  FiPenTool,
} from "react-icons/fi";
import { SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import { motion } from "framer-motion";
import Footer from "../../component/Footer";

const tech = [
  { name: "Figma", Icon: FaFigma },
  { name: "WordPress", Icon: FaWordpress },
  { name: "Shopify", Icon: FaShopify },
  { name: "Magento", Icon: FaMagento },
  { name: "React", Icon: FaReact },
];

const capabilities = [
  { title: "Call Support", Icon: FiHeadphones },
  { title: "Pay Per Click", Icon: FiDollarSign },
  { title: "Search Engine\nOptimization", Icon: FiSearch },
  { title: "Photoshop", Icon: SiAdobephotoshop },
  { title: "Illustrator", Icon: SiAdobeillustrator },
  { title: "Graphic Design", Icon: FiPenTool },
];

function SectionHeader({ overline, highlight }) {
  return (
    <h3 className="text-[22px] md:text-3xl font-semibold tracking-tight">
      <span className="text-zinc-200">{overline} </span>
      <span className="text-amber-400">{highlight}</span>
    </h3>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 } }),
};

const float = {
  initial: { y: 0 },
  animate: { y: [0, -6, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
};

export default function CustomerServices() {
  const marqueeItems = [...tech, ...tech, ...tech];

  return (
    <div className="w-full bg-[#0b0b0b] text-white">
      {/* Inline keyframes for marquee & extras */}
      <style>{`
          @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .marquee-track { animation: marquee 30s linear infinite; }
          .marquee-track:hover { animation-play-state: paused; }
          .marquee-mask { -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
          @keyframes ringPulse { 0% { transform: scale(1); opacity:.12 } 70% { opacity:.06 } 100% { transform: scale(1.15); opacity:0 } }
          .pulse-ring::after { content:""; position:absolute; inset:-6px; border-radius:9999px; border:1px solid rgba(255,255,255,0.18); animation: ringPulse 2.2s ease-out infinite; }
          .will-3d { transform-style: preserve-3d; perspective: 900px; }
        `}</style>

      {/* HERO with enhanced gradient background */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-900/20 via-blue-900/15 to-rose-900/20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_10%_-10%,rgba(56,189,248,.25),transparent),radial-gradient(1100px_400px_at_90%_-20%,rgba(244,114,182,.25),transparent)]" />
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 py-16">
          <p className="text-sm tracking-[0.25em] text-zinc-300 uppercase">Email. Chat. Voice.</p>
          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] font-semibold">
            <span className="bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent">WordPress / CMS</span>{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 to-rose-300 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="mt-8 max-w-4xl text-[18px] leading-8 text-zinc-300">
            At Arista Systems, we turn complex ideas into seamless, intuitive journeys that captivate audiences and drive meaningful outcomes. Our design approach fuses strategic
            thinking with cutting-edge creativity to build websites that don't just exist—they perform.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-sky-500/25 ring-1 ring-sky-400/40 hover:from-sky-400 hover:to-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[.98] transition"
            >
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute -inset-1 opacity-0 group-hover:opacity-20 transition" aria-hidden />
                <span className="absolute -left-8 top-1/2 h-[200%] w-16 -translate-y-1/2 rotate-12 bg-white/60 blur-md opacity-0 group-hover:opacity-30 group-hover:translate-x-[120%] transition-all duration-700" aria-hidden />
              </span>
              <HiOutlineChatBubbleLeftRight className="text-lg" />
              Let's Talk
            </a>
          </div>
        </div>
      </section>

      {/* TECH STRIP + CAPABILITIES with gradient background */}
      <section className="relative bg-gradient-to-b from-[#0b0b0b] to-purple-900/10">
        {/* marquee */}
        <div className="border-t border-white/5 py-8">
          <div className="overflow-hidden marquee-mask">
            <div className="flex marquee-track">
              {[0, 1].map((loop) => (
                <div key={loop} className="flex items-center gap-16 px-8">
                  {marqueeItems.map(({ name, Icon }, i) => (
                    <motion.div
                      key={`${name}-${loop}-${i}`}
                      variants={float}
                      initial="initial"
                      animate="animate"
                      className="group flex flex-col items-center gap-3 py-2 will-3d flex-shrink-0 min-w-[120px]"
                    >
                      <div className="relative grid h-24 w-24 place-items-center rounded-full border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-[0_1px_0_0_rgba(255,255,255,0.05)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                        <Icon className="text-5xl text-zinc-200 transition-transform duration-300 group-hover:scale-110" aria-hidden />
                        <span className="pulse-ring absolute inset-0 rounded-full" aria-hidden />
                      </div>
                      <span className="text-sm font-medium text-zinc-300 opacity-80 transition-opacity group-hover:opacity-100 whitespace-nowrap">{name}</span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 space-y-14">
          {[
            {
              over: "Website",
              hi: "Redesign",
              body1:
                "In today's digital landscape, you have just 50 milliseconds to make a lasting impression. That first glance is your opportunity to captivate—and we're here to make it unforgettable.",
              body2:
                "We revitalize outdated websites through strategic design thinking, modern UX practices, and interactive solutions that align with your brand, audience, and goals. Our redesigns go beyond aesthetics to deliver performance and purpose at every touchpoint—compelling visuals, mobile-optimized layouts, and built-for-growth foundations that drive results.",
            },
            {
              over: "B2B",
              hi: "Websites",
              body1:
                "For B2B, your website should be more than a digital brochure—it should be your best sales rep. We craft conversion-focused experiences that showcase expertise, streamline complex buyer journeys, and turn digital interactions into lasting business relationships.",
              body2:
                "From intuitive navigation to strategic content architecture, we balance professional credibility with compelling storytelling to generate qualified leads through the funnel with clarity and confidence.",
            },
            {
              over: "Visual",
              hi: "Design",
              body1:
                "We fuse artistic vision with strategic intent to create visuals that are as purposeful as they are captivating. Every element—from color and typography to layout and imagery—is curated to reinforce your brand and leave a lasting impression.",
              body2:
                "Applying principles of color psychology, spatial harmony, and modern storytelling, we design interfaces that resonate, communicate, and convert—elevating your brand above the digital noise.",
            },
            {
              over: "Custom",
              hi: "Web Design",
              body1:
                "Your brand deserves a website as unique as your vision. We craft bespoke digital experiences that blend innovative design with consumer-centric functionality to create websites that excel.",
              body2:
                "Our process begins with discovery—understanding your brand, goals, audience, and value proposition—then translating insights into stunning, purpose-built designs that capture attention and drive engagement.",
            },
            {
              over: "Responsive",
              hi: "Design",
              body1:
                "Your website must perform flawlessly across every screen and device. We take a thoughtful, mobile-first approach that prioritizes speed, accessibility, and clarity—without cookie-cutter layouts.",
              body2:
                "We design adaptable, performance-first experiences that scale as your needs evolve—keeping teams aligned and users engaged no matter how they connect.",
            },
          ].map((s, idx) => (
            <motion.div
              key={s.hi}
              className="relative grid md:grid-cols-2 gap-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              custom={idx}
            >
              <h3 className="text-2xl md:text-3xl font-semibold">
                <span className="text-zinc-200">{s.over} </span>
                <span className="text-amber-400">{s.hi}</span>
              </h3>
              <div className="text-zinc-300 leading-7 text-sm md:text-[15px]">
                <p>{s.body1}</p>
                <p className="mt-3">{s.body2}</p>
              </div>
              {/* Decorative faint ring on right, similar to screenshot */}
              <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 hidden md:block opacity-10">
                <div className="h-28 w-28 rounded-full border border-white/20" />
              </div>
              {idx < 4 && <hr className="col-span-2 mt-6 border-white/10" />}
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mx-auto max-w-7xl px-6 sm:px-8 pb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/15 to-rose-500/20 p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center will-3d transition-transform">
            <div>
              <h4 className="text-xl md:text-2xl font-semibold">
                Digital experiences that don't just tell your story they make your brand the life of the online party.
              </h4>
              <a
                href="#contact"
                className="group relative mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-sky-400/40 hover:from-sky-400 hover:to-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[.98] transition"
              >
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute -left-10 top-1/2 h-[180%] w-12 -translate-y-1/2 rotate-12 bg-white/60 blur-md opacity-0 group-hover:opacity-30 group-hover:translate-x-[120%] transition-all duration-700" />
                </span>
                <HiOutlineChatBubbleLeftRight /> Let's Talk
              </a>
            </div>
            <div className="relative h-56 md:h-64 rounded-xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 overflow-hidden">
              {/* soft moving highlight */}
              <motion.span
                className="absolute -inset-10 rounded-[40px] bg-white/5 blur-2xl"
                animate={{ x: ["-10%", "40%", "-10%"], y: ["-20%", "10%", "-20%"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden
              />
            </div>
          </div>
        </motion.div>

        {/* Case Studies Section with Logos and Images */}
        <motion.div
          className="mx-auto max-w-7xl px-6 sm:px-8 py-16 bg-gradient-to-b from-purple-900/10 to-[#0b0b0b]"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold">
            <span className="text-zinc-200">Case </span>
            <span className="text-sky-400">Studies</span>
          </h3>
          <p className="mt-2 text-zinc-400 max-w-2xl">
            Discover how we've helped businesses transform their customer service and achieve remarkable results.
          </p>
          
         <div className="mt-12 grid lg:grid-cols-2 gap-8 items-stretch">
  {/* Visual card with actual client logos */}
  <div className="group rounded-xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/10 relative will-3d transition-transform duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
    <div className="h-72 sm:h-[420px] bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 relative overflow-hidden">
      {/* Client logos grid */}
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="grid grid-cols-2 gap-6 w-full max-w-md">
          {/* Your Logo */}
          <div className="rounded-2xl p-4 flex items-center justify-center shadow-lg">
            <img 
              src="/images/logo-8.webp" 
              alt="Your Company Logo" 
              className="max-w-full max-h-16 object-contain"
            />
          </div>
          {/* Your Logo */}
          <div className="rounded-2xl p-4 flex items-center justify-center shadow-lg ">
            <img 
              src="/images/logo-3.webp" 
              alt="Your Company Logo" 
              className="max-w-full max-h-16 object-contain"
            />
          </div>
          {/* Your Logo */}
          <div className="rounded-2xl p-4 flex items-center justify-center shadow-lg ">
            <img 
              src="/images/logo-4.webp" 
              alt="Your Company Logo" 
              className="max-w-full max-h-16 object-contain"
            />
          </div>
          {/* Your Logo */}
          <div className="rounded-2xl p-4 flex items-center justify-center shadow-lg">
            <img 
              src="/images/logo-2.webp" 
              alt="Your Company Logo" 
              className="max-w-full max-h-16 object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"
        animate={{ y: [0, 15, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
    </div>
    
    {/* glossy sweep */}
    <span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700" aria-hidden>
      <span className="absolute -left-10 top-0 h-full w-16 rotate-12 bg-white/10 blur-md translate-x-0 group-hover:translate-x-[140%] transition-transform duration-[1400ms]" />
    </span>
  </div>

  {/* Metrics and CTAs */}
  <div className="rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 p-8 flex flex-col">
    <div className="flex-1">
      <p className="text-sm text-zinc-400 mb-2">PROVEN RESULTS</p>
      <h4 className="text-xl font-semibold mb-6">
        From Concept To Market:
        <br />
        We Engineer Projects For Superior Performance
      </h4>
      
      <div className="mt-8 grid grid-cols-2 gap-6">
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 border border-blue-500/20"
        >
          <div className="text-3xl font-bold text-sky-400">32%</div>
          <div className="text-sm text-zinc-300 mt-2">Decrease in bounce rates</div>
          <div className="text-xs text-zinc-500 mt-1">Across 15+ projects</div>
        </motion.div>
        <motion.div
          whileHover={{ y: -4, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-xl bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 p-6 border border-emerald-500/20"
        >
          <div className="text-3xl font-bold text-emerald-400">20%</div>
          <div className="text-sm text-zinc-300 mt-2">Increase in conversion</div>
          <div className="text-xs text-zinc-500 mt-1">Within first 3 months</div>
        </motion.div>
      </div>
      
      <div className="mt-8 p-4 rounded-lg bg-white/5 border border-white/10">
        <p className="text-sm text-zinc-300">
          "Arista transformed our customer service operations. The results speak for themselves."
        </p>
        <p className="text-xs text-zinc-500 mt-2">— Sarah Chen, COO at KITH</p>
      </div>
    </div>
    
    <div className="mt-8 flex flex-wrap gap-3 pt-6 border-t border-white/10">
      <a
        className="group relative inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium ring-1 ring-white/15 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[.98] transition flex-1 min-w-[200px]"
        href="#"
      >
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -left-8 top-1/2 h-[200%] w-10 -translate-y-1/2 rotate-12 bg-white/60 blur-md opacity-0 group-hover:opacity-20 group-hover:translate-x-[120%] transition-all duration-700" />
        </span>
        READ CASE STUDY
      </a>
      <a
        className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3 text-sm font-medium text-white ring-1 ring-sky-400/40 hover:from-sky-400 hover:to-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 active:scale-[.98] transition flex-1 min-w-[200px]"
        href="#"
      >
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
          <span className="absolute -left-8 top-1/2 h-[200%] w-10 -translate-y-1/2 rotate-12 bg-white/60 blur-md opacity-0 group-hover:opacity-30 group-hover:translate-x-[120%] transition-all duration-700" />
        </span>
        VIEW ALL STUDIES
      </a>
    </div>
  </div>
</div>
        </motion.div>

        
      </section>
<Footer/>

    
    </div>
  );
}