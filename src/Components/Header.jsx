import React from 'react'
import { useContext } from 'react';
import { context } from './CountryProvider';
import { getCount } from './Countries';
import { useEffect } from 'react';
export default function Header() {

   const {filter,setFilter}=useContext(context);
    const {input,setInput,isDark,toggleTheme}=useContext(context);
  const handleFilter=(e)=>
  {
    setFilter(e.target.value);
    console.log(e.target.value);
    setInput("")

  }
  const handleInput=(e)=>
  {    setInput(e.target.value);
      getCount(e.target.value.length);
    
  }

  
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);





  return (
    <header className='   lg:h-fit p-2 ' style={isDark?{}:{}}>
      <div className=' flex justify-between  lg:p-6 py-6'>
        <h2 className='lg:text-4xl lg:font-bold text-xl font-bold font-mono'>COUNTRIES by Arya</h2>
        <button onClick={()=>toggleTheme()} className=' rounded-2xl h-fit p-2 bg-gray-400 flex justify-center items-center w-[80px] shadow-md shadow-slate-800 font-bold '>{isDark?'LIGHT':'DARK'}</button>
      </div>
      <div className='flex justify-between  lg:p-6'>
        <input className='shadow-lg shadow-gray-700 rounded-xl p-[8px] text-lg  font-serif' style={isDark?{backgroundColor:'rgb(80, 77, 77)',color:'white'}:{}}  type="text" value={input} onChange={handleInput}  placeholder='Search for a country' />

        <select  className='shadow-lg shadow-gray-600 rounded-lg w-[90px] lg:text-lg font-semibold ' value={filter} id="" onChange={handleFilter} style={isDark?{backgroundColor:'rgb(80, 77, 77)'}:{}}>
         
          <option value="All">All </option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Americas">America</option>


        </select>
      </div>
    </header>
  )
}
