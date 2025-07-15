#!/bin/bash
echo "--- Generating Prisma Client ---"
cd ../..
pnpm --filter @repo/db exec prisma generate --schema=packages/db/prisma/schema.prisma

echo "--- Building Next.js App ---"
pnpm --filter user-app run build