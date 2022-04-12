import logo from './logo.svg';
import './App.css';
import React from "react"
import Card from "./Components/Card"
import stitch from "./Components/images/stitch.png"
import pettson from "./Components/images/pettsonsocka.jpg"
import Modal from './Components/Modal.js';

function App() {
  return(
    <div className='wrapper'>
      <Card 
      img = {pettson}
      />
    </div>
  )
}

export default App;
