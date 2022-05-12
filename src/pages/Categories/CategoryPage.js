import React from "react";
import CategoryCard from "./CategoryCard";

import {Link, useNavigate} from 'react-router-dom';

import { Categories } from "../../Components/Categories";
import SearchBar from "./SearchBar";

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
            <SearchBar/>
            { createCategoryCards(Categories)}

           
        </div>
    ) 
}
export default CategoryPage; 