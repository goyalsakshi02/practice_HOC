import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from './contextApi/context';
 
const Navigation = () => {
   const {counter} = useContext(Context)
    return (
       
       <div className="link" style={{ display:'flex', justifyContent:'space-between'}}>
          <button className='count'>{counter}</button>
         
          <Link to="/">page1</Link>
          <Link to="/page2">page2</Link>
       </div>
    );
}
 
export default Navigation;