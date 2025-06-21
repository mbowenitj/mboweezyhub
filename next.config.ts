import { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports
  },
  trailingSlash: true, // Critical for consistent paths
  // Optional: Generate a sitemap or define all paths statically
};

export default withBundleAnalyzer(nextConfig);
