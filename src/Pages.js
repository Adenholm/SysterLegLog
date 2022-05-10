import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import StartPage from './pages/StartPage';
import Settings from './pages/Categories/Settings';
import CardPage from './pages/Categories/CardPage';
import CategoryPage from './pages/Categories/CategoryPage';
import GuessSettings from './pages/GuessGame/GuessSettings';
import GuessPage from './pages/GuessGame/GuessPage';



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