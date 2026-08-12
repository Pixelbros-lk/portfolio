import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },

  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev', '10.179.230.8'],
};

export default nextConfig;
