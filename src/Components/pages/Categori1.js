import React from "react";
import data from '../data.json';
import Card from "../Card";


function createImage(image) {

    return <Card img = {image} key={image} />;
    
  }
  
  function createImages(images) {
    return images.map(createImage);
  }

function Categori1(){
   
    return (
      <div>
      <h1>Hej och välkommen till vår första kategorisida</h1>

    <div className="row">
          <div className="col-sm-12 text-center">

  
          
           { createImages(data.images)} 


          </div>
        </div>
    </div>
    );
}
export default Categori1;