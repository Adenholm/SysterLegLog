import React, {useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Slider } from "@mui/material";

import CheckboxList from "../../Components/CheckboxList";




function GuessSettings (props){
    const navigate = useNavigate();
    

    return(
            <div id = "mySidebar" className="sidebar" style = {{width: (props.isSettingsOpen ? "250px" : "0px")}}>
                <h1>Inställningar</h1>
                <CheckboxList {...props}/>
                <h2>Ändra antal kort</h2>
                <Slider
                    aria-label="Temperature"
                    defaultValue={4}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={2}
                    max={8}
                    onChange = {(e, val) => props.setNumberOfCards(val)}
                    sx={{
                        '&.MuiSlider-colorPrimary': {
                          color: "green",
                        }
                    }}
                />
            </div>
    )

}

export default GuessSettings;

