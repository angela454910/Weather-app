import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import { getWeather } from "./utlis/axios";
import Main from "./Components/Main";
import { connect } from "react-redux";
import { loadWeather as loadWeatherAction } from "./redux/actions/weatherAction";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 5,
      searchValue: ""
    };
  }

  componentDidMount() {
    this.props.loadWeather("Brisbane");
  }

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
        {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
        <Nav
          search={this.search}
          searchValue={this.state.searchValue}
          handleSearchValueChange={this.handleSearchValueChange}
        />
        {this.props.isLoading ? (
          <CircularProgress color="primary" size="10em" />
        ) : (
          <Main
            cityName={this.state.cityName}
            current={this.state.current}
            forecasts={this.state.forecasts}
            limit={this.state.limit}
            changeLimit={this.changeLimit}
          />
        )}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.weather.isLoading,
  errorMessage: state.weather.errorMessage
});

const mapDispatchToProps = dispatch => ({
  loadWeather: city => dispatch(loadWeatherAction(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
