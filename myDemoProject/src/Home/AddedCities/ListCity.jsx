import React from 'react'
import { connect } from 'react-redux'


function ListCity(props){
    return(
        <>{props.selectCity.map((item) => (
            <li className="city" key={item}>
              {item}
            </li>
          ))}
          </>
    )
}

const mapStateToProps = (state) =>{
    return{
        selectCity: state.showModal.cities
    }
}


export default connect(mapStateToProps)(ListCity);
