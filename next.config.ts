import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip lint during builds (eslint-plugin-react dependency issue on
    // this machine); TypeScript type checking still runs on every build.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
