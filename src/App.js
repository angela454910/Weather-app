import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Condition from "./Components/Condition";
import Forecast from "./Components/Forecast";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="weather-channel__container">
      <Header />
      <Nav />
      <main>
        <Condition />
        <Forecast />
      </main>
      <Footer />
    </div>
  );
}

export default App;
