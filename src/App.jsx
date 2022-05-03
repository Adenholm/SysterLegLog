

import React from 'react';

import data from './Components/data.json';
//import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import stitch from "./Components/images/stitch.png"
import pettson from "./Components/images/pettsonsocka.jpg"
import Card from "./Components/Card"



function createImage(image) {

  return <Card img = {image} key={image} />;
  
}


function createImages(images) {
  return images.map(createImage);
}



function App() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
        


          
          
           { createImages(data.images)} 


          </div>
        </div>
      </div>
    );
  }

export default App;


