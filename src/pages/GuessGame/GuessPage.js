import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./GuessCard";
import Sound from "react-sound";
import { Link } from "react-router-dom";
import { Categories } from "../../Components/Categories";
import "../Grid.css"
import Grid from '@mui/material/Grid';
import GuessSettings from "./GuessSettings"
import "../Settings.css"
import back from "../../Components/icons/back.png"
import play from "../../Components/icons/volume.png"
import stop from "../../Components/icons/mute.png"
import setting from "../../Components/icons/settings.png"

function GuessPage(props) {

  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [correctCard, setCorrectCard] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [numberOfCards, setNumberOfCards] = useState(4)
  const [categoryStates, setCategoryStates] = useState([])
  const [allCategories, setAllCategories] = useState(true)
  const [nextCards, setNextCards] = useState(false); //for the guessCard to know when grid is updated


  useEffect(() => {
    fetchCards();
  },[categoryStates,allCategories,numberOfCards]);
  

  function allCategoryNames(){
    return Categories.slice(1).map(category => category.name)
  }

  const fetchCards = async () => {
    
    console.log("allcategories"+allCategories)
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
    console.log("categorystates"+jsonArr)
    let post_data = {json_data:jsonArr}
    try {
      const {data} = await axios.post('http://localhost:4001/cards/guess', post_data);
      let randomCards = data.sort(() => Math.random() - Math.random()).slice(0, numberOfCards)
      let choosenCard = randomCards[Math.floor(Math.random() * randomCards.length)]
      choosenCard.isCorrect = true;
      //to notify guesscards
      setNextCards(!nextCards)

      
      setCards(randomCards)
      console.log(choosenCard)
      setCorrectCard(choosenCard)
      setIsPlaying(false)
      setIsLoaded(true);
    } catch (error) {
      console.error('Couldnt retrieve cards: ' + error)
    }
  }

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  //makes an array with all the categories which states are true
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

  function createCards(images) {
    console.log("images"+images)
    images.map(cardData => {console.log("carddataid"+cardData.id)})
      return images.map(cardData => {return <Card 
          img = {cardData.pic} 
          isCorrect = {cardData.isCorrect}
          nextCards = {nextCards}
          id = {cardData.id}
          key = {cardData.id}
          />;});
  }

  return (
    <div id="flexiblePage" style = {{marginRight: (isSettingsOpen ? "250px" : "0px")}}>
      <div>
      
        <button onClick={() => setIsPlaying(!isPlaying)}>
          <img src= {!isPlaying ? stop : play} className="iconImage" />
          {!isPlaying ? "Spela Ljud" : "Stoppa ljud"}
        </button>
        <button onClick={fetchCards}>Nästa</button>
        <button onClick={() => setIsSettingsOpen(!isSettingsOpen)}> 
        <img src={setting} className = "iconImage"/>
        Inställningar
        </button>
        <Grid container className = "row">
          {createCards(cards)}
          <Sound
            url={correctCard ? correctCard.sound : ""}
            playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
            playFromPosition={0}
            />
        </Grid>
      </div>
            {isSettingsOpen && (
                     <GuessSettings 
                         setIsSettingsOpen={setIsSettingsOpen}
                         isSettingsOpen = {isSettingsOpen}
                         props = {props}
                         setNumberOfCards= {p => {setNumberOfCards(p)}}
                         setAllCategories= {p => {setAllCategories(p)}}
                         setCategoryStates= {p => {setCategoryStates(p)}}
                         allCategories = {allCategories}
                     />
                     
                 )}
    </div>
  );
}



export default GuessPage;
