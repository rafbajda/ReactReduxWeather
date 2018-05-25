const fetchForecast=(state={
    forecast:[]
    }, action)=>{
        if(action.type === "FETCH_FORECAST"){
            
            state= {...state, forecast: action.payload}
        }
    
        return state;
    };
    export default fetchForecast;