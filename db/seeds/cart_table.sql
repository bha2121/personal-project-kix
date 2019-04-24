CREATE TABLE cart_item (
    cart_item_id SERIAL PRIMARY KEY,
    shoe_id INTEGER REFERENCES shoes(shoe_id),
    cart_id INTEGER REFERENCES cart(cart_id)
)


CREATE TABLE cart (
    cart_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    purchased BOOLEAN
)


CREATE TABLE purchases (
    purchase_id SERIAL PRIMARY KEY,
    cart_id INTEGER REFERENCES cart(cart_id),
    user_id INTEGER REFERENCES users(user_id)
)


