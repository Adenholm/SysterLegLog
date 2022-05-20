import React, {useState} from "react";
import Slider from '@mui/material/Slider';
import "../Settings.css"



function Settings (props){
    return( 
    <div className="sidebar" style = {{width: (props.settingsIsOpen ? "250px" : "0px")}}>
        <h1>inställningar</h1>
        Ändra kortstorlek
        <Box>
          <Slider
            aria-label="Temperature"
            deafultvalue ={props.cardsize}
            step = {0.05}
            min={0.2}
            max={2}
            onChange = {(e, val) => props.setCardsize(val)}
            />
        </Box>
    </div>
    )
}
export default Settings;
