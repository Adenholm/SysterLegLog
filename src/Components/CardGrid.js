import React ,{useEffect, useState } from "react";
import data from './data.json';
import Card from "./Card";
import axios from 'axios'

function createCard(cardData) {

    return <Card 
      img = {cardData.pic} 
      sound = {cardData.sound}
      />;
    
  }
  
  function createCards(images) {
    return images.map(createCard);
  }


export const CardGrid = () =>{
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCards()
  },[])

  const fetchCards = async () => {
    //send get request to cards/all
    axios
      .get('http://localhost:4001/cards/all')
      .then(response => {
        console.log(response.data)
        setCards(response.data)
        setLoading(false)
      })
      .catch(error => console.error('Couldnt retrieve cards: ${error}'))
  }
  return (
    <div className="row">
           { createCards(cards)}

    </div>
    );


};
export default CardGrid