import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/resources/custom-packaging-moq-guide",
        destination: "/resources/how-custom-packaging-moq-affects-unit-cost/",
        permanent: true,
      },
      {
        source: "/resources/custom-packaging-moq-guide/",
        destination: "/resources/how-custom-packaging-moq-affects-unit-cost/",
        permanent: true,
      },
      {
        source: "/resources/custom-packaging-cost-guide",
        destination: "/resources/custom-packaging-cost-breakdown/",
        permanent: true,
      },
      {
        source: "/resources/custom-packaging-cost-guide/",
        destination: "/resources/custom-packaging-cost-breakdown/",
        permanent: true,
      },
      {
        source: "/resources/cosmetic-packaging-guide",
        destination: "/industries/cosmetic-packaging/",
        permanent: true,
      },
      {
        source: "/resources/cosmetic-packaging-guide/",
        destination: "/industries/cosmetic-packaging/",
        permanent: true,
      },
    ];
  },
  eslint: {
    // Skip lint during builds (eslint-plugin-react dependency issue on
    // this machine); TypeScript type checking still runs on every build.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
