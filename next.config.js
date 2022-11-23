/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath:'/to-caiyun',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
