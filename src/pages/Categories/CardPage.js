import React from "react";
import CardGrid from "./CardGrid";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";


function CardPage(){
  const location = useLocation();
  //states for searchbar
  const [inputText, setInputText] = useState("");


   
    return (
      <div>
        <button><Link to = {-1}>Tillbaka</Link></button>
        
      <h1>{location.state.category}</h1>

    <div className="row">
          <div className="col-sm-12 text-center">
            <div className="container">
            <SearchBar
                setInputText = {p => {setInputText(p)}}
                inputText = {inputText}
                />
              < CardGrid 
                category = {location.state.category}
                inputText = {inputText}
              />
            </div>
          </div>
        </div>
    </div>
    );
}
export default CardPage;