import React, { Component, createContext } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
 
import Page1 from './Page1';
import About from './About';
import Page2 from './Page2';
import Navigation from './Navigation';

const counter = createContext();

class App extends Component {
  render() {
    return (      
        <div>
          <About />
       <BrowserRouter>
          <Navigation />
           <Routes>
             <Route exact path="/" element={<Page1/>} />
             <Route exact path="/Page2" element={<Page2/>}/>
            </Routes>
      </BrowserRouter>
        </div> 
    );
  }
}
 
export default App;
export {counter};