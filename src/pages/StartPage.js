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
      </ul>
      <img src="/images/flyingCat.gif" />
    </div>
  );
}
export default StartPage;
