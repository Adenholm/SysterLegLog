import React from "react";
import closeicon from "../Components/icons/cross.png"
import {Link} from 'react-router-dom';
import "./Header.css"

const Header = (props) => {
    return(
        <div className="header">            
            <h1 className = "logo">
                LegLoggen
            </h1>
            <div className="buttonContainer">
                <li className="menuButton">
                    <Link to = "/CategoryPage" className="headerLink">
                        Klicka och Lyssna
                    </Link>
                </li>
                <li className="menuButton">
                    <Link to = "/GuessGame" className="headerLink">
                        Lyssna och Gissa
                    </Link>
                </li>
            </div>
        </div>
    );
    
};
export default Header