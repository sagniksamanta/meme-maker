import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { NavLink , useNavigate } from "react-router-dom";

const Signup = ()=> {

const navigate = useNavigate();
const [user , setUser] = useState({
    uname:"",fname :"",email:"",password:""
});

const handleInputs = (event) => {
    console.log(event);
    const {name , value} = event.target;

    setUser((preValue) => {
        console.log(preValue);

        return{
            ...preValue,
            [name] : value,
        };

    });

}

// posting data using fetch api

const postData = async(e)=>{
    
    e.preventDefault();
    const {uname,fname,email,password} = user;
    console.log(user);

    const res = await fetch("/signup", {
        method:"POST",
        headers:{
            "Content-type" : "application/json"
        },
        body:JSON.stringify({
            uname,fname,email,password
        })
    });
    const data = await res.json();
    console.log(data);
    if(data.status === 422 || !data){
        alert("Unsuccessfull !!");
        console.log("Unsuccessfull ");
    }else{
        console.log("registration successfull !!");
        alert("Registration successfull");

        navigate('/login');
    }

}




    return (
        <>
              <h1> Sign up Page  </h1>
        <div class = "container">
           <form  method = "POST" className="form">
           <div className="form-group">
           <AccountCircleIcon/><label>  Username </label>
               </div>
               <div>
               <input type="text" name="uname" class="form-control" autoComplete = "off" placeholder="User Name " 
               onChange={handleInputs} 
               value = {user.uname}
               required />
               </div>

               <div className="form-group">
               <PersonAddIcon/><label>  Full Name </label>
               </div>
               <div>
               <input type="text" name="fname" class="form-control" autoComplete = "off" placeholder="Full Name" 
               onChange={handleInputs} 
               value = {user.fname}
               required />
               </div>
               

               <div className="form-group">
               <EmailIcon/><label>  Email </label>
               </div>
               <div>
               <input type="text" name="email" class="form-control" autoComplete = "off" placeholder="Email"  
               onChange={handleInputs} 
               value = {user.email}
               required />
               </div>

               <div class="form-group">
                   <VpnKeyIcon/><label>  Password</label>    
               </div>
               <div>
                   <input type="text" name="password" autoComplete = "off" placeholder="Password"
                   onChange={handleInputs} 
                  value = {user.password}
                    class="form-control"/>
               </div>

               <button class="btn btn-primary" style={{"margin":"5px"}} onClick={postData}> <AccessibilityNewIcon/>  Sign Up </button>
           <div class="transfer">
           <p>Already have an Account  ?</p>
           <NavLink class="signup" to="../login">Log In ?</NavLink>
           </div>
         
             </form>    
            
       </div>
        </>
      
    );
}

export default Signup;