import "../Categories/Card.css";
import React, { useState } from "react";


const Card = (props) => {
    const changeStyle = () => {
        if(props.isCorrect){
            document.getElementById(props.id).style.borderColor = "green"
        }

        
    }
    return(
        <div className="card">  
            <button id= {props.id} onClick={changeStyle}>
                <img src={props.img} className="cardPhoto"/> 
            </button>  
        
                
        </div>
    );
    
};
export default Card