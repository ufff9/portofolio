"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import Marquee from "./Marquee";

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MagneticImage() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.15;
    const deltaY = (e.clientY - centerY) * 0.15;
    x.set(deltaX);
    y.set(deltaY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px] mx-auto"
    >
      {/* Decorative background block */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 w-full h-full bg-cyan border-4 border-jet -z-10" />

      <motion.div
        style={{ x: springX, y: springY }}
        className="relative border-4 border-jet bg-lemon shadow-[8px_8px_0px_0px_#000000] overflow-hidden aspect-[3/4]"
      >
        <Image
          src="/profile.png"
          alt="Profile photo"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 280px, (max-width: 1024px) 380px, 420px"
        />
      </motion.div>

      {/* Floating badge */}
      <motion.div
        className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-pink border-4 border-jet px-3 py-2 md:px-4 md:py-2 shadow-[4px_4px_0px_0px_#000000] z-10"
        animate={{ rotate: [0, -3, 3, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <span className="font-heading font-bold text-xs md:text-sm text-cream uppercase">
          Available for hire!
        </span>
      </motion.div>
    </div>
  );
}

const socialLinks = [
  { icon: <GithubIcon size={20} />, href: "https://github.com", label: "GitHub", color: "bg-violet" },
  { icon: <LinkedinIcon size={20} />, href: "https://linkedin.com", label: "LinkedIn", color: "bg-cyan" },
  { icon: <Mail size={20} strokeWidth={3} />, href: "mailto:hello@example.com", label: "Email", color: "bg-pink" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 md:pt-24 relative overflow-hidden">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {/* Tag */}
            <motion.div
              className="inline-block bg-lemon border-4 border-jet px-4 py-2 mb-6 shadow-[4px_4px_0px_0px_#000000]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
            >
              <span className="font-heading font-bold text-sm md:text-base uppercase tracking-wider">
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="font-heading font-bold text-jet leading-[0.9] tracking-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
            >
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                CREATIVE
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream [-webkit-text-stroke:3px_#000] md:[-webkit-text-stroke:4px_#000] ml-4 md:ml-8">
                DEVELOPER
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                & <span className="bg-pink text-cream px-2 md:px-4 -rotate-1 inline-block border-4 border-jet">DESIGNER</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="font-body text-base md:text-lg text-jet/80 max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I craft bold digital experiences that break conventions.
              Specializing in full-stack development with a passion for
              brutalist aesthetics and cutting-edge technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3 md:gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 md:px-8 md:py-4 font-heading font-bold text-sm md:text-base uppercase text-cream bg-jet border-4 border-jet shadow-[6px_6px_0px_0px_#FACC15]"
                whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0px 0px #FACC15" }}
                whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #FACC15" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                View Projects →
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 md:px-8 md:py-4 font-heading font-bold text-sm md:text-base uppercase text-jet bg-cream border-4 border-jet shadow-[6px_6px_0px_0px_#000000]"
                whileHover={{ x: -4, y: -4, boxShadow: "10px 10px 0px 0px #000000" }}
                whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #000000" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 flex items-center justify-center border-4 border-jet ${social.color} shadow-[4px_4px_0px_0px_#000000] text-cream`}
                  whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px #000000" }}
                  whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #000000" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          >
            <MagneticImage />
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee className="mt-4 md:mt-8" />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <span className="font-heading text-xs font-bold uppercase tracking-widest text-jet/60">
          Scroll
        </span>
        <ArrowDown size={20} strokeWidth={3} className="text-jet/60" />
      </motion.div>
    </section>
  );
}
