// import  {createContext, useReducer} from "react "
import { createContext, useReducer } from "react"
import Reducer from "./reducer"

const initialState = {
    counter: 0
}

export const Context = createContext(initialState)

export const ContextProvider = ({children}) => {
    const [state,dispatch]=useReducer(Reducer,initialState)

    return(
        <Context.Provider value={{counter: state.counter, dispatch}}>{children}</Context.Provider>
    )

}