import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { NavLink , useNavigate} from "react-router-dom";
import { svdata } from "../action/index";
import { useDispatch } from 'react-redux';


const Login = ()=> {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user , setUser] = useState({
        email:"",password:""
    });
    
    const handleInputs = (event) => {
        console.log(event);
        const {name , value} = event.target;
    
    
        setUser({ ...user , [name] : value });
    
    }



    const btn_fun = async(event)=>{

        event.preventDefault();
        const {email , password} = user;

        const res = await fetch("/login", {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            }, 
            body:JSON.stringify({
                email,password
            })
        });
        const data = await res.json();
       
        if(data.status === 404 || !data){
            console.log("Unsuccessfull login ");
            alert("Unsuccessfull login !!");
        }else{
            console.log(" login successfull !!");
            dispatch(svdata(data));
            console.log(data);
            alert("login successfull");
            
    
            
        }







    }






    return (
        <>
         <h1> Login page </h1>
         <div class = "container">
            <form  method = "POST" className="form">
                <div className="form-group">
                <EmailIcon/><label>     Email </label>
                </div>
                <div>
                    <input type="text" name="email" class="form-control" placeholder="Enter your email" 
                    onChange={handleInputs} 
                    value = {user.email}
                    required />
                </div>
                <div class="form-group">
                    <VpnKeyIcon/><label>  Password</label>    
                </div>
                <div>
                    <input type="text" name="password" autoComplete = "off" placeholder="enter your password" 
                    onChange={handleInputs} 
                    value = {user.password}
                    class="form-control"/>
                </div>

                <button class="btn btn-primary" onClick={btn_fun} style={{"margin":"5px"}}> <AccessibilityNewIcon/>  Login</button>
            <div class="transfer">
            <p>Not have an account ?</p>
            <NavLink class="signup" to="../Signup">Sign up?</NavLink>
            </div>
          
              </form>    
             
        </div>
       
        </>
    );
}

export default Login;