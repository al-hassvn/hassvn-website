"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  MessageSquare,
  TrendingUp,
  Users,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Total Projects", value: "24", icon: FolderOpen, change: "+12%", color: "text-hassvn-electric-blue" },
  { label: "Blog Posts", value: "18", icon: FileText, change: "+8%", color: "text-hassvn-neon-purple" },
  { label: "Messages", value: "47", icon: MessageSquare, change: "+23%", color: "text-emerald-400" },
  { label: "Page Views", value: "12.5K", icon: Eye, change: "+45%", color: "text-amber-400" },
];

const recentActivity = [
  { action: "New project created", item: "NeonVault Dashboard", time: "2 hours ago" },
  { action: "Blog post published", item: "AI in Web Development", time: "5 hours ago" },
  { action: "Contact form received", item: "from Sarah Chen", time: "8 hours ago" },
  { action: "Service updated", item: "SEO Optimization", time: "1 day ago" },
];

export default function AdminDashboardPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-display font-bold text-hassvn-soft-white mb-2">
          Dashboard
        </h1>
        <p className="text-hassvn-muted-white">
          Welcome back. Here's what's happening with your website.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl glass border border-white/5"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <span className="text-xs text-emerald-400 font-medium">{stat.change}</span>
            </div>
            <div className="text-3xl font-display font-bold text-hassvn-soft-white mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-hassvn-muted-white">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 p-6 rounded-2xl glass border border-white/5"
        >
          <h2 className="text-lg font-display font-semibold text-hassvn-soft-white mb-6">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 
                  hover:bg-white/10 transition-colors"
              >
                <div>
                  <div className="text-sm text-hassvn-soft-white font-medium">
                    {activity.action}
                  </div>
                  <div className="text-xs text-hassvn-muted-white">{activity.item}</div>
                </div>
                <div className="text-xs text-hassvn-muted-white">{activity.time}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl glass border border-white/5"
        >
          <h2 className="text-lg font-display font-semibold text-hassvn-soft-white mb-6">
            Quick Actions
          </h2>
          <div className="space-y-3">
            {[
              { label: "Add New Project", href: "/admin/portfolio", icon: FolderOpen },
              { label: "Write Blog Post", href: "/admin/blog", icon: FileText },
              { label: "View Messages", href: "/admin/messages", icon: MessageSquare },
              { label: "Check Analytics", href: "/admin/analytics", icon: TrendingUp },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 
                  hover:bg-white/10 transition-colors group"
              >
                <link.icon className="w-5 h-5 text-hassvn-electric-blue" />
                <span className="text-sm text-hassvn-soft-white flex-1">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-hassvn-muted-white 
                  group-hover:text-hassvn-electric-blue transition-colors" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
