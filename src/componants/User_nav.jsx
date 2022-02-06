import React from "react";
import { NavLink } from "react-router-dom";
import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';

const User_nav = () => {
    return (
        <>
            
              <div className="user_nav">
                <Stack direction="row" spacing={2}>
                    
                  
                  
                  <NavLink exact className={({isActive}) => (isActive ? "active-style" : 'none')}to="/user">
                  <button type="button" class="btn btn-outline-danger"> User Page </button>
                  </NavLink>
                  
                  
                  <NavLink to="/meme_gallery">
                  <button type="button" class="btn btn-outline-danger"> Meme Gallery</button>
                  </NavLink> 
                  <NavLink to="/meme_templates">
                  <button type="button" class="btn btn-outline-danger"> Meme Templates </button>
                  </NavLink> 
                </Stack>
              </div>
                
        </>
    )
}

export default User_nav;











