import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/nextjs-demo',
  assetPrefix: '/nextjs-demo',
}

export default nextConfig
