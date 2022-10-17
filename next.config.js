/** @type {import('next').NextConfig} */
const nextConfig = {
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
