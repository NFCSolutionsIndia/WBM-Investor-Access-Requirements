import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/WBM-Investor-Access-Requirements",
  trailingSlash: true,

  images: {
    unoptimized: true,   // ✅ VERY IMPORTANT
  },
};

export default nextConfig;