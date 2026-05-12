"use client";

import { useUser } from "@clerk/nextjs";
import { Bell, Search } from "lucide-react";

export function AdminHeader() {
  const { user } = useUser();

  return (
    <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 
      bg-hassvn-charcoal/50 backdrop-blur-sm">
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <Search className="w-5 h-5 text-hassvn-muted-white" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-sm text-hassvn-soft-white placeholder-hassvn-muted-white 
            outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-10 h-10 rounded-full glass flex items-center justify-center 
          hover:bg-white/10 transition-colors">
          <Bell className="w-5 h-5 text-hassvn-muted-white" />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-hassvn-electric-blue" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-hassvn-electric-blue 
            to-hassvn-neon-purple flex items-center justify-center text-hassvn-black 
            font-bold text-xs">
            {user?.firstName?.[0] || "A"}
          </div>
          <div className="hidden md:block">
            <div className="text-sm text-hassvn-soft-white font-medium">
              {user?.firstName || "Admin"}
            </div>
            <div className="text-xs text-hassvn-muted-white">{user?.emailAddresses[0]?.emailAddress}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
