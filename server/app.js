const mongoose = require('mongoose');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

require('./db/conn');
const PORT = 5000;

//securing DB using dotenv
dotenv.config({path : './config.env'});


app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

//requiring model
const User = require('./model/userSchema');


app.use(express.json());
//routing 
const routing_path = require('./router/auth');
app.use(routing_path);

/********* middlewire ***********/

const middlewire = (req , res , next)=> {
    console.log("this is our middle wire ");
}





app.get('/' , (req , res) => {
    res.send("this is our home page ");
});

app.get('/about' , (req , res) => {
    res.send("this is our about us  ");
});

app.get('/contact' , (req , res) => {
    res.send("this is our contact us page  ");
});

app.get('/login' , (req , res) => {
    res.send("this is our login page ");
});
app.get('/signup' , (req , res) => {
    res.send("this is our sign up page ");
});



app.get('/user' ,middlewire , (req , res) => {
    res.send("this is our user page ");
});
app.get('/meme_gallery' , middlewire ,(req , res) => {
    res.send("this is our meme gallery page ");
});
app.get('/meme_templates' , middlewire ,(req , res) => {
    res.send("this is our meme templates page ");
});







app.listen(5000 , ()=>{
    console.log('listening to the port 5000')
})



