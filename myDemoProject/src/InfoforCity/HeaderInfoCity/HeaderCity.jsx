import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import "./header.css";

function HeaderCity(props) {
  return (
    <div className="headerWeather">
      <Link className='links' to='/'>
      <p className="logotexts">Pogoda</p>
      </Link>
      <h2 className='cityText'>{props.myCity}</h2>
      <h2 className="logotexts2">TODAY:    {props.dataDay}.{props.dataMouns}.{props.dataYear}</h2>
    </div>
  );
}

const backgrounds = {

}

const mapStateToProps = (state) =>{
    return{
        myCity: state.weather.getAxios.name,
        dataDay: state.dataTime.day,
        dataMouns: state.dataTime.month,
        dataYear: state.dataTime.year
    }
}


export default connect(mapStateToProps)(HeaderCity);
