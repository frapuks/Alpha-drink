BEGIN;

DROP TABLE IF EXISTS "category", "drink", "review", "role", "user";

CREATE TABLE category (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE drink (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  maker TEXT NULL,
  infos TEXT NULL,
  starscounter INT NULL DEFAULT 0,
  averageRate INT NULL,
  stock INT NULL DEFAULT 1,
  isalcool BOOLEAN,
  isavailable BOOLEAN DEFAULT true,
  category_id INT NOT NULL DEFAULT 1
);

CREATE TABLE review (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL,
  date DATE,
  content TEXT NOT NULL,
  rate INT NULL,
  user_id INT NULL,
  drink_id INT NOT NULL
);

CREATE TABLE role (
  id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name TEXT NOT NULL
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

COMMIT;