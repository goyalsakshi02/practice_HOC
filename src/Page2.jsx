import React,{useContext} from 'react';
import {counter} from "./App"
 
const Page2 = () => {
   const count = useContext(counter)
    return (
       <div>
          <h1>page 2</h1>
       </div>
    );
}
 
export default Page2;