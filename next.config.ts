import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
        source: "/Hire%20desi%20marketer%20video-%2017%20oct.mp4",
        destination: "/Video.mp4",
        permanent: true,
      },
      {
        source: "/video.mp4",
        destination: "/Video.mp4",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
