import React from "react";
import { Link } from "react-router-dom";


function GuessSettings (){
    return(
        <div>
            <li>
            <Link to = "/GuessPage" className="link">Play</Link>
            </li>
        </div>
    )

}

export default GuessSettings;

