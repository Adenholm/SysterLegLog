import React from "react";
import closeicon from "../Components/icons/cross.png"
import {Link, useNavigate} from 'react-router-dom';
import "./Header.css"

const Header = (props) => {
    return(
        <div className="header">            
            <Link to = "/"  className = "logo">
                <h1>
                    LegLoggen
                </h1>    
            </Link>
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