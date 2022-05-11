

import React from 'react';

import data from './Components/data.json';

import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

import Card from "./Components/Card"
import Pages from './Components/Pages';

import './App.css';



function App() {
    return (
      <div className="container">
        < Pages />
      </div>
    );
  }

export default App;


