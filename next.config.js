/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/psy-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/psy-portfolio' : '',
  trailingSlash: true,
}

module.exports = nextConfig