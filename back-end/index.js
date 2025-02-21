const express = require('express');
const app = express();
const port = process.env.PORT || 9000 ;
require('dotenv').config();
const cors = require('cors');
const connectDB = require('./db/ConnectDB');
const AllProducts = require('./routes/ProductRouter');
const path = require('path');
const ConnectCloudinary = require('./config/cloudinary');
const AllCategory = require('./routes/CategoryRouter');
const AllOrder = require('./routes/OrderRouter');
const AllReview = require('./routes/ReviewRouter');

// cors
const whitelist = ['https://app-cental.vercel.app' , 'http://localhost:3000'];
app.use(cors({
    origin: whitelist,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Origin', 'Accept', 'X-Custom-Header'],
    credentials: true
}))

// connect MongoDB
connectDB()

// Connect Cloudinary
ConnectCloudinary()

// use express
app.use(express())

// express Json
app.use(express.json());

// Path
app.use('/public', express.static(path.join(__dirname, 'public')));

// routes
app.use('/api', AllProducts)
app.use('/api' , AllCategory)
app.use('/api' , AllOrder)
app.use('/api' , AllReview);
// express Get 
app.get('/', (req, res) => {
    res.send('Hello, World!');
});


// Express Listen
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});