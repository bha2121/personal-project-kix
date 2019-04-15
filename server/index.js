require('dotenv').config()
const express = require('express')
const massive = require('massive')
const Ctlr = require('./controllers/controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
    console.log(db.listTables())
})

app.use(express.json())



// app.get(`/api/sneakers`, SC.getSneakers)
// app.post(`/api/sneakers`, SC.addSneakers)
// app.put(`/api/sneakers/:id`, SC.editSneakers)
// app.delete(`/api/sneakers/:id`, SC.deleteSneakers)





app.listen(SERVER_PORT, () => console.log('listening on port', SERVER_PORT))