BEGIN;

--setting up the structure
DROP TABLE 

CREATE TABLE "question" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "description" TEXT NOT NULL UNIQUE,
    "goodResponseId" INT,
);

CREATE TABLE "answer" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "questionId" INT,

);


COMMIT;