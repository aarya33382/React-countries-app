import React, { useEffect, useState, useContext } from 'react'
import { context } from './CountryProvider';
import { Link } from 'react-router-dom';
import Loading from './Loading';
// import NetflixLoader from 'react-content-loader'
import { cardio } from 'ldrs'

cardio.register()


let count=0;

export const getCount=(c)=>
  {
    count=c;
  }

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { filter,input,setInput } = useContext(context);
  


  useEffect(() => {
    async function fetchCountries() {
      try {
        let raw_data = await fetch("https://restcountries.com/v3.1/all");
        if (!raw_data.ok) {
          throw new Error(`HTTP error! status: ${raw_data.status}`);
        }
        let data = await raw_data.json();
        console.log(data);
        setCountries(data);
        setLoading(false);
      }
      catch (error) {
        console.log(error.message);
      }

    }

    fetchCountries();
  }, []);


  useEffect(() => {
    if (!loading) {
      let filteredarray = countries.filter((country) => {
        
        let a=country.region === filter;
        let b=country.name.common.toLowerCase().startsWith(input.toLowerCase());
        if(filter==='All')
        {
          return b;

        }
        else{
        return a && b;
        }
        
      })
      setFilteredCountries(filteredarray);
      console.log(filteredarray);
      
    }

  }, [countries,filter,input]);

 
  return (
    <div className=' flex flex-wrap gap-10 gap-y-14 h-fit p-8 '>
      {loading ? <Loading /> : 
        (filter === 'All' && count===0? countries : filteredCountries).map((country) => {
          return (
            <Link to={`/country/${country.cca2}`}  key={country.cca2} >
            <div  className=' rounded-3xl h-[470px] w-[320px] shadow-2xl shadow-slate-700'>
              <div className=' w-[100%] h-[50%] rounded-t-3xl'>
                <img src={country.flags.svg} alt="country" className='w-full h-full object-cover rounded-t-3xl' />
              </div>
              <div className=' w-[fit] h-[50%] rounded-b-3xl flex flex-col  justify-evenly items-center'>
                <h2 className='text-xl font-bold'>{country.name.common}</h2>
                <h2>Population:{country.population}</h2>
                <h2>Region:{country.region}</h2>
                <h2> Capital:{country.capital}</h2>
              </div>
            </div>

            </Link>
          )
        })

      


      }

    </div>
  )
}

