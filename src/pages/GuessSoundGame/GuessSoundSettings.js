import React from "react";
import CheckboxList from "../../Components/CheckboxList";

function GuessSoundSettings (props){
    

    return(
            <div id = "mySidebar" className="sidebar" style = {{width: (props.isSettingsOpen ? "250px" : "0px")}}>
                <CheckboxList {...props}/>
            </div>
    )

}

export default GuessSoundSettings;