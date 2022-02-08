import React from "react";
import Lguser from "./Lguser";
import Footer from "./Footer";
import { fabric } from "fabric";
import { useEffect } from "react";

const Canvas = ()=>{

    const setCanvas = () => {
        var canvas = new fabric.Canvas('c' , {
            width : 1000 ,
            height : 500,
           
        });

        var t1 = new fabric.Textbox('My Text', {
            width: 200,
            top: 5,
            left: 5,
            fontSize: 16,
            textAlign: 'center'
        });
        canvas.add(t1);
        fabric.Image.fromURL("https://i.imgflip.com/30b1gx.jpg", (img)=> {
            // scale image down, and flip it, before adding it onto canvas
             canvas.add(img);
             
            
          });
          
          canvas.renderAll();
    }


    useEffect(() => {
        setCanvas();
    },[]);
  
     



    return (
        <>
        <div className="body">
            <Lguser/>
            <canvas id="c"></canvas>
            
            <Footer/>
        </div>
            
        </>
    )
}

export default Canvas;