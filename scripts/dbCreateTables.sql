BEGIN;

DROP TABLE IF EXISTS "category", "drink", "review", "role", "user";

CREATE TABLE category (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category_name TEXT NOT NULL
);

CREATE TABLE drink (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  drink_name TEXT NOT NULL,
  maker TEXT NULL,
  infos TEXT NULL,
  starscounter INT NOT NULL,
  averageRate INT NULL,
  isalcool BOOLEAN,
  isavailable BOOLEAN,
  category_id INT NOT NULL
);

CREATE TABLE review (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  review_name TEXT NOT NULL,
  review_date DATE,
  content TEXT NOT NULL,
  user_id INT NULL,
  drink_id INT NOT NULL
);

CREATE TABLE role (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  role_name TEXT NOT NULL
);

CREATE TABLE "user" (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  firstname TEXT NOT NULL,
  lastname TEXT NOT NULL,
  email TEXT NOT NULL,
  pwd TEXT NOT NULL,
  role_id INT NOT NULL
);

ALTER TABLE drink ADD FOREIGN KEY (category_id) REFERENCES category (id);
ALTER TABLE review ADD FOREIGN KEY (drink_id) REFERENCES drink (id);
ALTER TABLE review ADD FOREIGN KEY (user_id) REFERENCES "user" (id);
ALTER TABLE "user" ADD FOREIGN KEY (role_id) REFERENCES role (id);

INSERT INTO role (role_name) VALUES ('admin'), ('member');
INSERT INTO category (category_name) VALUES ('divers'), ('soft'), ('biere'), ('vin'), ('coktail'), ('spiritueux');

COMMIT;