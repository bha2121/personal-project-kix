


module.exports = {
    getCart: (req, res) => {
        if (req.session.user){
            console.log(req.session.user)
            const {id} = req.session.user
            const db = req.app.get('db')
            db.get_cart_items({id})
            .then((resp) => {
                res.send(resp)
            })
        } else {
            res.send([])
        }
        
    },

    addToCart: async (req,res) => {
        // console.log(req.session)
        const {id} = req.session.user
        const { shoe_id } = req.body
        const db = req.app.get('db')
        const carts = await db.get_cart({id})
        console.log(carts)
        const cart = carts.length > 0 ? carts[0] : (await db.create_cart({id}))[0]
        // console.log(cart)
        await db.add_to_cart({cart_id : cart.cart_id, shoe_id})
        const cartItems = await db.get_cart_items({id})
        res.send(cartItems)
    },

    deleteFromCart: async (req,res) => {
        const {id} = req.session.user
        const {cart_item_id} = req.params
        const db = req.app.get('db')
        console.log(cart_item_id)
        await db.remove_from_cart({cart_item_id})
        const cartItems = await db.get_cart_items({id})
        res.send(cartItems)
    }


    





}















// getCart: (req, res) =>{
//     const {user_id} = req.session.user;
//     const db = req.app.get('db');
    
//     const resp = await db.getCart({user_id});
//     res.status(200).send(resp)
// },

// addToCart: (req, res) =>{
//     const db = req.app.get('db')
//     const {user_id} = req.session.user;
//     const {product_id} = req.body;
//     let cart = {product_id, user_id}
    
//     await db.addToCart(cart);
//     const resp = await db.getCart({user_id});
//     res.status(200).send(resp)
// },

// deleteFromCart: (req, res) =>{
//     const db = req.app.get('db');
//     let {cart_id} = req.params;
//     const {user_id} = req.session.user
    
//     await db.removeFromCart({cart_id})
//     const resp = await db.getCart({user_id})
//     res.status(200).send(resp)
// },

// stripePayment: (req, res) =>{

// }