import React from "react";
import Lguser from "./Lguser";
import Footer from "./Footer";
import Memes from "./Memes";
import { useEffect , useState } from "react";
import { svdata } from "../action";
import { useDispatch } from "react-redux";





const fun = (val)=>{
    //console.log(val);
return (<Memes
pic = {String(val)}
/>)
}




const Meme_gallery = () => {
    const [memes , setMemes]= useState(JSON.parse(localStorage.getItem('profile')).image);

    const dispatch = useDispatch();
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(async()=>{
        console.log("meme updated");
        const email = user.email;
        const password = user.password;

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
        const moreMemes = data.image;
        setMemes(moreMemes);
    
    },[])
    
    console.log(memes);
    return (
        <>
        <div className="body">
            <Lguser />
            <h1>This is our meme gallery  page </h1>
           
           {
             memes.map(fun)
           }
            
            <Footer />

        </div>
           
            
        </>
    )
}

export default Meme_gallery;











