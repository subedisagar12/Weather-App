import React, { createContext, useEffect, useState } from 'react'

export const CityContext=createContext()

export const CityProvider=(props)=>{

    const[city,setCity]=useState([])

    useEffect(()=>{
        let items=JSON.parse(localStorage.getItem('city'))
        setCity(items)
    },[])

    useEffect(()=>{
        let data=JSON.stringify(city)
        localStorage.setItem('city',data)
    },[city])
    return(
        <CityContext.Provider value={[city,setCity]}>
            {props.children}
        </CityContext.Provider>
    )
}