import React from 'react'
import './Country.css'


function Country({name,flag,capital,currencies}) {
    return (
        <div className="country">
            <div className='image'>
                <img key={flag} src={flag} alt={name}/>

            </div>
            <div className='country-dates'>
            <h2 key={name}>{name}</h2>
            <p key={capital}>Capital: {capital}</p>
            <p key={currencies}>Moneda: {currencies}</p>
            </div>
       
        </div>
    )
}

export default Country