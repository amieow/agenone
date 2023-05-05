/** @type {import('next').NextConfig} */
const nextConfig = {
  output: export,
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
