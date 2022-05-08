import React from "react";
import CategoryCard from "../CategoryCard"
import owl from "../images/owl.jpg"
import animals from "../images/pets.jpg"
import instruments from "../images/instruments.png"
import {Link, useNavigate} from 'react-router-dom';
import appliances from "../images/appliances.png"
import kids from "../images/kids.png"
import siren from "../images/siren.jpg"
import trea from "../images/trea.jpg"
import cars from "../images/cars.png"

const categories = [
    {
        name: 'Alla kategorier',
        pic: owl
    
    },
    {
    name: 'Djur',
    pic: animals
    },

    {
    name: 'Instrument',
    pic: instruments
    },

    {
    name: 'Fordon',
    pic: cars
    },

    {
    name: 'Inomhus',
    pic: appliances
    },

    {
    name: 'Natur',
    pic: trea
    },

    {
    name: 'Mänskliga ljud',
    pic: kids
    },

    {
    name: 'Varningsljud',
    pic: siren
    }



]

function createCategoryCard(cardData) {
    
     return(
         
             
             <CategoryCard 
                    img ={cardData.pic}
                    title={cardData.name}
                    />
            
     )

  }
  
  function createCategoryCards(images) {
    return images.map(createCategoryCard);
  }




function CategoryPage (){

    return(
        <div>
            <h1>Kategorier</h1>
            { createCategoryCards(categories)}

           
        </div>
    ) 
}
export default CategoryPage; 