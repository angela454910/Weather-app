import {
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER,
  FETCH_WEATHER_FAILURE,
  LIMIT
} from "../actions/weatherAction";

const initialState = {
  errorMessage: "",
  isLoading: false,
  cityName: "",
  current: {},
  forecasts: [],
  limit: 5
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WEATHER_SUCCESS:
      console.log(action.data);
      return {
        ...state,
        cityName: action.data.cityName,
        current: action.data.current,
        forecasts: action.data.forecasts,
        isLoading: false
      };

    case FETCH_WEATHER:
      return {
        ...state,
        isLoading: true,
        errorMessage: ""
      };

    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        isLoading: false
      };

    case LIMIT:
      return {
        ...state,
        limit: action.limit
      };

    default:
      return state;
  }
};

export default weatherReducer;
