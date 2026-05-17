"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  items?: string[];
  speed?: number;
  className?: string;
}

const defaultItems = [
  "FLUTTER",
  "NEXT.JS",
  "LARAVEL",
  "MACHINE LEARNING",
  "REACT.JS",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "FIGMA",
  "NODE.JS",
  "PYTHON",
];

export default function Marquee({
  items = defaultItems,
  speed = 20,
  className = "",
}: MarqueeProps) {
  const marqueeText = items.join(" • ") + " • ";

  return (
    <div
      className={`w-full overflow-hidden border-y-4 border-jet bg-lemon py-3 md:py-4 ${className}`}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <span className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-jet uppercase tracking-wider px-2">
          {marqueeText}
        </span>
        <span className="font-heading text-lg md:text-2xl lg:text-3xl font-bold text-jet uppercase tracking-wider px-2">
          {marqueeText}
        </span>
      </motion.div>
    </div>
  );
}
