import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/WBM",
  assetPrefix: "/WBM/",

  images: {
    unoptimized: true,   // ✅ VERY IMPORTANT
  },
};

export default nextConfig;