import React from "react";
import CategoryCard from "./CategoryCard"
import owl from "../../Components/images/owl.jpg"
import animals from "../../Components/images/pets.jpg"
import instruments from "../../Components/images/instruments.png"
import {Link, useNavigate} from 'react-router-dom';
import appliances from "../../Components/images/appliances.png"
import kids from "../../Components/images/kids.png"
import siren from "../../Components/images/siren.jpg"
import trea from "../../Components/images/trea.jpg"
import cars from "../../Components/images/cars.png"

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
            <button><Link to = {-1}>Tillbaka</Link></button>
            
            <h1>Kategorier</h1>
            { createCategoryCards(categories)}

           
        </div>
    ) 
}
export default CategoryPage; 