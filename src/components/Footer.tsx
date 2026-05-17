"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t-4 border-jet bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            className="font-heading font-bold text-sm md:text-base text-jet uppercase tracking-wider flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            Built with <Heart size={16} strokeWidth={3} className="text-pink fill-pink" /> &amp; Neobrutalism
          </motion.p>
          <p className="font-body text-sm text-jet/60">
            © {new Date().getFullYear()} — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
