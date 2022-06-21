import React,{useContext}from 'react';
 import { Context } from './contextApi/context';
const Page1 = () => {

    const {counter,dispatch} = useContext(Context)

    return (
       <div>
           <h1> Page 1</h1>
        <div className="page" width="60px" height="60px">
          <button className="button" onClick={()=> dispatch({type:'INCREMENT'})}>+</button>
          <h1>{counter}</h1>
          <button className="button" onClick={()=> dispatch({type:'DECREMENT'})}>-</button>
          {/* <Outlet /> */}
       </div>
       </div>
    );
}
 
export default Page1;