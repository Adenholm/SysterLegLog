import logo from './logo.svg';
import './App.css';
import React from "react"
import Card from "./Components/Card"
import stitch from "./Components/images/stitch.png"

function App() {
  return(
    <div className='wrapper'>
      <Card 
      img = {stitch}
      />
    </div>
  )
}

export default App;
