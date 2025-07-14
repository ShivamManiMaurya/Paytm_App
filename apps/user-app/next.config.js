import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add Prisma plugin for server
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    // Add workspace aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      "@repo/store": "../../packages/store/src",
      "@repo/ui": "../../packages/ui/src",
    };

    return config;
  },
  output: "standalone",
  experimental: {
    externalDir: true, // Allows importing from outside the app directory
  },
};

export default nextConfig;
