import React ,{useEffect, useState } from "react"
import axios from 'axios'
import Card from "./GuessCard"
import Sound from "react-sound"

function GuessPage (props){
    const [cards, setCards] = useState([])
    const [correctCard, setCorrectCard] = useState(undefined)
    const [isPlaying,setIsPlaying] = useState(false);
    const numberOfCards = 4
  
    useEffect(() => {
      fetchCards()
    },[])
  
    const fetchCards = async () => {
      //send get request to cards/all
      axios
        .get('http://localhost:4001/cards/all')
        .then(response => {
          console.log(response.data)
          setCards(response.data.sort(() => Math.random() - Math.random()).slice(0, numberOfCards))
          setCorrectCard(cards[Math.floor(Math.random() * cards.length)])
          setIsPlaying(true)
        })
        .catch(error => console.error('Couldnt retrieve cards: ' + error))
    }


    
    
    return (
      <div className="row">
             {createCards(cards)} 
             <Sound
                url = {correctCard ? correctCard.Sound : ''}
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