import { Metadata } from "next";

// @TODO: update this after first deployment to production
export const METADATA_URL = process.env.NEXT_PUBLIC_SITE || "https://planable.com";

export const DEFAULT_METADATA: Metadata = {
  title: "Media Gallery",
  description:
    "Media Gallery is a simple web application that allows users to organize and manage media files within a folder-based and categorized system.",
  keywords: ["planable", "media gallery"],
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      sizes: "any",
      url: "/favicon/favicon.svg",
    },
  ],
  robots: "index, follow",
  metadataBase: new URL(METADATA_URL),
  openGraph: {
    title: "Media Gallery",
    description:
      "Media Gallery is a simple web application that allows users to organize and manage media files within a folder-based and categorized system.",
    url: `${METADATA_URL}`,
    siteName: "rendley",
    images: [
      {
        url: `${METADATA_URL}/og/og-1200x630.png`,
        width: 1200,
        height: 630,
      },
      {
        url: `${METADATA_URL}/og/og-1024x512.png`,
        width: 1024,
        height: 512,
      },
    ],
    locale: "en",
    type: "website",
  },
};
