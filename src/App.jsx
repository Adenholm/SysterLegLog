

import React from 'react';

import data from './Components/data.json';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';
import stitch from "./Components/images/stitch.png"
import pettson from "./Components/images/pettsonsocka.jpg"
import Card from "./Components/Card"
import Pages from './Components/Pages';
import CategoryPage from './Components/pages/CategoryPage';





function App() {
    return (
      <div className="container">
        
        < CategoryPage />
      </div>
    );
  }

export default App;


