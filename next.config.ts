import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
