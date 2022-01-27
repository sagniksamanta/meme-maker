import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from './Nav';
import Footer from "./Footer";


const About = ()=> {
    return (
        <>
        <div className="body">
        <Nav/>
        <div className='main_div'>
        <h1>This is our about us page </h1>
        </div>
        
        <Footer/>
        </div>
        
        </>
    );
}

export default About;