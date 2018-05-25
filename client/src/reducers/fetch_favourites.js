const fetchFavourites=(state={
    favourites:[]
    }, action)=>{
        switch (action.type) {
            case "FETCH_FAVOURITES" :
                state= {...state, favourites: action.payload}
                return state;
            case "ADD_FAVOURITES" :
                state= {...state, favourites: action.payload}
                return state;
            case "DELETE_FAVOURITES" :
                state= {...state, favourites: action.payload}
                return state;
            default :
                return state;
            }

    };
    //at the end export it
    //remember you import the reducers
    //in the main reducer file
    export default fetchFavourites;