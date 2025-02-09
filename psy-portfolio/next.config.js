/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/psy-portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/psy-portfolio' : '',
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  // PostCSS와 Tailwind 설정 추가
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
}

module.exports = nextConfig