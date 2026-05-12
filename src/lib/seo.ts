import { Metadata } from "next";
import { siteConfig } from "./utils";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  publishedAt?: string;
  modifiedAt?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  image,
  url,
  type = "website",
  publishedAt,
  modifiedAt,
  keywords,
  noIndex = false,
}: SEOProps): Metadata {
  const metaTitle = title ? `${title} | HASSVN` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaUrl = url || siteConfig.url;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: keywords || siteConfig.keywords,
    authors: [{ name: "HASSVN" }],
    creator: "HASSVN",
    publisher: "HASSVN",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: metaUrl,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type,
      locale: "en_US",
      url: metaUrl,
      siteName: "HASSVN",
      title: metaTitle,
      description: metaDescription,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
      ...(publishedAt && { publishedTime: publishedAt }),
      ...(modifiedAt && { modifiedTime: modifiedAt }),
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@hassvn",
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    },
    other: {
      "application-name": "HASSVN",
      "msapplication-TileColor": "#0a0a0f",
      "theme-color": "#0a0a0f",
    },
  };
}

export function generateSchemaOrg({
  type = "WebSite",
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
}: {
  type?: string;
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
}) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": type,
    name: title || siteConfig.title,
    description: description || siteConfig.description,
    url: url || siteConfig.url,
    image: image || siteConfig.ogImage,
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    ...(author && { author: { "@type": "Person", name: author } }),
  };

  return baseSchema;
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "HASSVN",
    url: siteConfig.url,
    jobTitle: "Freelance Web Developer & Digital Creator",
    worksFor: {
      "@type": "Organization",
      name: "HASSVN",
      url: siteConfig.url,
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.github,
      siteConfig.links.linkedin,
    ],
    knowsAbout: [
      "Web Development",
      "UI/UX Design",
      "SEO Optimization",
      "AI Automation",
      "SaaS Development",
      "Branding",
      "E-commerce",
    ],
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  provider: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "Person",
      name: service.provider,
    },
  };
}
