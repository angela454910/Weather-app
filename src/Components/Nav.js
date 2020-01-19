import React from "react";
import { connect } from "react-redux";
import { toggleUnit } from "../redux/actions/navigationAction";

function Nav(props) {
  const searchOnEnter = event => {
    const isEnterPressed = event.key === "Enter";
    if (isEnterPressed) props.search();
  };

  return (
    <nav>
      <div>
        <input
          onKeyPress={searchOnEnter}
          onChange={props.handleSearchValueChange}
          value={props.searchValue} //controlled field from
          className="search-input"
        />
        <button className="search-btn" onClick={props.search}>
          <i className="fa fa-search"></i>
        </button>

        <button className="temp-switch" onClick={props.toggleUnit}>
          <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
          <sup>&deg;</sup>
          {props.unit}
        </button>
      </div>
    </nav>
  );
}
const mapStateToProps = state => ({
  unit: state.navigation.unit
});

const mapDispatchToProps = dispatch => ({
  toggleUnit: () => dispatch(toggleUnit())
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
