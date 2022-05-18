import "../Categories/Card.css";
import React, { useState, useEffect } from "react";
import "./GuessCard.css"

const Card = (props) => {
    
    // This is so that the green frame dissapears next round
    useEffect(() =>{
        console.log(props.nextCards,'has changed')
        changeStyle("var(--bg-color)")
      },[props.nextCards])

    const changeStyle = color => {
        if(props.isCorrect){
            document.getElementById(props.id).style.borderColor = color
        }

        
    }
    return(
        <div className="card">  
            <img 
                src={props.img} 
                className="guessCardPhoto" 
                id= {props.id} 
                onClick={() => changeStyle("green")}/>        
        </div>
    );
    
};
export default Card