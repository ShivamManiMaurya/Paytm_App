-- CreateTable
CREATE TABLE "p2pTransfer" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL,
    "timeStamp" TIMESTAMP(3) NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserIds" INTEGER NOT NULL,

    CONSTRAINT "p2pTransfer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "p2pTransfer" ADD CONSTRAINT "p2pTransfer_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "p2pTransfer" ADD CONSTRAINT "p2pTransfer_toUserIds_fkey" FOREIGN KEY ("toUserIds") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
