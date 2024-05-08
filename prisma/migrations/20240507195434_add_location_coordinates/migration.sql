-- DropForeignKey
ALTER TABLE "location" DROP CONSTRAINT "fk__location__location_type";

-- AlterTable
ALTER TABLE "location" ADD COLUMN     "latitude" DECIMAL(8,6),
ADD COLUMN     "longitude" DECIMAL(9,6);

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "fk__location__location_type" FOREIGN KEY ("type_id") REFERENCES "location_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
