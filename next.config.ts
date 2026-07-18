import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/ployai/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?guinchotours\\.com" }],
        destination: "https://www.guinchotours.org/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "guinchotours.org" }],
        destination: "https://www.guinchotours.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
