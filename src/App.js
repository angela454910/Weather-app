import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { getWeather } from "./utlis/axios";
import Main from "./Components/Main";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cityName: "",
      current: {},
      forecasts: [],
      limit: 5,
      searchValue: "",
      unit: "C"
    };
  }

  async componentDidMount() {
    try {
      const response = await getWeather(this.state.cityName);
      this.updateWeather(response);
    } catch (error) {
      console.log(error);
    }
  }

  updateWeather = response => {
    const data = response.data.data;
    const cityName = data.city.name;
    const current = data.current;
    const forecasts = data.forecast.slice(0, 10);
    this.setState({ cityName, current, forecasts });
    console.log(forecasts);
  };

  handleSearchValueChange = event => {
    const value = event.target.value;
    this.setState({ searchValue: value });
  };

  search = async () => {
    const response = await getWeather(this.state.searchValue);
    this.updateWeather(response);
  };

  changeLimit = limit => {
    this.setState({ limit });
  };

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Nav
          searchValue={this.state.searchValue}
          handleSearchValueChange={this.handleSearchValueChange}
        />
        <Main
          cityName={this.state.cityName}
          current={this.state.current}
          forecasts={this.state.forecasts}
          limit={this.state.limit}
          changeLimit={this.changeLimit}
          unit={this.state.unit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
