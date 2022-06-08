import React from 'react';
 
import { Link, NavLink, Outlet } from 'react-router-dom';
 
const Navigation = () => {
    return (
    
       <div>
          <Link to="/">page1</Link>
          <Link to="/page2">page2</Link>
       </div>
    );
}
 
export default Navigation;