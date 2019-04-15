-- create table products (
--     product_id serial primary key,
--     product_name varchar(150) not null,
--     product_description varchar(254),
--     price numeric not null,
--     product_img text,
--     user_id int references users(user_id)
-- )

create table shoes (
  shoe_id serial primary key not null,
  brand varchar(150),
  model varchar(150),
  colorway varchar(150),
  colorScheme varchar(150),
  retailPrice int,
  releaseDate varchar(50),
  picture text
);


-- create table users (
--     user_id serial primary key,
--     username varchar(50) not null,
--     email varchar(100) not null,
--     password varchar(20)
-- )

create table users (
  user_id serial primary key not null,
  firstName varchar(50),
  lastName varchar(50),
  email varchar(80),
  password text
);