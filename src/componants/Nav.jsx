import React from "react";
import { NavLink } from "react-router-dom";
// import Button from '@mui/material/Button';

const Nav = ()=> {

return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
        <p id = "meme"><b><i>MEME WORLD</i></b> </p>

        <button className="navbar-toggler" id = "nav_btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/"><button type="button" class="btn btn-outline-light"> Home </button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about"><button type="button" class="btn btn-outline-light">About us </button></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact"><button type="button" class="btn btn-outline-light">contact</button></NavLink>
            </li>
            <li className="nav-item">
                  <NavLink className="nav-link"  to = "/login" id="login"><button type="button" class="btn btn-outline-info"> Log in </button></NavLink>
            </li>
            <li className="nav-item">
                  <NavLink className="nav-link"  to="/signup" id="reg"><button type="button" class="btn btn-outline-info">Sign Up </button></NavLink>
            </li>
            
          </ul>

        </div>
        
        </div>
      </nav>
    </>
)




}




export default Nav;