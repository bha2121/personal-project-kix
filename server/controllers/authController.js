const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) =>{
        const {firstname, lastname, email, password, isadmin} = req.body
        const db = req.app.get('db')
        try{
        const accountArr = await db.find_acc_by_email([email])
        if (accountArr[0]) {
            return res.status(401).send({message: 'Email already in use'})
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
        console.log(accountArr)
        if (!accountArr[0]) {
            console.log('fdsfds')
            return res.status(401).send({message: 'Email not found.'})
        }
    

        const result = bcrypt.compareSync(password, accountArr[0].userpassword)
        console.log(result)
        if (!result) {
            return res.status(401).send({message: 'Incorrect password.'})
        }
        req.session.user = {firstname: accountArr[0].firstname, lastname: accountArr[0].lastname, email: accountArr[0].email, isadmin: accountArr[0].isadmin }
        res.status(200).send({
            message: 'Log in successful.',
            loggedIn: true
        })
    }
    catch(err){
        return console.log(err)
        }

    }
    
}

