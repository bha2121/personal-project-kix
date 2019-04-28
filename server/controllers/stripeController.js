require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
    handlePayment: async (req, res) => {
        const {id} = req.session.user;
        const { amount, token:{token_id} } = req.body;
        const db = req.app.get('db');

        const carts = await db.get_cart({id})
        const cartId = carts[0].cart_id
        console.log(carts, id)
        db.cart_purchase({id, cartId})

        stripe.charges.create(
            {
                amount: amount,
                currency: 'usd',
                source: token_id,
                description: 'KiX Test Site',
            },
            (err, charge) => {
                if(err) {
                    console.log(err)
                    return res.status(500).send(err)
                } else {
                    console.log(charge)
                    return res.status(200).send(charge)
                }
            }
        )
    }
}