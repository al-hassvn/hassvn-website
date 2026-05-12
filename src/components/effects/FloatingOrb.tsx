"use client";

import { motion } from "framer-motion";

interface FloatingOrbProps {
  className?: string;
  color?: string;
  delay?: number;
  duration?: number;
}

export function FloatingOrb({
  className = "",
  color = "rgba(0, 212, 255, 0.15)",
  delay = 0,
  duration = 8,
}: FloatingOrbProps) {
  return (
    <motion.div
      className={`rounded-full blur-3xl pointer-events-none ${className}`}
      style={{ background: color }}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.1, 0.9, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}
