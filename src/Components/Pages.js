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


  const Pages = () => {
      return (
          <Router>
              < div className = "Pages">
                  <ul>
                      <li className='item'>
                          < Link to = "/Cards" className='link'>Blandat</Link>
                      </li>
                      <li className='item'>
                          <Link to = "/Settings" className='link'>Settings</Link>
                      </li>
                      
                  </ul>
                  <Routes>
                      <Route exact path= '/' element ={< StartPage/>}></Route>
                      <Route exact path= '/Cards' element ={< CardPage/>}></Route>
                      <Route exact path= '/Settings' element ={< Settings/>}></Route>
                  </Routes>

              </div>
          </Router>
      )
  }
  export default Pages;
