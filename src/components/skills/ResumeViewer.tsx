"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Button from "@/components/common/Button";

export default function ResumeViewer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-xl border border-secondary/30 bg-background/50 p-6"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-pixel text-xs text-primary">Resume</h3>
        <Button
          variant="outline"
          size="sm"
          href="/resume/Ethan_Tillmon_Resume.pdf"
        >
          <FaDownload /> Download PDF
        </Button>
      </div>
      <div className="overflow-hidden rounded-lg border border-secondary/20">
        <iframe
          src="/resume/Ethan_Tillmon_Resume.pdf"
          className="h-[600px] w-full"
          title="Resume"
        />
      </div>
    </motion.div>
  );
}
