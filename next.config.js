/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  swcMinify: true,
  experimental: {
    appDir:true
  },
  images : {
    domains : ['media.discordapp.net','static.vecteezy.com']
  }
}

module.exports = nextConfig
