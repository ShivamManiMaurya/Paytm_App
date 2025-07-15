#!/bin/bash
echo "--- Setting up environment ---"
cd ../..
echo "--- Generating Prisma Client ---"
pnpm --filter @repo/db exec prisma generate
echo "--- Building Application ---"
pnpm --filter user-app run build