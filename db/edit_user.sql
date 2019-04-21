-- update users
-- set firstname = $2, lastname = $3, email = $4
-- where user_id = $1;

-- select firstname, lastname, email from users
-- where user_id = $1

update users
set firstname = ${firstname}, lastname = ${lastname}, email = ${email}
where user_id = ${id};

select user_id, firstname, lastname, email, isadmin from users
where user_id = ${id}

