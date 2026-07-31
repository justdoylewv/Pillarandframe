/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/foundations", destination: "/founder-launch-kit", permanent: true },
      { source: "/launch-kit", destination: "/founder-launch-kit", permanent: true },
      { source: "/systems-coaching", destination: "/trust-engine", permanent: true },
      { source: "/coaching", destination: "/trust-engine", permanent: true },
    ];
  },
};

module.exports = nextConfig;
