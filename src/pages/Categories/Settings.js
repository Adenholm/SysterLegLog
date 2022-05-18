import React, {useState} from "react";
import Slider from '@mui/material/Slider'; 


function Settings (props){
    return( 
    <div>
        <h1>Settings</h1>
        Ändra kortstorlek
        <Slider
          aria-label="Temperature"
          deafultvalue ={props.cardsize}
          step = {0.05}
          min={0.2}
          max={2}
          onChange = {(e, val) => props.setCardsize(val)}
        />
    </div>
    )
}
export default Settings;
