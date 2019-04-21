// module.exports = {
//     editUser: (req, res) =>{
//         let db = req.app.get('db')
//         db.edit_user()
//         .then(user =>{
//             res.status(200).send(user)
//         }).catch(()=>{
//             res.status(404).send('editUserNotWorking')
//          })
//     }
// }