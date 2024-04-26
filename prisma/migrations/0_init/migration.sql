-- CreateTable
CREATE TABLE "doctor" (
    "id" CHAR(9) NOT NULL,
    "first_name" VARCHAR(32) NOT NULL,
    "last_name" VARCHAR(32) NOT NULL,
    "gender" VARCHAR(32),
    "specialization_id" INTEGER,
    "location_id" INTEGER,

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctor_specialty" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "doctor_specialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location" (
    "id" SERIAL NOT NULL,
    "type_id" INTEGER NOT NULL,
    "name" VARCHAR(64) NOT NULL,
    "address" VARCHAR(64) NOT NULL,
    "locality" VARCHAR(64) NOT NULL,
    "postal_code" CHAR(6) NOT NULL,
    "phone_number" CHAR(10) NOT NULL,
    "fax_number" CHAR(10),

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_type" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,

    CONSTRAINT "location_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctor_specialty_name_key" ON "doctor_specialty"("name");

-- CreateIndex
CREATE UNIQUE INDEX "location_type_name_key" ON "location_type"("name");

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "fk__doctor__doctor_specialty" FOREIGN KEY ("specialization_id") REFERENCES "doctor_specialty"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "doctor" ADD CONSTRAINT "fk__doctor__location" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "location" ADD CONSTRAINT "fk__location__location_type" FOREIGN KEY ("type_id") REFERENCES "location_type"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

