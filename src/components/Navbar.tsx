"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  exit: { opacity: 0, y: 20, transition: { duration: 0.15 } },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream border-b-4 border-jet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-heading text-xl md:text-2xl font-bold text-jet tracking-tight select-none"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {"<DEV/>"}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="px-4 py-2 font-heading font-semibold text-sm uppercase tracking-wider text-jet border-4 border-jet bg-cream shadow-[4px_4px_0px_0px_#000000] hover:bg-lemon"
                whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px #000000" }}
                whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #000000" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="px-4 py-2 font-heading font-bold text-sm uppercase tracking-wider text-cream bg-jet border-4 border-jet shadow-[4px_4px_0px_0px_#F43F5E]"
              whileHover={{ x: -4, y: -4, boxShadow: "8px 8px 0px 0px #F43F5E" }}
              whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #F43F5E" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <motion.button
            className="md:hidden w-12 h-12 flex items-center justify-center border-4 border-jet bg-lemon shadow-[4px_4px_0px_0px_#000000]"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #000000" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-pink flex flex-col items-center justify-center gap-6 md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center border-4 border-jet bg-lemon shadow-[4px_4px_0px_0px_#000000]"
              onClick={() => setIsOpen(false)}
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
            >
              <X size={24} strokeWidth={3} />
            </motion.button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="font-heading text-4xl sm:text-5xl font-bold text-jet uppercase tracking-tight hover:text-cream transition-colors"
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              className="mt-4 px-8 py-4 font-heading font-bold text-xl uppercase text-cream bg-jet border-4 border-jet shadow-[8px_8px_0px_0px_#FACC15]"
              custom={navLinks.length}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
            >
              Hire Me →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
