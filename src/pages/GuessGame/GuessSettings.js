import React, {useState} from "react";
import { Link } from "react-router-dom";


function GuessSettings (){
    return(
        <div>
            <button><Link to = {-1}>Tillbaka</Link></button>
            <li>
            <button onClick={true}>Välj kategori</button>
            </li>
            <li>
            <button onClick={true}>Välj antal kort</button>
            </li>
            <li>
            <button><Link to = "/GuessPage">Play</Link></button>
            </li>
        </div>
    )

}

export default GuessSettings;
