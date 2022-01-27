import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Nav from './Nav';
import Footer from './Footer';
import Card from './Card';
import Sdata from './Sdata';
import { NavLink } from "react-router-dom";

const arr = ">";




const Home = ()=> {

    function card_data(val)
    {
      return(
        <Card 
         img = {val.img}
       />
      );
    }

    return (
        <>
    <div className='body'>
    <Nav/>
    

    <div className='main_div'>
      <h1><b>Meme Generator</b></h1>
      <p>Make memes from images and videos in just a few clicks</p>
      <button type="button" class="btn btn-primary btn-lg"> <NavLink to="./login" style = {{"color":"white"}}>Get Started {arr}</NavLink> </button>

    </div>

    <div className='card_div'>
    {Sdata.map(card_data)}
    </div>


   <Footer/>

    </div>
  
      
    </>
    );
}

export default Home;





