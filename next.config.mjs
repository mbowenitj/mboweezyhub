// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.EXPORT_MODE === 'true' ? 'export' : undefined,
  images: {
    unoptimized: process.env.EXPORT_MODE === 'true',
  },
  trailingSlash: process.env.EXPORT_MODE === 'true',
};

export default bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
