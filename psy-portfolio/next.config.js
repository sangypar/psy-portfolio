/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/psy-portfolio',
  basePath: '/psy-portfolio',
}

module.exports = nextConfig