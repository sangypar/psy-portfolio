/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';
const repository = 'psy-portfolio'; // 여기에 저장소 이름을 입력하세요

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  assetPrefix: isProduction ? `/${repository}/` : '',
  basePath: isProduction ? `/${repository}` : '',
  trailingSlash: true,
}

module.exports = nextConfig