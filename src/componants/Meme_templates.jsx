import React , {useState} from "react";
import Lguser from "./Lguser";
import Footer from "./Footer";
import { useEffect } from "react";
import axios from 'axios';
import Templates from "./Templates";
import { NavLink } from "react-router-dom";

const Meme_templates = () => {
    const [memes , setMemes]= useState([]);




    const suffleMemes = (array) => {
        for(let i = array.length-1 ; i>0 ; i--)
        {
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    useEffect(()=>{
        async function getData(){
            const res = await axios.get('https://api.imgflip.com/get_memes')
            const abc = res.data.data.memes;
            suffleMemes(abc);
            setMemes(abc);
            //console.log(res);
            //console.log(memes);
        }
        getData();
    },[]);



   

const fun = (val)=>{
    return(
        <>
           <NavLink to = "/canvas" onClick={setCanvas}>
            <Templates
            img = {val.url}
            name = {val.name}
             />
            </NavLink> 
        </>
    )
}

const setCanvas = (e) => {
    const url = e.target.__reactProps$x2vqfv30mv.src;
    console.log(url)
    }



    return (
        <>
        <div className="body">
            <Lguser />
            <h1>Edit these memes and build ur own memes  </h1>
            {memes.map(fun)}
            

            <Footer />
            

        </div>
           
            
        </>
    )
}

export default Meme_templates;











