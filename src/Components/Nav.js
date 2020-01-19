import React from "react";
import { connect } from "react-redux";
import { toggleUnit, setSearch } from "../redux/actions/navigationAction";
import { loadWeather } from "../redux/actions/weatherAction";

function Nav(props) {
  const search = () => {
    props.loadWeather(props.input);
  };

  const searchOnEnter = event => {
    const isEnterPressed = event.key === "Enter";
    if (isEnterPressed) search();
  };

  return (
    <nav>
      <div>
        <input
          onKeyPress={searchOnEnter}
          onChange={event => props.setSearch(event.target.value)}
          value={props.input} //controlled field from
          className="search-input"
        />
        <button className="search-btn" onClick={search}>
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
  unit: state.navigation.unit,
  input: state.navigation.input
});

const mapDispatchToProps = dispatch => ({
  toggleUnit: () => dispatch(toggleUnit()),
  setSearch: input => dispatch(setSearch(input)),
  loadWeather: city => dispatch(loadWeather(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
