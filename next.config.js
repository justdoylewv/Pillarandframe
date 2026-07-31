/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The Foundation (previously the Founder Launch Kit)
      { source: "/founder-launch-kit", destination: "/foundation", permanent: true },
      { source: "/foundations", destination: "/foundation", permanent: true },
      { source: "/launch-kit", destination: "/foundation", permanent: true },
      // The Engine (previously the Trust Engine)
      { source: "/trust-engine", destination: "/engine", permanent: true },
      { source: "/systems-coaching", destination: "/engine", permanent: true },
      { source: "/coaching", destination: "/engine", permanent: true },
    ];
  },
};

module.exports = nextConfig;
