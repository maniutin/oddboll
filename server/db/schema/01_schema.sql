DROP TABLE IF EXISTS articles CASCADE;


CREATE TABLE articles (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  tags text ARRAY,
  category VARCHAR(255) NOT NULL,
  content TEXT,
  date_published DATE,
  excerpt TEXT
);

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO labber;
