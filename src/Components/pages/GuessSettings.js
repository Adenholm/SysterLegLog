import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Checkbox from "../Checkbox";
import { Categories } from "../Categories";

function GuessSettings (){
    //array with individual states for each checkbox to keep track of which checkboxes are checked or not
    const states = []
    //var that keeps track on where each category has its state
    var i = -1;

    function createCheckbox(cardData) {
        i++;
        return(    
                <Checkbox 
                id = "checkbox"
                label = {cardData.name}
                index = {i}
                getState = {(state,index) => states[index]=state}
                />
        )
    }
    const navigate = useNavigate();
    const toGuessGame = () => {
        navigate('/GuessPage',{state:{categoryStates:states}});
    }
     
    return(
        //create checkboxes from all categories
        <div>
            {Categories.map(createCheckbox)}
            
            <button onClick={()=>{toGuessGame()}}>
                Play
            </button>
        
        </div>
    )
}

export default GuessSettings;

