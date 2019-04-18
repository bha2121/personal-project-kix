

module.exports = {
    getAllShoes: (req, res) =>{
        let db = req.app.get('db')
        db.get_all_shoes()
        .then(allshoes =>{
            res.status(200).send(allshoes)
        }).catch(()=>{
            res.status(404).send('getAllShoesNotWorking')
         })
    },
}