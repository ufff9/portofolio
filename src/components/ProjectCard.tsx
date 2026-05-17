"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

const tagColors = [
  "bg-lemon text-jet",
  "bg-cyan text-jet",
  "bg-pink text-cream",
  "bg-violet text-cream",
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  span?: string;
  github?: string;
  live?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative border-4 border-jet ${project.color} shadow-[8px_8px_0px_0px_#000000] overflow-hidden ${project.span || ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 }}
      whileHover={{ x: -6, y: -6, boxShadow: "14px 14px 0px 0px #000000" }}
      whileTap={{ x: 0, y: 0, boxShadow: "0px 0px 0px 0px #000000" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-5 md:p-6 lg:p-8 h-full flex flex-col justify-between min-h-[240px] md:min-h-[280px]">
        <div className="flex items-start justify-between mb-4">
          <span className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-jet/10 leading-none select-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            {project.github && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border-3 border-jet bg-cream shadow-[3px_3px_0px_0px_#000000]"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 0, y: 0 }}
                aria-label={`${project.title} GitHub`}
              >
                <GithubIcon size={16} />
              </motion.a>
            )}
            {project.live && (
              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border-3 border-jet bg-cream shadow-[3px_3px_0px_0px_#000000]"
                whileHover={{ x: -2, y: -2 }}
                whileTap={{ x: 0, y: 0 }}
                aria-label={`${project.title} Live`}
              >
                <ExternalLink size={16} strokeWidth={3} />
              </motion.a>
            )}
          </div>
        </div>
        <div className="mt-auto">
          <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-jet uppercase tracking-tight mb-2">
            {project.title}
          </h3>
          <p className="font-body text-sm md:text-base text-jet/70 leading-relaxed mb-4">
            {project.description}
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            animate={{ opacity: isHovered ? 1 : 0.4, y: isHovered ? 0 : 8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className={`px-3 py-1 text-xs font-heading font-bold uppercase border-2 border-jet ${tagColors[i % tagColors.length]}`}
                animate={{ scale: isHovered ? 1 : 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: isHovered ? i * 0.05 : 0 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
