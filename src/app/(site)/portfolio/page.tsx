"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ExternalLink, Github, Eye, Filter } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const allProjects = [
  {
    id: "1",
    title: "NeonVault",
    category: "SaaS",
    description: "Crypto portfolio dashboard with real-time analytics and AI insights.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "Prisma"],
    featured: true,
  },
  {
    id: "2",
    title: "Aether Commerce",
    category: "E-commerce",
    description: "Luxury e-commerce with 3D previews and AI recommendations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Shopify", "React", "Three.js"],
    featured: true,
  },
  {
    id: "3",
    title: "Pulse Analytics",
    category: "Web App",
    description: "Business intelligence with predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "Node.js"],
    featured: true,
  },
  {
    id: "4",
    title: "Zenith AI",
    category: "AI",
    description: "Enterprise AI automation platform.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tags: ["Python", "OpenAI", "FastAPI"],
    featured: false,
  },
  {
    id: "5",
    title: "Lumina Brand",
    category: "Branding",
    description: "Complete brand identity for luxury wellness startup.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    tags: ["Figma", "Illustrator"],
    featured: false,
  },
  {
    id: "6",
    title: "Orbit Chat",
    category: "AI",
    description: "Intelligent customer support with NLP.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    tags: ["NLP", "TensorFlow", "WebSocket"],
    featured: false,
  },
];

const categories = ["All", "SaaS", "E-commerce", "Web App", "AI", "Branding"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allProjects : allProjects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Eye className="w-4 h-4 text-hassvn-electric-blue" />
            <span className="text-sm text-hassvn-soft-white">Portfolio</span>
          </div>

          <TextReveal
            text="Selected Work"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hassvn-soft-white mb-6"
          />
          <p className="text-lg text-hassvn-muted-white max-w-2xl mx-auto">
            A collection of premium digital experiences built with precision and passion.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <Filter className="w-4 h-4 text-hassvn-muted-white mr-2" />
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
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl glass border border-white/5 
                  hover:border-hassvn-electric-blue/30 transition-all duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hassvn-black via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs rounded-full glass text-hassvn-electric-blue">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-hassvn-soft-white mb-2 
                    group-hover:text-hassvn-electric-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-hassvn-muted-white mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 text-hassvn-muted-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
