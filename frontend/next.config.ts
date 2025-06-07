import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    esmExternals: true, // Uses ESM if available in node_modules
  },
  swcMinify: true, // SWC is fast + efficient

};

export default nextConfig;
