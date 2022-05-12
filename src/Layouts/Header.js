import React from "react";
import closeicon from "../Components/icons/cross.png"
import {Link} from 'react-router-dom';

const Header = (props) => {
    return(
        <div className="header">            
            <h1 className = "logo">
                LegLoggen
            </h1>
            <div>
            <li className="menuButton">
                <Link to = "/CategoryPage" className="link">
                    Klicka och Lyssna
                </Link>
            </li>
            <li className="menuMutton">
                <Link to = "/GuessGame" className="link">
                    Lyssna och Gissa
                </Link>
            </li>
            </div>
        </div>
    );
    
};
export default Header