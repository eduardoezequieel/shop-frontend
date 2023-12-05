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
        hostname: "8d10-138-186-250-57.ngrok-free.app",
      },
    ],
  },
};

module.exports = nextConfig;
