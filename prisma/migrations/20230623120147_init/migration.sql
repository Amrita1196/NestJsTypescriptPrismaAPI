-- CreateTable
CREATE TABLE "Blockchain" (
    "id" SERIAL NOT NULL,
    "account_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Blockchain_pkey" PRIMARY KEY ("id")
);
