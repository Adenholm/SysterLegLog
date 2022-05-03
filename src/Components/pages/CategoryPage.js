import React from "react";
import CategoryCard from "../CategoryCard"
import owl from "../images/owl.jpg"

function CategoryPage (){
    return(
        <div>
            <CategoryCard
            img ={owl}
            title="Djur" />

           
        </div>
    ) 
}
export default CategoryPage; 