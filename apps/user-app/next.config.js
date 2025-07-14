/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [
      ...config.externals,
      { "@prisma/client": "@prisma/client" },
    ];
    return config;
  },
  output: "standalone", // This helps include all necessary files
};

export default nextConfig;
