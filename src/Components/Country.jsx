import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Loading from './Loading';
import { context } from './CountryProvider';
export default function Country() {
  const [details, setDetails] = useState({});
  const [load, setLoad] = useState(true);
  const { id } = useParams();
const {isDark,toggleTheme}=useContext(context);
  
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data[0]);
        setLoad(false);
        console.log(data[0]);
      }
      )
      .catch((error) => console.log(error));

  }, [])

  
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);



  return (
    load ? <Loading /> :
      <div className=' h-screen w-[100%] '>
        <div className=' h-[60px] flex justify-between items-center'>
          <Link to='/' className=' rounded-2xl h-fit p-2 bg-gray-400 flex justify-center items-center w-[80px] shadow-md shadow-slate-800 font-bold '>&#8626; BACK</Link>
          <button onClick={()=>toggleTheme()} className=' rounded-2xl h-fit p-2 bg-gray-400 flex justify-center items-center w-[80px] shadow-md shadow-slate-800 font-bold '>{isDark?'LIGHT':'DARK'}</button>
        </div>
        <div className='h-fit w-full lg:flex px-12 gap-4  pt-5'>
          <div className='lg:w-[50%]'>
            <div className='lg:w-[80%] lg:h-fit h-[200px] ' >
              <img src={details.flags.svg} alt="flag"  className='rounded-2xl w-full h-full '/>
            </div>
            {/* <div>Neighbouring Countries</div> */}
          </div>
          <div className='lg:w-[50%] h-fit  p-10 lg:flex justify-evenly lg:flex-row shadow-2xl'>
            <div className='text-xl'>
            <h1 className='lg:text-6xl font-bold mb-7 text-3xl '>{details.name.common}</h1>
              <h1> Region :{details.region}</h1>
              <h1>Capital: {details.capital}</h1>
              <h1> Population :{details.population}</h1>
            </div>
            <div className='self-end lg:pt-9 text-xl'>
              <h1>Country Code : {details.cca2}</h1>
              <h1>Area: {details.area}</h1>
              <h1></h1>
            </div>

          </div>
        </div>
      </div>
  )
}
