import React from "react";
import CategoryCard from "./CategoryCard";

import {Link, useNavigate} from 'react-router-dom';

import { Categories } from "../../Components/Categories";
import SearchBar from "./SearchBar";
import { useState } from "react";

import Grid from '@mui/material/Grid';
import "../Grid.css"
import owl  from "../../Components/images/owl.jpg"




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
            <Grid container className="row">
              <CategoryCard img ={owl} title={"Alla kategorier"}/>
              { createCategoryCards(Categories)} 
            </Grid>
        </div>
    ) 
}
export default CategoryPage; 