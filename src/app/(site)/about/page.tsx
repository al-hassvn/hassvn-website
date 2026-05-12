"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Globe, Bot, Zap, Heart, Award, Users, ArrowUpRight } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

const skills = [
  { icon: Code2, name: "Full-Stack Development", level: "Expert" },
  { icon: Palette, name: "UI/UX Design", level: "Expert" },
  { icon: Globe, name: "SEO Optimization", level: "Advanced" },
  { icon: Bot, name: "AI Integration", level: "Advanced" },
  { icon: Zap, name: "Performance", level: "Expert" },
];

const stats = [
  { value: "50+", label: "Projects", icon: Award },
  { value: "30+", label: "Clients", icon: Users },
  { value: "5+", label: "Years", icon: Heart },
  { value: "100%", label: "Satisfaction", icon: Zap },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-20">
          <TextReveal
            text="About HASSVN"
            className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-hassvn-soft-white mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-hassvn-muted-white max-w-2xl mx-auto leading-relaxed"
          >
            One person. Extraordinary results. Building the future of digital experiences.
          </motion.p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-display font-bold text-hassvn-soft-white">My Story</h2>
            <p className="text-hassvn-muted-white leading-relaxed">
              I started my journey as a developer with a simple belief: that digital experiences 
              should feel magical. Over the past 5+ years, that belief has evolved into a relentless 
              pursuit of excellence in every project I touch.
            </p>
            <p className="text-hassvn-muted-white leading-relaxed">
              As a solo creator, I bring a unique advantage to every project — complete creative 
              control, direct communication, and a personal stake in your success. No handoffs, 
              no bureaucracy, just pure craft.
            </p>
            <p className="text-hassvn-muted-white leading-relaxed">
              Today, I specialize in building premium digital products for ambitious brands. 
              From complex SaaS platforms to luxury e-commerce experiences, every project is an 
              opportunity to push boundaries and create something extraordinary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-2xl glass border border-white/5 text-center"
              >
                <stat.icon className="w-6 h-6 text-hassvn-electric-blue mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-hassvn-soft-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-hassvn-muted-white">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-display font-bold text-hassvn-soft-white mb-8 text-center">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="p-6 rounded-xl glass border border-white/5 hover:border-hassvn-electric-blue/20 
                  transition-all duration-300 group"
              >
                <skill.icon className="w-8 h-8 text-hassvn-electric-blue mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-hassvn-soft-white mb-1">{skill.name}</h3>
                <span className="text-sm text-hassvn-muted-white">{skill.level}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-display font-bold text-hassvn-soft-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-hassvn-muted-white mb-8 max-w-xl mx-auto">
            Let's discuss your project and create something extraordinary.
          </p>
          <MagneticButton
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r 
              from-hassvn-electric-blue to-hassvn-neon-blue text-hassvn-black font-bold 
              hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] transition-all"
          >
            Start a Project
            <ArrowUpRight className="w-5 h-5" />
          </MagneticButton>
        </motion.div>
      </div>
    </div>
  );
}
