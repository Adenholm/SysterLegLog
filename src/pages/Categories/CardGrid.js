import React ,{useEffect, useState } from "react";
import Card from "./Card";
import axios from 'axios'
import "../Grid.css"
import Grid from '@mui/material/Grid';


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
  
  useEffect(() =>{
    console.log(props.inputText,'has changed')
    fetchCards()
  },[props.inputText])

  const fetchCards = () => {
    console.log("inputText:"+props.inputText)
    console.log("category:"+props.category)
    if(!(props.inputText === "")){
      axios
      .get('http://localhost:4001/cards/search/'+props.inputText)
      .then(response => {
        console.log(response.data)
        setCards(response.data)
        setLoading(false)
      })
      .catch(error => console.error('Couldnt retrieve cards from search: ',error))

    }
    //send get request to cards/all
    else if(props.category=='Alla kategorier'){
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
    <div>
      <Grid container className="row">
        {console.log(cards)}

        { cards.map(cardData => <Card 
          img = {cardData.pic} 
          sound = {cardData.sound}
        />)}
      </Grid>    
    </div>
    );


};
export default CardGrid

//