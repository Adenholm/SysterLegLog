import "../Categories/Card.css";
import React, { useState } from "react";

const Card = (props) => {
    const changeStyle = () => {
        if(props.isCorrect){
            document.getElementById(props.id).style.borderColor = "green"
        }

        
    }
    return(
        <div className="cardSize">  
            {console.log("indid"+props.id)} 
            <button id= {props.id} onClick={changeStyle}>
                <img src={props.img} className="photo"/> 
            </button>  
        
                
        </div>
    );
    
};
export default Card