const mongoose = require('mongoose');

const DB = process.env.DATABASE || "mongodb://localhost:27017/piyush";

mongoose.connect(DB).then(() => {
    console.log(`connnection successful`);
}).catch((err) => console.log(`no connection ${err}`));
