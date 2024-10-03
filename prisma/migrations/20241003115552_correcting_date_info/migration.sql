/*
  Warnings:

  - You are about to drop the column `application_period` on the `events` table. All the data in the column will be lost.
  - You are about to drop the column `event_day` on the `events` table. All the data in the column will be lost.
  - Added the required column `application_period_from` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `application_period_to` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_day_from` to the `events` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_day_to` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `events` DROP COLUMN `application_period`,
    DROP COLUMN `event_day`,
    ADD COLUMN `application_period_from` DATETIME(3) NOT NULL,
    ADD COLUMN `application_period_to` DATETIME(3) NOT NULL,
    ADD COLUMN `event_day_from` DATETIME(3) NOT NULL,
    ADD COLUMN `event_day_to` DATETIME(3) NOT NULL;
