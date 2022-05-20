import React from "react";
import CardGrid from "./CardGrid";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import Settings from "./Settings";


function CardPage(){
  const location = useLocation();
  //states for searchbar
  const [inputText, setInputText] = useState("");
  const [headerText, setHeaderText] = useState(location.state.category)
  //states for settings
  const [settingsIsOpen, setSettingsIsOpen] = useState(false)
  const [cardsize, setCardsize] = useState(1)

  useEffect(() =>{
    if(!(inputText==="")){
      setHeaderText("Sökresultat: "+inputText)
    }
    else(
      setHeaderText(location.state.category)
    )
  },[inputText])

    return (
      <div>
        <Settings 
        cardsize = {cardsize}
        setCardsize = {setCardsize}
        settingsIsOpen = {settingsIsOpen}
        />
        <div style = {{marginRight: (settingsIsOpen ? "250px" : "0px")}}>
          <button><Link to = {-1}>Tillbaka</Link></button>
          <button onClick={() => setSettingsIsOpen(!settingsIsOpen)}>
            <img src="" alt="" />
          </button>
          
          <h1>{headerText}</h1>

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
                      cardsize = {cardsize}
                      />
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
}
export default CardPage;