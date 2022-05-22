import React, { useEffect, useState } from "react"; 
import Sound from 'react-sound';
import axios from "axios";
import { Categories } from "../../Components/Categories";
import { useLocation } from "react-router-dom";
import "../Settings.css"
import play from "../../Components/icons/volume.png"
import stop from "../../Components/icons/mute.png"
import setting from "../../Components/icons/settings.png"
import GuessSoundSettings from "./GuessSoundSettings"
import Grid from '@mui/material/Grid';
import question from "../../Components/images/question-mark.jpg"




function GuessSound () {
  const [card, setCard] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [categoryStates, setCategoryStates] = useState(Array(Categories.length).fill(true))
  const [allCategories, setAllCategories] = useState(true)
  const [nextCard, setNextCard] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    fetchCard();
    
  },[categoryStates, allCategories]);
  
  useEffect(() => {
    if(allCategories){
      setCategoryStates(Array(Categories.length).fill(true))
    }
    else if(!allCategories && categoryStates.every(element => element === true)){
      setCategoryStates(Array(Categories.length).fill(false))
    }
  },[allCategories]);

  useEffect (() => {
    if(categoryStates.every(element => element === true)){
      setAllCategories(true)
    }
    else {
      setAllCategories(false)
    }
  },[categoryStates]);
  

  function allCategoryNames(){
    return Categories.map(category => category.name)
  }

const fetchCard = async () => {

    let catStats = [];
    //if the all categories-checkbox was checked, just send all categories
    if(allCategories==true || getCurrentCategories(categoryStates).length == 0){
      catStats = allCategoryNames()
    }
    //if the all categories-checkbox was not checked, send the actual checked in
    else{
      catStats = getCurrentCategories(categoryStates)
    }
    //stringify the array to send as a parameter
    let jsonArr = JSON.stringify(catStats)
    let post_data = {json_data:jsonArr}
    try {
      const {data} = await axios.post('http://localhost:4001/cards/guess', post_data);
      setCard( data[Math.floor(Math.random() * data.length)])
      setIsHidden(true)
      setNextCard(!nextCard)
      setIsPlaying(false)
      setIsLoaded(true);
    } catch (error) {
      console.error('Couldnt retrieve cards: ' + error)
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  
  function allCategoryNames(){
    return Categories.map(category => category.name)
  }

  function getCurrentCategories (states){
    var result = []
    var currentState
    var currentCat
    var cats = allCategoryNames()
    for (var i= 0;i<states.length;i++){
      currentCat = cats[i]
      currentState = states[i]
      if(currentState== true){
        result.push(currentCat)

      }
      
    }
    return result
    
  }

  

  return (
    <div className="flexiblePage" style = {{marginRight: (isSettingsOpen ? "250px" : "0px")}}>
      <div>
        <button onClick={() => setIsSettingsOpen(!isSettingsOpen)} > 
        <img src={setting} className = "iconImage"/>
        Inställningar 
        </button>
        <Grid container className = "row">
          <div style={{justifyContent:"center",display:"flex",flexDirection:"column"}}>
            <button onClick={() => setIsPlaying(!isPlaying)}>
              <img src= {!isPlaying ? stop : play} className="iconImage" />
              {!isPlaying ? "Spela Ljud" : "Stoppa ljud"}
            </button>
            <div className="card">
                <img 
                    src={isHidden ? question : card.pic}
                    className="cardPhoto" 
                    onClick={() => setIsHidden(false)} 
                    />         
            </div>
            <button onClick={fetchCard}>Nästa</button>
          </div>
          <Sound
            url={card.sound}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={0}
            />
        </Grid>
      </div>
            {isSettingsOpen && (
                     <GuessSoundSettings 
                         setIsSettingsOpen={setIsSettingsOpen}
                         isSettingsOpen = {isSettingsOpen}
                         categoryStates = {categoryStates}
                         setAllCategories= {p => {setAllCategories(p)}}
                         setCategoryStates= {p => {setCategoryStates(p)}}
                         allCategories = {allCategories}
                     />
                     
                 )}
    </div>
  );
  
}
export default GuessSound;