import React from "react";
import CategoryCard from "../CategoryCard"
import owl from "../images/owl.jpg"
import {Link} from 'react-router-dom';

const categories = [
    {
    name: 'Djur',
    pic: owl
    },

    {
    name: 'Instrument',
    pic: owl
    }


]

function createCategoryCard(cardData) {

    return <Link to = "/Cards">
                <CategoryCard 
                    img ={cardData.pic}
                    title={cardData.name}
                    />
                </Link>
    
  }
  
  function createCategoryCards(images) {
    return images.map(createCategoryCard);
  }




function CategoryPage (){

    return(
        <div>
            { createCategoryCards(categories)}

           
        </div>
    ) 
}
export default CategoryPage; 