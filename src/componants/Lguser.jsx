import  React ,{useState} from 'react';
import logo from './images/logo.jpg';
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';

const pages = ['User Dashboard', 'Templates', 'Viewpage'];
const settings = ['Logout'];



const Lguser = (props) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   
  
    return(
        <>
          <div className="user_nav">
   
         
        
                <Stack direction="row" spacing={2}>
                
                  {/* <NavLink to="/meme_gallery">
                  <img src = "" alt='meme image'/>
                  </NavLink>  */}
                  <NavLink to="/user">
                  <button type="button" class="btn btn-warning"style={{"borderRadius":"44%"}}>  {user.uname[0]}</button>
                  </NavLink> 
                  <NavLink to="/user">
                  <button type="button" class="btn btn-outline-warning">  {user.uname}</button>
                  </NavLink> 
                  <NavLink to="/meme_gallery">
                  <button type="button" class="btn btn-outline-success"> Meme Gallery</button>
                  </NavLink> 
                  <NavLink to="/meme_templates">
                  <button type="button" class="btn btn-outline-success"> Meme Templates </button>
                  </NavLink> 
                  <NavLink to="/canvas">
                  <button type="button" class="btn btn-outline-success"> canvas </button>
                  </NavLink> 
                  
                  <NavLink to="/">
                  <button type="button" onClick = {props.fun} class="btn btn-outline-danger" style={{"marginLeft" : "800px"}}>  Log Out </button>
                  </NavLink> 
                </Stack>
               
    </div>
        </>
    )
}

export default Lguser;



