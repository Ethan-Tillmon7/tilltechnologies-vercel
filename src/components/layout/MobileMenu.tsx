"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import navItems from "@/data/navigation.json";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

const menuVariants = {
  closed: { opacity: 0, x: "100%" },
  open: { opacity: 1, x: 0 },
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.08 },
  }),
};

export default function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-lg md:hidden"
        >
          {navItems.map((item, i) => (
            <motion.div key={item.href} custom={i} variants={itemVariants}>
              <Link
                href={item.href}
                onClick={onClose}
                className={`font-pixel text-lg transition-colors hover:text-primary ${
                  pathname === item.href ? "text-primary" : "text-text/70"
                }`}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
