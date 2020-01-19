import React from "react";
import umberella from "../icon/icon-umberella.png";
import wind from "../icon/icon-wind.png";
import compass from "../icon/icon-compass.png";
import { connect } from "react-redux";

function Condition(props) {
  const { cityName, current, unit } = props;
  const tempHigh = unit === "C" ? current.maxCelsius : current.maxFahrenheit;

  return (
    <section className="weather-condition">
      <div className="weather-condition__location">{cityName}</div>
      <div className="weather-condition__temp">
        {tempHigh} {unit}
      </div>
      <div className="weather-condition__desc">
        <div>
          <img src={umberella} alt="umberella" />
          <span className="citem">{current.humidity} %</span>
        </div>
        <div>
          <img src={wind} alt="wind" />{" "}
          <span className="citem">{current.windSpeed} km/h</span>
        </div>
        <div>
          <img src={compass} alt="compass" />{" "}
          <span className="citem">{current.windDirection}</span>
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = state => ({
  unit: state.navigation.unit,
  cityName: state.weather.cityName,
  current: state.weather.current
});

export default connect(mapStateToProps)(Condition);
