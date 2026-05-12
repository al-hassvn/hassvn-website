import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hassvn.dev"),
  title: {
    default: "HASSVN — Elite Freelance Developer & Digital Creator",
    template: "%s | HASSVN",
  },
  description:
    "Premium freelance web developer, UI/UX designer, SEO specialist, and AI automation creator building futuristic digital experiences for modern brands.",
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
  authors: [{ name: "HASSVN" }],
  creator: "HASSVN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hassvn.dev",
    siteName: "HASSVN",
    title: "HASSVN — Elite Freelance Developer & Digital Creator",
    description:
      "Premium freelance web developer, UI/UX designer, SEO specialist, and AI automation creator building futuristic digital experiences for modern brands.",
    images: [
      {
        url: "https://hassvn.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "HASSVN — Elite Freelance Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HASSVN — Elite Freelance Developer & Digital Creator",
    description:
      "Premium freelance web developer, UI/UX designer, SEO specialist, and AI automation creator.",
    images: ["https://hassvn.dev/og-image.jpg"],
    creator: "@hassvn",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  alternates: {
    canonical: "https://hassvn.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#00d4ff",
          colorBackground: "#0a0a0f",
          colorText: "#f0f0f5",
          colorTextSecondary: "#8a8a9a",
          colorInputBackground: "#12121a",
          colorInputText: "#f0f0f5",
          colorDanger: "#ef4444",
          borderRadius: "0.75rem",
        },
      }}
    >
      <html
        lang="en"
        className={`${inter.variable} ${spaceGrotesk.variable}`}
        suppressHydrationWarning
      >
        <body className="font-sans antialiased bg-hassvn-black text-hassvn-white overflow-x-hidden">
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
