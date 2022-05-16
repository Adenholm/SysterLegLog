import React from "react";
import { Link } from "react-router-dom";
import "../Pages.css";

function StartPage() {
  return (
    <div>
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
        <li className="item">
          <Link to="/GuessSound" className="link">
            Gissa och se
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default StartPage;
