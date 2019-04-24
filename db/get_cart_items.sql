
select * from cart_item
join shoes on cart_item.shoe_id = shoes.shoe_id
where cart_id = (
    select cart_id from cart
    where user_id = ${id} AND purchased = false
);

-- select cart_item_id from cart_item
-- where cart_id = (
--     select cart_id from cart
--     where user_id = ${user_id} AND purchased = false
-- );