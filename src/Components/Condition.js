import React from "react";
import umberella from "../icon/icon-umberella.png";
import wind from "../icon/icon-wind.png";
import compass from "../icon/icon-compass.png";

class Condition extends React.Component {
  render() {
    return (
      <section className="weather-condition">
        <div className="weather-condition__location">{this.props.cityName}</div>
        <div className="weather-condition__clear">Clear</div>
        <div className="weather-condition__temp">
          {this.props.current.minCelsius} c
        </div>
        <div className="weather-condition__desc">
          <div>
            <img src={umberella} alt="umberella" />
            <span className="citem">{this.props.current.humidity} %</span>
          </div>
          <div>
            <img src={wind} alt="wind" />{" "}
            <span className="citem">{this.props.current.windSpeed} km/h</span>
          </div>
          <div>
            <img src={compass} alt="compass" />{" "}
            <span className="citem">{this.props.current.windDirection}</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Condition;
