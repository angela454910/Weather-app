import React from "react";
import Condition from "./Condition";
import Forecast from "./Forecast";

function Main(props) {
  return (
    <main>
      <Condition cityName={props.cityName} current={props.current} />
      <Forecast
        forecasts={props.forecasts}
        limit={props.limit}
        changeLimit={props.changeLimit}
      />
    </main>
  );
}

export default Main;
