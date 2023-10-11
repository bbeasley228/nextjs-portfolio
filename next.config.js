/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/bbeasley228",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
