const User = require('../models/user.model')
const Transaction = require('../models/transactions')


const getUserDataController = async(req, res) => {

    let { userId, username } = req.user

    try {

        const user = await User.findById(userId).populate('transactions').exec()
            // console.log(user)
        if (!user) {
            return res.status(500).json({ error: 'Request Compromised' });
        }

        res.json({ userData: {...user._doc, _id: null } })
    } catch (err) {
        // console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }


}

module.exports = getUserDataController