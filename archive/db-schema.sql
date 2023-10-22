DROP TABLE IF EXISTS `animals`;

CREATE TABLE `animals` (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    color VARCHAR(255)
);

INSERT INTO animals (name, color) VALUES ('Tiger', 'yellow');
INSERT INTO animals (name, color) VALUES ('Giraffe', 'yellow');
INSERT INTO animals (name, color) VALUES ('Red Panda', 'red');
INSERT INTO animals (name, color) VALUES ('Parrot', 'red');
INSERT INTO animals (name, color) VALUES ('Whale', 'blue');
INSERT INTO animals (name, color) VALUES ('Frog', 'green');
INSERT INTO animals (name, color) VALUES ('Turtle', 'green');
INSERT INTO animals (name, color) VALUES ('Monkey', 'brown');
INSERT INTO animals (name, color) VALUES ('Polar Bear', 'white');