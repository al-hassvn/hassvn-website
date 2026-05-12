"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowUpRight, BookOpen } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";

const posts = [
  {
    id: "1",
    title: "Building AI-Powered Web Applications with Next.js",
    excerpt: "A comprehensive guide to integrating AI capabilities into modern web applications using Next.js, OpenAI, and vector databases.",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    category: "AI",
    date: "2026-04-15",
    readTime: "8 min read",
    slug: "building-ai-powered-web-apps",
    featured: true,
  },
  {
    id: "2",
    title: "The Future of E-commerce: 3D Product Visualization",
    excerpt: "How Three.js and WebGL are revolutionizing online shopping experiences with immersive 3D product previews.",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    category: "Development",
    date: "2026-03-28",
    readTime: "6 min read",
    slug: "future-of-ecommerce-3d",
    featured: false,
  },
  {
    id: "3",
    title: "SEO Strategies That Actually Work in 2026",
    excerpt: "Cutting-edge SEO techniques for modern websites. From Core Web Vitals to AI-generated content optimization.",
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=400&fit=crop",
    category: "SEO",
    date: "2026-03-10",
    readTime: "10 min read",
    slug: "seo-strategies-2026",
    featured: false,
  },
  {
    id: "4",
    title: "Designing for Conversion: Psychology-Based UI/UX",
    excerpt: "How cognitive psychology principles can dramatically improve your website's conversion rates and user engagement.",
    coverImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    category: "Design",
    date: "2026-02-22",
    readTime: "7 min read",
    slug: "designing-for-conversion",
    featured: false,
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "AI", "Development", "SEO", "Design"];

  const filtered = selectedCategory === "All" 
    ? posts 
    : posts.filter(p => p.category === selectedCategory);

  const featured = posts.find(p => p.featured);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <BookOpen className="w-4 h-4 text-hassvn-electric-blue" />
            <span className="text-sm text-hassvn-soft-white">Blog</span>
          </div>

          <TextReveal
            text="Insights & Ideas"
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hassvn-soft-white mb-6"
          />
          <p className="text-lg text-hassvn-muted-white max-w-2xl mx-auto">
            Thoughts on web development, design, AI, and building digital experiences.
          </p>
        </div>

        {/* Featured post */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden glass border border-white/5 
                hover:border-hassvn-electric-blue/30 transition-all duration-500">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hassvn-black via-hassvn-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="px-3 py-1 rounded-full bg-hassvn-electric-blue text-hassvn-black text-xs font-bold mb-4 inline-block">
                    Featured
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-hassvn-soft-white mb-3 
                    group-hover:text-hassvn-electric-blue transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-hassvn-muted-white max-w-2xl mb-4">{featured.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-hassvn-muted-white">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featured.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featured.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === cat 
                  ? "bg-hassvn-electric-blue text-hassvn-black" 
                  : "glass text-hassvn-muted-white hover:text-hassvn-soft-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.filter(p => !p.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-hassvn-black/50 to-transparent" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-hassvn-electric-blue">
                    {post.category}
                  </span>
                  <span className="text-xs text-hassvn-muted-white">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-hassvn-soft-white mb-2 
                  group-hover:text-hassvn-electric-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-hassvn-muted-white line-clamp-2">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
