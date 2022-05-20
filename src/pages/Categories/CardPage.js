import React from "react";
import CardGrid from "./CardGrid";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useState } from "react";
import { useEffect } from "react";
import previous from "../../Components/icons/back.png"
import { useNavigate } from "react-router-dom";
import "../../App.css"
import Settings from "./Settings";


function CardPage(){
  const location = useLocation();
  let navigate = useNavigate();
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
        <div className = "flexiblePage" style = {{marginRight: (settingsIsOpen ? "250px" : "0px")}}>
          <img onClick={() => navigate('/CategoryPage')} src={previous} className="previousIcon"/>
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
        <Settings 
        cardsize = {cardsize}
        setCardsize = {setCardsize}
        settingsIsOpen = {settingsIsOpen}
        />
      </div>
    );
}
export default CardPage;