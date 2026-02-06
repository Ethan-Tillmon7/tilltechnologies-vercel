"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Badge from "@/components/common/Badge";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <motion.div
        className="group flex h-full flex-col overflow-hidden rounded-xl border border-secondary/30 bg-background/50"
        whileHover={{
          y: -4,
          borderColor: "rgba(66, 186, 64, 0.5)",
          boxShadow: "0 0 25px rgba(66, 186, 64, 0.1)",
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Thumbnail placeholder */}
        <div className="flex h-48 items-center justify-center bg-secondary/10">
          <span className="font-pixel text-xs text-primary/40">
            {project.title}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="font-semibold text-text">{project.title}</h3>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs capitalize text-primary/70">
              {project.category}
            </span>
          </div>

          <p className="mb-4 flex-1 text-sm leading-relaxed text-text/60">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>

          <div className="flex gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text/50 transition-colors hover:text-primary"
              >
                <FaGithub /> Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text/50 transition-colors hover:text-primary"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
