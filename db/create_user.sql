insert into account
(
  firstname,
  lasttname,
  email,
  userpassword
)
values
(
  $1,
  $2,
  $3,
  $4
)
returning firstname;