"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Search, Lightbulb, PenTool, Code2, Rocket, CheckCircle2 } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const phases = [
  {
    icon: Search,
    phase: "01",
    title: "Discovery",
    description: "Deep dive into your brand, audience, and goals. Understanding the problem before designing the solution.",
    color: "#00d4ff",
  },
  {
    icon: Lightbulb,
    phase: "02",
    title: "Strategy",
    description: "Crafting a data-driven roadmap. Defining the architecture, user flows, and technical requirements.",
    color: "#0080ff",
  },
  {
    icon: PenTool,
    phase: "03",
    title: "Design",
    description: "Creating pixel-perfect visuals with purpose. Every element designed to convert and delight.",
    color: "#8b5cf6",
  },
  {
    icon: Code2,
    phase: "04",
    title: "Development",
    description: "Engineering with precision. Clean, scalable code with performance and security at the core.",
    color: "#b829dd",
  },
  {
    icon: Rocket,
    phase: "05",
    title: "Launch",
    description: "Deploying with confidence. Optimized, tested, and ready to make an impact from day one.",
    color: "#ec4899",
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 lg:px-8 bg-hassvn-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] 
          bg-hassvn-neon-purple/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <CheckCircle2 className="w-4 h-4 text-hassvn-electric-blue" />
            <span className="text-sm text-hassvn-soft-white">How I Work</span>
          </motion.div>

          <TextReveal
            text="My Process"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hassvn-soft-white mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-hassvn-muted-white"
          >
            A refined, battle-tested workflow that transforms ideas into 
            exceptional digital products.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-px">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-hassvn-electric-blue to-hassvn-neon-purple"
            />
          </div>

          {/* Phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`relative flex items-center gap-8 
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content card */}
                <div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <div className="p-6 rounded-2xl glass border border-white/5 hover:border-white/15 
                    transition-all duration-500 group">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span 
                        className="text-4xl font-display font-bold opacity-20"
                        style={{ color: phase.color }}
                      >
                        {phase.phase}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-semibold text-hassvn-soft-white mb-3 
                      group-hover:text-hassvn-electric-blue transition-colors duration-300">
                      {phase.title}
                    </h3>
                    <p className="text-hassvn-muted-white leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>

                {/* Center node */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 rounded-full glass border-2 flex items-center justify-center"
                    style={{ borderColor: phase.color }}
                  >
                    <phase.icon className="w-6 h-6" style={{ color: phase.color }} />
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
