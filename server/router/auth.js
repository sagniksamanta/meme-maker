const express = require("express");
const user = require('../model/userSchema');
const router = new express.Router();



router.get('/' , (req , res) => {
    res.send("this is our home page from router");
});

router.post('/signup' , async(req , res)=> {
    
    try{
        const candidate = new user(req.body);
        console.log(candidate);
        const result = await candidate.save();
        res.status(201).send(candidate);
        }catch(e){
            res.status(400).send(e);
        }


});




router.post("/login" , async(req,res)=> {
    try{
        const {email , password} = req.body;
        const userdata  = await user.findOne({email : email});
        
        
        if(userdata != null)
        {
            //console.log(userdata.password);
            //console.log(password);
            if(password == userdata.password)
        {
            res.status(201).send(userdata);
            console.log("login successfull");
        }else{
            console.log("wrong password !!");
            res.status(404).send();
        }
        
        }else{
            console.log("no user found in data base");
            res.status(404).send();
        }
        }catch(e){
            res.status(404).send(e);
        }
})



router.post("/user" , async(req,res)=> {
    try{
        const {id , image } = req.body;
        const userdata  = await user.findOne({_id : id});
        if(userdata == null)
        {
            console.log("no user found");
            res.status(404).send();
        }else{
            const res = await user.findByIdAndUpdate({_id : id},{
                $addToSet : {
                    image : image,
                }
            })
            if(res){
                console.log("meme uploaded");
                const newdata = await user.findOne({_id : id});
                console.log(newdata);
                res.status(201).send(newdata);
            }else{
                console.log("something went wrong !!");
                res.status(404).send();
            }
        }

    }catch(e){
        res.status(404).send(e);
    }
      
})









module.exports = router;



