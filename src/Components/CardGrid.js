import React from "react";
import data from './data.json';
import Card from "./Card";

function createImage(image) {

    return <Card img = {image} key={image} />;
    
  }
  
  function createImages(images) {
    return images.map(createImage);
  }

function CardGrid(){
   
    return (
    <div className="row">
           { createImages(data.images)} 

    </div>
    );
}
export default CardGrid;