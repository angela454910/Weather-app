import React from "react";

class ForecastRow extends React.Component {
  render() {
    return (
      <div className="weather-forecast__row">
        <span className="weather-forecast__day">{this.props.day}</span>
        <span className="weather-forecast__icon">
          <i className="fa fa-clock-o"></i> {this.props.time}
        </span>
        <span className="weather-forecast__high">{this.props.high} c</span>
        <span className="weather-forecast__low">{this.props.low} c</span>
      </div>
    );
  }
}

export default ForecastRow;
