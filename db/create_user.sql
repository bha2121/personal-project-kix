insert into users
(
  firstname,
  lastname,
  email,
  userpassword,
  isadmin
)
values
(
  $1,
  $2,
  $3,
  $4,
  false
)
returning *