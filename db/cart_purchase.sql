update cart
set purchased = true
where user_id = ${id} and cart_id = ${cartId}