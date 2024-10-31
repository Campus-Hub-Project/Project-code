/*
  Warnings:

  - You are about to drop the `verification_tokens` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `role` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `role` ENUM('ADMIN', 'USER', 'INSTITUITION') NOT NULL DEFAULT 'USER';

-- DropTable
DROP TABLE `verification_tokens`;

-- CreateTable
CREATE TABLE `verificate_email_tokens` (
    `id` VARCHAR(191) NOT NULL,
    `identifier` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `verificate_email_tokens_token_key`(`token`),
    UNIQUE INDEX `verificate_email_tokens_identifier_token_key`(`identifier`, `token`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
