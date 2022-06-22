import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment , decrement } from "./redux/features/counterComp";

let Counter1 = () => {

    let dispatch = useDispatch();

   
    let counterState = useSelector((state) => {
        return state["counter"];
    });

    let {count} = counterState;


    return (
        <React.Fragment>
            <div className="counter1">
                <div className="card1">
                    <span className="number">{count}</span>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Counter1;