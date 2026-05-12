"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowDown, Sparkles, Zap, Globe, Code2, Bot } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/animations/TextReveal";
import { FloatingOrb } from "@/components/effects/FloatingOrb";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const services = [
    { icon: Globe, label: "Web Design" },
    { icon: Code2, label: "Development" },
    { icon: Zap, label: "SEO" },
    { icon: Bot, label: "AI" },
    { icon: Sparkles, label: "Branding" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hassvn-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background layers */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-b from-hassvn-black via-hassvn-charcoal to-hassvn-black" />

        {/* Animated orbs */}
        <FloatingOrb
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px]"
          color="rgba(0, 212, 255, 0.15)"
          delay={0}
        />
        <FloatingOrb
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px]"
          color="rgba(184, 41, 221, 0.12)"
          delay={2}
        />
        <FloatingOrb
          className="absolute top-1/2 right-1/3 w-[400px] h-[400px]"
          color="rgba(0, 128, 255, 0.1)"
          delay={4}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Particle field */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background:
                  i % 2 === 0
                    ? "rgba(0, 212, 255, 0.6)"
                    : "rgba(184, 41, 221, 0.6)",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hassvn-electric-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-hassvn-electric-blue" />
          </span>
          <span className="text-sm text-hassvn-soft-white font-medium">
            Available for Premium Projects
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="mb-6">
          <TextReveal
            text="I Build Digital"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tight"
            delay={0.3}
          />
          <TextReveal
            text="Experiences That"
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tight mt-2"
            delay={0.5}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-2"
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold tracking-tight text-gradient-animate">
              Feel Like The Future
            </span>
          </motion.div>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-hassvn-muted-white leading-relaxed mb-12"
        >
          Freelance web developer, UI/UX designer, SEO specialist, and AI
          automation creator building premium digital experiences for modern
          brands.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticButton
            href="/contact"
            className="group relative px-8 py-4 bg-gradient-to-r from-hassvn-electric-blue to-hassvn-neon-blue text-hassvn-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-hassvn-neon-blue to-hassvn-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </MagneticButton>

          <MagneticButton
            href="/portfolio"
            variant="outline"
            className="px-8 py-4 border border-white/20 text-hassvn-soft-white font-semibold rounded-full hover:bg-white/5 hover:border-hassvn-electric-blue/50 transition-all duration-300"
          >
            View My Work
          </MagneticButton>
        </motion.div>

        {/* Service pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8 + index * 0.1, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-hassvn-soft-white hover:border-hassvn-electric-blue/30 transition-all duration-300 cursor-default"
            >
              <service.icon className="w-4 h-4 text-hassvn-electric-blue" />
              {service.label}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-hassvn-muted-white tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-hassvn-electric-blue" />
        </motion.div>
      </motion.div>

      {/* 3D Mockup floating element */}
      <motion.div
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
          rotateX: useTransform(mouseYSpring, [-10, 10], [5, -5]),
          rotateY: useTransform(mouseXSpring, [-10, 10], [-5, 5]),
        }}
        className="absolute right-[10%] top-[20%] w-[300px] h-[200px] hidden lg:block perspective-1000"
      >
        <div className="relative w-full h-full glass rounded-2xl p-4 transform-style-3d hover:scale-105 transition-transform duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-hassvn-electric-blue/20 to-hassvn-neon-purple/20 rounded-2xl" />
          <div className="relative h-full flex flex-col gap-2">
            <div className="h-3 w-24 bg-hassvn-electric-blue/30 rounded-full" />
            <div className="h-2 w-32 bg-white/10 rounded-full" />
            <div className="h-2 w-20 bg-white/10 rounded-full" />
            <div className="mt-auto flex gap-2">
              <div className="h-8 w-16 bg-hassvn-electric-blue/20 rounded-lg" />
              <div className="h-8 w-16 bg-hassvn-neon-purple/20 rounded-lg" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
