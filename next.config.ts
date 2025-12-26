import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/DLHIT-website",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
