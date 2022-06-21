import React, { Component, createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Page1 from './Page1';
import Page2 from './Page2';
import Navigation from './Navigation';

const counter = createContext();

class App extends Component {
  render() {
    return (     
      <div className="router" >
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