/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add Prisma fix
    config.externals = [...(config.externals || []), "@prisma/client"];
    return config;
  },
  output: "standalone", // Required for Prisma on Vercel
};

export default nextConfig;
