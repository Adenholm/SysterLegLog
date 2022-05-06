import React from "react";
import CategoryCard from "../CategoryCard"
import owl from "../images/owl.jpg"
import {Link, useNavigate} from 'react-router-dom';

const categories = [
    {
    name: 'Djur',
    pic: owl
    },

    {
    name: 'Instrument',
    pic: owl
    },

    {
    name: 'Fordon',
    pic: owl
    },

    {
    name: 'Inomhus',
    pic: owl
    },

    {
    name: 'Natur',
    pic: owl
    },

    {
    name: 'Mänskliga ljud',
    pic: owl
    },

    {
    name: 'Varningsljud',
    pic: owl
    },


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