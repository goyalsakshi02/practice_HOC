
import {Link} from "react-router-dom";
import "./navbar.css"
import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";


let NavBar = () => {
    let dispatch = useDispatch();

   
    let counterState = useSelector((state) => {
        return state["counter"];
    });

    let {count} = counterState;

    return (
        
        <React.Fragment>
            <nav className="navbar1">
                <div className="container">
                    <div className='dianapp'>
                     <Link to={'/'} className="dian">DIANAPPS</Link>
                     </div>
                    <div className="collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={'/counter'} className="nav-link">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/page1'} className="nav-link">Page1</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/page2'} className="nav-link">Page2</Link>
                            </li>
                        </ul>
                    </div>
                       
                    <div className='dianapp'>
                     <div className="butt"><button>counter</button></div>
                     <div className="ccc"><Link to={'/count'} className="dians">{count}</Link></div>
                     </div>
                </div>
            </nav>
        </React.Fragment>
    )
};
export default NavBar;