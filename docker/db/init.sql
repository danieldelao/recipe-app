CREATE TABLE "accounts" (
  "id" character(37) NOT NULL,
  "username" character varying(40) NOT NULL,
  "password" character varying(80) NOT NULL,
  PRIMARY KEY ("id")
);
CREATE INDEX "accounts_username" ON "accounts" ("username");

-- Replicate database into a test database
CREATE DATABASE test WITH TEMPLATE <YOUR_DATABASE_NAME>;
