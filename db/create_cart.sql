insert into cart
(
    user_id,
    purchased
)
values
(
    ${id},
    false
)
returning *