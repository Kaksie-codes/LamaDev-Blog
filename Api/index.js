const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')

dotenv.config();
app.use(express.json());

const PORT = 3000;
mongoose.connect(process.env.MONGO_URL)
.then((result) => {
    console.log('connected to db');

    //listen for requests after connections has been made to the database
    app.listen(PORT, () => {
        console.log(`server started listening on port ${PORT}`);
    })

})
.catch(err => console.log('error', err))





app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/posts', postRoute);