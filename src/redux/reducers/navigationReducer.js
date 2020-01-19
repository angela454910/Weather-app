import { TOGGLE_UNIT, SET_SEARCH } from "../actions/navigationAction";

const initialState = {
  unit: "C",
  input: ""
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_UNIT:
      return {
        ...state,
        unit: state.unit === "C" ? "F" : "C"
      };

    case SET_SEARCH:
      return {
        ...state,
        input: action.input
      };

    default:
      return state;
  }
};

export default navigationReducer;
