/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/psy-portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/psy-portfolio' : '',
}

module.exports = nextConfig