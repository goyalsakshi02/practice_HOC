import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment , decrement } from "./redux/features/counterComp";

let CounterRedux = () => {

    let dispatch = useDispatch();

    // get data from Redux Store
    let counterState = useSelector((state) => {
        return state["counter"];
    });

    let {count} = counterState;

    let clickIncr = () => {
        dispatch(increment());
    };

    let clickDecr = () => {
        dispatch(decrement());
    };

    // let clickIncrBy = () => {
    //     dispatch(incrementBy(5));
    // };

    return (
        <React.Fragment>
            <div className="contain">
                <div className="row">
                    <div className="wrap">
                        <div className="card">
                            <div className="card-body">
                                <span onClick={clickDecr} className="button1">-</span>
                                <span className="num">{count}</span>
                                <span onClick={clickIncr} className="button2">+</span>
                                {/* <button onClick={clickIncrBy} className="btn btn-danger m-1">Increment by 5</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default CounterRedux;