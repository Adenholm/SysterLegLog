import "../Categories/Card.css";
import React, { useState } from "react";

const Card = (props) => {
    return(
        <div className="cardSize">            
            <button>
                <img src={props.img} className="photo"/>
            </button>                
        </div>
    );
    
};
export default Card