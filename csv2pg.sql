-- psql -f csv2pg.sql

DROP DATABASE IF EXISTS surgeon;
CREATE DATABASE surgeon;
--G RANT ALL PRIVILEGES ON DATABASE surgeon TO fredlu;

--psql surgeon -U fredlu
-- \du see users
--\list: lists all the databases in Postgres
-- \dt list the tables in the currently connected database

-- exercise
CREATE TABLE exercise(
id integer PRIMARY KEY,
name character varying(50)
);

COPY exercise FROM '/Users/fredlu/Desktop/surgeon-exercise/exercise.csv' WITH CSV HEADER DELIMITER AS ',';
-- \d users

-- user
CREATE TABLE users(
id integer PRIMARY KEY,
last_name character varying(30)
);

COPY users FROM '/Users/fredlu/Desktop/surgeon-exercise/user.csv' WITH CSV HEADER DELIMITER AS ',';

-- score
CREATE TABLE score(
id integer PRIMARY KEY,
exercise_id integer,
score numeric,
user_id integer
);

COPY score FROM '/Users/fredlu/Desktop/surgeon-exercise/score.csv' WITH CSV HEADER DELIMITER AS ',';
