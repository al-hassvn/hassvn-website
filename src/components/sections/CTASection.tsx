"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/animations/TextReveal";

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 lg:px-8 bg-hassvn-charcoal overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-hassvn-electric-blue/5 via-transparent to-hassvn-neon-purple/5" />

        {/* Floating shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 100 + i * 50,
              height: 100 + i * 50,
              left: `${10 + i * 20}%`,
              top: `${20 + i * 10}%`,
              background: i % 2 === 0 
                ? "rgba(0, 212, 255, 0.03)" 
                : "rgba(184, 41, 221, 0.03)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Sparkles className="w-4 h-4 text-hassvn-electric-blue" />
          <span className="text-sm text-hassvn-soft-white">Ready to Build?</span>
        </motion.div>

        <TextReveal
          text="Let's Create Something"
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-hassvn-soft-white mb-2"
          delay={0.2}
        />
        <TextReveal
          text="Extraordinary Together"
          className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-gradient-animate mb-8"
          delay={0.4}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg text-hassvn-muted-white mb-12 max-w-2xl mx-auto"
        >
          Whether you need a stunning website, a powerful web app, or an AI-driven 
          solution — I am ready to bring your vision to life with precision and passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <MagneticButton
            href="/contact"
            className="group px-10 py-5 bg-gradient-to-r from-hassvn-electric-blue to-hassvn-neon-blue 
              text-hassvn-black font-bold rounded-full text-lg hover:shadow-[0_0_50px_rgba(0,212,255,0.4)] 
              transition-all duration-300"
          >
            <span className="flex items-center gap-3">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </MagneticButton>

          <MagneticButton
            href="mailto:hello@hassvn.dev"
            variant="outline"
            className="px-10 py-5 border border-white/20 text-hassvn-soft-white font-semibold 
              rounded-full text-lg hover:bg-white/5 transition-all duration-300"
          >
            hello@hassvn.dev
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
