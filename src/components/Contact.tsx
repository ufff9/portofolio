"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-jet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="inline-block bg-pink border-4 border-cream px-4 py-2 mb-4 shadow-[4px_4px_0px_0px_#FDFBF7]">
            <span className="font-heading font-bold text-sm uppercase tracking-wider text-cream">
              📬 Get in Touch
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream uppercase tracking-tight">
            LET&apos;S WORK
            <br />
            <span className="text-lemon">TOGETHER</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.1,
            }}
          >
            <p className="font-body text-base md:text-lg text-cream/70 max-w-md leading-relaxed">
              Have a project in mind? Let&apos;s create something bold and
              extraordinary together. I&apos;m always open to new opportunities.
            </p>

            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-4 bg-cream/10 border-4 border-cream p-4"
                whileHover={{
                  x: -4,
                  y: -4,
                  boxShadow: "8px 8px 0px 0px #FACC15",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-lemon border-3 border-cream">
                  <Mail size={20} strokeWidth={3} className="text-jet" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-cream/60 uppercase">
                    Email
                  </p>
                  <p className="font-body font-semibold text-cream">
                    muhammadraufputra@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 bg-cream/10 border-4 border-cream p-4"
                whileHover={{
                  x: -4,
                  y: -4,
                  boxShadow: "8px 8px 0px 0px #06B6D4",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-cyan border-3 border-cream">
                  <MapPin size={20} strokeWidth={3} className="text-jet" />
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-cream/60 uppercase">
                    Location
                  </p>
                  <p className="font-body font-semibold text-cream">
                    Jambi, Indonesia
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            className="space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.2,
            }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 font-body bg-cream border-4 border-jet text-jet placeholder:text-jet/40 font-semibold focus:outline-none focus:shadow-[4px_4px_0px_0px_#FACC15] transition-shadow"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 font-body bg-cream border-4 border-jet text-jet placeholder:text-jet/40 font-semibold focus:outline-none focus:shadow-[4px_4px_0px_0px_#06B6D4] transition-shadow"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 font-body bg-cream border-4 border-jet text-jet placeholder:text-jet/40 font-semibold focus:outline-none focus:shadow-[4px_4px_0px_0px_#8B5CF6] transition-shadow"
            />
            <textarea
              rows={5}
              placeholder="Your Message..."
              className="w-full px-4 py-3 font-body bg-cream border-4 border-jet text-jet placeholder:text-jet/40 font-semibold resize-none focus:outline-none focus:shadow-[4px_4px_0px_0px_#F43F5E] transition-shadow"
            />
            <motion.button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 font-heading font-bold text-base uppercase text-jet bg-lemon border-4 border-jet shadow-[6px_6px_0px_0px_#FDFBF7] flex items-center justify-center gap-3"
              whileHover={{
                x: -4,
                y: -4,
                boxShadow: "10px 10px 0px 0px #FDFBF7",
              }}
              whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #FDFBF7" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Send size={18} strokeWidth={3} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
