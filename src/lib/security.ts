import { NextRequest, NextResponse } from "next/server";
import DOMPurify from "isomorphic-dompurify";
import { z } from "zod";

// Rate limiting store (in production, use Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export function rateLimit(
  identifier: string,
  maxRequests: number = 100,
  windowMs: number = 15 * 60 * 1000
): { success: boolean; remaining: number; resetTime: number } {
  const now = Date.now();
  const windowStart = now - windowMs;

  // Clean old entries
  rateLimitStore.forEach((data, key) => {
    if (data.resetTime < windowStart) {
      rateLimitStore.delete(key);
    }
  });

  const current = rateLimitStore.get(identifier);

  if (!current || current.resetTime < now) {
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + windowMs,
    });
    return { success: true, remaining: maxRequests - 1, resetTime: now + windowMs };
  }

  if (current.count >= maxRequests) {
    return { success: false, remaining: 0, resetTime: current.resetTime };
  }

  current.count++;
  return { success: true, remaining: maxRequests - current.count, resetTime: current.resetTime };
}

export function sanitizeInput(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
  });
}

export function validateCSRFToken(req: NextRequest): boolean {
  const csrfToken = req.headers.get("x-csrf-token");
  const sessionToken = req.cookies.get("csrf-token")?.value;

  if (!csrfToken || !sessionToken) return false;
  return csrfToken === sessionToken;
}

export function generateCSRFToken(): string {
  return crypto.randomUUID();
}

export function setSecurityHeaders(res: NextResponse): NextResponse {
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.clerk.com *.vercel.app; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: *.cloudinary.com *.unsplash.com; font-src 'self'; connect-src 'self' *.clerk.com *.supabase.co *.vercel.app; frame-src 'self' *.clerk.com;"
  );
  res.headers.set("X-XSS-Protection", "1; mode=block");
  res.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  return res;
}

export const contactSchema = z.object({
  name: z.string().min(2).max(100).transform(sanitizeInput),
  email: z.string().email(),
  subject: z.string().max(200).optional().transform((v) => v ? sanitizeInput(v) : undefined),
  message: z.string().min(10).max(5000).transform(sanitizeInput),
  honeypot: z.string().max(0).optional(), // Spam trap
});

export const blogSchema = z.object({
  title: z.string().min(3).max(200),
  slug: z.string().min(3).max(200),
  excerpt: z.string().max(500).optional(),
  content: z.string().min(10),
  coverImage: z.string().url().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
  featured: z.boolean().optional(),
  metaTitle: z.string().max(70).optional(),
  metaDesc: z.string().max(160).optional(),
});

export const projectSchema = z.object({
  title: z.string().min(3).max(200),
  slug: z.string().min(3).max(200),
  description: z.string().min(10),
  thumbnail: z.string().url().optional(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  techStack: z.array(z.string()).optional(),
  liveUrl: z.string().url().optional(),
  githubUrl: z.string().url().optional(),
  featured: z.boolean().optional(),
  order: z.number().optional(),
  metaTitle: z.string().max(70).optional(),
  metaDesc: z.string().max(160).optional(),
});

export const serviceSchema = z.object({
  title: z.string().min(3).max(200),
  slug: z.string().min(3).max(200),
  description: z.string().min(10),
  icon: z.string().optional(),
  features: z.array(z.string()).optional(),
  price: z.string().optional(),
  priceNote: z.string().optional(),
  order: z.number().optional(),
  active: z.boolean().optional(),
});

export const testimonialSchema = z.object({
  name: z.string().min(2).max(100),
  role: z.string().min(2).max(100),
  company: z.string().max(100).optional(),
  avatar: z.string().url().optional(),
  content: z.string().min(10).max(2000),
  rating: z.number().min(1).max(5).optional(),
  featured: z.boolean().optional(),
});
