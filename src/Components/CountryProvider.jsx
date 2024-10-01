import React from 'react'
import { createContext,useState } from 'react'

const context=createContext();



export default function CountryProvider({children}) {

  const toggleTheme=()=>
    {
      setIsDark((prev)=>!prev)
    }
  const [filter,setFilter]=useState("All");
  const[input,setInput]=useState('');
  const [isDark,setIsDark]=useState(false);
  let object={
    filter,
    setFilter,
    input,
    setInput,
    isDark,
    setIsDark,
    toggleTheme
  }

// Theme





  return (
 <context.Provider value={object}>
  {
    children
  }
 </context.Provider>
  )
}

export {context};