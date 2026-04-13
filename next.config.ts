import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MINTLAB",
  assetPrefix: "/MINTLAB/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mintlab.korea.ac.kr",
      },
    ],
  },
};

export default nextConfig;
