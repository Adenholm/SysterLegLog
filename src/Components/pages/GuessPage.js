import React ,{useEffect, useState } from "react"
import axios from 'axios'
import Card from "./GuessCard"
import Sound from "react-sound"
import {components} from "react-select"
import { Categories } from "../Categories";
import { useLocation } from 'react-router-dom'
var qs = require('qs');


function GuessPage (props){
    const [cards, setCards] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [correctCard, setCorrectCard] = useState(undefined)
    const [isPlaying,setIsPlaying] = useState(false);
    const location = useLocation();

    const numberOfCards = 4
  
    useEffect(() => {
      fetchCards()
    },[])

    /*
    arr: {catStats}
          },
          paramsSerializer: params => {
            return qs.stringify(params)
          }*/
    
    const fetchCards = async () => {
      //send get request to cards/all
      let catStats = getCurrentCategories(location.state.categoryStates)
      let jsonArr = JSON.stringify(catStats)
      let post_data = {json_data:jsonArr}
      
      axios
        .post('http://localhost:4001/cards/guess', post_data)
        .then(response => {
          let randomCards = response.data.sort(() => Math.random() - Math.random()).slice(0, numberOfCards)
          let choosenCard = randomCards[Math.floor(Math.random() * randomCards.length)]
          choosenCard.isCorrect = true;
          
          console.log(randomCards)
          setCards(randomCards)
          console.log(choosenCard)
          setCorrectCard(choosenCard)
          setIsPlaying(true)
          setIsLoaded(true);
        })
        .catch(error => console.error('Couldnt retrieve cards: ' + error))
    }


    
    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    //makes an array with all the categories which states are true
    function getCurrentCategories (states){
      var result = []
      var currentState
      var currentCat
      for (var i= 0;i<states.length;i++){
        currentCat = Categories[i].name
        currentState = states[i]
        if(currentState== true){
          result.push(currentCat)

        }
        
      }
      return result

    }
    
    return (
      <div className="row">      
             {createCards(cards)} 
             <Sound
                url = {correctCard ? correctCard.sound : ''}
                playStatus = {
                  isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
                playFromPosition={0}
              />
              
      </div>
      );
  
}


function createCards(images) {
    return images.map(cardData => {return <Card 
        img = {cardData.pic} 
        isCorrect = {cardData.isCorrect}
        />;});
}



export default GuessPage;