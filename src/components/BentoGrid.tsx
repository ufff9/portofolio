"use client";

import { motion } from "framer-motion";
import ProjectCard, { type Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "E-Commerce App",
    description: "Full-stack marketplace with real-time inventory tracking and payment integration.",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    color: "bg-lemon",
    span: "md:col-span-2",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Chat Bot",
    description: "Intelligent conversational AI powered by GPT with custom training pipeline.",
    tags: ["Python", "FastAPI", "React", "OpenAI"],
    color: "bg-cyan",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Fitness Tracker",
    description: "Cross-platform mobile app for workout tracking with social features.",
    tags: ["Flutter", "Firebase", "Dart"],
    color: "bg-pink",
    github: "https://github.com",
  },
  {
    title: "Portfolio CMS",
    description: "Headless content management system with drag-and-drop page builder.",
    tags: ["Laravel", "Vue.js", "MySQL", "TailwindCSS"],
    color: "bg-violet",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "ML Dashboard",
    description: "Real-time machine learning model monitoring and analytics dashboard.",
    tags: ["Python", "TensorFlow", "D3.js", "Flask"],
    color: "bg-cream",
    span: "md:col-span-2",
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Design System",
    description: "Component library with 50+ accessible UI components and documentation.",
    tags: ["React", "Storybook", "TypeScript"],
    color: "bg-lemon",
    github: "https://github.com",
  },
];

export default function BentoGrid() {
  return (
    <section id="projects" className="py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="inline-block bg-cyan border-4 border-jet px-4 py-2 mb-4 shadow-[4px_4px_0px_0px_#000000]">
            <span className="font-heading font-bold text-sm uppercase tracking-wider">
              💼 Selected Work
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-jet uppercase tracking-tight">
            PROJECTS
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
