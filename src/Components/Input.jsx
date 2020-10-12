import React, { useContext, useState } from 'react'

import {CityContext} from '../API'
const Input=()=>{
    const [data,setData]=useState("")
    const [city,setCity]=useContext(CityContext)
    const change=(e)=>{
        setData(e.target.value)
    }

    const submit=(e)=>{
        e.preventDefault()
        setCity([...city,data])

    }
    return(
        <form action="" className="form-inline">
            <input type="text" className="form-control city-input" placeholder='City Name' value={data} onChange={e=>change(e)}/>
            <button type="submit" className="btn btn-primary add-btn" onClick={e=>submit(e)}>Add City</button>
        </form>
    )
}

export default Input