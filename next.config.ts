import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // turning off optimization so images can be fetched
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rosi-portfolio-pictures.s3.us-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "rosi-portfolio-pictures-prod1.s3.sa-east-1.amazonaws.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "d2yug4zzstwka6.cloudfront.net",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "d1fb1u7sogg98q.cloudfront.net",
        port: "",
        pathname: "/**",
        search: "",
      },

      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        // SST deploy native auto-generated domain
        protocol: "https",
        hostname: "d146of7ksxl6ie.cloudfront.net",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        // SST deploy origin domain
        protocol: "https",
        hostname: "placeholder.sst.dev",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
