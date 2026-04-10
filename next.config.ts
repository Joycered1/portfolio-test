import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.super.so" },
      { protocol: "https", hostname: "images.spr.so" },
      { protocol: "https", hostname: "cdn.dribbble.com" },
    ],
  },
};

export default nextConfig;
