import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { NavLink } from "react-router-dom";

const Signup = ()=> {
    return (
        <>
              <h1> Sign up Page  </h1>
        <div class = "container">
           <form  method = "POST" className="form">
           <div className="form-group">
           <AccountCircleIcon/><label>  Username </label>
               </div>
               <div>
               <input type="text" name="user" class="form-control" required />
               </div>

               <div className="form-group">
               <PersonAddIcon/><label>  Full Name </label>
               </div>
               <div>
               <input type="text" name="fname" class="form-control" required />
               </div>
               

               <div className="form-group">
               <EmailIcon/><label>  Email </label>
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
           <p>Already have an Account  ?</p>
           <NavLink class="signup" to="../login">Sign up?</NavLink>
           </div>
         
             </form>    
            
       </div>
        </>
      
    );
}

export default Signup;