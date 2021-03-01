-- accounts

CREATE TABLE "accounts" (
    "id" characers(32) NOT NULL, 
    "username" character varying(40) NOT NULL,
    "password" character varying(80) NOT NULL,
    PRIMARY KEY ("id")
);

CREATE INDEX "accounts_username" ON "accounts" ("username");

-- recipes

-- ingredients

-- test database

CREATE DATABASE test WITH TEMPLATE recipe-app