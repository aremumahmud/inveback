const mongoose = require('mongoose');
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');


const app = require('./app');
const http = require('http');


const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: ["https://dashboard.ledgecapitals.com"],
        methods: ["GET", "POST"]
    }
});


dotenv.config()


// Connect to MongoDB
mongoose.connect(process.env.mongoURI || 'mongodb://localhost:27017/invest', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});









server.listen(3000, () => {
    console.log('Server is running on port 3000');
});