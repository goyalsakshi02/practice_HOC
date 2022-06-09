import React,{useContext} from 'react';
import { Outlet } from 'react-router-dom';
import {counter} from "./App"
import { Context } from './contextApi/context';
const About = () => {
    const {counter,dispatch} = useContext(Context)

    return (
       <div>
          <button onClick={()=> dispatch({type:'INCREMENT'})}>+</button>
          <hi>{counter}</hi>
          <button onClick={()=> dispatch({type:'DECREMENT'})}>-</button>
          {/* <Outlet /> */}
       </div>
    );
}
 
export default About;