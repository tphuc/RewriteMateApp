import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  transpilePackages: ['next-mdx-remote']
};

export default nextConfig;
