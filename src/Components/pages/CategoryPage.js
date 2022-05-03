import React from "react";
import CategoryCard from "../CategoryCard"
import owl from "../images/owl.jpg"
import {Link} from 'react-router-dom';

function CategoryPage (){
    return(
        <div>
            <Link to = "/Cards">
                <CategoryCard 
                    img ={owl}
                    title="Djur"
                    />
                </Link>

           
        </div>
    ) 
}
export default CategoryPage; 