import { getWeather } from "../../utlis/axios";

export const FETCH_WEATHER = "FETCH_WEATH";
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS";
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE";

export const fetchWeatherSuccess = data => ({
  type: FETCH_WEATHER_SUCCESS,
  data
});

export const fetchWeatherFailure = error => ({
  type: FETCH_WEATHER_FAILURE,
  error
});

export const fetchWeather = () => ({
  type: FETCH_WEATHER
});

export const loadWeather = city => dispatch => {
  dispatch(fetchWeather());

  getWeather(city)
    .then(data => {
      const cityName = data.city.name;
      const current = data.current;
      const forecasts = data.forecast.slice(0, 10);

      dispatch(
        fetchWeatherSuccess({
          cityName,
          current,
          forecasts
        })
      );
    })
    .catch(err => {
      dispatch(fetchWeatherFailure(err.message));
    });
};
