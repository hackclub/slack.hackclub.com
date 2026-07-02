/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud-r4rrjh2z8-hack-club-bot.vercel.app'
      },
      { protocol: 'https', hostname: 'assets.hackclub.com' }
    ]
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default nextConfig
