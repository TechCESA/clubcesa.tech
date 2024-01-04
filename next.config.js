/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'external-content.duckduckgo.com',
      },
    ],
  },
};

module.exports = nextConfig;
