const User = require('../models/user.model')



const getUserController = async(req, res) => {

    try {

        const user = await User.find()
            // console.log(user)
        if (!user) {
            return res.status(500).json({ error: 'Request Compromised' });
        }

        res.json(user)
    } catch (err) {
        // console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }


}


const lockUser = async(req, res) => {

    const { user_id } = req.body

    try {

        const user = await User.findById(user_id)
            // console.log(user)
        if (!user) {
            return res.status(500).json({ error: 'Request Compromised' });
        }


        let locked = user.locked

        user.locked = !locked

        await user.save()

        res.json({
            success: true
        })

    } catch (err) {
        // console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
}

const addfunds = async(req, res) => {

    const { amount, user_id } = req.body

    try {

        const user = await User.findById(user_id)
            // console.log(user)
        if (!user) {
            return res.status(500).json({ error: 'Request Compromised' });
        }


        let locked = user.currentAmount

        user.currentAmount = (locked || 0) + parseInt(amount)

        await user.save()

        res.json({
            success: true
        })

    } catch (err) {
        // console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getUserController, lockUser, addfunds }