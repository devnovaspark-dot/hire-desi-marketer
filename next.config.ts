import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ["image/avif", "image/webp"],
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
        source: "/quote",
        destination: "/get-a-quote",
        permanent: true,
      },
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
