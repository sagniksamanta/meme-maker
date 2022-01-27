import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { NavLink } from "react-router-dom";


const Login = ()=> {
    return (
        <>
         <h1> Login page </h1>
         <div class = "container">
            <form  method = "POST" className="form">
                <div className="form-group">
                <EmailIcon/><label>     Email </label>
                </div>
                <div>
                <input type="text" name="email" class="form-control" required />
                </div>
                <div class="form-group">
                    <VpnKeyIcon/><label>  Password</label>    
                </div>
                <div>
                    <input type="text" name="password" class="form-control"/>
                </div>

                <button class="btn btn-primary" style={{"margin":"5px"}}> <AccessibilityNewIcon/>  Login</button>
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