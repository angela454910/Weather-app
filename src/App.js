import React from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Condition from "./Condition";
import Forecast from "./Forecast";
import Footer from "./Footer";

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
