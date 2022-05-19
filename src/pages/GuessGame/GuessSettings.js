import React, {useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import DiscreteSlider from "./NumberCardsButton";

import CheckboxList from "../../Components/CheckboxList";




function GuessSettings (props){
    const navigate = useNavigate();
    

    return(
            <div id = "mySidebar" className="sidebar" style = {{width: (props.isSettingsOpen ? "250px" : "0px")}}>
                <CheckboxList
                    props = {props}
                />


                <DiscreteSlider onChangeHandler = {props.setNumberOfCards}/>
            </div>
    )

}

export default GuessSettings;

