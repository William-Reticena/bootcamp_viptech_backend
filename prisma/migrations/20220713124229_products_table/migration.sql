-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "color" TEXT NOT NULL,
    "created_at" TIMESTAMP(3),
    "img" TEXT,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
