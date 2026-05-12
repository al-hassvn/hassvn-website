"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled ? "py-3" : "py-6"}`}
      >
        <div
          className={`mx-4 md:mx-8 rounded-2xl transition-all duration-500
            ${isScrolled ? "glass-strong border-white/10" : "bg-transparent"}`}
        >
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-10">
              <motion.span
                className="text-2xl font-display font-bold tracking-tight"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-gradient">HASSVN</span>
              </motion.span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-hassvn-muted-white hover:text-hassvn-soft-white 
                    transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] 
                    bg-gradient-to-r from-hassvn-electric-blue to-hassvn-neon-purple 
                    group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-hassvn-electric-blue to-hassvn-neon-blue 
                  text-hassvn-black text-sm font-semibold hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] 
                  transition-all duration-300"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-10 w-10 h-10 rounded-full glass flex items-center justify-center"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-hassvn-soft-white" />
              ) : (
                <Menu className="w-5 h-5 text-hassvn-soft-white" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-hassvn-black/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-display font-semibold text-hassvn-soft-white 
                      hover:text-hassvn-electric-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-hassvn-electric-blue to-hassvn-neon-blue 
                    text-hassvn-black font-bold text-lg"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
