/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static HTML export
  images: {
    domains: ['lh3.googleusercontent.com'],
    unoptimized: true, // Required for static export
  },
  trailingSlash: false,
};

import bundleAnalyzer from '@next/bundle-analyzer';

export default bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})(nextConfig);
