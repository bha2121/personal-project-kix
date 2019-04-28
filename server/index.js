require('dotenv').config()
const express = require('express')
const massive = require('massive')

const shoeCtlr = require('./controllers/shoeContoller')
const authCtrl =require('./controllers/authController')
const cartCtrl = require('./controllers/cartController')
const stripeCtrl = require('./controllers/stripeController')

const session = require('express-session')
const app = express()

const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    // console.log('db is connected')
    console.log(db.listTables())
})

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))


//AUTH ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/user-data', authCtrl.userData)
app.get('/logout', authCtrl.logout)
// app.put('/api/edituser'), authCtrl.editUser
app.put(`/api/auth/edituser`, authCtrl.editProfile)

//SHOE ENDPOINTS

app.get('/api/getallshoes', shoeCtlr.getAllShoes)
app.get('/api/sneaker/:shoe_id', shoeCtlr.getOneShoe)
app.post('/api/shoesizes', shoeCtlr.getShoeSizes)



//CART ENDPOINTS

app.get('/api/cart', cartCtrl.getCart)
app.post('/api/addtocart', cartCtrl.addToCart)
app.delete('/api/cart/:cart_item_id', cartCtrl.deleteFromCart)

app.post('/api/stripe', stripeCtrl.handlePayment)






// app.get(`/api/sneakers`, SC.getSneakers)
// app.post(`/api/sneakers`, SC.addSneakers)
// app.put(`/api/sneakers/:id`, SC.editSneakers)
// app.delete(`/api/sneakers/:id`, SC.deleteSneakers)





app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))