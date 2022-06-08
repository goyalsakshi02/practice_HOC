import React, {useContext} from 'react'
import {FirstName, LastName} from "./App"


const CompA = () => {
    const fname = useContext(FirstName)
    console.log("fname", fname)
    const lname = useContext(LastName)
    console.log("lname", lname)
    return (
      
      <h1>My name is {fname} {lname}</h1>
   
  )
}

export default CompA;