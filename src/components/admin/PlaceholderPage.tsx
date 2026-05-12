"use client";

import { motion } from "framer-motion";
import { Construction } from "lucide-react";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <div className="w-20 h-20 rounded-2xl glass flex items-center justify-center mx-auto mb-6">
          <Construction className="w-10 h-10 text-hassvn-electric-blue" />
        </div>
        <h1 className="text-2xl font-display font-bold text-hassvn-soft-white mb-2">{title}</h1>
        <p className="text-hassvn-muted-white">This section is coming soon.</p>
      </motion.div>
    </div>
  );
}
