import React from "react";

function Nav(props) {
  // const searchOnEnter = event => {
  //   const isEnterPressed = event.key === "Enter";
  //   if (isEnterPressed) props.handleSearchValueChange;
  // };
  return (
    <nav>
      <div>
        <input
          // onKeyPress={searchOnEnter}
          // onChange={props.handleSearchValue}
          // value={props.searchValue}
          className="search-input"
        />
        <button className="search-btn">
          <i className="fa fa-search"></i>
        </button>

        <button className="temp-switch">
          <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
          <sup>&deg;</sup>C
        </button>
      </div>
    </nav>
  );
}

export default Nav;
