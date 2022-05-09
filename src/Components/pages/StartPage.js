import React from "react";
import CategoryCard from '../CategoryCard';
import owl from "../images/owl.jpg"
import {Link} from 'react-router-dom';
import '../Pages.css';

function StartPage (){
    return (
    <div>
        <h1>Välkommen till LegLoggen</h1>
        <ul className="nav">
            
            <li className="item">
                <Link to = "/CategoryPage" className="link">Klicka och Lyssna</Link>
            </li>
            <li className="item">
                <Link to = "/GuessGame" className="link">Lyssna och Gissa</Link>
            </li>
        
                      
        </ul>
        
    </div>
    );
}
export default StartPage;


