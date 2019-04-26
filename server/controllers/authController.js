const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) =>{
        const {firstname, lastname, email, password, isadmin} = req.body
        const db = req.app.get('db')
        try{
        const accountArr = await db.find_acc_by_email([email])
        if (accountArr[0]) {
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        let newAccArr = await db.create_user([firstname, lastname, email, hash, isadmin]);
        req.session.user = {firstname: newAccArr[0].firstname, lastname: newAccArr[0].lastname, email: newAccArr[0].email, isadmin:newAccArr[0].isadmin }
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
          })
        }
        catch(err) {
            return console.log(err)
        }
    },

    login: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        try{
        const accountArr = await db.find_acc_by_email([email])
        // console.log('accountArr', accountArr)
        if (!accountArr[0]) {
            // console.log('fdsfds')
            return res.status(200).send({message: 'Email not found.'})
        }
    

        const result = bcrypt.compareSync(password, accountArr[0].userpassword)
        // console.log(result)
        if (!result) {
            return res.status(200).send({message: 'Incorrect password.'})
        }
        req.session.user = { id: accountArr[0].user_id, firstname: accountArr[0].firstname, lastname: accountArr[0].lastname, email: accountArr[0].email, isadmin: accountArr[0].isadmin }
        res.status(200).send({
            message: 'Log in successful.',
            loggedIn: true
            })
        }
        catch(err){
            return console.log(err)
        }

    },
    
    userData: (req, res) => {
        if (req.session.user) res.status(200).send(req.session.user)
        else res.status(200).send('Please log in');
    },

    logout: (req, res) => {
        
        req.session.destroy()
        res.redirect('http://localhost:3000/#/')
    },

    // editUser: (req, res) => {
    //     console.log('did end point hit?')
    //     let {firstname, lastname, email } = req.body;
    //     const {id} = req.session.user;
    //     const db = req.app.get('db');
    //     const user = ([id, firstname, lastname, email])
    //     db.edit_user(user).then((res) => {
    //         return res.status(200).send(res)
    //     })
        
    // },


    editProfile: async (req, res) => {
        let {id, firstname, lastname, email} = req.body;
        // const {id} = req.session.user;
        const db = req.app.get('db');
        
        const user = {id, firstname, lastname, email}
        db.edit_user(user).then((editUser) => {
            // console.log(editUser)
            req.session.user = { id: editUser[0].user_id, firstname: editUser[0].firstname, lastname: editUser[0].lastname, email: editUser[0].email, isadmin: editUser[0].isadmin }
            res.status(200).send(editUser)
        })
      }
    
    
}


// if(password == ''){
//     let resp = await db.auth.get_password({user_id})
//     password = resp[0].password
// } else {
//     let salt = bcrypt.genSaltSync(10);
//     let hash = bcrypt.hashSync(password, salt);
//     password = hash
// }