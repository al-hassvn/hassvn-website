"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, Github, Eye } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const projects = [
  {
    id: "1",
    title: "NeonVault",
    category: "SaaS Platform",
    description: "A futuristic crypto portfolio dashboard with real-time analytics, AI-powered insights, and institutional-grade security.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Aether Commerce",
    category: "E-commerce",
    description: "Luxury e-commerce platform with 3D product previews, AI recommendations, and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Shopify", "React", "Three.js", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Pulse Analytics",
    category: "Web App",
    description: "Real-time business intelligence dashboard with predictive analytics, custom reporting, and team collaboration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Zenith AI",
    category: "AI Platform",
    description: "Enterprise AI automation platform with custom model training, workflow automation, and intelligent data processing.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "OpenAI", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "5",
    title: "Lumina Brand",
    category: "Branding",
    description: "Complete brand identity system for a luxury wellness startup including visual identity, guidelines, and digital assets.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["Figma", "Illustrator", "Brand Strategy"],
    liveUrl: "#",
    githubUrl: null,
    featured: false,
  },
  {
    id: "6",
    title: "Orbit Chat",
    category: "AI Chatbot",
    description: "Intelligent customer support chatbot with natural language processing, sentiment analysis, and multi-language support.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    tags: ["NLP", "TensorFlow", "Node.js", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl glass border border-white/5 
        hover:border-hassvn-electric-blue/30 transition-all duration-500">
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-700 
              ${isHovered ? "scale-110" : "scale-100"}
              ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-hassvn-black via-hassvn-black/20 to-transparent 
            opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Hover overlay */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center gap-4"
              >
                <motion.button
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="w-12 h-12 rounded-full glass flex items-center justify-center 
                    hover:bg-hassvn-electric-blue/20 transition-colors duration-300"
                >
                  <Eye className="w-5 h-5 text-white" />
                </motion.button>
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center 
                      hover:bg-hassvn-electric-blue/20 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center 
                      hover:bg-hassvn-electric-blue/20 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs rounded-full glass text-hassvn-electric-blue font-medium">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-display font-semibold text-hassvn-soft-white mb-2 
            group-hover:text-hassvn-electric-blue transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-sm text-hassvn-muted-white leading-relaxed mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-hassvn-muted-white 
                  border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState("all");

  const categories = ["all", "SaaS Platform", "E-commerce", "Web App", "AI Platform", "Branding", "AI Chatbot"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section
      ref={ref}
      className="relative py-32 px-6 lg:px-8 bg-hassvn-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] 
          bg-hassvn-neon-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Eye className="w-4 h-4 text-hassvn-electric-blue" />
            <span className="text-sm text-hassvn-soft-white">Selected Work</span>
          </motion.div>

          <TextReveal
            text="Portfolio Showcase"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hassvn-soft-white mb-6"
            delay={0.2}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl mx-auto text-lg text-hassvn-muted-white mb-12"
          >
            A curated collection of premium digital experiences built for ambitious brands 
            and forward-thinking founders.
          </motion.p>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${filter === cat 
                    ? "bg-hassvn-electric-blue text-hassvn-black" 
                    : "glass text-hassvn-muted-white hover:text-hassvn-soft-white"
                  }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass 
              text-hassvn-soft-white font-medium hover:bg-white/10 transition-all duration-300 
              hover:border-hassvn-electric-blue/30"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
