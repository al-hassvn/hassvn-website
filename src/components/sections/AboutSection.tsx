"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Zap, Target, Rocket, Heart, Award, Users } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const stats = [
  { value: "50+", label: "Projects Delivered", icon: Rocket },
  { value: "30+", label: "Happy Clients", icon: Heart },
  { value: "5+", label: "Years Experience", icon: Award },
  { value: "100%", label: "Client Satisfaction", icon: Users },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every pixel, every line of code, every interaction is crafted with meticulous attention to detail.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Pushing boundaries with cutting-edge technology and forward-thinking solutions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Genuine love for creating digital experiences that make a real impact on businesses.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 lg:px-8 bg-hassvn-charcoal overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] 
          bg-hassvn-electric-blue/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Zap className="w-4 h-4 text-hassvn-electric-blue" />
              <span className="text-sm text-hassvn-soft-white">About HASSVN</span>
            </motion.div>

            <TextReveal
              text="An Elite Independent Creator"
              className="text-4xl md:text-5xl font-display font-bold text-hassvn-soft-white mb-6"
              delay={0.2}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 text-hassvn-muted-white leading-relaxed"
            >
              <p>
                I am HASSVN — a solo digital creator and developer obsessed with building 
                experiences that feel like they belong in the future. Not an agency. Not a team. 
                Just one person with an extraordinary skill set and an unwavering commitment to excellence.
              </p>
              <p>
                With over 5 years of experience crafting premium digital products, I have helped 
                startups, agencies, and established brands transform their digital presence. From 
                complex SaaS platforms to luxury e-commerce experiences, every project is an 
                opportunity to push creative and technical boundaries.
              </p>
              <p>
                My approach combines strategic thinking with pixel-perfect execution. I do not 
                just build websites — I architect digital ecosystems that drive growth, engage 
                users, and leave lasting impressions.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="p-4 rounded-xl glass border border-white/5 hover:border-hassvn-electric-blue/20 
                    transition-all duration-300"
                >
                  <value.icon className="w-6 h-6 text-hassvn-electric-blue mb-3" />
                  <h4 className="text-sm font-semibold text-hassvn-soft-white mb-1">
                    {value.title}
                  </h4>
                  <p className="text-xs text-hassvn-muted-white">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Visual + Stats */}
          <div className="relative">
            <motion.div
              style={{ y }}
              className="relative aspect-square max-w-md mx-auto"
            >
              {/* Abstract visual representation */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden glass border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-hassvn-electric-blue/20 to-hassvn-neon-purple/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl font-display font-bold text-gradient-animate mb-2">
                      H
                    </div>
                    <div className="text-sm text-hassvn-muted-white tracking-widest uppercase">
                      HASSVN
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-8 right-8 w-16 h-16 rounded-xl bg-hassvn-electric-blue/20 
                    backdrop-blur-sm border border-hassvn-electric-blue/30"
                />
                <motion.div
                  animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-12 left-8 w-12 h-12 rounded-lg bg-hassvn-neon-purple/20 
                    backdrop-blur-sm border border-hassvn-neon-purple/30"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="p-4 rounded-xl glass border border-white/5 text-center"
                >
                  <stat.icon className="w-5 h-5 text-hassvn-electric-blue mx-auto mb-2" />
                  <div className="text-2xl font-display font-bold text-hassvn-soft-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-hassvn-muted-white">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
