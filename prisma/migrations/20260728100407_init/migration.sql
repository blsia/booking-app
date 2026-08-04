/*
  Warnings:

  - You are about to drop the column `ReservationId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `Status` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `RoomId` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `Capacity` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `Image` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the column `Price` on the `Room` table. All the data in the column will be lost.
  - You are about to drop the `RoomAminities` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[reservationId]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `reservationId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roomId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Room` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_ReservationId_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_RoomId_fkey";

-- DropForeignKey
ALTER TABLE "RoomAminities" DROP CONSTRAINT "RoomAminities_RoomId_fkey";

-- DropForeignKey
ALTER TABLE "RoomAminities" DROP CONSTRAINT "RoomAminities_amenitiesId_fkey";

-- DropIndex
DROP INDEX "Payment_ReservationId_key";

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "ReservationId",
DROP COLUMN "Status",
ADD COLUMN     "reservationId" TEXT NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'unpaid';

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "Price",
DROP COLUMN "RoomId",
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "roomId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Room" DROP COLUMN "Capacity",
DROP COLUMN "Image",
DROP COLUMN "Price",
ADD COLUMN     "capacity" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;

-- DropTable
DROP TABLE "RoomAminities";

-- CreateTable
CREATE TABLE "RoomAmenities" (
    "id" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "amenitiesId" TEXT NOT NULL,

    CONSTRAINT "RoomAmenities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Payment_reservationId_key" ON "Payment"("reservationId");

-- AddForeignKey
ALTER TABLE "RoomAmenities" ADD CONSTRAINT "RoomAmenities_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RoomAmenities" ADD CONSTRAINT "RoomAmenities_amenitiesId_fkey" FOREIGN KEY ("amenitiesId") REFERENCES "Amenities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "Reservation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
