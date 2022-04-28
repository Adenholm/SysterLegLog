import React from "react";
import CardGrid from "../CardGrid";


function CardPage(){
   
    return (
      <div>
      <h1>Hej och välkommen till vår första kategorisida</h1>

    <div className="row">
          <div className="col-sm-12 text-center">
            <div className="container">
              < CardGrid />
            </div>
          </div>
        </div>
    </div>
    );
}
export default CardPage;