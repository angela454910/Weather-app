import { TOGGLE_UNIT } from "../actions/navigationAction";

const initialState = {
  unit: "C"
};

const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_UNIT:
      return {
        ...state,
        unit: state.unit === "C" ? "F" : "C"
      };
    default:
      return state;
  }
};

export default navigationReducer;
