

module.exports = {
    getAllShoes: (req, res) =>{
        let db = req.app.get('db')
        db.get_all_shoes()
        .then(allshoes =>{
            res.status(200).send(allshoes)
        }).catch(()=>{
            res.status(200).send('getAllShoesNotWorking')
         })
    },

    getOneShoe: async (req,res)=> {
        const {shoe_id} = req.params
        let db = req.app.get('db')
        let response = await db.get_sneaker({shoe_id})
        res.status(200).send(response)
    }

}