import React from "react";
import Header from "./Components/Header";
import Countries from "./Components/Countries";
import CountryProvider from "./Components/CountryProvider";
import {Routes,Route} from 'react-router-dom';
import Country from "./Components/Country";
const App=()=>
{
  return (
    <>
    <div className=" ">
    <CountryProvider>
    <Routes>
      <Route path="/" element={ 
        <>
        <Header />
      <Countries />
        </>
      }/>
      <Route path='/Country/:id' element={
        <>
        <Country />
        </>
        }/>
    </Routes>
      
    </CountryProvider>

    </div>

    
    </>
  )
}
export default App;
