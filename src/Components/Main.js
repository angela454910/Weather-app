import React from "react";
import Condition from "./Condition";
import Forecast from "./Forecast";

function Main(props) {
  return (
    <main>
      <Condition
        cityName={props.cityName}
        current={props.current}
        unit={props.unit}
      />
      <Forecast
        forecasts={props.forecasts}
        limit={props.limit}
        changeLimit={props.changeLimit}
        unit={props.unit}
      />
    </main>
  );
}

export default Main;
