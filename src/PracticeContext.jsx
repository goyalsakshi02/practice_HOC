import React from "react";
// import CompA from "./compA";
import  UContext  from "./UContext";
import { createContext } from "react";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
    <FirstName.Provider value={"Shruti"}>
   
    <LastName.Provider value={"Sinha"}>
     {/* <CompA/> */}
     
     <UContext />
     
     </LastName.Provider>
    
     </FirstName.Provider>

    </>
    
    );
}

export default App;
export {FirstName , LastName}