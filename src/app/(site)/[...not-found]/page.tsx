"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-hassvn-black flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-lg"
      >
        <div className="text-8xl font-display font-bold text-gradient-animate mb-4">404</div>
        <h1 className="text-2xl font-display font-bold text-hassvn-soft-white mb-4">
          Page Not Found
        </h1>
        <p className="text-hassvn-muted-white mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r 
              from-hassvn-electric-blue to-hassvn-neon-blue text-hassvn-black font-semibold 
              hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
          >
            <Home className="w-5 h-5" />
            Back Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass text-hassvn-soft-white 
              font-semibold hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}
