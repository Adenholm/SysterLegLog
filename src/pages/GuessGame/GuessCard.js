import "../Categories/Card.css";
import React, { useState } from "react";

const Card = (props) => {
    const [style,setStyle] = useState("blackCard");
    const changeStyle = () => {
        if(props.isCorrect){
            setStyle("greenCard");
        }

        
    }
    return(
        <div className="cardSize" key = {props.key}>   
            <div className={style}>
            <button onClick={changeStyle}>
                <img src={props.img} className="photo"/> 
            </button>  
            </div>
                
        </div>
    );
    
};
export default Card