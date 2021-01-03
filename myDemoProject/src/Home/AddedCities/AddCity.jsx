import React from "react";
import "./addcity.css";
import { connect } from "react-redux";





function AddCity(props){
  
  const showInfoWeather = props.showCountry;
  if (showInfoWeather === true) {
    return (
      <div className="container">
        
        <button className={"addcityc"}>
          <p className="pesh">
            ADD CITY
          </p>
        </button>
        
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    showCountry: state.showModal.showCity,
    selectCity: state.showModal.cities,
  };
};


export default connect(mapStateToProps)(AddCity);
