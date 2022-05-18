import React, {useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import DiscreteSlider from "./NumberCardsButton";
import Checkbox from "../../Components/Checkbox";
import { Categories } from "../../Components/Categories";


//array that doesn't include the 'Alla kategorier' category
var onlyCategories = Categories.slice(1)

function GuessSettings (props){
    const navigate = useNavigate();
    //when clicked outside of modal, close modal

    //array with individual states for each checkbox to keep track of which checkboxes are checked or not
    const states = []
   
    //var that keeps track on where each category has its state
    var i = -1;
   
    //function for creating the 'Alla kategorier'-checkbox
    function createCategoriesCheckbox(cardData){
        return (
            <div>
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={props.allCategories}
                    onChange={() => props.setAllCategories(!props.allCategories)}
                />
                <label htmlFor={"checkbox"}>{"Alla kategorier"}</label>
            </div>
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
                setCategories = {(p) => props.setCategoryStates(p)}
                states = {states}
                />
        )
    } 

    

    return(
            <div id = "mySidebar" className="sidebar" style = {{width: (props.isSettingsOpen ? "250px" : "0px")}}>
                {console.log("states"+states)}
                {createCategoriesCheckbox(Categories[0])}
                {onlyCategories.map(createCheckbox)}
                <DiscreteSlider onChangeHandler = {props.setNumberOfCards}/>
            </div>
    )

}

export default GuessSettings;

