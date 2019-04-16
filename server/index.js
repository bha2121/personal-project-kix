require('dotenv').config()
const express = require('express')
const massive = require('massive')
const Ctlr = require('./controllers/controller')
const authCtrl =require('./controllers/authController')
const session = require('express-session')
const app = express()

const {SERVER_PORT, CONNECTION_STRING, SECRET} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
    console.log(db.listTables())
})

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
// app.get('/auth/user-data', authCtrl.userData)
// app.get('/logout', (req, res) => {
//   req.session.destroy();
//   res.redirect('http://localhost:3000/#/')
// })



// app.get(`/api/sneakers`, SC.getSneakers)
// app.post(`/api/sneakers`, SC.addSneakers)
// app.put(`/api/sneakers/:id`, SC.editSneakers)
// app.delete(`/api/sneakers/:id`, SC.deleteSneakers)





app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))