import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/rfq/", destination: "/rfq", permanent: false },
      { source: "/rfq/thank-you/", destination: "/rfq/thank-you", permanent: false },
    ];
  },
  eslint: {
    // Skip lint during builds (eslint-plugin-react dependency issue on
    // this machine); TypeScript type checking still runs on every build.
    ignoreDuringBuilds: true,
  },
};


export default nextConfig;
