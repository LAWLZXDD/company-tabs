-- CreateTable
CREATE TABLE `Personnel` (
    `personnel_id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(20) NOT NULL,
    `middlename` VARCHAR(20) NOT NULL,
    `lastname` VARCHAR(20) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`personnel_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
