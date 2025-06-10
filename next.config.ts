import { NextConfig } from "next"
import bundleAnalyzer from "@next/bundle-analyzer"

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",
}

export default withBundleAnalyzer(nextConfig)
