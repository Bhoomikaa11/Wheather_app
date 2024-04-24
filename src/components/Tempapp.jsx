import React, { useEffect, useState } from 'react'
import './css/style.css'

const Tempapp = () => {
    const[city, setcity] = useState(null);
    const[search, setsearch] = useState(null);

    useEffect(()=>{
        const fetchapi = async()=>{
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=7d736aa8028f4307916e341e6cc7bc06&units=metric`;
            const response = await fetch(url);
            const resJson = await response.json();
            setcity(resJson.main);
            
            // console.log(city);

        }
        fetchapi();
    },[search])

  return (
    <>
        <div className='box'>
            <div className='inputData'>
                <input 
                type='search'
                className='inputFeild'  onChange={(event)=>{
                    setsearch(event.target.value);
                }}/>
            </div>

            {!city ?(
                <p className='errormsg'>No Data found</p>
            ):(
                <div>
                <div className='info'>
                <h2 className='location'>
                <i className="fa-solid fa-street-view"></i>{search}
                </h2>
                <h1 className='temp'>
                {city.temp}°C
                </h1>
                <h3 className='tempmin_max'>Min : {city.temp_min} °C | Max :{city.temp_max} °C</h3>
            </div>
            <div className='wave'></div>
            <div className='wave-two'></div>
            <div className='wave-three'></div>
                </div>
            )}
            </div>
            
    </>
  )
}

export default Tempapp