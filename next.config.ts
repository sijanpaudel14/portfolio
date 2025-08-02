import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // Important for static export
  basePath: '/portfolio', // Replace with your repo name if different
  assetPrefix: '/portfolio/',
}

export default nextConfig
