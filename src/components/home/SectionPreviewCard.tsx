"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaUser,
  FaCode,
  FaTools,
  FaHeartbeat,
  FaStar,
  FaGlobeAmericas,
  FaEnvelope,
} from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  FaUser: <FaUser size={28} />,
  FaCode: <FaCode size={28} />,
  FaTools: <FaTools size={28} />,
  FaHeartbeat: <FaHeartbeat size={28} />,
  FaStar: <FaStar size={28} />,
  FaGlobeAmericas: <FaGlobeAmericas size={28} />,
  FaEnvelope: <FaEnvelope size={28} />,
};

interface SectionPreviewCardProps {
  label: string;
  href: string;
  icon: string;
  description: string;
  index: number;
}

export default function SectionPreviewCard({
  label,
  href,
  icon,
  description,
  index,
}: SectionPreviewCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <motion.div
          className="group flex h-full flex-col items-center gap-4 rounded-xl border border-secondary/30 bg-background/50 p-8 text-center backdrop-blur-sm"
          whileHover={{
            y: -6,
            borderColor: "rgba(66, 186, 64, 0.5)",
            boxShadow: "0 0 30px rgba(66, 186, 64, 0.12)",
          }}
          transition={{ duration: 0.25 }}
        >
          <div className="text-primary/70 transition-colors group-hover:text-primary">
            {iconMap[icon]}
          </div>
          <h3 className="font-pixel text-xs text-text sm:text-sm">{label}</h3>
          <p className="text-sm leading-relaxed text-text/50">{description}</p>
        </motion.div>
      </Link>
    </motion.div>
  );
}
