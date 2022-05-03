import React from "react";
import CategoryCard from '../CategoryCard';
import owl from "../images/owl.jpg"
import {Link} from 'react-router-dom';

function StartPage (){
    return (
    <div>
        <h1>Välkommen till LegLoggen</h1>
        <ul>
            
            <li>
                <Link to = "/CategoryPage">Categories</Link>
            </li>
            <li>
                <Link to = "/Settings">Settings</Link>
            </li>
                      
        </ul>
        
    </div>
    );
}
export default StartPage;


