import React from "react";
import CategoryCard from "../CategoryCard"

import {Link, useNavigate} from 'react-router-dom';

import { Categories } from "../Categories";

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
            { createCategoryCards(Categories)}

           
        </div>
    ) 
}
export default CategoryPage; 