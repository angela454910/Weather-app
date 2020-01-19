import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Main from "./Components/Main";
import { connect } from "react-redux";
import { loadWeather as loadWeatherAction } from "./redux/actions/weatherAction";
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends React.Component {
  componentDidMount() {
    this.props.loadWeather("brisbane");
  }

  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        {this.props.errorMessage && <p>{this.props.errorMessage}</p>}
        <Nav />
        {this.props.isLoading ? (
          <CircularProgress color="primary" size="10em" />
        ) : (
          <Main />
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
