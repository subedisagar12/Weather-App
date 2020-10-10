import React, { createContext, useState } from 'react'

export const CityContext=createContext()

export const CityProvider=(props)=>{

    const[city,setCity]=useState(['New York','Chicago','Tokyo'])
    return(
        <CityContext.Provider value={[city,setCity]}>
            {props.children}
        </CityContext.Provider>
    )
}