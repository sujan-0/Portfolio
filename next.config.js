/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Disable image optimization for static export
    },
    trailingSlash: true, // Optional: Useful for static hosting
  };
  
  module.exports = nextConfig;