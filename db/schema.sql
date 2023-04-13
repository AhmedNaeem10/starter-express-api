CREATE TABLE `Products` (
	`product_id` INT NOT NULL AUTO_INCREMENT,
	`price` FLOAT NOT NULL,
	`quantity` INT NOT NULL,
	`description` VARCHAR(255) NOT NULL,
	`title` VARCHAR(255) NOT NULL,
	`image` blob,
	`category_id` INT NOT NULL,
	`active` BOOLEAN NOT NULL,
	PRIMARY KEY (`product_id`)
);

CREATE TABLE `Orders` (
	`order_id` INT NOT NULL AUTO_INCREMENT,
	`datetime` DATETIME NOT NULL,
	`bill` FLOAT NOT NULL,
	`paymentMethod` INT NOT NULL,
	PRIMARY KEY (`order_id`)
);

CREATE TABLE `OrderLines` (
	`orderline_id` INT NOT NULL AUTO_INCREMENT,
	`product_id` INT NOT NULL,
	`quantity` INT NOT NULL,
	`order_id` INT NOT NULL,
	PRIMARY KEY (`orderline_id`)
);

CREATE TABLE `TasteProfiles` (
	`tasteProfile_id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	`image` blob,
	PRIMARY KEY (`tasteProfile_id`)
);

CREATE TABLE `PaymentMethods` (
	`paymentMethod_id` INT NOT NULL AUTO_INCREMENT,
	`title` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`paymentMethod_id`)
);

CREATE TABLE `Categories` (
	`category_id` INT NOT NULL AUTO_INCREMENT,
	`image` blob,
	`title` VARCHAR(255) NOT NULL,
	`description` VARCHAR(255) NOT NULL,
	`parentCategory` INT,
	PRIMARY KEY (`category_id`)
);

CREATE TABLE `Admins` (
	`username` VARCHAR(255) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`username`)
);

CREATE TABLE `ProductTasteProfles` (
	`product_id` INT NOT NULL,
	`tasteProfile_id` INT NOT NULL,
	PRIMARY KEY (`product_id`,`tasteProfile_id`)
);

ALTER TABLE `Products` ADD CONSTRAINT `Products_fk0` FOREIGN KEY (`category_id`) REFERENCES `Categories`(`category_id`);

ALTER TABLE `Orders` ADD CONSTRAINT `Orders_fk0` FOREIGN KEY (`paymentMethod`) REFERENCES `PaymentMethods`(`paymentMethod_id`);

ALTER TABLE `OrderLines` ADD CONSTRAINT `OrderLines_fk0` FOREIGN KEY (`product_id`) REFERENCES `Products`(`product_id`);

ALTER TABLE `OrderLines` ADD CONSTRAINT `OrderLines_fk1` FOREIGN KEY (`order_id`) REFERENCES `Orders`(`order_id`);

ALTER TABLE `Categories` ADD CONSTRAINT `Categories_fk0` FOREIGN KEY (`parentCategory`) REFERENCES `Categories`(`category_id`);

ALTER TABLE `ProductTasteProfles` ADD CONSTRAINT `ProductTasteProfles_fk0` FOREIGN KEY (`product_id`) REFERENCES `Products`(`product_id`);

ALTER TABLE `ProductTasteProfles` ADD CONSTRAINT `ProductTasteProfles_fk1` FOREIGN KEY (`tasteProfile_id`) REFERENCES `TasteProfiles`(`tasteProfile_id`);

