/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/page-a",
        destination: "/page-b",
      },
    ];
  },
};

module.exports = nextConfig;
