import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
  import StartPage from './pages/StartPage';
  import Categori1 from './pages/CardPage';
  import Settings from './pages/Settings';
import CardPage from './pages/CardPage';
import CategoryCard from './CategoryCard';
import CategoryPage from './pages/CategoryPage';
import GuessSettings from './pages/GuessSettings';
import GuessPage from './pages/GuessPage';


  const Pages = () => {
      return (
          <Router>
              < div className = "Pages">
                  <Routes>
                      <Route exact path= '/' element ={< StartPage/>}></Route>
                      <Route exact path= '/Cards' element ={< CardPage/>}></Route>
                      <Route exact path= '/Settings' element ={< Settings/>}></Route>
                      <Route exact path= '/CategoryPage' element ={< CategoryPage/>}></Route>
                      <Route exact path= '/GuessGame' element ={< GuessSettings/>}></Route>
                      <Route exact path= '/GuessPage' element ={< GuessPage/>}></Route>
                  </Routes>

              </div>
          </Router>
      )
  }
  export default Pages;
