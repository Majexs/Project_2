//Avoiding possible duplicate database
DROP DATABASE IF EXISTS `recipe_db`;
CREATE DATABASE `recipe_db`;

-- /c use `recipe_db`;

-- // creating a recipe table that will store the recipe details
-- CREATE TABLE `recipe_db`.`recipe` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `name` VARCHAR(45) NOT NULL,
--   `ingredients` VARCHAR(45) NOT NULL,
--   `directions` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`id`));

-- // creating a user table for login
-- CREATE TABLE `recipe_db`.`user` (
--   `id` INT NOT NULL AUTO_INCREMENT,
--   `username` VARCHAR(45) NOT NULL,
--   `password` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`id`));