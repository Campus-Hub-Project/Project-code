/*
  Warnings:

  - You are about to drop the column `ends` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `participants_limit` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `starts` on the `events` table. All the data in the column will be lost.
  - You are about to alter the column `format` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(2))`.
  - You are about to alter the column `type` on the `events` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - Added the required column `day` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sumary` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `ends`,
    DROP COLUMN `name`,
    DROP COLUMN `participants_limit`,
    DROP COLUMN `starts`,
    ADD COLUMN `attendees_limit` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `day` DATETIME(3) NOT NULL,
    ADD COLUMN `sumary` VARCHAR(191) NOT NULL,
    MODIFY `format` ENUM('INPERSON', 'ONLINE', 'HYBRID') NOT NULL,
    MODIFY `type` ENUM('LECTURE', 'WORKSHOP', 'BOOTCAMP', 'CONFERENCE', 'CONGRESS', 'OTHER') NOT NULL;
