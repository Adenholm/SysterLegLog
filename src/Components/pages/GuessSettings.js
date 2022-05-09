import React, {useState} from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox";
import { Categories } from "../Categories";

function GuessSettings (){
    //array with individual states for each checkbox to keep track of which checkboxes are checked or not
    const states = []
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
     
    return(
        //create checkboxes from all categories
        <div>
            {Categories.map(createCheckbox)}
            <li>
            <Link to = "/GuessPage" className="link">Play</Link>    
            </li>
            <button onClick={() => console.log(states)}>
                pls work
            </button>
        
        </div>
    )
}

export default GuessSettings;

