import React from "react";
import "./CategoryCard.css"
import { useState } from "react";

const CategoryCard = (props) => {

    return(
        
            <div className="cardBody">
                
                <button>
                <img src={props.img} className= "photo"/> 
                <div className="container">
                    <h2><b>{props.title}</b></h2>
                    
                </div>
                
                </button> 
            </div>

        
    );
};
export default CategoryCard;