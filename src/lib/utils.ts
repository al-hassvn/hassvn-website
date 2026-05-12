import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

export function generateMetaTitle(title: string): string {
  return `${title} | HASSVN — Elite Freelance Developer`;
}

export function generateMetaDescription(description: string): string {
  return truncateText(description, 160);
}

export const siteConfig = {
  name: "HASSVN",
  title: "HASSVN — Elite Freelance Developer & Digital Creator",
  description:
    "Premium freelance web developer, UI/UX designer, SEO specialist, and AI automation creator building futuristic digital experiences for modern brands.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://hassvn.dev",
  ogImage: "https://hassvn.dev/og-image.jpg",
  links: {
    twitter: "https://twitter.com/hassvn",
    github: "https://github.com/hassvn",
    linkedin: "https://linkedin.com/in/hassvn",
    email: "hello@hassvn.dev",
  },
  keywords: [
    "freelance developer",
    "web developer",
    "UI/UX designer",
    "SEO specialist",
    "AI automation",
    "SaaS development",
    "premium websites",
    "digital creator",
    "branding",
    "e-commerce",
  ],
};

export function sanitizeHtml(html: string): string {
  return html
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
