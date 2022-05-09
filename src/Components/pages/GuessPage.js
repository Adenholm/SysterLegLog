import React ,{useEffect, useState } from "react"
import axios from 'axios'
import Card from "./GuessCard"
import Sound from "react-sound"

function GuessPage (props){
    const [cards, setCards] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [correctCard, setCorrectCard] = useState(undefined)
    const [isPlaying,setIsPlaying] = useState(true);
    const numberOfCards = 4
  
    useEffect(() => {
      fetchCards()
    },[])

    
    const fetchCards = async () => {
      //send get request to cards/all
      axios
        .get('http://localhost:4001/cards/all')
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

              
              <button className= "btn" onClick={() => setIsPlaying(!isPlaying)} >
              Spela igen
              </button>
               
              
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