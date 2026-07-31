/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Foundation (previously the Founder Launch Kit)
      { source: "/foundation", destination: "/", permanent: true },
      { source: "/founder-launch-kit", destination: "/", permanent: true },
      { source: "/foundations", destination: "/", permanent: true },
      { source: "/launch-kit", destination: "/", permanent: true },
      // The Engine (previously the Trust Engine)
      { source: "/trust-engine", destination: "/engine", permanent: true },
      { source: "/systems-coaching", destination: "/engine", permanent: true },
      { source: "/coaching", destination: "/engine", permanent: true },
    ];
  },
};

module.exports = nextConfig;
