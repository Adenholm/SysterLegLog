import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import StartPage from './pages/StartPage';
import CardPage from './pages/Categories/CardPage';
import CategoryPage from './pages/Categories/CategoryPage';
import GuessSettings from './pages/GuessGame/GuessSettings';
import GuessPage from './pages/GuessGame/GuessPage';
import Header from './Layouts/Header.js'
import './App.css';
import Footer from './Layouts/Footer';

  const Pages = () => {
    
      return (
          <Router>
              <div className='pagesBackground'>
                {Header()}
                <div className = "pages">
                    <Routes>
                        <Route exact path= '/' element ={< StartPage/>}></Route>
                        <Route exact path= '/Cards' element ={< CardPage/>}></Route>
                        <Route exact path= '/CategoryPage' element ={< CategoryPage/>}></Route>
                        <Route exact path= '/GuessGame' element ={< GuessPage/>}></Route>
                    </Routes>
                </div>
                {Footer()}
              </div>
          </Router>
      )
  }
  export default Pages;
