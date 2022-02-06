import React , {useState} from "react";
import Lguser from "./Lguser";
import Footer from "./Footer";
import InfiniteScroll from 'react-infinite-scroll-component';
import Memes from "./Memes";
import { useEffect } from "react";

const Meme_templates = () => {
    const [memes , setMemes]= useState([]);


    // useEffect(
    //     fetch('https://api.imgflip.com/get_memes')
    //   .then(results => results.json())
    //   .then(data => {
    //     const obj = data.data.memes[0];
    //     console.log(obj)
       
    //   }),[] );








    return (
        <>
        <div className="body">
            <Lguser />
            <h1>This is our meme templates  page </h1>



            <Footer />
            

        </div>
           
            
        </>
    )
}

export default Meme_templates;











