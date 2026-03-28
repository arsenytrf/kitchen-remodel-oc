import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kitchen-remodel-oc",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
