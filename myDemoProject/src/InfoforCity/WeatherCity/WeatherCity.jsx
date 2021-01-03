import React, { useEffect } from "react";
import { connect } from "react-redux";
import { axiosData } from '../../redux/action';
import Fade from 'react-reveal/Fade';
import backImg from '../../image/glavback.jpg';
import "./weather.css";

  function WeatherCity(props) {

  useEffect(() => {
    const result = props.axiosGet(
    `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=61516e7d12fa2339adbfdf493a545193&lang=ru`,
    );
  },
  [props.axiosGet]
  );
  if(props.cityTemp, props.cityInfo){
      return (
    <div className="weather">
     <Fade right><h1 className='info'>Погода в вашем городе!</h1></Fade>
     <Fade top> <div className="infoCity">
          <div className="popi"  style={backgroundImg}>
            <h1 className='name'>{props.myCity}</h1><br/>
            <p className='tempr'>{Math.round(props.cityTemp.temp -273)}&#176;</p>
            <p className='infotemp'>Скорость ветра:  {props.cityInfo.speed}м/с</p>
          </div>
        </div>
        </Fade>
    </div>
    
  )}
  else return null; 
}


const backgroundImg = {
  backgroundImage: `url(${backImg})`
}

const mapStateToProps = (state) =>{
  return{
    cityName: state.showModal.inputCity,
    myCity: state.weather.getAxios.name,
    cityTemp: state.weather.getAxios.main,
    cityInfo: state.weather.getAxios.wind
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    axiosGet: (url) => dispatch(axiosData(url))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(WeatherCity);