"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Pencil,
  Trash2,
  ExternalLink,
  Star,
} from "lucide-react";

const mockProjects = [
  {
    id: "1",
    title: "NeonVault",
    category: "SaaS",
    status: "Published",
    featured: true,
    views: 1240,
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=100&h=100&fit=crop",
  },
  {
    id: "2",
    title: "Aether Commerce",
    category: "E-commerce",
    status: "Published",
    featured: true,
    views: 890,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop",
  },
  {
    id: "3",
    title: "Pulse Analytics",
    category: "Web App",
    status: "Draft",
    featured: false,
    views: 0,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  },
];

export default function AdminPortfolioPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-hassvn-soft-white mb-2">
            Portfolio
          </h1>
          <p className="text-hassvn-muted-white">Manage your projects and case studies</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r 
            from-hassvn-electric-blue to-hassvn-neon-blue text-hassvn-black 
            font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 flex-1 max-w-md glass rounded-xl px-4 py-2">
          <Search className="w-5 h-5 text-hassvn-muted-white" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-hassvn-soft-white placeholder-hassvn-muted-white outline-none w-full"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-hassvn-muted-white">
          <Filter className="w-4 h-4" />
          Filter
        </button>
      </div>

      {/* Projects table */}
      <div className="glass rounded-2xl border border-white/5 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-6 py-4 text-xs text-hassvn-muted-white uppercase tracking-wider">Project</th>
              <th className="text-left px-6 py-4 text-xs text-hassvn-muted-white uppercase tracking-wider">Category</th>
              <th className="text-left px-6 py-4 text-xs text-hassvn-muted-white uppercase tracking-wider">Status</th>
              <th className="text-left px-6 py-4 text-xs text-hassvn-muted-white uppercase tracking-wider">Views</th>
              <th className="text-left px-6 py-4 text-xs text-hassvn-muted-white uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockProjects.map((project, index) => (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden">
                      <Image src={project.image} alt={project.title} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-hassvn-soft-white">{project.title}</div>
                      {project.featured && (
                        <div className="flex items-center gap-1 text-xs text-hassvn-electric-blue">
                          <Star className="w-3 h-3 fill-current" />
                          Featured
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-hassvn-muted-white">
                    {project.category}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium
                    ${project.status === "Published" 
                      ? "bg-emerald-500/10 text-emerald-400" 
                      : "bg-amber-500/10 text-amber-400"
                    }`}>
                    {project.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-hassvn-muted-white">{project.views}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 rounded-lg glass flex items-center justify-center 
                      hover:bg-white/10 transition-colors">
                      <Pencil className="w-4 h-4 text-hassvn-muted-white" />
                    </button>
                    <button className="w-8 h-8 rounded-lg glass flex items-center justify-center 
                      hover:bg-red-400/10 transition-colors">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                    <button className="w-8 h-8 rounded-lg glass flex items-center justify-center 
                      hover:bg-white/10 transition-colors">
                      <ExternalLink className="w-4 h-4 text-hassvn-muted-white" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
