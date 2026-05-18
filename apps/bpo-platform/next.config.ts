import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "80mb"
    }
  },
  serverExternalPackages: ["pdf-lib"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  },
  webpack(config) {
    const externals = Array.isArray(config.externals)
      ? config.externals
      : config.externals
      ? [config.externals]
      : [];

    config.externals = [...externals, "pdf-lib"];
    return config;
  }
};

export default nextConfig;
