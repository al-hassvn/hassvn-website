# HASSVN — Elite Freelance Developer Website

A premium, futuristic personal brand website for HASSVN — a solo digital creator and developer specializing in web design, development, SEO, AI automation, and branding.

## 🚀 Tech Stack

### Frontend
- **Next.js 15** — App Router, React Server Components
- **React 19** — Latest React with concurrent features
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling with custom design system
- **Framer Motion** — Premium animations and transitions
- **GSAP + ScrollTrigger** — Cinematic scroll animations
- **Lenis** — Smooth scrolling with inertia
- **React Three Fiber** — 3D effects and WebGL
- **Lucide React** — Icon system

### Backend
- **Next.js API Routes** — Serverless API endpoints
- **Prisma ORM** — Type-safe database queries
- **PostgreSQL** — Primary database (via Supabase)
- **Clerk** — Enterprise-grade authentication
- **Cloudinary** — Image upload and optimization
- **Nodemailer** — Email notifications

### Security
- Clerk authentication with middleware protection
- Rate limiting on all API endpoints
- CSRF protection
- XSS prevention with DOMPurify
- Input sanitization and validation (Zod)
- SQL injection prevention via Prisma
- Security headers (CSP, HSTS, X-Frame-Options)
- Honeypot spam protection

### SEO
- Server-side rendering (SSR)
- Dynamic metadata generation
- Schema.org structured data
- Open Graph & Twitter Cards
- Sitemap generation
- robots.txt
- Semantic HTML
- Core Web Vitals optimization

## 📁 Project Structure

```
hassvn-website/
├── src/
│   ├── app/
│   │   ├── (site)/           # Public website routes
│   │   │   ├── page.tsx       # Home page
│   │   │   ├── portfolio/
│   │   │   ├── blog/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── [...not-found]/
│   │   ├── admin/            # Admin dashboard (protected)
│   │   │   ├── dashboard/
│   │   │   ├── portfolio/
│   │   │   ├── blog/
│   │   │   ├── services/
│   │   │   ├── testimonials/
│   │   │   ├── messages/
│   │   │   ├── analytics/
│   │   │   ├── settings/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── api/              # API endpoints
│   │   │   ├── contact/
│   │   │   ├── portfolio/
│   │   │   ├── blog/
│   │   │   ├── services/
│   │   │   ├── testimonials/
│   │   │   ├── upload/
│   │   │   └── analytics/
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── sections/         # Page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── PortfolioSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Footer.tsx
│   │   ├── animations/       # Animation components
│   │   │   ├── LoadingScreen.tsx
│   │   │   └── TextReveal.tsx
│   │   ├── effects/          # Visual effects
│   │   │   ├── CustomCursor.tsx
│   │   │   ├── CursorGlow.tsx
│   │   │   ├── FloatingOrb.tsx
│   │   │   └── NoiseOverlay.tsx
│   │   ├── ui/               # UI components
│   │   │   ├── magnetic-button.tsx
│   │   │   └── toaster.tsx
│   │   └── admin/            # Admin components
│   │       ├── AdminSidebar.tsx
│   │       ├── AdminHeader.tsx
│   │       └── PlaceholderPage.tsx
│   ├── lib/
│   │   ├── prisma.ts         # Prisma client
│   │   ├── utils.ts          # Utilities
│   │   ├── security.ts       # Security utilities
│   │   └── seo.ts            # SEO helpers
│   ├── types/
│   │   └── index.ts          # TypeScript types
│   └── hooks/                # Custom hooks
├── prisma/
│   └── schema.prisma         # Database schema
├── public/
│   ├── robots.txt
│   └── images/
├── middleware.ts             # Clerk auth middleware
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎨 Design System

### Colors
- **Background**: `#0a0a0f` (Deep Black)
- **Charcoal**: `#12121a`
- **Electric Blue**: `#00d4ff`
- **Neon Purple**: `#b829dd`
- **Soft White**: `#f0f0f5`
- **Muted White**: `#8a8a9a`

### Typography
- **Display**: Space Grotesk (headlines)
- **Body**: Geist Sans
- **Mono**: Geist Mono

### Effects
- Glassmorphism with backdrop blur
- Neon glows and gradients
- 3D tilt cards with parallax
- Custom cursor with glow follow
- Noise texture overlay
- Floating particle system

## 🛠️ Setup Instructions

### 1. Clone and Install
```bash
git clone <repo-url>
cd hassvn-website
npm install
```

### 2. Environment Variables
Create `.env.local`:
```env
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/hassvn_db"

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/admin/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/admin/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/admin/dashboard

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud
CLOUDINARY_API_KEY=your-key
CLOUDINARY_API_SECRET=your-secret

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 3. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## 📱 Features

### Public Website
- ✅ Cinematic hero with animated background
- ✅ 3D tilt service cards with glow effects
- ✅ Interactive portfolio showcase with filtering
- ✅ Animated process timeline
- ✅ Testimonial carousel
- ✅ Pricing tiers
- ✅ Contact form with spam protection
- ✅ Blog with categories
- ✅ Smooth scroll with Lenis
- ✅ Custom cursor with glow
- ✅ Mobile-responsive navigation

### Admin Dashboard
- ✅ Portfolio management (CRUD)
- ✅ Blog post management (CRUD)
- ✅ Service editing
- ✅ Testimonial management
- ✅ Contact form submissions
- ✅ Analytics dashboard with charts
- ✅ Image uploads to Cloudinary
- ✅ Secure authentication via Clerk

### Security
- ✅ Rate limiting
- ✅ CSRF protection
- ✅ XSS prevention
- ✅ Input validation (Zod)
- ✅ SQL injection prevention
- ✅ Secure headers
- ✅ Honeypot spam protection

### SEO
- ✅ Server-side rendering
- ✅ Dynamic metadata
- ✅ Schema.org markup
- ✅ Open Graph / Twitter Cards
- ✅ Sitemap generation
- ✅ robots.txt
- ✅ Semantic HTML

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Add environment variables
4. Deploy

### Environment Variables for Production
- `DATABASE_URL` (Supabase/Neon)
- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLOUDINARY_*`
- `SMTP_*`

## 📄 License

MIT License — HASSVN

---

Built with passion by HASSVN — Digital Experiences That Feel Like The Future.
