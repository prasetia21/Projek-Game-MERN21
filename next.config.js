/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['pra-storegg.herokuapp.com']
  }
}

module.exports = nextConfig
