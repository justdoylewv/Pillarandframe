/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/foundations", destination: "/trust-engine", permanent: true },
      { source: "/coaching", destination: "/systems-coaching", permanent: true },
    ];
  },
};

module.exports = nextConfig;
