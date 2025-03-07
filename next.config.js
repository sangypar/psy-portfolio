const repo = 'psy-portfolio'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? `/${repo}/` : '',
  basePath: process.env.NODE_ENV === 'production' ? `/${repo}` : '',
  trailingSlash: true,
}

module.exports = nextConfig