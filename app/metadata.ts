import { Metadata } from "next";

export const siteConfig = {
  name: "Work Management Landing Page",
  description: "A modern development toolkit for building type-safe, scalable applications with best practices baked in.",
  url: "https://nextjs-work-management.vercel.app",
  links: {
    github: "https://github.com/daotanhao1406/nextjs-work-management",
    docs: "/docs",
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "work management",
    "typescript",
    "react",
    "nextjs",
    "development toolkit",
    "modern stack",
  ],
  authors: [
    {
      name: "daotanhao",
      url: siteConfig.url,
    },
  ],
  creator: "daotanhao",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@daotanhao1406",
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};