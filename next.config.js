/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles"), "src/scss"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "45f6-190-150-121-211.ngrok-free.app",
      },
    ],
  },
};

module.exports = nextConfig;
