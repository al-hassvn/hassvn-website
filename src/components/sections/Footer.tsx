"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Website Design", href: "/#services" },
    { label: "Web Development", href: "/#services" },
    { label: "SEO Optimization", href: "/#services" },
    { label: "AI Automation", href: "/#services" },
    { label: "Branding", href: "/#services" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/hassvn", label: "Twitter" },
  { icon: Github, href: "https://github.com/hassvn", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/hassvn", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@hassvn.dev", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative bg-hassvn-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-display font-bold text-gradient">HASSVN</span>
            </Link>
            <p className="text-hassvn-muted-white text-sm leading-relaxed mb-6 max-w-sm">
              Premium freelance developer and digital creator building futuristic 
              digital experiences for modern brands. One person. Extraordinary results.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center 
                    text-hassvn-muted-white hover:text-hassvn-electric-blue hover:border-hassvn-electric-blue/30 
                    transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-hassvn-soft-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-hassvn-muted-white hover:text-hassvn-electric-blue 
                      transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-hassvn-soft-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-hassvn-muted-white hover:text-hassvn-electric-blue 
                      transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-hassvn-soft-white uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-hassvn-muted-white hover:text-hassvn-electric-blue 
                      transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-hassvn-muted-white">
            © {new Date().getFullYear()} HASSVN. All rights reserved.
          </p>
          <p className="text-sm text-hassvn-muted-white">
            Crafted with precision and passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
