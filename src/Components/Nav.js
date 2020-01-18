import React from "react";

function Nav(props) {
  const searchOnEnter = event => {
    const isEnterPressed = event.key === "Enter";
    if (isEnterPressed) props.search();
  };

  return (
    <nav>
      <div>
        <input
          onKeyPress={searchOnEnter}
          onChange={props.handleSearchValueChange}
          value={props.searchValue} //controlled field from
          className="search-input"
        />
        <button className="search-btn" onClick={props.search}>
          <i className="fa fa-search"></i>
        </button>

        <button className="temp-switch" onClick={props.toggleUnit}>
          <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
          <sup>&deg;</sup>
          {props.unit}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
