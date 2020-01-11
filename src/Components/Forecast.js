import React from "react";
import ForecastRow from "./ForecastRow";

class Forecast extends React.Component {
  state = {
    forecast: [
      { day: "Fri", time: "10:00", high: 19, low: 8 },
      { day: "Fri", time: "13:00", high: 19, low: 8 },
      { day: "Fri", time: "16:00", high: 19, low: 8 }
    ]
  };

  render() {
    return (
      <div className="weather-forecast">
        <div className="forecast__switch">
          <button className="forecast__switch_0 switch-active">5 items</button>
          <button className="forecast__switch_1">10 items</button>
        </div>
        {this.state.forecast.map(forecast => (
          <ForecastRow
            key={forecast.day + forecast.time}
            day={forecast.day}
            time={forecast.time}
            high={forecast.high}
            low={forecast.low}
          />
        ))}
      </div>
    );
  }
}

export default Forecast;
