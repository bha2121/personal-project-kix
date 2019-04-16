const bcrypt = require('bcryptjs')

module.exports = {
    register: async(req, res =>{
        const {email, password} = req.body
        const db = req.app.get('db')
        const accountArr = await db.find_acc_by_email([email])
        if (accountArr[0]) {
            return res.status(400).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
    })
}