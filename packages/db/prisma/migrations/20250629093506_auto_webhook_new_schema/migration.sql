/*
  Warnings:

  - You are about to drop the column `isAutoWebhook` on the `OnRampTransaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OnRampTransaction" DROP COLUMN "isAutoWebhook";

-- CreateTable
CREATE TABLE "UserAutoWebhook" (
    "id" SERIAL NOT NULL,
    "isAutoWebhook" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "UserAutoWebhook_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserAutoWebhook_userId_key" ON "UserAutoWebhook"("userId");

-- AddForeignKey
ALTER TABLE "UserAutoWebhook" ADD CONSTRAINT "UserAutoWebhook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
