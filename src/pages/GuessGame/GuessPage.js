import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./GuessCard";
import Sound from "react-sound";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Categories } from "../../Components/Categories";

function GuessPage(props) {
  const location = useLocation();
  const [cards, setCards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [correctCard, setCorrectCard] = useState(undefined);
  const [isPlaying, setIsPlaying] = useState(true);
  const numberOfCards = location.state.numCards;

  useEffect(() => {
    fetchCards();
  }, []);

  function allCategoryNames(){
    return Categories.slice(1).map(category => category.name)
  }

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
      let randomCards = data.sort(() => Math.random() - Math.random()).slice(0, numberOfCards)
      let choosenCard = randomCards[Math.floor(Math.random() * randomCards.length)]
      choosenCard.isCorrect = true;
      
      console.log(randomCards)
      setCards(randomCards)
      console.log(choosenCard)
      setCorrectCard(choosenCard)
      setIsPlaying(true)
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

  return (
    <div>
      <button>
        <Link to={-1}>Tillbaka</Link>
      </button>

      <button onClick={fetchCards}>Nästa</button>
      <div className="row">
        {createCards(cards)}
        <Sound
          url={correctCard ? correctCard.sound : ""}
          playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
          playFromPosition={0}
        />

        <button className="btn" onClick={() => setIsPlaying(!isPlaying)}>
          Spela igen
        </button>
      </div>
      <button onClick={fetchCards}>Nästa</button>
    </div>
  );
}

function createCards(images) {
  return images.map((cardData) => {
    return <Card img={cardData.pic} isCorrect={cardData.isCorrect} />;
  });
}

export default GuessPage;
