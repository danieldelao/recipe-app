
CREATE TABLE "accounts" (
  "id" character(37) NOT NULL,
  "username" character varying(40) NOT NULL,
  "password" character varying(80) NOT NULL,
  "token" character varying(100) NULL, 
  PRIMARY KEY ("id")
);

CREATE TABLE "recipes" (
  "id" character(37) NOT NULL,
  "name" character varying(40) NOT NULL,
  "season" character varying(40) NOT NULL,
  "rating" integer  NOT NULL,
  PRIMARY KEY ("id")
);

CREATE TABLE "ingridients" (
  "id" character(37) NOT NULL,
  "recipe_id" character varying(40) NOT NULL,
  "name" character varying(40) NOT NULL,
  "quantity" character varying(40) NOT NULL,
  "season" character varying(40) NOT NULL,
  PRIMARY KEY ("id")
);
CREATE INDEX "accounts_username" ON "accounts" ("username");

-- Replicate database into a test database
CREATE DATABASE test WITH TEMPLATE recipeapp;
