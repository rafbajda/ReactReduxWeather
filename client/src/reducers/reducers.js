import {combineReducers} from "redux";

import FetchWeather from "./fetch_weather";
import FetchLocation from "./fetch_location";
import FetchConditions from "./fetch_conditions";

import FetchFavourites from "./fetch_favourites";
import FetchClues from "./fetch_clues"
import FetchForecast from "./fetch_forecast"

const reducers= combineReducers({
    FetchWeatherReducer : FetchWeather,
    FetchWeatherLocation: FetchLocation,
    FetchCurrentConditions: FetchConditions,
    FetchWeatherFavourites: FetchFavourites,
    FetchWeatherClues : FetchClues,
    FetchWeatherForecast : FetchForecast
});

export default reducers;