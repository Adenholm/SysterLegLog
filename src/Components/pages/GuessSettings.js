import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import Checkbox from "../Checkbox";
import { Categories } from "../Categories";

//array that doesn't include the 'Alla kategorier' category
var onlyCategories = Categories.slice(1)
function GuessSettings (){
    //array with individual states for each checkbox to keep track of which checkboxes are checked or not
    const states = []
    const allCategoryState = []
    //var that keeps track on where each category has its state
    var i = -1;

    //function for creating the 'Alla kategorier'-checkbox
    function createAllCatCheckbox(cardData){
        return (
            <Checkbox
                id = "checkbox"
                label = {cardData.name}
                index = {0}
                getState = {(state,index) => allCategoryState[index]= state}
                />
        )
    }
    //function for creating remaining checkboxes
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
        navigate('/GuessPage',{
            state:{
                categoryStates:states,
                allCategories: allCategoryState[0]
            }});
    }

     
    return(
        //create checkboxes from all categories
        <div>
            {createAllCatCheckbox(Categories[0])}
            {onlyCategories.map(createCheckbox)}
            
            <button onClick={()=>{toGuessGame()}}>
                Play
            </button>
        
        </div>
    )
}

export default GuessSettings;

