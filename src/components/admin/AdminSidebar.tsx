"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  MessageSquare,
  Briefcase,
  Star,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";
import { useClerk } from "@clerk/nextjs";

const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Portfolio", href: "/admin/portfolio", icon: FolderOpen },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Services", href: "/admin/services", icon: Briefcase },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Messages", href: "/admin/messages", icon: MessageSquare },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const { signOut } = useClerk();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-hassvn-charcoal border-r border-white/5 
      flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-white/5">
        <Link href="/admin/dashboard" className="flex items-center gap-3">
          <span className="text-2xl font-display font-bold text-gradient">HASSVN</span>
          <span className="text-xs text-hassvn-muted-white px-2 py-1 rounded-full bg-white/5">
            Admin
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium 
                transition-all duration-300
                ${isActive 
                  ? "bg-hassvn-electric-blue/10 text-hassvn-electric-blue border border-hassvn-electric-blue/20" 
                  : "text-hassvn-muted-white hover:text-hassvn-soft-white hover:bg-white/5"
                }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-white/5">
        <button
          onClick={() => signOut({ redirectUrl: "/" })}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium 
            text-hassvn-muted-white hover:text-red-400 hover:bg-red-400/10 
            transition-all duration-300 w-full"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
