const axios = require('axios');

// Replace with your Blockchain.com API key

const ADDRESS_URL = 'https://blockchain.info/rawaddr/';

async function checkTransaction(address, transactionId) {
    try {
        // Fetch all transactions for the address
        const addressResponse = await axios.get(`${ADDRESS_URL}${address}`);
        const transactions = addressResponse.data.txs;

        // Check if the transaction ID is in the list of transactions
        const transaction = transactions.find(tx => tx.hash === transactionId);

        if (transaction) {
            return true;
        } else {
            console.log('Transaction not found.');
            return false;
        }
    } catch (error) {
        console.error('Error fetching transaction data:', error);
        return false;
    }
}

// Replace with the actual address and transaction ID to check
const address = '1MrMKt6JDpPHkgCpgNh58hufLHmr6PFehe';


module.exports = (transactionId) => checkTransaction(address, transactionId)


// .then(isValid => console.log('Transaction validation result:', isValid))
//     .catch(error => console.error('Error:', error));