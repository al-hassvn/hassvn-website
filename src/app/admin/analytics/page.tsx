"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import {
  TrendingUp,
  Users,
  Eye,
  MousePointerClick,
  Calendar,
} from "lucide-react";

const pageViewsData = [
  { date: "Mon", views: 1200, unique: 800 },
  { date: "Tue", views: 1800, unique: 1200 },
  { date: "Wed", views: 2400, unique: 1600 },
  { date: "Thu", views: 1600, unique: 1100 },
  { date: "Fri", views: 2800, unique: 1900 },
  { date: "Sat", views: 3200, unique: 2100 },
  { date: "Sun", views: 2100, unique: 1400 },
];

const topPages = [
  { page: "/", views: 4520 },
  { page: "/portfolio", views: 3210 },
  { page: "/contact", views: 1890 },
  { page: "/about", views: 1240 },
  { page: "/blog", views: 980 },
];

export default function AdminAnalyticsPage() {
  const [timeRange, setTimeRange] = useState("7d");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-hassvn-soft-white mb-2">Analytics</h1>
          <p className="text-hassvn-muted-white">Track your website performance</p>
        </div>
        <div className="flex items-center gap-2 glass rounded-xl p-1">
          {["24h", "7d", "30d", "90d"].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                ${timeRange === range 
                  ? "bg-hassvn-electric-blue text-hassvn-black" 
                  : "text-hassvn-muted-white hover:text-hassvn-soft-white"
                }`}
            >
              {range === "24h" ? "Last 24h" : `Last ${range}`}
            </button>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Total Views", value: "15,234", change: "+12%", icon: Eye, color: "text-hassvn-electric-blue" },
          { label: "Unique Visitors", value: "8,921", change: "+8%", icon: Users, color: "text-hassvn-neon-purple" },
          { label: "Avg. Session", value: "3m 42s", change: "+15%", icon: Calendar, color: "text-emerald-400" },
          { label: "Bounce Rate", value: "32%", change: "-5%", icon: MousePointerClick, color: "text-amber-400" },
        ].map((stat, index) => (
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

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 rounded-2xl glass border border-white/5"
        >
          <h3 className="text-lg font-display font-semibold text-hassvn-soft-white mb-6">
            Page Views
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={pageViewsData}>
              <defs>
                <linearGradient id="viewsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#00d4ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="date" stroke="#8a8a9a" fontSize={12} />
              <YAxis stroke="#8a8a9a" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#12121a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                }}
                labelStyle={{ color: "#f0f0f5" }}
              />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#00d4ff"
                fill="url(#viewsGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="unique"
                stroke="#b829dd"
                fill="transparent"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-6 rounded-2xl glass border border-white/5"
        >
          <h3 className="text-lg font-display font-semibold text-hassvn-soft-white mb-6">
            Top Pages
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={topPages} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
              <XAxis type="number" stroke="#8a8a9a" fontSize={12} />
              <YAxis dataKey="page" type="category" stroke="#8a8a9a" fontSize={12} width={80} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#12121a",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                }}
                labelStyle={{ color: "#f0f0f5" }}
              />
              <Bar dataKey="views" fill="#00d4ff" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  );
}
