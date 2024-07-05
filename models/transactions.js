const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({

    TransactionType: String,
    TransactionCurrency: String,
    TransactionAmount: Number,
    TransactionDate: Date,
    TransactionOperation: String,
    TransactionBTCID: String

});


module.exports = mongoose.model('Transaction', TransactionSchema);