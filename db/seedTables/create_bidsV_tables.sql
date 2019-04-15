create table shoes (
  id serial primary key,
  brand varchar(80),
  model varchar(80),
  colorway varchar(80),
  colorScheme varchar(80),
  retailPrice int,
  releaseDate varchar(50),
  picture text
);

create table userz (
  id serial primary key,
  firstName varchar(50),
  lastName varchar(50),
  email varchar(80),
  password text
);

create table offer (
  id serial primary key,
  offer_type varchar(10),
  offer_price integer,
  FOREIGN KEY (shoe_id) REFERENCES shoes (id),
  FOREIGN KEY (user_id) REFERENCES userz (id)
);

create table transactions (
  id SERIAL primary key,
  FOREIGN KEY (buyer_id) REFERENCES offer (id),
  FOREIGN KEY (seller_id) REFERENCES offer (id)
);