/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://sangypar.github.io/psy-portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? 'https://sangypar.github.io/psy-portfolio/' : '',
  trailingSlash: true,
}

module.exports = nextConfig