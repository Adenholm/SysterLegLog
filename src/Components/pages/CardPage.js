import React from "react";
import CardGrid from "../CardGrid";
import { useLocation } from "react-router-dom";

function CardPage(){
  const location = useLocation();
   
    return (
      <div>
      <h1>{location.state.category}</h1>

    <div className="row">
          <div className="col-sm-12 text-center">
            <div className="container">
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