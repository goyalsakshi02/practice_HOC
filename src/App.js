import React from 'react';
import './App.css';
import {Route , Routes} from "react-router-dom";
import NavBar from "./navbar_element/navBar";
import CounterRedux from "./CounterRedux";
import Page1 from './Page1';
import Page2 from './Page2';
import Dianapp from './Dianapp';
import Counter1 from './Counter1';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
        <Routes>
        <Route path={'/'} element={<Dianapp />}/>
         <Route path={'/counter'} element={<CounterRedux />}/>
         <Route path={'/page1'}   element={<Page1 />} />
         <Route path={'/page2'}   element={<Page2 />} />
         <Route path={"/count"}  element={<Counter1 />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;