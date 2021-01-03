import React from 'react'
import HeaderCity from './HeaderInfoCity/HeaderCity'
import './infocityes.css'
import WeatherCity from './WeatherCity/WeatherCity'


function InfoCity(){
    return(
        <>
         <HeaderCity/>
         <WeatherCity/>
        </>
    )
}

export default InfoCity;