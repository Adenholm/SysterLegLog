import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
  import StartPage from './pages/StartPage';
  import Categori1 from './pages/Categori1';
  import Settings from './pages/Settings';
  import "./Pages.css";




  const Pages = () => {
      const [click, setClick] = useState(false);

      const closeMobileMenu = () => setClick(false);

    
  
      return (
          <Router>
              < div className = "Pages" >
                  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  
                      <li className = 'item' >
                     
                          < Link to = "/Categori1" className='link'  onClick={closeMobileMenu} >Blandat</Link>
                      
                      </li>
                      
                      <li className='item'>
                          <Link to = "/Settings" className='link' >Settings</Link>
                      </li>
                      
                  </ul>
                  <Routes>
                      <Route exact path= '/' element ={< StartPage/>}></Route>
                      <Route exact path= '/Categori1' element ={< Categori1/>}></Route>
                      <Route exact path= '/Settings' element ={< Settings/>}></Route>
                  </Routes>

              </div>
          </Router>
      )
  }
  export default Pages;
