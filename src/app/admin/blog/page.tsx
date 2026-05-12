"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  Eye,
  Calendar,
  CheckCircle2,
  XCircle,
} from "lucide-react";

const mockPosts = [
  {
    id: "1",
    title: "Building AI-Powered Web Applications",
    category: "AI",
    status: "Published",
    featured: true,
    views: 2340,
    date: "2026-04-15",
    coverImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    title: "The Future of E-commerce",
    category: "Development",
    status: "Published",
    featured: false,
    views: 1890,
    date: "2026-03-28",
    coverImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    title: "SEO Strategies That Actually Work",
    category: "SEO",
    status: "Draft",
    featured: false,
    views: 0,
    date: "2026-03-10",
    coverImage: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=100&h=100&fit=crop",
  },
];

export default function AdminBlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-hassvn-soft-white mb-2">Blog</h1>
          <p className="text-hassvn-muted-white">Manage your blog posts and content</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r 
          from-hassvn-electric-blue to-hassvn-neon-blue text-hassvn-black font-semibold 
          hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all">
          <Plus className="w-5 h-5" />
          New Post
        </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 flex-1 max-w-md glass rounded-xl px-4 py-2">
          <Search className="w-5 h-5 text-hassvn-muted-white" />
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-hassvn-soft-white placeholder-hassvn-muted-white outline-none w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-2xl border border-white/5 overflow-hidden group"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hassvn-black via-transparent to-transparent" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium
                  ${post.status === "Published" ? "bg-emerald-500/20 text-emerald-400" : "bg-amber-500/20 text-amber-400"}`}>
                  {post.status}
                </span>
                {post.featured && (
                  <span className="px-2 py-1 rounded-full text-xs font-medium bg-hassvn-electric-blue/20 text-hassvn-electric-blue">
                    Featured
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-hassvn-muted-white">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-hassvn-muted-white">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
              </div>
              <h3 className="text-lg font-display font-semibold text-hassvn-soft-white mb-4">
                {post.title}
              </h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-xs text-hassvn-muted-white">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {post.views}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-white/10">
                    <Pencil className="w-4 h-4 text-hassvn-muted-white" />
                  </button>
                  <button className="w-8 h-8 rounded-lg glass flex items-center justify-center hover:bg-red-400/10">
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
