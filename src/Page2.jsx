import React,{useContext} from 'react';
import {counter} from "./App";
import { Context } from './contextApi/context';
const Page2 = () => {

   const {counter,dispatch} = useContext(Context)

    return (
       <div>
          <h1>page 2</h1>
         <div className='page'>
            <p>present count value is {counter}</p>
         </div>
       </div>
    );
}
 
export default Page2;