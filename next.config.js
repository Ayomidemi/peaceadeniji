/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://peaseadeniji.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
