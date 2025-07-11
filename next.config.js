/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/(.*)",
        destination: "https://peaseadeniji.com/$1",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
