import React from "react";
import CategoryCard from "../CategoryCard"
import owl from "../images/owl.jpg"
import {Link} from 'react-router-dom';

function CategoryPage (){
    /*const fetchCardsCategory = async () => {
        //send get request to cards/all
        axios
          .get('http://localhost:4001/cards/category')
          .then(response => {
            console.log(response.data)
            setCards(response.data)
            setLoading(false)
          })
          .catch(error => console.error('Couldnt retrieve cards: ${error}'))
      }
      */
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