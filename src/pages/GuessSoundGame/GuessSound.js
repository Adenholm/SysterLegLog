import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import Sound from 'react-sound';
import axios from "axios";
import { Categories } from "../../Components/Categories";
import { useLocation } from "react-router-dom";





function GuessSound () {
  const [card, setCard] = useState(undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const location = useLocation();

const fetchCards = async () => {
    let catStats = [];

    //console.log(location.state.allCategories)
    //console.log(allCategoryNames())

    //if the all categories-checkbox was checked, just send all categories
    if(location.state.allCategories==true){
      catStats = allCategoryNames()

    }
    //if the all categories-checkbox was not checked, send the actual checked in
    else{
      catStats = getCurrentCategories(location.state.categoryStates)
    }
    //stringify the array to send as a parameter
    let jsonArr = JSON.stringify(catStats)
    let post_data = {json_data:jsonArr}
    try {
      const {data} = await axios.post('http://localhost:4001/cards/guess', post_data);
      let choosenCard = data[Math.floor(Math.random() * data.length)]
      choosenCard.isCorrect = true;
      

      console.log(choosenCard)
      setCard(choosenCard)
      setIsLoaded(true);
    } catch (error) {
      console.error('Couldnt retrieve cards: ' + error)
    }
  }
  
  function allCategoryNames(){
    return Categories.slice(1).map(category => category.name)
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
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>Lysnna</button>
      <Sound 
          url={card ? card.sound : ""}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
      />
  </div>
  )

  
}

function createCards(images) {
  return images.map((cardData) => {
    return <Card img={cardData.pic} isCorrect={cardData.isCorrect} />;
  });
}
export default GuessSound;