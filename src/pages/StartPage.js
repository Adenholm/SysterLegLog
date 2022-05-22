import React from "react";
import { Link } from "react-router-dom";
import "../Pages.css";
import doggie from "../Components/images/doggie.jpg"

function StartPage() {
  return (
    <div>
      <img src={doggie} className= "startImage"/>
      <h1 className="text">LegLoggen</h1>
      <ul className="nav">
        <li className="item">
          <Link to="/CategoryPage" className="link">
            Klicka och Lyssna
          </Link>
        </li>
        <li className="item">
          <Link to="/GuessGame" className="link">
            Lyssna och Gissa
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default StartPage;
