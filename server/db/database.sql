BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "card" (
	"id"	INTEGER NOT NULL UNIQUE,
	"pic"	TEXT NOT NULL,
	"name"	TEXT NOT NULL,
	"sound"	TEXT NOT NULL,
	"sound2"	INTEGER,
	"category_id"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT)
);
INSERT INTO "card" VALUES (1,'"länk"','dog','"länk"','"länk"',1);
INSERT INTO "card" VALUES (2,'"länk"','cat','"länk"',NULL,2);
COMMIT;
