import React from "react";

function ForecastRow(props) {
  const { day, time, high, low, unit } = props;
  return (
    <div className="weather-forecast__row">
      <span className="weather-forecast__day">{day}</span>
      <span className="weather-forecast__icon">
        <i className="fa fa-clock-o"></i> {time}
      </span>
      <span className="weather-forecast__high">
        {high} {unit}
      </span>
      <span className="weather-forecast__low">
        {low} {unit}
      </span>
    </div>
  );
}

export default ForecastRow;
