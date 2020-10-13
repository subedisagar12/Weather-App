import React, { useContext, useEffect, useState } from 'react'
import {CityContext} from '../API'
import axios from 'axios'
const Display=()=>{
const [city,setCity]=useContext(CityContext)
const [data,setData]=useState([])

let key="1c04477bdb8a2ccf4108a91014ad6b36"

const deleteCity=(id)=>{
    let cities=city.filter(res=>city.indexOf(res)!==id)
    setCity(cities)
}   
useEffect(()=>{
    async function getWeather(){
        let info=[]
      
       await axios.all(city.map(item=>axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${key}&units=metric`))).then(axios.spread(function(...res){
            info.push(res)
       
          
    })).catch(e=>console.log(e) )
       
       setData(info[0])  
    }
    getWeather()
   
},[city])


        if(city.length===0 || data===undefined || city===null){
            return(
                <h4 className="mt-4">No City Added</h4>
            )
        }

        else{
            return(
                <div>

                    {data.map((item,id)=>
                    <div className="my-card" key={id}>
                        <div className="cross" onClick={()=>deleteCity(id)}>&times;</div>
                        <div className="left">
                            <img src={`http://openweathermap.org/img/wn/${item.data.weather[0].icon}@2x.png`} alt=""/>
                        </div>
                        <div className="right">
                    <div className="title"><h4 className="city">{item.data.name}</h4></div>
                                <h3 className="temperature">{item.data.main.temp}<sup>.</sup>C</h3>
                    <h6 className="description">{item.data.weather[0].description}</h6>
                                

                        </div>
                    </div>
                    )}
               
                </div>
            )
        }
    
}

export default Display

// {data.map((item,id)=><div className="card" key={id}>
// <div className="card-img-top">
// <img className="weather-icon img-fluid" src={`http://openweathermap.org/img/wn/${item.data.weather[0].icon}@2x.png`} alt=""/>
// </div>
// <div className="card-body">
// <div className="h4 card-title">{item.data.name}</div>
// <h6>{item.data.weather[0].description}</h6>
// <p><b>Max Temp:{item.data.main.temp}</b></p>
// <p><b>Max Temp:{item.data.main.temp_min}</b></p>
// </div>

    

// </div>)}