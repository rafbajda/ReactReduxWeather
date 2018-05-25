import axios from "axios";


export function fetchAPIForecast(city) {
    return function (dispatch) {

        axios.get("http://api.apixu.com/v1/forecast.json?key=71fdcc02371146bfb7b84834181405&q=" + city + "&days=5").then(response => {

            let arr = [];
            for (var i = 0; i < response.data.forecast.forecastday.length; i++) {

                
                    arr.push(response.data.forecast.forecastday[i]);
               
            }
            dispatch({ type: "FETCH_FORECAST", payload: arr });
            console.log("STRUKTURA PROGNOZY POGODY HERE \n");
            console.log(arr);

        }).catch(err => {
            console.log(err)
        });
    }
}
