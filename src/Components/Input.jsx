import React from 'react'

const Input=()=>{
    return(
        <form action="" className="form-inline">
            <input type="text" className="form-control city-input" placeholder='City Name'/>
            <button type="submit" className="btn btn-primary add-btn ">Add City</button>
        </form>
    )
}

export default Input