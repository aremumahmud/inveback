const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    dateJoined: Date,
    otp: Number,
    currentSavingsAmount: String,
    currentSavingsType: String,
    currentSavingsCurrency: String,
    currentAmount: Number,
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Transaction'
    }],
    locked: { type: Boolean, default: false }
});


module.exports = mongoose.model('User', userSchema);