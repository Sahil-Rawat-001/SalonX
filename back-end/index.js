require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const {connectToMongoDb} = require('./connection');
const User = require('./models/user');

const signupRoute = require('./routes/authRoutes');
const otpRoutes = require('./routes/otpRoute');


const PORT = process.env.PORT || 3000;

// connect to mongodb
connectToMongoDb(process.env.Mongo_Uri)
.then(() => console.log('MongoDb connected...'))
.catch((err) => console.log(`Error: ${err}`));

// create express app
const app = express();

// usign middlewares
app.use(cors());
app.use(express.json()); // for parsing json data
app.use(express.urlencoded({extended: false})); // for parsing form data

app.use('/api/auth',otpRoutes);
app.use('/api/auth', signupRoute);

app.listen(PORT,(err) => {
    if(err){
        console.log(`Error in express server: ${err.message}`);
    }
    console.log(`Server is running on port ${PORT}`);
})










