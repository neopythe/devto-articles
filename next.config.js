/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dev.to', 'res.cloudinary.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
