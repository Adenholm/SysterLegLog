import React from "react";
import CardGrid from "./CardGrid";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";


function CardPage(){
  const location = useLocation();
   
    return (
      <div>
        <button><Link to = {-1}>Tillbaka</Link></button>
        
      <h1>{location.state.category}</h1>

    <div className="row">
          <div className="col-sm-12 text-center">
            <div className="container">
            <SearchBar/>
              < CardGrid 
                category = {location.state.category}
              />
            </div>
          </div>
        </div>
    </div>
    );
}
export default CardPage;