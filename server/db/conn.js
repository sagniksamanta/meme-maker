const mongoose = require('mongoose');
const dotenv = require('dotenv');


//securing DB using dotenv
dotenv.config({path : './config.env'});
const db = process.env.DATABASE;


//connecting our app with mongo db atlas

mongoose.connect(db,{
    useNewUrlParser : true
}).then(()=> {
    console.log('connection successfull !! ');
}).catch((err)=>{
    console.log(err);
})










