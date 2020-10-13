import Axios from 'axios'
import React, { useContext, useState } from 'react'
import axios from 'axios'
import {CityContext} from '../API'
const Input=()=>{
    const [data,setData]=useState("")
    const [city,setCity]=useContext(CityContext)
    const[error,setError]=useState("")
    const change=(e)=>{
        setData(e.target.value)
    }
let key="1c04477bdb8a2ccf4108a91014ad6b36"
const isValidCity=async(city)=>{
     let data=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`).catch(e=>console.log(e))
    return data
}

    const submit=async(e)=>{
        e.preventDefault()
        if(data===""){
            return
        }
        let test=await isValidCity(data)
        if (test===undefined){
            setData("")
        setError("Can't find the city")
          return
        }
        if (test.status===200){
            setCity([...city,data.toLowerCase()])
            setData("")
            setError("")
        }
      else{
        setData("")
        setError("Can't find the city")
          return
      }
        

    }
    return(
        <div>
            {error?
            <div className="alert alert-danger">{error}</div>:null
        }
        <form action="" className="form-inline">
            <input type="text" className="form-control city-input" placeholder='City Name' value={data} onChange={e=>change(e)}/>
            <button type="submit" className="btn btn-primary add-btn" onClick={e=>submit(e)}>Add City</button>
        </form>

        </div>
    )
}

export default Input