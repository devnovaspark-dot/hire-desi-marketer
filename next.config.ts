import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/thank-you",
        destination: "/thank-you-get-a-quote",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/get-a-quote",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/get-a-quote",
        permanent: true,
      },
      {
        source: "/Hire%20desi%20marketer%20video-%2017%20oct.mp4",
        destination: "/team-walkthrough.mp4",
        permanent: true,
      },
      {
        source: "/Video.mp4",
        destination: "/team-walkthrough.mp4",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
