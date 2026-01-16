/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  images: {
    domains: ['cloud-r4rrjh2z8-hack-club-bot.vercel.app', 'assets.hackclub.com']
  }
}

export default nextConfig
