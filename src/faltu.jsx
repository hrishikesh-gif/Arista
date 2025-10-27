import { FaFigma, FaWordpress, FaShopify, FaMagento, FaReact } from "react-icons/fa";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { FiPhone, FiMail, FiLinkedin, FiTwitter, FiHeadphones, FiSearch, FiDollarSign } from "react-icons/fi";

// CustomerServices.jsx — STEP 1 (after-hero sections only)
// Hero section remains unchanged. Immediately after the hero we render:
// 1) White capability strip (WordPress, Shopify, Magento, React, Call Support, Pay Per Click, SEO)
// 2) "Website Redesign" content block (two columns)

const postHeroIcons = [
  { title: "WordPress", Icon: FaWordpress },
  { title: "Shopify", Icon: FaShopify },
  { title: "Magento", Icon: FaMagento },
  { title: "React", Icon: FaReact },
  { title: "Call Support", Icon: FiHeadphones },
  { title: "Pay Per Click", Icon: FiDollarSign },
  { title: "Search Engine\nOptimization", Icon: FiSearch },
];

export default function CustomerServices() {
  return (
    <div className="w-full bg-[#0b0b0b] text-white">
      {/* ================= HERO (unchanged) ================= */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_400px_at_10%_-10%,rgba(56,189,248,.18),transparent),radial-gradient(1100px_400px_at_90%_-20%,rgba(244,114,182,.18),transparent)]" />
        <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-8 py-16">
          <p className="text-sm tracking-[0.25em] text-zinc-300 uppercase">Email. Chat. Voice.</p>
          <h1 className="mt-3 text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] font-semibold">
            <span className="bg-gradient-to-r from-sky-400 to-sky-200 bg-clip-text text-transparent">Customer</span>{" "}
            <span className="bg-gradient-to-r from-fuchsia-300 to-rose-300 bg-clip-text text-transparent">Service</span>
          </h1>
          <p className="mt-8 max-w-4xl text-[18px] leading-8 text-zinc-300">
            At Arista Systems, we turn complex ideas into seamless, intuitive journeys that captivate audiences and drive meaningful outcomes. Our design approach fuses strategic thinking with cutting‑edge creativity to build websites that don’t just exist—they perform.
          </p>
          <div className="mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl bg-sky-500/90 px-6 py-3 text-base font-medium text-white shadow-lg shadow-sky-500/25 ring-1 ring-sky-400/40 hover:bg-sky-400">
              <HiOutlineChatBubbleLeftRight className="text-lg" />
              Let’s Talk
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHITE CAPABILITY STRIP ================= */}
      <section className="bg-white text-gray-900">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 divide-x divide-gray-200">
            {postHeroIcons.map(({ title, Icon }) => (
              <div key={title} className="flex flex-col items-center gap-3 py-10">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-zinc-900">
                  <Icon className="text-4xl text-white" />
                </div>
                <span className="text-[13px] font-medium leading-5 text-center whitespace-pre-line px-2">{title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WEBSITE REDESIGN BLOCK ================= */}
      <section className="bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Left heading */}
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              <span className="text-white">Website </span>
              <span className="text-[#f5b455]">Redesign</span>
            </h2>

            {/* Right copy (large, comfortable line-height) */}
            <div className="text-zinc-200 text-xl md:text-2xl leading-relaxed">
              <p>
                In today’s digital landscape, you have just 50 milliseconds to make a lasting impression. That first glance is your opportunity to captivate—and we’re here to make it unforgettable.
              </p>
              <p className="mt-6">
                At Arista Systems, we revitalize outdated websites through strategic design thinking, modern UX practices, and interactive solutions that align with your brand, audience, and business goals. Our redesigns go beyond aesthetics to deliver clarity, performance, and purpose at every touchpoint.
              </p>
              <p className="mt-6">
                Visually compelling, mobile‑optimized, and built for engagement, our website redesigns don’t just turn heads—they inspire action. Let’s transform your digital presence into a high‑performing experience that leads with impact and converts with confidence.
              </p>
            </div>
          </div>
          <div className="mt-10 border-b border-white/10" />
        </div>
      </section>

      {/* ======= Placeholder for next sections you will send ======= */}
    </div>
  );
}
