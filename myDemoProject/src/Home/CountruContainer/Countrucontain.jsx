import React from "react";
import "./countru.css";
import { connect } from "react-redux";
import { chanchePortalStatus } from "../../redux/action";
import Portal from "../Portal/Portal";
import AddCity from "../AddedCities/AddCity";
import headerImg from '../../image/imga.jpeg'


function CountruContainer(props) {
  return (
    <div className="countru" style={headerStyle}>
      <button className={"addbtn"} onClick={props.chanchePortalStatus}>
        <p className="pesh">ADD CITY</p>
      </button>
      <AddCity />
      <Portal />
      
    </div>
  );
}

const headerStyle = {
  backgroundImage: `url(${headerImg})`
}

const mapStateToProps = (state) => {
  return {
    bool: state.showModal.display,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chanchePortalStatus: () => dispatch(chanchePortalStatus(true)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountruContainer);
