const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

dotenv.config({ path: './config.env' });

require('./db/conn');
app.use(express.json());

// linked router files to make app.js clean 
app.use(require('./router/auth'));

const PORT = 5000;

app.get('/signup', (req, res) => {
    res.send(`Hello Registration world from the server`);
});

app.listen(PORT, (err) => {
    if(!err)
    {
        console.log(`server is runnig at port no ${PORT}`);
    }
    else    
        console.log(err);
})


