import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/githubPages",
  assetPrefix: "/githubPages/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;