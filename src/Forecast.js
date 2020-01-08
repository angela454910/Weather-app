import React from "react";
import ForecastRow from "./ForecastRow";

class Forecast extends React.Component {
  renderRow(day, time, high, low) {
    return <ForecastRow day={day} time={time} high={high} low={low} />;
  }
  render() {
    return (
      <div className="weather-forecast">
        <div className="forecast__switch">
          <button className="forecast__switch_0 switch-active">5 items</button>
          <button className="forecast__switch_1">10 items</button>
        </div>
        {this.renderRow("Fri", "10:00", 19, 8)}
        {this.renderRow("Fri", "13:00", 19, 8)}
        {this.renderRow("Fri", "16:00", 19, 8)}
      </div>
    );
  }
}

export default Forecast;
