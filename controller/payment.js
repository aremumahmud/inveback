const User = require('../models/user.model')
const Transaction = require('../models/transactions')
const confirmTrx = require('../utils/confirmTrx')


const PaymentController = async(req, res) => {

    let { userId, username } = req.user
    let { amount, currency, btc_id } = req.body

    console.log(req.body)

    try {
        console.log(btc_id)

        let trx = await Transaction.findOne({ TransactionBTCID: btc_id })
        console.log(trx)
        if (trx) {
            return res.status(500).json({ error: 'Transaction Exists!' });
        }

        let isTransactionValid = await confirmTrx(btc_id)

        if (!isTransactionValid) {
            return res.status(500).json({ error: 'Transaction Isnt Valid!' });
        }


        let transaction = new Transaction({
            TransactionType: `${currency+String(amount)} to ${currency+String(amount*5)}`,
            TransactionCurrency: currency,
            TransactionAmount: amount,
            TransactionDate: new Date(),
            TransactionOperation: 'debit',
            TransactionBTCID: btc_id

        })

        const user = await User.findById(userId)
            // console.log(user)
        if (!user) {
            return res.status(500).json({ error: 'Request Compromised' });
        }

        await transaction.save()

        user.transactions.push(transaction)
        user.currentSavingsAmount = Number(amount) + Number(user.currentSavingsAmount || 0)
        user.currentSavingsType = `${currency+ String(amount)} to ${currency+String(amount*5)}`
        user.currentSavingsCurrency = currency


        await user.save()

        res.json({ success: true })
    } catch (err) {
        // console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }


}

module.exports = PaymentController