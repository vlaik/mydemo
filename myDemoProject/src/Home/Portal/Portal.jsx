import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import { addTrackToValue, chanchePortalStatus } from "../../redux/action";
import "./portalc.css";

function Portal(props) {
  const handleChanche = (e) => {
    props.updateValueCities(e.target.value);
  };

  const dis = props.boole;

  if (dis === true) {
    return (
      <div className='backportal'>
        {ReactDom.createPortal(
          
          <div className="over">
            <div className="style-modal">
              <h1 className="addcitys">Добавить город</h1>
              <input
                value={props.cityName}
                onChange={handleChanche}
                className="portinp"
                placeholder="Ваш город"
                type="text"
              />
              <Link to='/weatherInTheCity'>
              <button className="selectCyti" onClick={props.delete}>
                OK
              </button>
              </Link>
            </div>
          </div> ,
          document.getElementById("portal")
        )}
      </div>
    );
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    boole: state.showModal.showPortal,
    cityName: state.showModal.inputCity,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    delete: () => dispatch(chanchePortalStatus(false)),
    updateValueCities: (value) => dispatch(addTrackToValue(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portal);
