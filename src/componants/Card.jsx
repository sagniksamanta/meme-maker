import React from "react";


const Card = (props) => {
    return(
        <>
        <div className="card">
        <div class="card" style={{"width": "18rem"}}>
         <img src={props.img} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title"> MEMES !! </h5>
        <p class="card-text">Build memes in few clicks</p>
        <a href="#" class="btn btn-primary">Go ahead</a>
    </div>
    </div>
        </div>
    
   
        </>
        
    );
}

export default Card;