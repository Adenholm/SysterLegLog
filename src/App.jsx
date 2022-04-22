/*import logo from './logo.svg';
import './App.css';
import React from "react"
import Card from "./Components/Card"
import stitch from "./Components/images/stitch.png"
import pettson from "./Components/images/pettsonsocka.jpg"
import Modal from './Components/Modal.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
Container, Row, Col
} from 'reactstrap';


function App() {

  const numberOfCards = 2;

  return(
    <div className="CardGrid">
    <Container>
       <Row xs={3}>
       {[...Array(numberOfCards)].map((e, i) => {
           return (
             <Col>
             <Card 
             img = {pettson}
             />
             </Col>
           )
       })}
       </Row>
   </Container>
</div>
  )
}

export default App;*/


import React from 'react';
import Image from './Components/Image';
import data from './Components/data.json';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import stitch from "./Components/images/stitch.png"
import pettson from "./Components/images/pettsonsocka.jpg"
import Card from "./Components/Card"



function createImage(image) {
  console.log(image);
// return <Image source={image} key={image} />;
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


