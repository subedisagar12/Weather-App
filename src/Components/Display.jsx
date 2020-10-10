import React, { useContext, useEffect, useState } from 'react'
import {CityContext} from '../API'
import axios from 'axios'
const Display=()=>{
const [city,setCity]=useContext(CityContext)
const [data,setData]=useState([])

let key="1c04477bdb8a2ccf4108a91014ad6b36"
useEffect(()=>{
   
   async function getWeather(){
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city[0]}&appid=${key}`).then(data=>setData([data.data]))
   }
    
   getWeather()
},[])

console.log(data)
        if(city.length===0){
            return(
                <h4>No City Added</h4>
            )
        }

        else{
            return(
                <div>
                    <h4>{data.name}</h4>
                </div>
            )
        }
    
}

export default Display