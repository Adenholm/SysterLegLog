import React ,{useEffect, useState } from "react";
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


export const CardGrid = (props) =>{
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCards()
  },[])
  

  const fetchCards = () => {
    //send get request to cards/all
    if(props.category=='Alla kategorier'){
      axios
      .get('http://localhost:4001/cards/all')
      .then(response => {
        console.log(response.data)
        setCards(response.data)
        setLoading(false)
      })
      .catch(error => console.error('Couldnt retrieve cards in cardgrid: ',error))
    }

    else{axios
      .get('http://localhost:4001/cards/category/'+props.category)
      .then(response => {
        console.log(response.data)
        setCards(response.data)
        setLoading(false)
      })
      .catch(error => console.error('Couldnt retrieve cards in cardgrid: ',error))}
    
  }
  return (
    <div className="row">
      {console.log(cards)}
      { cards.map(cardData => <Card 
        img = {cardData.pic} 
        sound = {cardData.sound}
      />)}
           

    </div>
    );


};
export default CardGrid

//