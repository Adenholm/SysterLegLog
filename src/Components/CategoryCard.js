import React from "react";
import "./CategoryCard.css"
import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
const CategoryCard = (props) => {
    const navigate = useNavigate();
    const toCardPage = () => {
        navigate('/Cards',{state:{category:props.title}});
    }

    return(
        
            <div onClick={()=>{toCardPage()}} className="cardBody">
                
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