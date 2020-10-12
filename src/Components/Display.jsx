import React, { useContext, useEffect, useState } from 'react'
import {CityContext} from '../API'
import axios from 'axios'
const Display=()=>{
const [city,setCity]=useContext(CityContext)
const [data,setData]=useState([])

let key="1c04477bdb8a2ccf4108a91014ad6b36"
useEffect(()=>{
    async function getWeather(){
        let info=[]
        let res=[]
       await axios.all(city.map(item=>axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${key}`))).then(axios.spread(function(...res){
            info.push(res)
            console.log(res)
          
        })).catch(e=>console.log(e))
        info[0].map(item=>res.push(item.data))
       setData(res)  
    }
    getWeather()
   
},[city])


        if(city.length===0 || data===undefined){
            return(
                <h4>Loading..........</h4>
            )
        }

        else{
            return(
                <div>
                    {data.map((item,id)=><h4 key={id}>{item.name}</h4>)}
                </div>
            )
        }
    
}

export default Display