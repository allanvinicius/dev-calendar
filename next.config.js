/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["tsx"],
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
