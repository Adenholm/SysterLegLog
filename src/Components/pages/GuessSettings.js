import React, {useState} from "react";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox";
import { Categories } from "../Categories";

function GuessSettings (){
   
    function createCheckbox(cardData) {
        return(    
                <Checkbox 
                id = "checkbox"
                label = {cardData.name}
            
                />
        )
    }
     
    return(
        <div>
            {Categories.map(createCheckbox)}
            <li>
            <Link to = "/GuessPage" className="link">Play</Link>    
            </li>
        
        </div>
    )
}

export default GuessSettings;

